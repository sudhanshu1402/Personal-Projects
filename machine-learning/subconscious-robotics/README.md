# Subconscious Robotics

Reinforcement learning setup for teaching an 8-DoF quadruped to walk in PyBullet, with domain randomization aimed at sim-to-real transfer. Built and run on Apple Silicon (MPS).

This is a personal RL/robotics project. The pipeline works end to end — simulate, train with PPO or SAC, evaluate, export to ONNX — but the checkpoints in `outputs/` are from short, interrupted runs, so the robot hasn't learned a clean gait yet. Treat it as a working learning harness, not a solved locomotion task.

## What's in here

A Gymnasium environment wrapping a PyBullet simulation of a four-legged robot (torso + hip/knee joint per leg = 8 actuated joints). The agent outputs target joint positions; the environment steps the physics, computes a shaped reward, and returns a 25-dimensional observation. Training is done with Stable Baselines3 (PPO or SAC), configured through Hydra, with a CLI wrapper on top.

The parts that actually run:

- **`QuadrupedEnv`** (`src/env/base_env.py`) — the environment. 25-dim observation (base orientation, angular/linear velocity, 8 joint positions, 8 joint velocities), 8-dim continuous action, position control with fixed PD gains, termination on falling over or excessive tilt.
- **Domain randomization** (`src/env/domain_randomization.py`) — per-reset randomization of link mass, contact friction, gravity, joint damping, plus Gaussian observation noise. Ranges live in `configs/physics.yaml`.
- **Training** (`src/train.py`) — SB3 PPO/SAC with a `[256, 256, 128]` MLP policy, vectorized envs, TensorBoard logging, periodic checkpoints, and a couple of custom callbacks (a rich-terminal status printer and a headless video recorder that dumps MP4 clips every 50k steps).
- **Evaluation** (`src/eval.py`) — runs episodes with a trained model, prints per-episode reward/length/distance and summary stats.
- **ONNX export** (`export/onnx_export.py`) — wraps the SB3 policy's deterministic action path, exports to ONNX, and verifies with onnxruntime.
- **CLI** (`src/cli.py`) — `robot-train` with `train`, `eval`, `export`, `info`, and `inspect-robot` (an interactive PyBullet GUI with per-joint sliders and keyboard force controls).

## Stack

From `pyproject.toml` / `requirements.txt`:

- Python 3.11+
- PyBullet (physics)
- Gymnasium (env interface)
- Stable Baselines3 (PPO / SAC)
- PyTorch (with MPS support)
- Hydra + OmegaConf (config)
- Click (CLI), Rich (terminal output)
- ONNX + onnxruntime (export)
- imageio / moviepy (video recording)

## Setup

PyBullet is a pain to compile on Apple Silicon, so a conda env with a prebuilt wheel is the path of least resistance:

```bash
# Miniforge if you don't have it
brew install miniforge
conda init zsh && source ~/.zshrc

conda create -n robotics python=3.11 pybullet -c conda-forge -y
conda activate robotics

pip install -r requirements.txt
pip install -e .
```

Then check everything loads (device detection, PyBullet connect, URDF, one env step):

```bash
python verify_setup.py
```

## Running it

Training (defaults come from `configs/`: PPO, 1M timesteps, 4 parallel envs):

```bash
robot-train train                        # headless
robot-train train --watch                # live GUI at 1x, single env
robot-train train -a sac -t 500000       # SAC, 500k steps
robot-train train -n 8                    # 8 parallel envs
```

You can also run the Hydra entry point directly with dotted overrides:

```bash
python src/train.py training.algorithm=sac training.n_envs=8
```

Evaluate a checkpoint (rendering is on by default):

```bash
robot-train eval -m outputs/checkpoints/latest/model.zip
robot-train eval -m outputs/checkpoints/latest/model.zip -n 20 --no-render
```

Export to ONNX for deployment:

```bash
robot-train export -m outputs/checkpoints/latest/model.zip --optimize
```

Inspect a robot interactively (sliders per joint, arrow keys push it, space applies an upward impulse):

```bash
robot-train inspect-robot -u assets/quadruped.urdf
```

TensorBoard:

```bash
tensorboard --logdir outputs/logs
```

## Layout

```
subconscious-robotics/
├── configs/              # Hydra configs
│   ├── config.yaml       # main: env, training, eval
│   ├── physics.yaml      # domain randomization + physics params
│   ├── reward.yaml       # reward weights (see note below)
│   └── agent.yaml        # PPO/SAC hyperparams, net arch
├── src/
│   ├── env/
│   │   ├── base_env.py            # QuadrupedEnv (Gymnasium)
│   │   ├── domain_randomization.py
│   │   ├── reward_shaper.py       # standalone reward/curriculum utils
│   │   └── urdf_loader.py         # URDF inspection helper
│   ├── models/
│   │   ├── device_utils.py        # MPS/CUDA/CPU selection
│   │   └── policy_networks.py     # custom MLP/CNN extractors
│   ├── train.py
│   ├── eval.py
│   └── cli.py
├── export/onnx_export.py
├── assets/
│   ├── quadruped.urdf    # 8-DoF quadruped (main robot)
│   └── simple-robot.urdf # 2-link arm (for inspect-robot)
├── verify_setup.py
└── outputs/              # logs, checkpoints, videos, tensorboard
```

## Reward

The quadruped's reward is a weighted sum computed inside `QuadrupedEnv._compute_reward`. Components and their (hardcoded) weights:

| Component | Weight | What it rewards |
|---|---|---|
| forward_velocity | +2.0 | moving in +x |
| stability | −1.0 | penalizes roll/pitch tilt |
| energy | −0.005 | penalizes joint torque |
| survival | +0.1 | staying above the height threshold |
| smoothness | −0.1 | penalizes jerky action changes |
| foot_contact | +0.05 | feet touching ground |
| height_bonus | +0.2 | keeping torso near target height |

Worth knowing: these weights live in code, not in `configs/reward.yaml`. That YAML file (and `src/env/reward_shaper.py`, with its `RewardShaper` and `CurriculumScheduler`) is a separate, goal-reaching reward implementation that isn't wired into the quadruped env. It's scaffolding for a manipulation/goal task, not what drives the walker.

## Domain randomization

Configured in `configs/physics.yaml`, applied on every `reset()`:

```yaml
domain_randomization:
  mass:     { range: [0.85, 1.15] }        # ±15% mass scale
  friction: { lateral_range: [0.5, 1.5] }
  gravity:  { range: [-10.5, -9.0] }        # z-component
  joint_damping: { range: [0.8, 1.2] }
  observation_noise: { position_std: 0.001, velocity_std: 0.01 }
```

The randomizer caches original link dynamics on first use so scales are applied to the true baseline each episode.

## Swapping robots

Drop a URDF in `assets/`, then point the env at it via config or CLI override:

```bash
robot-train train env.urdf_path=assets/your_robot.urdf
```

The catch: `QuadrupedEnv` expects specific joint names (`fl_hip_joint`, `fl_knee_joint`, …) and 8 actuated joints. A different morphology needs the joint-name list and the observation/action dimensions updated in `base_env.py`. Use `inspect-robot` to read out a URDF's joints first.

## Notes / honest scope

- Apple Silicon first. `device_utils.py` prefers MPS, falls back to CUDA then CPU, with a working-allocation check.
- `policy_networks.py` defines custom MLP/CNN feature extractors, but `train.py` uses SB3's default `MlpPolicy` with an inline `net_arch`, so those extractors aren't currently on the training path.
- Observation space is 25-dim in code (some docstrings mention 26/34 for an earlier variant that included previous actions — ignore those, the space is 25).
- The checkpoints under `outputs/` are from runs of tens of thousands of steps that were stopped early; monitor logs show the policy still falling quickly. The config targets 1M steps — expect to actually run that (or longer) before evaluating a real gait.
