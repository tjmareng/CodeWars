/*
 * Author: Tyler Marenger
 * Username: tjmareng 
 * Profile: https://www.codewars.com/users/tjmareng
 * Challenge: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
 */
function persistence(num) {

    var value = 1;
    var result = 0;

    while (!(num < 10)) {
        [...num.toString()].map((n) => +n).forEach((e) => { value *= e });
        num = value;
        value = 1;
        result++;
    }

    return result;
}