let codes = require('./codes').codes;

module.exports.getAlphabetChars = numericChar => codes[numericChar];
module.exports.getAlphabetCharsForNumstring = numstring =>
  numstring.split('').map(numchar => codes[numchar]);
