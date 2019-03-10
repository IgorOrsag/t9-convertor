const { expect } = require('chai');

const { extendListByFragment } = require('../src/converters/wordConverter.js');

const aphabetFragment = ['a', 'b', 'c'];
const aphabetFragmentLong = ['w', 'x', 'y', 'z'];
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
