const { getWords } = require('../converters/wordConverter');
const { filterTextonyms } = require('../filter/textonymFilter');

module.exports.converter = (req, res) => {
  console.time('Conversion time');
  const converted = getWords(req.query.query);
  const textonyms = filterTextonyms(converted);
  console.timeEnd('Conversion time');
  console.log('Converted words: ', converted);
  console.log('Filtered textonyms: ', textonyms);

  res.json({ converted, textonyms });
};
