package main

import (
	"github.com/nikitinvitya/calculator/internal/handler"
	"github.com/nikitinvitya/calculator/internal/middleware"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/calculate", middleware.WithCors(handler.HandleCalc))
	log.Fatal(http.ListenAndServe(":8080", nil))
}
