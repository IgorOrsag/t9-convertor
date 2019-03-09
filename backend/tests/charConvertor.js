let expect = require('chai').expect;
let getAlphabetChars = require('../src/convertors/charConvertor.js').getAlphabetChars;
let getAlphabetCharsForNumstring = require('../src/convertors/charConvertor.js')
  .getAlphabetCharsForNumstring;

describe('Decodes numeric char to array of alphabet chars', () => {
  it('Sould decode 2 to a, b, c', () => {
    expect(getAlphabetChars('2')).to.have.members(['a', 'b', 'c']);
  });
  it('Sould decode 3 to d, e, f', () => {
    expect(getAlphabetChars('3')).to.have.members(['d', 'e', 'f']);
  });
  it('Sould decode 4 to g, h, i', () => {
    expect(getAlphabetChars('4')).to.have.members(['g', 'h', 'i']);
  });
  it('Sould decode 5 to j, k, l', () => {
    expect(getAlphabetChars('5')).to.have.members(['j', 'k', 'l']);
  });
  it('Sould decode 6 to m, n, o', () => {
    expect(getAlphabetChars('6')).to.have.members(['m', 'n', 'o']);
  });
  it('Sould decode 7 to p, q, r, s', () => {
    expect(getAlphabetChars('7')).to.have.members(['p', 'q', 'r', 's']);
  });
  it('Sould decode 8 to t, u, v', () => {
    expect(getAlphabetChars('8')).to.have.members(['t', 'u', 'v']);
  });
  it('Sould decode 9 to w, x, y, z', () => {
    expect(getAlphabetChars('9')).to.have.members(['w', 'x', 'y', 'z']);
  });
});

describe('Returns an array of alphabet chars for each numeric character', () => {
  it('Sould return [[a, b, c],[a, b, c]] for 22', () => {
    expect(getAlphabetCharsForNumstring('22')).to.have.deep.members([
      ['a', 'b', 'c'],
      ['a', 'b', 'c']
    ]);
  });
});
