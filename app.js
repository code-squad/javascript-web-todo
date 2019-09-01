const express = require("express");
const app = express();
const logger = require("morgan");
const cors = require("cors");
const initialData = require("./resource/localData");

const port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.static("dist"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res, next) => {
  res.render("index.html");
});

app.get("/todos", (req, res, next) => {
  setTimeout(() => {
    res.json(initialData);
  }, 1000);
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`);
});
