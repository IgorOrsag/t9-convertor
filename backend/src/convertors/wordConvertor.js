let getAlphabetCharsForNumstring = require('./charConverter').getAlphabetCharsForNumstring;

module.exports.getWords = numstring => {
  getAlphabetCharsForNumstring(numstring);
};

module.exports.getTextonyms = () => {};
