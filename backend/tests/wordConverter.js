const { expect } = require('chai');

const { getWords } = require('../src/converters/wordConverter.js');

const numstringShort = '23';
const numstringShortWithSpaces = ' 2  3 ';
const numstringShortMembers = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
const { numstringLongMembers } = require('./longMembers');
const numstring = '4663';
const alfaNumstring = 'a23';
const textonym = 'good';
const number = 23;

describe('Converts numeric string to an array of all possible alphabetic strings', () => {
  it('Should contain word good', () => {
    expect(getWords(numstring)).to.include(textonym);
  });
  it('Should contain 3^4 words', () => {
    expect(getWords(numstring)).to.have.lengthOf(Math.pow(3, numstring.length));
  });
  it('Should contain 3^4 words', () => {
    expect(getWords(numstring)).to.have.members(numstringLongMembers);
  });

  it('Should contain all words', () => {
    expect(getWords(numstringShort)).to.have.members(numstringShortMembers);
  });
  it('Should ignore white spaces', () => {
    expect(getWords(numstringShortWithSpaces)).to.have.members(numstringShortMembers);
  });
  it('Should ignore nonnumeric char', () => {
    expect(getWords(alfaNumstring)).to.have.members(numstringShortMembers);
  });

  it('Should return empty string for nonnumeric string', () => {
    expect(getWords(textonym)).to.equals('');
  });
  it('Should convert for numeric input', () => {
    expect(getWords(number)).to.have.members(numstringShortMembers);
  });
});
