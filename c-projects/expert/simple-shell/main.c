#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>

int main() {
    char cmd[100];
    while (1) {
        printf("myshell> ");
        fgets(cmd, sizeof(cmd), stdin);
        cmd[strcspn(cmd, "\n")] = 0; // remove newline
        
        if (strcmp(cmd, "exit") == 0) break;
        
        if (fork() == 0) {
            char *args[] = {"/bin/sh", "-c", cmd, NULL};
            execvp(args[0], args);
            exit(0);
        } else {
            wait(NULL);
        }
    }
    return 0;
}
