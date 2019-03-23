/*
 * Author: Tyler Marenger
 * Username: tjmareng 
 * Profile: https://www.codewars.com/users/tjmareng
 * Challenge: https://www.codewars.com/kata/valid-parentheses
 */
 package kata

 func ValidParentheses(parens string) bool {
   
	 length := len(parens)
	 stack := make([] rune, length)
	 top := 0
	   
	 // Loop through string
	 for _, check := range parens {
 
		 // If open '(',
		 if check == '(' {
 
			 // Push close onto stack
			 stack[top] = ')'
			 top = top + 1 // increase top count
			 continue
 
		 // If open '[',
		 } else if check == '[' {
 
			 // Push close onto stack
			 stack[top] = ']'
			 top = top + 1  // increase top count
			 continue
 
		 // If open '{',
		 } else if check == '{' {
 
			 // Push close onto stack
			 stack[top] = '}'
			 top = top + 1  // increase top count
			 continue
		 }
		 
		 // If condition met, there is a mismatch parenthesis/bracket 
		 if top == 0 || stack[top - 1] != check {
			 return false
		 }
 
		 // Count down right parenthesis/bracket 
		 top = top - 1		  
	 }
 
	 // If all open are closed,
	 if top == 0 {
		 return true
 
	 // Otherwise,
	 } else {
		 return false
	 }
 }