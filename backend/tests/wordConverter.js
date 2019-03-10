const { expect } = require('chai');

const {
  extendListByFragment,
  extendWordByFragment,
  getWords,
  getTextonyms
} = require('../src/converters/wordConverter.js');

const numstringShort = '23';
const numstringShortMembers = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
const numstring = '4663';
const textonym = 'good';
const textonyms = ['good', 'home', 'gone', 'hood'];

describe('Converts numeric string to an array of textonyms filtered against dictionary', () => {
  it('Should contain all textonyms', () => {
    expect(getTextonyms(numstring)).to.have.members(textonyms);
  });
});

describe('Converts numeric string to an array of all possible alphabetic strings', () => {
  it('Should contain word test', () => {
    expect(getWords(numstring)).to.include(textonym);
  });
  it('Should contain all words', () => {
    expect(getWords(numstringShort)).to.have.members(numstringShortMembers);
  });
});

const oneCharWord = 'a';
const twoCharWord = 'aa';

const aphabetFragment = ['a', 'b', 'c'];
const aphabetFragmentLong = ['w', 'x', 'y', 'z'];

describe('Extends word to a list by addition of each char from an aphabet fragment', () => {
  it('Should extend one char word to 3 word list', () => {
    expect(extendWordByFragment(oneCharWord, aphabetFragment)).to.have.lengthOf(
      aphabetFragment.length
    );
  });
  it('Should extend two char word to 3 word list', () => {
    expect(extendWordByFragment(twoCharWord, aphabetFragment)).to.have.lengthOf(
      aphabetFragment.length
    );
  });

  it('Should extend one char word to 4 word list', () => {
    expect(extendWordByFragment(oneCharWord, aphabetFragmentLong)).to.have.lengthOf(
      aphabetFragmentLong.length
    );
  });
  it('Should extend two char word to 4 word list', () => {
    expect(extendWordByFragment(twoCharWord, aphabetFragmentLong)).to.have.lengthOf(
      aphabetFragmentLong.length
    );
  });

  it('Should extend word with length 1 to a list of words aa, ab, ac', () => {
    expect(extendWordByFragment(oneCharWord, aphabetFragment)).to.have.members(['aa', 'ab', 'ac']);
  });

  it('Should extend word with length 2 to a list of words aaa, aab, aac', () => {
    expect(extendWordByFragment(twoCharWord, aphabetFragment)).to.have.members([
      'aaa',
      'aab',
      'aac'
    ]);
  });
});

const oneCharWords = ['d', 'e', 'f'];
const twoCharWords = ['aa', 'bb'];

describe('Extends word list by addition of each char from an aphabet fragment', () => {
  it('Should multiply cardinality of single char word list by cardinality of aphabet fragment', () => {
    expect(extendListByFragment(oneCharWords, aphabetFragment)).to.have.lengthOf(
      oneCharWords.length * aphabetFragment.length
    );
  });

  it('Should multiply cardinality of two char word list by cardinality of long aphabet fragment', () => {
    expect(extendListByFragment(twoCharWords, aphabetFragmentLong)).to.have.lengthOf(
      twoCharWords.length * aphabetFragmentLong.length
    );
  });

  it('Should return words extended by one character from long aphabet fragment', () => {
    expect(extendListByFragment(twoCharWords, aphabetFragmentLong)).to.have.members([
      'aaw',
      'aax',
      'aay',
      'aaz',
      'bbw',
      'bbx',
      'bby',
      'bbz'
    ]);
  });
});
