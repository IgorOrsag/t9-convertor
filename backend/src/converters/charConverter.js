let codes = require('./codes').codes;

module.exports.getAlphabetChars = numericChar => codes[numericChar];
module.exports.getAlphabetCharsForNumstring = numstring => {
  if (!isNaN(numstring)) {
    numstring = numstring.toString();
  }
  return numstring.split('').reduce((fragments, numchar) => {
    const fragment = codes[numchar];
    fragment && fragments.push(fragment);
    return fragments;
  }, []);
};
