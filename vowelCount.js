/*
 * Author: Tyler Marenger
 * Username: tjmareng 
 * Profile: https://www.codewars.com/users/tjmareng
 * Challenge: https://www.codewars.com/kata/54ff3102c1bad923760001f3
 */
function getCount(str) {
    var vowelsCount = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    [...str].forEach((c) => { if (vowels.includes(c)) { vowelsCount++; } })

    return vowelsCount;
}