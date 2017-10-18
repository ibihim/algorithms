'use strict';

const gcd = (a, b) => {
    while (b !== 0) {
        const remainder = a % b;
        // GCD(A, B) = GCD(B, remainder)
        a = b;
        b = remainder;
    }

    return a;
};

module.exports = gcd;
