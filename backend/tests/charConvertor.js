let expect = require('chai').expect;
let getAlphabetChars = require('../src/convertors/charConvertor.js').getAlphabetChars;

describe('Decodes numeric char to array of alphabet chars', () => {
  it('Sould decode 2 to a, b, c', () => {
    expect(getAlphabetChars('2')).to.equal(['a', 'b', 'c']);
  });
  it('Sould decode 3 to d, e, f', () => {
    expect(getAlphabetChars('3')).to.equal(['d', 'e', 'f']);
  });
  it('Sould decode 4 to g, h, i', () => {
    expect(getAlphabetChars('4')).to.equal(['g', 'h', 'i']);
  });
  it('Sould decode 5 to j, k, l', () => {
    expect(getAlphabetChars('5')).to.equal(['j', 'k', 'l']);
  });
  it('Sould decode 6 to m, n, o', () => {
    expect(getAlphabetChars('6')).to.equal(['m', 'n', 'o']);
  });
  it('Sould decode 7 to p, q, r, s', () => {
    expect(getAlphabetChars('7')).to.equal(['p', 'q', 'r', 's']);
  });
  it('Sould decode 8 to t, u, v', () => {
    expect(getAlphabetChars('8')).to.equal(['t', 'u', 'v']);
  });
  it('Sould decode 9 to w, x, y, z', () => {
    expect(getAlphabetChars('9')).to.equal(['w', 'x', 'y', 'z']);
  });
});
