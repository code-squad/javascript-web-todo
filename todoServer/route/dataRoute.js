const express = require('express');
const jsonData = require('../public/task.json')
const router = express.Router();

router.get('/', (req, res, next) => { 
  res.set({
    'Access-Control-Allow-Origin':'*'
  })
  res.json(jsonData)
});

module.exports = router;
