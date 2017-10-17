'use strict';

const _ = require('lodash');

const compareTuple = (arr1, arr2) =>
    arr1[1] === arr2[1] && arr1[2] === arr2[2];



// Pseudo Random Number Generator (PRNG)
const linearCongruentialGenerator = (A = 7, B = 5, M = 11) =>
    // M - 1 = max, M = cycle length
    (seed) =>
        () => {
            seed = (A * seed + B) % M;
            return seed;
        };



const randomMinMax = (A, B, M) => (min, max) => (seed) =>
    () => {
        const rndNumber = linearCongruentialGenerator(A, B, M)(seed);

        seed = min + (rndNumber / M) * (max - min);

        return seed;
    };



//const unfairCoinFlip = () => (Math.random() + 0.1) > 0.5;
const fairCoinFlip = (nonFairCoin) => {
    const sequence = [ nonFairCoin(), nonFairCoin() ];

    while (true) {
        // probability for true is P.
        // P, P - 1 have same chance as P - 1, P: P * (P - 1)
        if (compareTuple(sequence, [ true, false ])) return true;
        if (compareTuple(sequence, [ false, true ])) return false;
    }
};



const randomizeArr = (arr) => {
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        const j = _.random(i, arrLength - 1);
        // swap position i and j
        const tmp = arr[i];

        arr[i] = arr[j];
        arr[j] = tmp;
    }

    return arr;
};

module.exports = {
    linearCongruentialGenerator,
    randomMinMax,
    randomizeArr,
    fairCoinFlip
};
