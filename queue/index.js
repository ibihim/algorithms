'use strict';

const doubleList = require('../linked-list/double');

const makeDoubleLinkedListQueue = () => {
    const doubleListInstance = doubleList.create();

    const enqueue = (value) => doubleListInstance.addRight(value);
    const dequeue = () => doubleListInstance.popLeft();

    return { enqueue, dequeue };
};

const makeArrayQueue = (size) => {
    // keeping an empty element as divider
    // to easily distinguish between full and empty
    const _size = size + 1;
    const queue = [];

    let next = 0;
    let last = 0;

    const toString = () => `${ queue }`;
    const isEmpty = () => next === last;
    const isFull = () => ((next + 1) % _size) === last;

    const enqueue = (data) => {
        // make sure there's room to add an item
        if (isFull()) {
            return -1;
        }

        queue[ next ] = data;
        next          = (next + 1) % _size;
    };

    const dequeue = () => {
        // Make sure there's an item to remove
        if (isEmpty()) {
            return -1;
        }

        const value = queue[last];

        last = (last + 1) % _size;

        return value;
    };

    return {
        enqueue,
        dequeue,
        isEmpty,
        isFull,
        toString
    };
};

module.exports = {
    makeWithDoubleList: makeDoubleLinkedListQueue,
    makeWithArray: makeArrayQueue
};
