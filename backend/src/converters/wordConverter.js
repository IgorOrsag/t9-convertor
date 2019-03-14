const { flatten, flattenDeep } = require('lodash');
const { getAlphabetCharsForNumstring } = require('./charConverter');
const { search } = require('../filter/binarySearch');

let converted;

const extendWordByFragment = (word, fragment) => fragment.map(character => word + character);
const extendListByFragment = (list, fragment) =>
  flatten(list.map(word => extendWordByFragment(word, fragment)));

// Inefficient
const getWordsInefficiently = numstring => {
  const fragments = getAlphabetCharsForNumstring(numstring);
  if (!fragments.length) {
    return [];
  }
  const first = fragments.shift();
  return fragments.reduce(extendListByFragment, first);
};

const getWordsFast = numstring => {
  const fragments = getAlphabetCharsForNumstring(numstring);
  if (!fragments.length) {
    return [];
  }
  converted = [];
  convertWordFast('', 0, fragments);
  return converted;
};

const convertWordFast = (result, index, fragments) => {
  if (index < fragments.length) {
    fragments[index].forEach(alpha => convertWordFast(result + alpha, index + 1, fragments));
  } else {
    search(result) && converted.push(result);
  }
};

const getWords = numstring => {
  const fragments = getAlphabetCharsForNumstring(numstring);
  if (!fragments.length) {
    return [];
  }
  converted = [];
  convertWord('', 0, fragments);
  return converted;
};

const convertWord = (result, index, fragments) => {
  if (index < fragments.length) {
    fragments[index].forEach(alpha => convertWord(result + alpha, index + 1, fragments));
  } else {
    converted.push(result);
  }
};

module.exports = { getWordsFast, getWords, extendListByFragment, extendWordByFragment };
