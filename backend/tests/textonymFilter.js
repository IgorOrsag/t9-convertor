const { expect } = require('chai');

const { getWords, filterTextonyms } = require('../src/converters/wordConverter.js');

const textonyms = ['good', 'home', 'gone', 'hood'];
let words;
const numstring = '4663';

describe('Converts numeric string to an array of textonyms filtered against dictionary', () => {
  before(() => {
    words = getWords(numstring);
  });
  it('Should contain all textonyms', () => {
    expect(filterTextonyms(words)).to.have.members(textonyms);
  });
});
