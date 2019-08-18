const express = require('express');
const app = express();
const logger = require('morgan');
const initialTodo = require('./resource/localdata')

app.use(logger('dev'));
app.use(express.static('dist'));

app.get('/todos', (req, res, next) => {
  res.json(initialTodo);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Running on port ${port}`)
});