const { getWords, getWordsFast } = require('../converters/wordConverter');
const { filterTextonyms } = require('../filter/textonymFilter');

module.exports.converter = (req, res) => {
  console.time('Conversion time');
  const textonyms = getWordsFast(req.query.query);
  console.timeEnd('Conversion time');
  console.log('Filtered textonyms: ', textonyms);

  res.json({ textonyms });
};
