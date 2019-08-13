const express = require("express");
const data = require("../data");

const router = express.Router();

router.get("/api/todos/", (req, res) => {
  res.send(data.todos);
  res.end();
});

module.exports = router;
