const express = require('express');
const { getWords } = require('./src/converters/wordConverter');

const app = express();
const port = 4000;

app.get('/', (req, res) => res.json({ message: 'This is T9 converter API' }));
app.get('/convert', (req, res) => {
  console.log('Input query: ', req.query.query);
  const converted = getWords(req.query.query);
  console.log('Converted words: ', converted);
  res.json({ converted });
});

app.listen(port, () => console.log(`T9 API listening on port ${port}!`));
