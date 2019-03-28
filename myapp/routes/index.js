const express = require('express');
const router = express.Router();
const todoList = require('../public/javascripts/todoList');

const cors = require('cors');

/* GET todoList. */
router.get('/todo', cors(), function (req, res, next) {
  res.send(todoList);
});

module.exports = router;
