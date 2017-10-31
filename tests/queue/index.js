'use strict';

const expect = require('chai').expect;
const queueLib = require('../../queue');

describe('queue', () => {
    it('should be possible to use queue with double list as base', () => {
        const queue = queueLib.makeWithDoubleList();

        queue.enqueue(1);
        queue.enqueue(2);

        expect(queue.dequeue()).to.equal(1);
        expect(queue.dequeue()).to.equal(2);
        expect(queue.dequeue()).to.equal(null);
    });

    it('should be possible to use queue with array as base', () => {
        const queue = queueLib.makeWithArray(2);

        queue.enqueue(1);
        queue.enqueue(2);

        expect(queue.enqueue(3)).to.equal(-1);
        expect(queue.dequeue()).to.equal(1);
        expect(queue.dequeue()).to.equal(2);
        expect(queue.dequeue()).to.equal(-1);
    });
});
