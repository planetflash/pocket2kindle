const express = require('express');

const PORT = 8080;
const app = express();

app.set('port', PORT);

app.get('/api/hello', function(req, res) {
  res.send('Hello!');
});

app.listen(PORT, () => {
  console.log('API Started');
});
