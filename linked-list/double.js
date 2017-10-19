'use strict';

const EMPTY = null;
const isEmpty = (cell) => cell === EMPTY;

const createCell = (value, prev = EMPTY, next = EMPTY) => ({
    value, prev, next
});

const createDoubleLinkedList = () => ({
    start: EMPTY,
    end: EMPTY,

    addLeft(value) {
        if ()
    }

    addRight(value) {

    }
});


const fromArray = (values) => {
    let previousElement = EMPTY;

    for (let i = 0, until = values.length; i < until; i++) {
        previousElement.next = createCell(values[i], previousElement);

        previousElement = previousElement.next;
    }
};

const of = (...args) => {
    return fromArray(args);
};
