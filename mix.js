/*
 * Author: Tyler Marenger
 * Username: tjmareng 
 * Profile: https://www.codewars.com/users/tjmareng
 * Challenge: https://www.codewars.com/kata/strings-mix/
 */
function mix(s1, s2) {

    // Clean up strings and put into arrays
    s1 = cleanArray(s1);
    s2 = cleanArray(s2);

    // Create Objects <- Store Properties
    var array1 = object(s1, 1);
    var array2 = object(s2, 2);

    // Merge the arrays together
    var mergedArray = merge(array1, array2);

    // Print result
    return print(mergedArray);
}

/**
 * This method removes all characters that are not in the range [a-z] and returns the string as an array.
 */
function cleanArray(string) {
    var arr = [];

    // Loop through entire string
    for (var i = 0; i <= string.length - 1; i++) {

        // Store character
        var ch = string[i];

        // If character is lowercase and between [a-z] inclusive:
        if (/[a-z]/.test(ch)) {

            // Push it onto the array
            arr.push(ch);
        }
    }

    return arr;
}

/**
 * This method creates an object for the string by storing properties (count, num, letter).
 */
function object(arr, num) {

    var callback = [];

    // For each value in the array
    for (var i = 0; i < arr.length; i++) {

        // Count up value in the array and store them in count
        var count = arr.reduce((sum, value) => {
            return sum + (value === arr[i]);
        }, 0);

        // Push object into callback
        callback.push({
            count: count, num: num, letter: arr[i]
        });
    }
    return callback;
}

/**
 * This method merges the two arrays together, deleting dupicates.
 */
function merge(array1, array2) {

    var combinedArrays = array1.concat(array2); // Combine arrays
    var array = [];

    // Push letters into temp array
    for(var i = 0; i< combinedArrays.length; i++){
        array.push(combinedArrays[i].letter);
    }

    // Remove duplicate letters
    var singleLetters = array.filter((x, i) => {
        return array.indexOf(x) === i;
    });
    
    var mergedArray = [];

    // For each element in singleLetters (no duplicate letters)
    for (var i = 0; i < singleLetters.length; i++) {

        var current = singleLetters[i]; // current
        
        // Is the letter in s1?
        var inFirstString = array1.find((n => {
            return n.letter === current
        }));

        // Is the letter in s2?
        var inSecondString = array2.find((n => {
            return n.letter === current
        }));

        // If the letter is in the first string and second string:
        if (inFirstString && inSecondString) {

            // If the count of the letter is greater in the first string:
            if (inFirstString.count > inSecondString.count) {

                // Push the value from the first string into the array
                mergedArray.push(inFirstString);

                // Otherwise, if the count is equal in both strings:
            } else if (inFirstString.count === inSecondString.count) {

                // Push same count and letter but num is 3
                mergedArray.push({

                    // 3 represents '='
                    count: inFirstString.count, num: 3, letter: inFirstString.letter
                });

                // Otherwise, 
            } else {

                // Push the object from the second string (because it is greater)
                mergedArray.push(inSecondString);
            }

            // If the letter is in the first string and not in the second string:
        } else if (inFirstString && !inSecondString) {

            // Push the object from the first string
            mergedArray.push(inFirstString);

            // Otherwise,
        } else  {
            // Push the object from the second string (not in the first string)
            mergedArray.push(inSecondString);
        }
    }

    // Remove letters with count < 2
    mergedArray = removeLowCount(mergedArray)

    // Sort the objects based on the criteria
    mergedArray = sortArray(mergedArray);

    return mergedArray;
}

/**
 * Removes all elements of the array where the count is less than 2
 */
function removeLowCount(array) {
    return array.filter((x) => x.count > 1);
}

/**
 * Sorts the array based on the criteria given in the challenge
 */
function sortArray(array) {
    return array.slice().sort((a, b) => {
        // If the count is the same
        if (a.count === b.count) {

            // If the number is the same
            if (a.num === b.num) {

                // Sort based on letter
                return a.letter > b.letter ? 1 : -1;
            }

            // Sort based on number
            return a.num > b.num ? 1 : -1;
        }

        // Sort based on count
        return a.count < b.count ? 1 : -1;
    });
}

/**
 * Formats the string to be printed
 */
function print(array) {
    
    var callback = ""

    for (var i = 0; i < array.length; i++) {
        var letters = "";

        // Append number of letters
        for (var j = 0; j < array[i].count; j++) {
            letters += array[i].letter;
        }

        // If any part of array other than last element:
        if (i < array.length - 1) {

            // If num is equal
            if (array[i].num === 3) {
                
                // Append = and append / to the end
                callback += ("=" + ":" + letters + "/");
            } else {
                
                // Otherwise just append / to the end
                callback += (array[i].num + ":" + letters + "/");
            }


        } else {

            // Otherwise do not
            // If num is equal
            if (array[i].num === 3) {

                // Append =
                callback += ("=" + ":" + letters + "");
            } else {

                // Otherwise do not
                callback += (array[i].num + ":" + letters + "");
            }
        }

    }

    return callback;
}