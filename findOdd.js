/*
 * Author: Tyler Marenger
 * Username: tjmareng 
 * Profile: https://www.codewars.com/users/tjmareng
 * Challenge: https://www.codewars.com/kata/54da5a58ea159efa38000836
 */
function findOdd(A) {
    const o = {};

    A.forEach((n) => {
        (o[n]) ? o[n]++ : o[n] = 1;
    })

    for (let [key, value] of Object.entries(o)) {
        if (value % 2 === 1) { return parseInt(key); }
    }
}