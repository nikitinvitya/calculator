package handler

import (
	"encoding/json"
	"github.com/nikitinvitya/calculator/internal/model"
	"github.com/nikitinvitya/calculator/internal/service"
	"net/http"
)

func HandleCalc(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var req model.Request
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(model.Response{
			Error:  "invalid request body",
			Result: 0,
		})
	}

	result, err := service.CalculateExpression(req.Expression)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(model.Response{
			Error:  err.Error(),
			Result: 0,
		})
		return
	}

	json.NewEncoder(w).Encode(model.Response{
		Result: result,
		Error:  "",
	})
}
