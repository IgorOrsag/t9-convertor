const { corpus } = require('./corpus');

const filterTextonyms = words => {
  return words.filter(word => corpus.indexOf(word) !== -1);
};

module.exports = { filterTextonyms };
