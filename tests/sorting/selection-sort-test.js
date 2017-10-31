'use strict';

const expect = require('chai').expect;
const selectionSort = require('../../sorting/selection-sort');

describe('selection sort', () => {
    it.only('should sort items', () => {
        const given = [4, 3, 2, 1];
        const expected = [1, 2, 3, 4];

        const result = selectionSort(given);
        expect(result).to.deep.equal(expected);
    });
});
