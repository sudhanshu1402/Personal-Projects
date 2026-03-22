use sha2::{Sha256, Digest};
use std::time::SystemTime;

struct Block {
    index: u32,
    timestamp: u128,
    data: String,
    prev_hash: String,
    hash: String,
}

impl Block {
    fn new(index: u32, data: String, prev_hash: String) -> Block {
        let timestamp = SystemTime::now().duration_since(SystemTime::UNIX_EPOCH).unwrap().as_millis();
        let hash =  Block::calculate_hash(index, timestamp, &data, &prev_hash);
        Block { index, timestamp, data, prev_hash, hash }
    }

    fn calculate_hash(index: u32, timestamp: u128, data: &str, prev_hash: &str) -> String {
        let input = format!("{}{}{}{}", index, timestamp, data, prev_hash);
        let mut hasher = Sha256::new();
        hasher.update(input);
        format!("{:x}", hasher.finalize())
    }
}

fn main() {
    let genesis = Block::new(0, "Genesis".to_string(), "0".to_string());
    println!("Genesis Hash: {}", genesis.hash);
}
