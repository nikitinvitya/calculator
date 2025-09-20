package service

import (
	"errors"
	"strconv"
	"strings"
	"unicode"
)

var (
	invalidExpressionError = errors.New("invalid expression")
	emptyExpressionError   = errors.New("empty expression")
)

func precedence(rune rune) int {
	if strings.ContainsRune("+-", rune) {
		return 1
	}
	if strings.ContainsRune("*/", rune) {
		return 2
	}
	return 0
}

func applyOperation(firstNumber, secondNumber float64, operation rune) (float64, error) {
	switch operation {
	case '+':
		return firstNumber + secondNumber, nil
	case '-':
		return firstNumber - secondNumber, nil
	case '*':
		return firstNumber * secondNumber, nil
	case '/':
		if secondNumber == 0 {
			return 0, errors.New("divide by 0")
		}
		return firstNumber / secondNumber, nil
	default:
		return 0, errors.New("unknown operation")
	}

}

func CalculateExpression(exp string) (float64, error) {
	exp = normalize(exp)
	if err := validationExp(exp); err != nil {
		return 0, invalidExpressionError
	}

	var values []float64
	var operations []rune

	chars := []rune(exp)
	n := len(chars)

	for i := 0; i < n; {
		char := chars[i]

		if unicode.IsDigit(char) || (char == '-' && (i == 0 || strings.ContainsRune("+-*/", chars[i-1]))) {
			numberStr := string(char)
			i++
			for i < n && (unicode.IsDigit(chars[i]) || chars[i] == '.') {
				numberStr += string(chars[i])
				i++
			}
			number, err := strconv.ParseFloat(numberStr, 64)
			if err != nil {
				return 0, invalidExpressionError
			}
			values = append(values, number)
			continue
		} else if strings.ContainsRune("+-*/", char) {
			for len(operations) > 0 && precedence(operations[len(operations)-1]) >= precedence(char) {
				operation := operations[len(operations)-1]
				operations = operations[:len(operations)-1]

				if len(values) < 2 {
					return 0, invalidExpressionError
				}

				secondNumber := values[len(values)-1]
				firstNumber := values[len(values)-2]
				values = values[:len(values)-2]

				result, err := applyOperation(firstNumber, secondNumber, operation)
				if err != nil {
					return 0, err
				}
				values = append(values, result)
			}
			operations = append(operations, char)
			i++
			continue
		}
		return 0, invalidExpressionError
	}

	for len(operations) > 0 {
		operation := operations[len(operations)-1]
		operations = operations[:len(operations)-1]

		if len(values) < 2 {
			return 0, invalidExpressionError
		}

		secondNumber := values[len(values)-1]
		firstNumber := values[len(values)-2]
		values = values[:len(values)-2]

		result, err := applyOperation(firstNumber, secondNumber, operation)
		if err != nil {
			return 0, err
		}

		values = append(values, result)
	}

	if len(values) != 1 {
		return 0, invalidExpressionError
	}

	return values[0], nil
}
