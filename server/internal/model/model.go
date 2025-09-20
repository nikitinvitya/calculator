package model

type Request struct {
	Expression string
}

type Response struct {
	Result float64
	Error  string
}
