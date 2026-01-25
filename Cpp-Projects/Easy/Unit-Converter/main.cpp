#include <iostream>

void convertTemperature() {
    double temp;
    char type;
    std::cout << "Enter temperature (e.g., 32 F or 100 C): ";
    std::cin >> temp >> type;
    
    if (type == 'C' || type == 'c') {
        std::cout << temp << " C = " << (temp * 9.0/5.0) + 32 << " F\n";
    } else if (type == 'F' || type == 'f') {
        std::cout << temp << " F = " << (temp - 32) * 5.0/9.0 << " C\n";
    } else {
        std::cout << "Invalid unit.\n";
    }
}

int main() {
    std::cout << "=== Unit Converter ===\n";
    convertTemperature();
    // Add more conversions here
    return 0;
}
