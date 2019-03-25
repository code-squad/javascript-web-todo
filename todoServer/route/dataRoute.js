const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  const requestURL = '../public/task.json'
  req.open('GET', requestURL);
  console.log(req);
  res.set({
    'Access-Control-Allow-Origin':'*'
  })
  res.send(tasks);
});

module.exports = router;
