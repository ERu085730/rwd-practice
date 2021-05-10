var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000
app.listen(PORT);

app.use('/', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname });
});