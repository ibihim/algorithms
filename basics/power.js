'use strict';

const LIMIT = 3600000000;
const twoToThePowerOfN = x => Math.pow(2, x);

const nForTwoN = function twoN(n, check) {
    if (check > LIMIT) {
        return n;
    } else {
        return twoN(n + 1, twoToThePowerOfN(n));
    }
};

const nForNPow2 = function nTwo(n, check) {
    if (check > LIMIT) {
        return n;
    } else {
        return nTwo(n + 1, Math.pow(n, 2));
    }
};

const nExcl = (function nEx(n, check) {
    if (check > LIMIT) {
        return n;
    } else {
        return nEx(n + 1, check * n);
    }
})(1, 1);

console.log(nExcl);

