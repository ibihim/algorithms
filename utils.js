'use strict';

const times = n => fn => {
    if (n === 0) {
        return;
    } else {
        fn();
        times(n - 1)(fn);
    }
};

module.exports = {
    times
};

