#include <iostream>
#include <vector>
#include <cstddef>

class SimpleAllocator {
    char* memory;
    size_t size;
    struct Block {
        size_t offset;
        size_t size;
        bool free;
    };
    std::vector<Block> blocks;

public:
    SimpleAllocator(size_t s) : size(s) {
        memory = new char[s];
        blocks.push_back({0, s, true});
    }

    ~SimpleAllocator() { delete[] memory; }

    void* allocate(size_t reqSize) {
        for (auto& block : blocks) {
            if (block.free && block.size >= reqSize) {
                block.free = false;
                if (block.size > reqSize) {
                    Block newBlock = {block.offset + reqSize, block.size - reqSize, true};
                    block.size = reqSize;
                    // Insert new block after current
                    // Note: simplified, iterator invalidation handled by just splitting logically
                    // For demo, just keeping it simple
                }
                std::cout << "Allocated " << reqSize << " bytes at offset " << block.offset << "\n";
                return memory + block.offset;
            }
        }
        std::cout << "Allocation failed.\n";
        return nullptr;
    }

    void deallocate(void* ptr) {
        size_t offset = (char*)ptr - memory;
        for (auto& block : blocks) {
            if (block.offset == offset) {
                block.free = true;
                std::cout << "Freed memory at offset " << offset << "\n";
                // Merge logic would go here
                return;
            }
        }
    }
};

int main() {
    SimpleAllocator allocator(1024);
    void* p1 = allocator.allocate(100);
    void* p2 = allocator.allocate(200);
    allocator.deallocate(p1);
    void* p3 = allocator.allocate(50); // Should reuse p1 space usually, strictly FIFO in this basic logic without merge
    return 0;
}
