const express = require('express');
const { converter } = require('./src/middlewares/converter');

const app = express();
const port = 4000;

app.get('/', (req, res) => res.json({ message: 'This is T9 converter API' }));
app.get(
  '/convert',
  (req, res, next) => {
    console.log('Input query: ', req.query.query);
    next();
  },
  converter
);

app.listen(port, () => console.log(`T9 API listening on port ${port}!`));
