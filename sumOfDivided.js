/*
 * Author: Tyler Marenger
 * Username: tjmareng 
 * Profile: https://www.codewars.com/users/tjmareng
 * Challenge: https://www.codewars.com/kata/54d496788776e49e6b00052f
 */
function sumOfDivided(lst) {

    let primes = [];
    let check = [];
    let limit = Math.max.apply(null, lst.map(Math.abs));


    for (var i = 2; i <= limit; i++) {

        var sum = 0;
        var multiple = false;

        lst.forEach((num) => {
            if (num % i == 0) {
                multiple = true;
                sum += num;
            }
        });

        if (check[i]) {
            continue;
        } else if (multiple) {
            primes.push([i, sum]);
        }

        for (var j = 2 * i; j <= limit; j += i) {
            check[j] = true;
        }
    }

    return primes;
}