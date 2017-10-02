'use strict';

const _ = require('lodash');

const compareTuple = (arr1, arr2) =>
    arr1[1] === arr2[1] && arr1[2] === arr2[2];

const simpleRandom = (A, B, M) => x => (A * x  + B) % M;
const simpleRandomGenerator = (A, B, M) =>
    (x) =>
        () => {
            x = (A * x + B) % M;
            return x;
        };

const sevenFiveElevenVersion = simpleRandomGenerator(7, 5, 11)(0);

_.times(20)(() => console.log(sevenFiveElevenVersion()));

const unfairCoinFlip = () => (Math.random() + 0.1) > 0.5;
const fairCoinFlip = (nonFairCoin) => {
    const sequence = [ nonFairCoin(), nonFairCoin() ];

    while (true) {
        // probability for true is P.
        // P, P - 1 have same chance as P - 1, P: P * (P - 1)
        if (compareTuple(sequence, [ true, false ])) return true;
        if (compareTuple(sequence, [ false, true ])) return false;
    }
};

const randomize = (arr) => {
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        const j = _.random(i, arrLength - 1);
    }
};
