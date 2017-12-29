const express = require('express');

const PORT = 8080;
const app = express();

app.set('port', PORT);

app.get('/api/hello', (req, res) => {
  res.json({ a: 2 });
});

app.listen(PORT, () => {
  console.log('API Started');
});
