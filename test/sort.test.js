const sort = require('../Part1/sort');
const { expect } = require('chai');

describe('Sort Function', () => {
  it('sort function sorts properly', () => {
    const actual = sort([5, 4, 3, 2, 1]);
    const correct = [1, 2, 3, 4, 5];
    expect(actual).to.deep.equal(correct);
  });
  it('playground', () => {
    const a = { x: 5 };
    const b = { x: 5 };
    expect(a).to.deep.equal(b);
  });
});
