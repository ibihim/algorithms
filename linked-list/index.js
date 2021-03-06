'use strict';

const EMPTY   = null;
const isEmpty = (top) => top === EMPTY;

const create = (value, next = EMPTY) => ({
    value, next,

    *[Symbol.iterator]() {
        let top = this;

        while (top) {
            yield top.value;
            top = top.next;
        }
    }
});

const fromArray = (values) => {
    let lastValue = EMPTY;

    for (let i = values.length - 1; i >= 0; i--) {
        lastValue = create(values[i], lastValue);
    }

    return lastValue;
};

const of = (...values) => fromArray(values);

const get = (index, top) => {
    for (; index > 0; index--) {
        top = top.next;
    }

    return top;
};

const addAtBeginning = (newCell, top) => {
    newCell.next = top;

    return newCell;
};

const find = (target, top) => {
    while (!isEmpty(top)) {
        if (top.value === target) {
            return top;
        }

        top = top.next;
    }

    // if we get this far, the target is not in the list
    return null;
};

const findBefore = (value, top) => {
    // If the list is empty, the target value isn't present
    if (isEmpty(top)) {
        return null;
    }

    // search for the target value
    while (!isEmpty(top.next)) {
        if (top.next.value === value) {
            return top;
        }

        top = top.next;
    }

    // if we get this far, the target is not in the list
    return null;
};

const addAtEnd = (newCell, top) => {
    // find the last cell
    while (!isEmpty(top.next)) {
        top = top.next;
    }

    // add the new cell at the end
    top.next = newCell;

    return top;
};

const insertCell = (newCell, afterCell) => {
    newCell.next = afterCell.next;
    afterCell.next = newCell;
};

const deletingCell = (afterCell) => {
    afterCell.next = afterCell.next.next;
};

module.exports = {
    isEmpty,
    fromArray,
    of,
    get,
    find,
    findBefore,
    addAtBeginning,
    addAtEnd,
    insertCell,
    deletingCell
};
