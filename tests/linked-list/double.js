'use strict';

const doubleLinkedList = require('../../linked-list/double');
const expect = require('chai').expect;


const getExampleArray = () => [1, 2, 3, 4, 5];
const verifyDoubleList = (list) => {
    const startFirst = list.start;
    const startSecond = startFirst.next;
    const startThird = startSecond.next;
    const startFourth = startThird.next;
    const startFifth = startFourth.next;

    expect(startFirst.value).to.equal(1);
    expect(startSecond.value).to.equal(2);
    expect(startThird.value).to.equal(3);
    expect(startFourth.value).to.equal(4);
    expect(startFifth.value).to.equal(5);

    const endFirst = list.end;
    const endSecond = endFirst.prev;
    const endThird = endSecond.prev;
    const endFourth = endThird.prev;
    const endFifth = endFourth.prev;

    expect(endFifth.value).to.equal(1);
    expect(endFourth.value).to.equal(2);
    expect(endThird.value).to.equal(3);
    expect(endSecond.value).to.equal(4);
    expect(endFirst.value).to.equal(5);
};

describe('double linked list', () => {

    it('should be possible to create a double linked list', () => {
        const doubleList = doubleLinkedList.create();

        doubleList.addLeft(3);
        doubleList.addLeft(2);
        doubleList.addLeft(1);

        doubleList.addRight(4);
        doubleList.addRight(5);

        verifyDoubleList(doubleList);
    });

    it('should be possible to create a linked list from an Array', () => {
        const exampleArr = getExampleArray();
        const doubleList = doubleLinkedList.fromArray(exampleArr);

        verifyDoubleList(doubleList);
    });

    it('should be possible to create a linked list from arguments', () => {
        const exampleArr = getExampleArray();
        const doubleList = doubleLinkedList.of(...exampleArr);

        verifyDoubleList(doubleList);
    });

    it('should be possible to peek values', () => {
        const doubleList = doubleLinkedList.fromArray(getExampleArray());

        expect(doubleList.peekLeft()).to.equal(1);
        expect(doubleList.peekRight()).to.equal(5);

        verifyDoubleList(doubleList);
    });

    it('should be possible to pop values', () => {
        const doubleList1 = doubleLinkedList.fromArray(getExampleArray());

        expect(doubleList1.popLeft()).to.equal(1);
        expect(doubleList1.popLeft()).to.equal(2);
        expect(doubleList1.popLeft()).to.equal(3);

        expect(doubleList1.popRight()).to.equal(5);
        expect(doubleList1.popRight()).to.equal(4);

        const doubleList2 = doubleLinkedList.fromArray(getExampleArray());

        expect(doubleList2.popRight()).to.equal(5);
        expect(doubleList2.popRight()).to.equal(4);
        expect(doubleList2.popRight()).to.equal(3);

        expect(doubleList2.popLeft()).to.equal(1);
        expect(doubleList2.popLeft()).to.equal(2);
    });

    it('shouldn\'t explode right into your face, when provoking NPE', () => {
        const doubleList = doubleLinkedList.create();

        doubleList.popLeft();
        doubleList.popRight();

        doubleList.peekLeft();
        doubleList.peekRight();
    });
});
