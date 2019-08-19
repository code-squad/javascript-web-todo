const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/todos', function(req, res) {
  const data = JSON.parse(fs.readFileSync('./todoData.json', { encoding: 'utf8' }));
  const result = { statusCode: 200, body: data };

  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(result));
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
