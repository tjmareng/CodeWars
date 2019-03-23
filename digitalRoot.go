/*
 * Author: Tyler Marenger
 * Username: tjmareng 
 * Profile: https://www.codewars.com/users/tjmareng
 * Challenge: https://www.codewars.com/kata/sum-of-digits-slash-digital-root/go
 */
package kata

func DigitalRoot(n int) int {
    return (n - 1) % 9 + 1
}