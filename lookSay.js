/*
 * Author: Tyler Marenger
 * Username: tjmareng 
 * Profile: https://www.codewars.com/users/tjmareng
 * Challenge: https://www.codewars.com/kata/conways-look-and-say-generalized
 */
function lookSay(number) {

    var length = getlength(number); // Get length
    var result = ""; // String holds result
    var previousDigit = number.toString()[0]; // previousDigit begins at the first digit of the number
    var count = 1; // Counter - Set to 1 because of previousDigit

    // Loop through every digit starting with the secondDigit
    for (var j = 1; j < length; j++) {

        var current = number.toString()[j] // Current is the next digit

        // If current is the same digit:
        if (current === previousDigit) {

            // Increment count
            count++;

        // Otherwise current is not the same digit so:
        } else {

            result += count; // Append count to result (How many of that number)
            result += previousDigit; // Append preiousDigit to result (What the number was)
            count = 1; // Reset counter
            previousDigit = current; // Move to next digit

        }
    }

    result += count; // Append count to result
    result += previousDigit; // Append preiousDigit to result
    callback = parseInt(result, 10) // Set string to numerical value

    return callback;

}

/*
 * Returns the length of number
 */
function getlength(number) {
    return number.toString().length;
}