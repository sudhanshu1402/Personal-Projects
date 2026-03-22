#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Patient {
    int id;
    char name[50];
    char disease[50];
};

void addPatient() {
    FILE *fp = fopen("patients.txt", "ab");
    struct Patient p;
    printf("Enter ID, Name, Disease: ");
    scanf("%d %s %s", &p.id, p.name, p.disease);
    fwrite(&p, sizeof(p), 1, fp);
    fclose(fp);
    printf("Patient recorded.\n");
}

void showPatients() {
    FILE *fp = fopen("patients.txt", "rb");
    struct Patient p;
    if (!fp) return;
    printf("\n--- Patients ---\n");
    while(fread(&p, sizeof(p), 1, fp)) {
        printf("ID: %d | Name: %s | Disease: %s\n", p.id, p.name, p.disease);
    }
    fclose(fp);
}

int main() {
    int choice;
    while(1) {
        printf("1. Register Patient\n2. Show Patients\n3. Exit\n> ");
        scanf("%d", &choice);
        if (choice == 1) addPatient();
        else if (choice == 2) showPatients();
        else break;
    }
    return 0;
}
