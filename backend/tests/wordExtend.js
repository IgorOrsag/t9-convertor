const { expect } = require('chai');

const { extendWordByFragment } = require('../src/converters/wordConverter.js');

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

  it(`Should extend ${oneCharWord} to a list of words aa, ab, ac`, () => {
    expect(extendWordByFragment(oneCharWord, aphabetFragment)).to.have.members(['aa', 'ab', 'ac']);
  });

  it(`Should extend word ${twoCharWord} to a list of words aaa, aab, aac`, () => {
    expect(extendWordByFragment(twoCharWord, aphabetFragment)).to.have.members([
      'aaa',
      'aab',
      'aac'
    ]);
  });

  it(`Should extend word ${twoCharWord} to a list of words aaw, aax, aay, aaz`, () => {
    expect(extendWordByFragment(twoCharWord, aphabetFragmentLong)).to.have.members([
      'aaw',
      'aax',
      'aay',
      'aaz'
    ]);
  });

  it(`Should return input fragment ${aphabetFragmentLong} when word is empty`, () => {
    expect(extendWordByFragment('', aphabetFragmentLong)).to.have.members(aphabetFragmentLong);
  });
});
