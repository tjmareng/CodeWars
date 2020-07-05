/*
 * Author: Tyler Marenger
 * Username: tjmareng 
 * Profile: https://www.codewars.com/users/tjmareng
 * Challenge: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
 */
function accum(s) {
    var str = "";

    [...s].forEach((char, index) => {
        for (var i = 0; i < index + 1; i++) {
            str = (i === 0) ? str.concat(char.toUpperCase()) : str.concat(char.toLowerCase());
        }
        str = str.concat('-');
    })

    return str.substring(0, str.length - 1);
}