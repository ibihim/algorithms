'use strict';

const utils = require('./utils');

const simpleRandom = (A, B, M) => x => (A * x  + B) % M;
const simpleRandomGenerator = (A, B, M) =>
    (x) =>
        () => {
            x = (A * x + B) % M;
            return x;
        };

const sevenFiveElevenVersion = simpleRandomGenerator(7, 5, 11)(0);

utils.times(20)(() => console.log(sevenFiveElevenVersion()));

