'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');

const linkedList = require('../../linked-list');

const createDefaultLinkedList = () => linkedList.of(1, 2, 3);

describe('linked-list', () => {
    [{
        keyword: 'args',
        list: linkedList.of(1, 2, 3)
    }, {
        keyword: 'list',
        list: linkedList.fromArray([1, 2, 3])
    }].forEach(({ keyword, list }) => {
        it(`should be possible to create a linked list from ${ keyword }`, () => {
            const firstBlock  = list;
            const secondBlock = firstBlock.next;
            const thirdBlock  = secondBlock.next;
            const end         = thirdBlock.next;

            expect(firstBlock.value).to.equal(1);
            expect(secondBlock.value).to.equal(2);
            expect(thirdBlock.value).to.equal(3);

            expect(linkedList.isEmpty(end)).to.be.true;
        });
    });

    it('should be possible to get a particular index', () => {
        const list = createDefaultLinkedList();
        const secondBlock = linkedList.get(1, list);

        expect(secondBlock.value).to.equal(2);
    });

    it('should be iterable', () => {
        const list = createDefaultLinkedList();
        const spy  = sinon.spy();

        for (let value of list) {
            spy(value);
        }

        expect(spy.firstCall.args[0]).to.equal(1);
        expect(spy.secondCall.args[0]).to.equal(2);
        expect(spy.thirdCall.args[0]).to.equal(3);
    });

    it('should be possible to find a particular value', () => {
        const target = 2;
        const list   = createDefaultLinkedList();
        const found  = linkedList.find(target, list);

        expect(found.value).to.equal(target);
    });

    it('should be possible to find a cell before a particular value', () => {
        const beforeValue = 1;
        const target      = 2;
        const list        = createDefaultLinkedList();
        const found       = linkedList.findBefore(target, list);

        expect(found.value).to.equal(beforeValue);
    });

    it('should be possible to add an element to the beginning', () => {
        const list           = createDefaultLinkedList();
        const newListElement = linkedList.of(0);

        const newBlock = linkedList.addAtBeginning(newListElement, list);

        const firstBlock  = newBlock.next;
        const secondBlock = firstBlock.next;
        const thirdBlock  = secondBlock.next;
        const end         = thirdBlock.next;

        expect(newBlock.value).to.equal(0);
        expect(firstBlock.value).to.equal(1);
        expect(secondBlock.value).to.equal(2);
        expect(thirdBlock.value).to.equal(3);

        expect(linkedList.isEmpty(end)).to.be.true;
    });

    it('should be possible to add an element to the end', () => {
        const list           = createDefaultLinkedList();
        const newListElement = linkedList.of(4);

        linkedList.addAtEnd(newListElement, list);

        const secondBlock = list.next;
        const thirdBlock  = secondBlock.next;
        const fourthBlock = thirdBlock.next;
        const end         = fourthBlock.next;

        expect(list.value).to.equal(1);
        expect(secondBlock.value).to.equal(2);
        expect(thirdBlock.value).to.equal(3);
        expect(fourthBlock.value).to.equal(4);

        expect(linkedList.isEmpty(end)).to.be.true;
    });

    it('should be possible to add an element after a particular cell', () => {
        const list           = createDefaultLinkedList();
        const newListElement = linkedList.of(23);
        const secondBlock    = list.next;

        linkedList.insertCell(newListElement, secondBlock);

        const thirdBlock  = secondBlock.next;
        const fourthBlock = thirdBlock.next;
        const end         = fourthBlock.next;

        expect(list.value).to.equal(1);
        expect(secondBlock.value).to.equal(2);
        expect(thirdBlock.value).to.equal(23);
        expect(fourthBlock.value).to.equal(3);

        expect(linkedList.isEmpty(end)).to.be.true;
    });

    it('should be possible to delete an element after a particular cell', () => {
        const list        = createDefaultLinkedList();
        const secondBlock = list.next;

        linkedList.deletingCell(secondBlock);

        const end = secondBlock.next;

        expect(list.value).to.equal(1);
        expect(secondBlock.value).to.equal(2);

        expect(linkedList.isEmpty(end)).to.be.true;
    })
});
