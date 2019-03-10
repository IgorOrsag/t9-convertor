const { flatten } = require('lodash');
const { getAlphabetCharsForNumstring } = require('./charConverter');

const extendWordByFragment = (word, fragment) => fragment.map(character => word + character);
const extendListByFragment = (list, fragment) =>
  flatten(list.map(word => extendWordByFragment(word, fragment)));

const getWords = numstring => {
  const fragments = getAlphabetCharsForNumstring(numstring);
  const first = fragments.shift();
  const result = fragments.reduce(extendListByFragment, first);
  return result;
};

const getTextonyms = () => {};

module.exports = { getTextonyms, getWords, extendListByFragment, extendWordByFragment };
