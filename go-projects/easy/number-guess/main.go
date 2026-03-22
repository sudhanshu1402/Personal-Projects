package main

import (
    "bufio"
    "fmt"
    "math/rand"
    "os"
    "strconv"
    "strings"
    "time"
)

func main() {
    rand.Seed(time.Now().UnixNano())
    target := rand.Intn(100) + 1
    reader := bufio.NewReader(os.Stdin)

    fmt.Println("Guess 1-100")
    for {
        fmt.Print("Guess: ")
        input, _ := reader.ReadString('\n')
        input = strings.TrimSpace(input)
        guess, err := strconv.Atoi(input)
        if err != nil { continue }

        if guess < target { println("Higher") } else if guess > target { println("Lower") } else { println("Win!"); break }
    }
}
