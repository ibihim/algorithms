'use strict';

const raiseToPower = (number, power) => {
    let n = 1;
    let result = 1;

    const calculatedPowers = { [n]: number };

    // calculates one power to much, sometimes
    while (n + 1 < power) {
        const result = calculatedPowers[n] * calculatedPowers[n];

        n *= 2;

        calculatedPowers[n] = result;
    }

    while (power !== 0) {
        if (power - n >= 0) {
            power -= n;
            result *= calculatedPowers[n];
        }

        n /= 2;
    }

    return result;
};

module.exports = raiseToPower(2, 10);
