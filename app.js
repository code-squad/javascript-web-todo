const fallback = require('express-history-api-fallback');
const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require('cors');
const initialTodo = require('./resource/localdata');

const root = `${__dirname}/dist`

app.use(logger('dev'));
app.use(cors())

app.use(express.static(root));

app.get('/todos', (req, res, next) => {
  res.json(initialTodo);
})
app.use(fallback(root + '/index.html'))

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Running on port ${port}`)
});