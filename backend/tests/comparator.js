const { expect } = require('chai');
const { compareWords } = require('./../src/filter/comparator');

const predecessor = 'apple';
const successor = 'kiwi';

describe('Compares alpahbet order of two words', () => {
  it('Should return true when first argument is predecessor of the second', () => {
    expect(compareWords(predecessor, successor)).to.be.true;
  });
  it('Should return false when first argument is successor of the second', () => {
    expect(compareWords(successor, predecessor)).to.be.false;
  });
  it('Should return boolean', () => {
    expect(compareWords(successor, predecessor)).to.be.a('boolean');
  });
});
