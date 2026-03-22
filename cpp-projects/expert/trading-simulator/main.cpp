#include <iostream>
#include <vector>
#include <map>
#include <string>
#include <random>

struct Stock {
    std::string symbol;
    double price;
};

class TradingSystem {
    std::map<std::string, Stock> market;
    double balance;
    std::map<std::string, int> portfolio;

public:
    TradingSystem(double startBal) : balance(startBal) {
        market["AAPL"] = {"AAPL", 150.0};
        market["GOOGL"] = {"GOOGL", 2800.0};
        market["TSLA"] = {"TSLA", 700.0};
    }

    void showMarket() {
        std::cout << "\n--- Market ---\n";
        for (const auto& pair : market) {
            // Simulate price change
            double change = (rand() % 20 - 10) / 10.0;
            market[pair.first].price += change;
            std::cout << pair.first << ": $" << market[pair.first].price << "\n";
        }
    }

    void buy(std::string symbol, int qty) {
        if (market.find(symbol) != market.end()) {
            double cost = market[symbol].price * qty;
            if (balance >= cost) {
                balance -= cost;
                portfolio[symbol] += qty;
                std::cout << "Bought " << qty << " " << symbol << "\n";
            } else std::cout << "Insufficient funds.\n";
        } else std::cout << "Stock not found.\n";
    }

    void showPortfolio() {
        std::cout << "\n--- Portfolio ---\nCash: $" << balance << "\n";
        for (const auto& pair : portfolio) {
            std::cout << pair.first << ": " << pair.second << "\n";
        }
    }
};

int main() {
    TradingSystem ts(10000.0);
    int choice;
    while (true) {
        std::cout << "1. Market\n2. Buy\n3. Portfolio\n4. Exit\n> ";
        std::cin >> choice;
        if (choice == 1) ts.showMarket();
        else if (choice == 2) {
            std::string sym; int qty;
            std::cout << "Symbol Qty: ";
            std::cin >> sym >> qty;
            ts.buy(sym, qty);
        } else if (choice == 3) ts.showPortfolio();
        else break;
    }
    return 0;
}
