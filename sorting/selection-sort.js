'use strict';

module.exports = (values) => {
    for (let j = 0, length = values.length; j < length; j++) {
        let smallestValueIndex = j;

        for (let i = j + 1; i < length; i++) {
            const isCurrentValueSmallest = values[i] < values[smallestValueIndex];

            if (isCurrentValueSmallest) {
                smallestValueIndex = i;
            }
        }

        if (smallestValueIndex !== j) {
            const temp = values[j];
            values[j] = values[smallestValueIndex];
            values[smallestValueIndex] = temp;
        }
    }

    return values;
};
