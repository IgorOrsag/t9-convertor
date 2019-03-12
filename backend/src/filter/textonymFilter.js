const { corpus } = require('./corpus');
const { search } = require('./binarySearch');

const linearFilter = words => {
  return words.filter(word => corpus.indexOf(word) !== -1);
};

const logFilter = words => {
  return words.filter(word => search(word));
};

const countCorpusDistance = (list = corpus) => {
  return list.reduce(
    ({ word, distance }, w) =>
      w.length > distance ? { word: w, distance: w.length } : { word, distance },
    {
      word: '',
      distance: 0
    }
  );
};

const filterTextonyms = words => {
  return logFilter(words);
};

module.exports = { filterTextonyms, countCorpusDistance };
