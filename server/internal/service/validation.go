package service

import (
	"strings"
	"unicode"
)

func validationExp(exp string) error {
	if exp == "" {
		return emptyExpressionError
	}

	chars := []rune(exp)
	prev := rune(0)
	dotCount := 0

	for i, char := range chars {
		if unicode.IsDigit(char) {
			prev = char
			continue
		}

		if char == '.' {
			dotCount++
			if dotCount > 1 {
				return invalidExpressionError
			}
			prev = char
			continue
		} else {
			dotCount = 0
		}

		if strings.ContainsRune("+-*/%", char) {
			if i > 0 && strings.ContainsRune("+-*/", prev) && !(char == '-' && prev != '-') {
				return invalidExpressionError
			}
			prev = char
			continue
		} else {
			return invalidExpressionError
		}
	}

	lastChar := chars[len(chars)-1]
	if strings.ContainsRune("+-*/", lastChar) {
		return invalidExpressionError
	}

	return nil
}
