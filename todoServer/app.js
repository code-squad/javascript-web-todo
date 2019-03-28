const express = require('express');
const app = express();

app.use(express.static('public'));

const dataRoute = require('./route/dataRoute');

app.use('/*', dataRoute);

app.listen(process.env.PORT, () => {
    console.log(`Start server on port ${process.env.PORT}!!`);
});