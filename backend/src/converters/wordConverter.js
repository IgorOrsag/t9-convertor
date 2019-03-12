const { flatten } = require('lodash');
const { getAlphabetCharsForNumstring } = require('./charConverter');

const extendWordByFragment = (word, fragment) => fragment.map(character => word + character);
const extendListByFragment = (list, fragment) =>
  flatten(list.map(word => extendWordByFragment(word, fragment)));

const getWords = numstring => {
  if (!isNaN(numstring)) {
    numstring = numstring.toString();
  }
  const fragments = getAlphabetCharsForNumstring(numstring);
  if (!fragments.length) {
    return [];
  }
  const first = fragments.shift();
  return fragments.reduce(extendListByFragment, first);
};

module.exports = { getWords, extendListByFragment, extendWordByFragment };
