'use strict';

const expect = require('chai').expect;
const insertionSort = require('../../sorting/insertion-sort');

describe('insertion sort', () => {
    it('should sort items', () => {
        const given = [4, 3, 2, 1];
        const expected = [1, 2, 3, 4];

        const result = insertionSort(given);
        expect(result).to.deep.equal(expected);
    });
});
