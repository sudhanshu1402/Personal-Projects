package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"net/url"
	"sync"
	"sync/atomic"
	"time"
)

// ServerNode represents a backend server
type ServerNode struct {
	URL          *url.URL
	Alive        bool
	mux          sync.RWMutex
	ReverseProxy *http.Client
}

// ServerPool holds information about reachable backends
type ServerPool struct {
	backends []*ServerNode
	current  uint64
}

// AddBackend adds a new backend to the pool
func (s *ServerPool) AddBackend(backend *ServerNode) {
	s.backends = append(s.backends, backend)
}

// NextIndex atomically increases the counter and returns an index
func (s *ServerPool) NextIndex() int {
	return int(atomic.AddUint64(&s.current, 1) % uint64(len(s.backends)))
}

// GetNextPeer returns next active peer to take a connection
func (s *ServerPool) GetNextPeer() *ServerNode {
	next := s.NextIndex()
	l := len(s.backends) + next // start from next and move a full cycle
	for i := next; i < l; i++ {
		idx := i % len(s.backends)
		if s.backends[idx].IsAlive() {
			if i != next {
				atomic.StoreUint64(&s.current, uint64(idx))
			}
			return s.backends[idx]
		}
	}
	return nil
}

// SetAlive sets the alive status of a backend
func (b *ServerNode) SetAlive(alive bool) {
	b.mux.Lock()
	b.Alive = alive
	b.mux.Unlock()
}

// IsAlive returns true when backend is alive
func (b *ServerNode) IsAlive() (alive bool) {
	b.mux.RLock()
	alive = b.Alive
	b.mux.RUnlock()
	return
}

// lbHandler balances the incoming requests
func lbHandler(w http.ResponseWriter, r *http.Request) {
	pool := serverPool
	peer := pool.GetNextPeer()
	if peer != nil {
		fmt.Printf("Redirecting to %s\n", peer.URL)
		// Simple reverse proxy logic using standard http.Client
		// In prod use httputil.ReverseProxy
		resp, err := http.Get(peer.URL.String())
		if err != nil {
			http.Error(w, "Backend Error", http.StatusBadGateway)
			return
		}
		defer resp.Body.Close()
		io.Copy(w, resp.Body)
		return
	}
	http.Error(w, "Service not available", http.StatusServiceUnavailable)
}

var serverPool *ServerPool

func main() {
	serverPool = &ServerPool{
		backends: []*ServerNode{},
	}

	// Initialize mock backends
	backends := []string{
		"http://localhost:8081",
		"http://localhost:8082",
		"http://localhost:8083",
	}

	for _, u := range backends {
		serverUrl, _ := url.Parse(u)
		serverPool.AddBackend(&ServerNode{
			URL:   serverUrl,
			Alive: true,
		})
	}

	// Start health check
	go func() {
		for {
			for _, b := range serverPool.backends {
				// Mock health check
				b.SetAlive(true) 
			}
			time.Sleep(10 * time.Second)
		}
	}()

	server := http.Server{
		Addr:    ":8000",
		Handler: http.HandlerFunc(lbHandler),
	}

	log.Printf("Load Balancer started at :8000\n")
	if err := server.ListenAndServe(); err != nil {
		log.Fatal(err)
	}
}
