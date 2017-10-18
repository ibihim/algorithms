'use strict';

class SinglyLinkedList {
    /*
        TODO add sentinel!

        Work in progress!
     */

    constructor(value, next) {
        this.value = value;
        this.next = next instanceof SinglyLinkedList
            ? next
            : null;
    }

    addAtBeginning(newCell) {
        newCell = SinglyLinkedList.create(newCell);

        newCell.next = this;

        return newCell;
    }

    addAtEnd(newCell) {
        newCell = SinglyLinkedList.create(newCell);

        let top = this;

        while (top.next !== null) {
            top = top.next;
        }

        top.next = newCell;
        newCell.next = null;
    }

    insertCell(afterMe, newCell) {
        newCell = SinglyLinkedList.create(newCell);
    }

    *[Symbol.iterator]() {
        let top = this;

        while (top) {
            yield top.value;
            top = top.next;
        }
    }

    static create(value) {
        return value instanceof SinglyLinkedList
            ? value
            : SinglyLinkedList(value);
    }

    static of(...values) {
        let lastValue = null;

        for (let i = values.length - 1; i >= 0; i--) {
            lastValue = new SinglyLinkedList(values[i], lastValue);
        }

        return lastValue;
    }

    static find(top, target) {
        while (top !== null) {
            if (top.value === target) {
                return top;
            }

            top = top.next;
        }

        return null;
    }

    static findCellBefore(top, target) {
        // if the list is empty, the target value isn't present
        if (!top) {
            return null;
        }

        // search for the target value
        while (top.next !== null) {
            if (top.next.value === target) {
                return top;
            }

            top = top.next;
        }

        // if we get this far, the target is not in the list
        return null;
    }
}
