var express = require('express');
var app = express();

app.listen(3000);

app.use('/', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('./view/index.html', { root: __dirname });
});