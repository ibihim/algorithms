'use strict';

const EMPTY = null;
const isEmpty = (cell) => cell === EMPTY;

const createCell = (value, prev = EMPTY, next = EMPTY) => ({
    value, prev, next
});

const createDoubleLinkedList = () => ({
    start: EMPTY,
    end: EMPTY,

    isInitialized() {
        return !isEmpty(this.start) && !isEmpty(this.end);
    },

    addLeft(value) {
        if (!this.isInitialized()) {
            this.start = this.end = createCell(value, EMPTY, EMPTY);

            return;
        }

        const newCell = createCell(value, EMPTY, this.start);

        this.start.prev = newCell;
        this.start = newCell;
    },

    addRight(value) {
        if (!this.isInitialized()) {
            this.start = this.end = createCell(value, EMPTY, EMPTY);

            return;
        }

        const newCell = createCell(value, this.end, EMPTY);

        this.end.next = newCell;
        this.end = newCell;
    },

    peekLeft() {
        if (isEmpty(this.start)) {
            return EMPTY;
        }

        return this.start.value;
    },

    peekRight() {
        if (isEmpty(this.end)) {
            return EMPTY;
        }

        return this.end.value;
    },

    popLeft() {
        if (isEmpty(this.start)) {
            return EMPTY;
        }

        const popped = this.start;
        const newStart = this.start.next;

        if (!isEmpty(newStart)) {
            newStart.prev = EMPTY;
        }
        
        this.start = newStart;

        return popped.value;
    },

    popRight() {
        if (isEmpty(this.end)) {
            return EMPTY;
        }

        const popped = this.end;
        const newEnd = this.end.prev;

        if (!isEmpty(newEnd)) {
            newEnd.next = EMPTY;
        }

        this.end = newEnd;

        return popped.value;
    }
});


const fromArray = (values) => {
    return values.reduce((linkedList, value) => {
        linkedList.addRight(value);

        return linkedList;
    }, createDoubleLinkedList());
};

const of = (...args) => {
    return fromArray(args);
};

module.exports = {
    create: createDoubleLinkedList,
    fromArray, of
};
