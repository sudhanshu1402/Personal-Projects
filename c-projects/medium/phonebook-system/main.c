#include <stdio.h>
#include <string.h>

struct Contact {
    char name[50];
    char phone[20];
};

struct Contact contacts[100];
int count = 0;

void addContact() {
    if (count < 100) {
        printf("Enter Name: ");
        scanf("%s", contacts[count].name);
        printf("Enter Phone: ");
        scanf("%s", contacts[count].phone);
        count++;
        printf("Contact added.\n");
    } else {
        printf("Phonebook full.\n");
    }
}

void listContacts() {
    printf("\n--- Contacts ---\n");
    for (int i = 0; i < count; i++) {
        printf("%s: %s\n", contacts[i].name, contacts[i].phone);
    }
}

int main() {
    int choice;
    while(1) {
        printf("1. Add\n2. List\n3. Exit\n> ");
        scanf("%d", &choice);
        if (choice == 1) addContact();
        else if (choice == 2) listContacts();
        else break;
    }
    return 0;
}
