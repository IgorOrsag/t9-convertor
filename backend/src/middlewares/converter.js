const { getWords } = require('../converters/wordConverter');
const { filterTextonyms } = require('../filter/textonymFilter');

module.exports.converter = (req, res) => {
  const converted = getWords(req.query.query);
  const textonyms = filterTextonyms(converted);
  console.log('Converted words: ', converted);
  console.log('Filtered textonyms: ', textonyms);
  res.json({ converted, textonyms });
};
