package main

import (
	"github.com/nikitinvitya/calculator/internal/handler"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/calculate", handler.HandleCalc)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
