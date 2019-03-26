const express = require('express');
const jsonData = require('../public/task.json')
const router = express.Router();

router.get('/', (req, res, next) => { 
  res.json(jsonData)
});

module.exports = router;
