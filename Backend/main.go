package main

import (
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	"github.com/prabhpreet-code/go-owl/models"
	"github.com/prabhpreet-code/go-owl/routes"
)

const (
	defaultPort = "8008"
	// idleTimeout       = 30 * time.Second
	// writeTimeout      = 180 * time.Second
	// readHeaderTimeout = 10 * time.Second
	// readTimeout       = 10 * time.Second
)

func main() {
  err := godotenv.Load()
  check(err)

	port := os.Getenv("PORT") 
	if port == "" {
		port = defaultPort
	}

	handler := routes.New() 

	server := &http.Server{
		Addr:    "0.0.0.0:" + port,
		Handler: handler,

		// IdleTimeout:       idleTimeout,
		// WriteTimeout:      writeTimeout,
		// ReadHeaderTimeout: readHeaderTimeout,
		// ReadTimeout:       readTimeout,
	}

  models.ConnectDatabase()

	err = server.ListenAndServe()
  check(err)
}

func check(e error){
  if e != nil {
    log.Fatal(e)
  }
}