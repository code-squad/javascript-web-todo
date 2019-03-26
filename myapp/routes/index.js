const express = require('express');
const router = express.Router();
const todoList = require('../public/javascripts/todoList');

/* GET todoList. */
router.get('/getTodoList', function(req, res, next) {
  res.send(todoList); 
});

module.exports = router;
