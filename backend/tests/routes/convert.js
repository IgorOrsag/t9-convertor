let expect = require('chai').expect;

let req = {
  body: {}
};

let res = {
  sendCalledWith: '',
  send: function(arg) {
    this.sendCalledWith = arg;
  }
};

describe('Convert Route', () =>
  it('Sould send error when input is alfanumeric', () => {
    expect(true).equals(false);
  }));
