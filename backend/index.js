const express = require('express');

const app = express();
const port = 4000;

app.get('/', (req, res) => res.json({ message: 'This is T9 converter API' }));
app.get('/convert', (req, res) => res.json({ converted: ['word', 'sword', 'etc'] }));

app.listen(port, () => console.log(`T9 API listening on port ${port}!`));
