package main

import (
    "io"
    "log"
    "net/http"
    "sync/atomic"
)

var servers = []string{"http://localhost:8081", "http://localhost:8082"}
var counter uint64

func loadBalance(w http.ResponseWriter, r *http.Request) {
    idx := atomic.AddUint64(&counter, 1) % uint64(len(servers))
    target := servers[idx]
    resp, err := http.Get(target)
    if err != nil {
        http.Error(w, "Server error", http.StatusBadGateway)
        return
    }
    defer resp.Body.Close()
    io.Copy(w, resp.Body)
}

func main() {
    http.HandleFunc("/", loadBalance)
    log.Fatal(http.ListenAndServe(":8000", nil))
}
