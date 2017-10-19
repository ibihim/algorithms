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
            const firstBlock  = list.next;
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

    it('should be possible to add an element to the beginning', () => {
        const list  = createDefaultLinkedList();
        const newListElement = linkedList.of(0);

        linkedList.addAtBeginning(newListElement, list);

        const newBlock    = list.next;
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
});
