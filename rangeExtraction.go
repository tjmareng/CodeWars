/*
 * Author: Tyler Marenger
 * Username: tjmareng 
 * Profile: https://www.codewars.com/users/tjmareng
 * Challenge: https://www.codewars.com/kata/range-extraction/go
 */
package kata

import "strconv"   


// To be considered in range it must span 3 numbers
const span int = 3

func Solution(list []int) string {

  head := 0 // head pointer to start
  length := len(list) // tail pointer to end
  callback := "" 
  current := list[0] // set current 
  i := 1
  
  // If length is 0 return
  if length == 0 {
    return ""
  }
  
  // Call recursive function
  solution := rangeExtraction(list, head, i, current, length, callback)
  
  return solution
}

func rangeExtraction(list []int, head int, i int, current int, length int, callback string) string {
  
  // Return ---------------------
  if (head + i) >= length { 
      
    // Apend end to string
    if i < span {

      // Append numbers that do not span at end
      callback = callback + appendToPrint( list, head, length)
    } else {

      // If last numbers span then add them
      callback = callback + strconv.Itoa(list[head]) + "-" + strconv.Itoa(list[length - 1]) + ","
    }
    
    // Remove last comma from callback (last character in string)
    callback = callback[:len(callback) - 1] 
    return callback
  } // -------------------------

  // If the number increments by 1,
  if list[head + i] == (current + 1) {

    // then recursively call by selecting next (moving current) and increasing count
    return rangeExtraction(list, head, i + 1, list[head + i], length, callback)
    
  // Otherwise, 
  } else {
     
    // Append it to the string 
    if i < span {

      // Add number -- Gap in numbers (or not span 3)
      callback = callback + strconv.Itoa(list[head]) + ","
    } else {
      
      // Otherwise it spans so add head and last number in span
      callback = callback + strconv.Itoa(list[head]) + "-" + strconv.Itoa(list[head + i - 1]) + ","
    }
  }

  // If the numbers span,
  if i >= span {

    // Reset count, adjust head pointer, and move current
    head = head + i
    return rangeExtraction(list, head, 1, list[head], length, callback)

  // Otherwise,
  } else {

  // The number(s) don't span so move head pointer to next (from previous head) in case it is in next span
  return rangeExtraction(list, head + 1, 1, list[head + i], length, callback)
  }
}

func appendToPrint(list []int, head int, length int) string {
  
  // If head has not reached tail,
  if head < length {

    // then add number and recursively call next value
    return strconv.Itoa(list[head])+ "," + appendToPrint(list, head + 1, length) 

  // Otherwise we are at the end,
  } else {
    return "" // so return
  }
}