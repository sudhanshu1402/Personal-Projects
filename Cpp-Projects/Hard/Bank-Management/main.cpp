#include <iostream>
#include <map>
#include <string>

class BankAccount {
    std::string owner;
    double balance;
    
public:
    BankAccount(std::string name = "", double bal = 0.0) : owner(name), balance(bal) {}
    
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            std::cout << "Deposited: " << amount << "\n";
        }
    }
    
    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            std::cout << "Withdrew: " << amount << "\n";
        } else {
            std::cout << "Insufficient funds.\n";
        }
    }
    
    void showBalance() const {
        std::cout << "Account: " << owner << " | Balance: $" << balance << "\n";
    }
};

int main() {
    std::map<int, BankAccount> accounts;
    int idCounter = 1;
    int choice;
    
    while (true) {
        std::cout << "\n1. Create Account\n2. Deposit\n3. Withdraw\n4. Show Balance\n5. Exit\nTarget: ";
        std::cin >> choice;
        
        if (choice == 1) {
            std::string name;
            std::cout << "Enter name: ";
            std::cin >> name;
            accounts[idCounter] = BankAccount(name, 0.0);
            std::cout << "Account created with ID: " << idCounter++ << "\n";
        } else if (choice == 2 || choice == 3 || choice == 4) {
            int id;
            std::cout << "Enter ID: ";
            std::cin >> id;
            if (accounts.find(id) != accounts.end()) {
                if (choice == 4) accounts[id].showBalance();
                else {
                    double amt;
                    std::cout << "Amount: ";
                    std::cin >> amt;
                    if (choice == 2) accounts[id].deposit(amt);
                    else accounts[id].withdraw(amt);
                }
            } else {
                std::cout << "Account not found.\n";
            }
        } else {
            break;
        }
    }
    return 0;
}
