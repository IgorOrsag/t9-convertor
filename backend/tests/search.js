const { expect } = require('chai');
const { compareWords } = require('./../src/filter/comparator');

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
    expect(compareWords(listed, orderedFruitOddLength)).to.be.true;
  });
  it('Should return false when word is not in the list with odd length', () => {
    expect(compareWords(nonsense, orderedFruitOddLength)).to.be.false;
  });
  it('Should return true when word is in the list with even length', () => {
    expect(compareWords(listed, orderedFruitEvenLength)).to.be.true;
  });
  it('Should return false when word is not in the list with even length', () => {
    expect(compareWords(nonsense, orderedFruitEvenLength)).to.be.false;
  });
});
