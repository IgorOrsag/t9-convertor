let expect = require('chai').expect;
let getWords = require('../src/convertors/wordConvertor.js').getWords;
let getTextonyms = require('../src/convertors/wordConvertor.js').getTextonyms;

const numstringShort = '23';
const numstringShortMembers = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
const numstring = '4663';
const textonym = 'good';
const textonyms = ['good', 'home', 'gone', 'hood'];

describe('Converts numeric string to an array of alphabetic strings', () => {
  it('Sould contain word test', () => {
    expect(getWords(numstring)).to.include(textonym);
  });
  it('Sould contain all words', () => {
    expect(getWords(numstringShort)).to.have.members(numstringShortMembers);
  });
  it('Sould contain only textonyms', () => {
    expect(getTextonyms(numstring)).to.have.members(textonyms);
  });
});
