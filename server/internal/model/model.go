package model

type Request struct {
	Expression string `json:"expression"`
}

type Response struct {
	Result float64 `json:"result"`
	Error  string  `json:"error"`
}
