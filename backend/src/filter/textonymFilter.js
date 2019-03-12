const { corpus } = require('./corpus');
const { search } = require('./binarySearch');

const linearFilter = words => {
  return words.filter(word => corpus.indexOf(word) !== -1);
};

const logFilter = words => {
  return words.filter(word => search(word));
};

const filterTextonyms = words => {
  return logFilter(words);
};

module.exports = { filterTextonyms };
