const { flatten } = require('lodash');
const { getAlphabetCharsForNumstring } = require('./charConverter');
const { corpus } = require('./../../corpus');

const extendWordByFragment = (word, fragment) => fragment.map(character => word + character);
const extendListByFragment = (list, fragment) =>
  flatten(list.map(word => extendWordByFragment(word, fragment)));

const getWords = numstring => {
  if (!isNaN(numstring)) {
    numstring = numstring.toString();
  }
  const fragments = getAlphabetCharsForNumstring(numstring);
  if (!fragments.length) {
    return '';
  }
  const first = fragments.shift();
  return fragments.reduce(extendListByFragment, first);
};

const filterTextonyms = words => {
  return words.filter(word => corpus.indexOf(word) !== -1);
};

module.exports = { filterTextonyms, getWords, extendListByFragment, extendWordByFragment };
