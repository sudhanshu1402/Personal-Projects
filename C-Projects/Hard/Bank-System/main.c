#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int accNo;
    char name[30];
    float balance;
} Account;

void createAccount() {
    Account acc;
    FILE *fp = fopen("bank.dat", "ab");
    printf("Enter Account No, Name, Balance: ");
    scanf("%d %s %f", &acc.accNo, acc.name, &acc.balance);
    fwrite(&acc, sizeof(Account), 1, fp);
    fclose(fp);
    printf("Account Created.\n");
}

void displayAll() {
    Account acc;
    FILE *fp = fopen("bank.dat", "rb");
    if (!fp) return;
    printf("\n--- All Accounts ---\n");
    while(fread(&acc, sizeof(Account), 1, fp)) {
        printf("Acc: %d \t Name: %s \t Bal: %.2f\n", acc.accNo, acc.name, acc.balance);
    }
    fclose(fp);
}

int main() {
    int ch;
    while(1) {
        printf("\n1. Create\n2. Display All\n3. Exit\n> ");
        scanf("%d", &ch);
        if (ch == 1) createAccount();
        else if (ch == 2) displayAll();
        else exit(0);
    }
    return 0;
}
