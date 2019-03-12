const { corpus } = require('./corpus');
const { compareWords } = require('./comparator');

module.exports.search = (value, list = corpus) => {
  let start = 0;
  let stop = list.length - 1;
  let middle = Math.floor((start + stop) / 2);

  while (list[middle] !== value && start < stop) {
    if (compareWords(value, list[middle])) {
      stop = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + stop) / 2);
  }
  return list[middle] !== value ? false : true;
};
