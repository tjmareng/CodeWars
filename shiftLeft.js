/*
 * Author: Tyler Marenger
 * Username: tjmareng 
 * Profile: https://www.codewars.com/users/tjmareng
 * Challenge: https://www.codewars.com/kata/shift-left-1/javascript
 */
function shiftLeft(s, t) {

    // Empty or Already Equal
    if ((s.length == 0 && t.length == 0) || (s === t)) {
        return 0;
    }

    // Maintain Value Between Function Calls
    var sString = s;
    var tString = t;

    // Find Min Count
    var count = 0;
    var winner = 0;

    // See If One Way is Less
    winner = shiftCount(sString, tString);
    count = shiftCount(tString, sString);

    // Return Lessor Count
    return (winner < count) ? winner : count;

}

function shiftCount(s, t) {

    var count = 0;

    while (s.length != 0 && t.length != 0) {

        // Remove First Element
        s = s.substr(1, s.length);
        count++;

        // If t is Longer,
        if (t.length > s.length) {

            // Remove Elements Until Equal Length
            while (t.length != s.length) {

                // Remove First Element
                t = t.substr(1, t.length);
                count++;
            }
        }

        // If Strings Are Equal Return
        if (s === t) {
            return count;
        }

    }

    // Otherwise String Cannot Be Equal - Return Total
    return s.length + t.length;
}