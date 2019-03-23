/*
 * Author: Tyler Marenger
 * Username: tjmareng 
 * Profile: https://www.codewars.com/users/tjmareng
 * Challenge: https://www.codewars.com/kata/gap-in-primes/go
 */
package kata

import(
	"math"
) 

func Gap(g, m, n int) []int {
	last := 0
	
	// From m to n
    for i := m; i <= n; i++ {
	   
		// Cast i to float64
		var iFloat64 float64 = float64(i)

		// If i is prime,
        if prime(iFloat64) {
		   
		    if last == 0 {
			   
				// Update last
				last = i
			    continue
			}
			
			// If i - last prime is the size of gap,
		    if i - last == g {

				// Return
				return [] int {last, i}
			}
			
			// Update last
		    last = i
       }
     }
	 
	// Null
    return nil
}
 
func prime (num float64) bool {
    square := math.Floor(math.Sqrt(num))
	
	// Cast sqrt to int
	var sqrInt int = int(square)
	
	// Cast num to int
	var numInt int = int(num)

	// Check if the number is prime 
    for i := 2; i <= sqrInt; i++ {
		
		// If there is not a remainder when we divide by i,
		if numInt % i == 0 {

			// then it is not prime
            return false
        }
    }
	
	// Otherwise it is
    return true
}