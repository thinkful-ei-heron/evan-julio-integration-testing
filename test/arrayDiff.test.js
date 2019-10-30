const { expect } = require('chai');
const diff = require('../arrayDiff');

describe('Array diff', () => {
  it('should return a if no common elements', () => {
    expect(diff([1,2,3], [4,5,6])).to.eql([1,2,3]);
  });
  
  it('should return [] if same', () => {
    expect(diff([1,2,3], [1,2,3])).to.eql([]);
  });
  
  it('should return correctly if some elements are removed', () => {
    expect(diff([1,2,3], [2])).to.eql([1,3]);
  });

  it('should return correctly if some elements are removed', () => {
    expect(diff([1,2,3], [3])).to.eql([1,2]);
  });
  it('should remove 1 from [1,2,3]', () => {
    expect(diff([1,2,3], [1])).to.not.include(1);
  });
});