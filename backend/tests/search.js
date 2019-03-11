const { expect } = require('chai');
const { search } = require('./../src/filter/binarySearch');

const listed = 'kiwi';
const nonsense = 'nonsense';
const orderedFruitEvenLength = ['apple', 'banana', 'kiwi', 'lemon', 'orange', 'pineapple'];
const orderedFruitOddLength = [
  'apple',
  'banana',
  'kiwi',
  'lemon',
  'orange',
  'pineapple',
  'strawberry'
];

describe('Resolves presence of the word in the list', () => {
  it('Should return true when word is in the list with odd length', () => {
    expect(search(listed, orderedFruitOddLength)).to.be.true;
  });
  it('Should return false when word is not in the list with odd length', () => {
    expect(search(nonsense, orderedFruitOddLength)).to.be.false;
  });
  it('Should return true when word is in the list with even length', () => {
    expect(search(listed, orderedFruitEvenLength)).to.be.true;
  });
  it('Should return false when word is not in the list with even length', () => {
    expect(search(nonsense, orderedFruitEvenLength)).to.be.false;
  });
});
