const express = require("express");
const router = require("./router/index");

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use("/", router);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
