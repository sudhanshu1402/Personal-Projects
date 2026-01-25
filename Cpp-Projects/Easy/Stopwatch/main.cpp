#include <iostream>
#include <chrono>
#include <thread>
#include <atomic>

// Simple Stopwatch Class
class Stopwatch {
    std::atomic<bool> running;
    std::chrono::time_point<std::chrono::high_resolution_clock> startTime;
    std::chrono::time_point<std::chrono::high_resolution_clock> endTime;

public:
    Stopwatch() : running(false) {}

    void start() {
        if (!running) {
            running = true;
            startTime = std::chrono::high_resolution_clock::now();
            std::cout << "Stopwatch started.\n";
        }
    }

    void stop() {
        if (running) {
            endTime = std::chrono::high_resolution_clock::now();
            running = false;
            std::cout << "Stopwatch stopped.\n";
            printDuration();
        }
    }

    void printDuration() {
        auto duration = std::chrono::duration_cast<std::chrono::milliseconds>(endTime - startTime);
        std::cout << "Duration: " << duration.count() << " ms\n";
    }
};

int main() {
    Stopwatch sw;
    char input;
    std::cout << "Enter 's' to start, 'e' to end, 'q' to quit: ";
    
    while (std::cin >> input && input != 'q') {
        if (input == 's') sw.start();
        else if (input == 'e') sw.stop();
        std::cout << "Enter command: ";
    }
    return 0;
}
