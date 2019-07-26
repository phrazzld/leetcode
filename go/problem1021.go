// 1021. Remove Outermost Parentheses

package main

import (
	"fmt"
)

func main() {
	exampleOne := "(()())(())"
	exampleTwo := "(())())(())(()(()))"
	exampleThree := "()()"

	answerOne := removeOuterParentheses(exampleOne)
	answerTwo := removeOuterParentheses(exampleTwo)
	answerThree := removeOuterParentheses(exampleThree)

	fmt.Println(exampleOne, ":", answerOne)
	fmt.Println(exampleTwo, ":", answerTwo)
	fmt.Println(exampleThree, ":", answerThree)
}

func removeOuterParentheses(S string) string {
	var x string
	p := primitiveDecomposition(S)
	for _, c := range p {
		x += c[1 : len(c)-1]
	}
	return x
}

func primitiveDecomposition(S string) []string {
	var p []string
	var c string
	count := 0

	for i := 0; i < len(S); i++ {
		parens := string(S[i])
		c += parens
		if parens == "(" {
			count++
			continue
		}
		if parens == ")" {
			count--
			if count == 0 {
				p = append(p, c)
				c = ""
			}
		}
	}
	return p
}
