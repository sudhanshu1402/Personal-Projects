package main

import (
    "encoding/json"
    "net/http"
    "sync"
)

type Item struct {
    ID   string `json:"id"`
    Name string `json:"name"`
}

var store = struct {
    sync.RWMutex
    m map[string]Item
}{m: make(map[string]Item)}

func handleItems(w http.ResponseWriter, r *http.Request) {
    switch r.Method {
    case "GET":
        store.RLock()
        items := make([]Item, 0, len(store.m))
        for _, v := range store.m { items = append(items, v) }
        store.RUnlock()
        json.NewEncoder(w).Encode(items)
    case "POST":
        var item Item
        if err := json.NewDecoder(r.Body).Decode(&item); err == nil {
            store.Lock()
            store.m[item.ID] = item
            store.Unlock()
        }
    }
}

func main() {
    http.HandleFunc("/items", handleItems)
    http.ListenAndServe(":8080", nil)
}
