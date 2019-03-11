const { expect } = require('chai');

const { getWords } = require('../src/converters/wordConverter.js');
const { filterTextonyms } = require('../src/filter/textonymFilter.js');

const textonyms = ['gone', 'good', 'goof', 'home', 'hond', 'hone', 'hood', 'hoof'];

let words;
let word;
const numstring = '4663';
const singleNumstring = '234';
const singleTextonym = ['beg'];

describe('Converts numeric string to an array of textonyms filtered against dictionary', () => {
  before(() => {
    words = getWords(numstring);
    word = getWords(singleNumstring);
  });
  it('Should contain all textonyms', () => {
    expect(filterTextonyms(words)).to.have.members(textonyms);
  });
  it('Should contain single textonyms', () => {
    expect(filterTextonyms(word)).to.have.members(singleTextonym);
  });
});
