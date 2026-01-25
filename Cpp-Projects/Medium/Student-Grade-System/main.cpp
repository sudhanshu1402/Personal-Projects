#include <iostream>
#include <vector>
#include <string>
#include <numeric>
#include <algorithm>

struct Student {
    std::string name;
    std::vector<int> grades;
    double average;
};

void addStudent(std::vector<Student>& students) {
    Student s;
    std::cout << "Enter student name: ";
    std::cin >> s.name;
    
    int grade;
    std::cout << "Enter grades (-1 to stop): ";
    while (std::cin >> grade && grade != -1) {
        s.grades.push_back(grade);
    }
    
    if (!s.grades.empty()) {
        s.average = std::accumulate(s.grades.begin(), s.grades.end(), 0.0) / s.grades.size();
    } else {
        s.average = 0.0;
    }
    students.push_back(s);
}

void showStudents(const std::vector<Student>& students) {
    std::cout << "\n--- Student Report ---\n";
    for (const auto& s : students) {
        std::cout << "Name: " << s.name << " | Avg: " << s.average << "\n";
    }
}

int main() {
    std::vector<Student> students;
    int choice;
    
    do {
        std::cout << "1. Add Student\n2. Show Report\n3. Exit\nChoice: ";
        std::cin >> choice;
        if (choice == 1) addStudent(students);
        else if (choice == 2) showStudents(students);
    } while (choice != 3);
    
    return 0;
}
