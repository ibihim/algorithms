'use strict';

const { random } = require('lodash');

const findFactors = (num) => {
    const factors = new Set();

    // don't need to test even numbers as those are divisible by 2
    while (num % 2 === 0) {
        factors.add(2);
        num %= 2;
    }

    // num = p * q -> p or q needs to be smaller than sqrt(num)
    let maxFactor = Math.sqrt(num);
    let i = 3;

    while (i <= maxFactor) {
        while (num % i === 0) {
            factors.add(i);

            num /= i;
            // updating upper bound to check
            maxFactor = Math.sqrt(num);
        }

        i += 2;
    }

    if (num > 1) {
        factors.add(num);
    }

    return factors.keys();
};



//sieve of Eratosthenes
const findPrimes = (maxNumber) => {
    const isComposite = [];

    // "Cross" out multiples of 2.
    for (let i = 4; i <= maxNumber; i += 2) {
        isComposite[i] = true;
    }

    // "Cross" out multiples of primes found so far.
    let nextPrime = 3;
    let stopAt = Math.sqrt(maxNumber);

    while (nextPrime <= stopAt) {
        // "Cross out" multiple of that prime
        for (let i = nextPrime * 2; i <= maxNumber; i += nextPrime) {
            isComposite[i] = true;
        }

        // Move to the next prime, skipping the even numbers.
        nextPrime += 2;

        while (nextPrime <= maxNumber && isComposite[nextPrime]) {
            nextPrime += 2;
        }
    }

    // Copy the primes into a list.
    const primes = [];
    for (let i = 2; i <= maxNumber; i++) {
        if (!isComposite[i]) {
            primes.push(i);
        }
    }

    return primes;
};

const isPrime = (p, maxTests) => {
    // Fermat's little theorem
    // Perform the test up to maxTests times.
    for (let i = 0; i < maxTests; i++) {
        const n = random(1, p - 1);
        if ((Math.pow(n, p - 1) % p) !== 1) {
            return false;
        }
    }

    // The Number is probably prime
    // (There is a 1/2^maxTests chance that it is not prime)
    return true;
};

const x = isPrime(17, 10);

console.log(x);

module.exports = {
    findFactors,
    findPrimes,
    isPrime
};
