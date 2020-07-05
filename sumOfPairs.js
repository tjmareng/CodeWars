/*
 * Author: Tyler Marenger
 * Username: tjmareng 
 * Profile: https://www.codewars.com/users/tjmareng
 * Challenge: https://www.codewars.com/kata/54d81488b981293527000c8f
 */
var sum_pairs = function (ints, s) {

    let set = new Set();
    set.add(ints[0]);

    for (var i = 1; i < ints.length; i++) {
        var value = s - ints[i];

        if (set.has(value)) {
            return [value, ints[i]];
        }
        set.add(ints[i]);
    }

    return undefined;
}