package service

import "strings"

func normalize(exp string) string {
	exp = strings.ReplaceAll(exp, " ", "")
	exp = strings.ReplaceAll(exp, "×", "*")
	exp = strings.ReplaceAll(exp, "÷", "/")
	return exp
}
