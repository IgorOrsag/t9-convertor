const { expect } = require('chai');

const { getWordsFast } = require('../src/converters/wordConverter.js');

const textonyms = ['gone', 'good', 'goof', 'home', 'hond', 'hone', 'hood', 'hoof'];

const numstring = '4663';
const singleNumstring = '234';
const singleTextonym = ['beg'];

describe('Converts numeric string to an array of textonyms filtered against dictionary', () => {
  it('Should contain all textonyms', () => {
    expect(getWordsFast(numstring)).to.have.members(textonyms);
  });
  it('Should contain single textonyms', () => {
    expect(getWordsFast(singleNumstring)).to.have.members(singleTextonym);
  });
});
