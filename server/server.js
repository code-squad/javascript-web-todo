const express = require('express')
const app = express()
const port = 8000
const data = require('./data.json');

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.get('/', (req, res) => res.json(data))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))