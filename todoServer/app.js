const express = require('express');
const app = express();
const router = require('./route/dataRoute');

app.use(express.static('public'));
app.use(router);

const dataRouter = require('./route/dataRoute');
console.log(dataRouter);
app.use('/*', dataRouter);

// app.listen(process.env.PORT, () => {
//     console.log(`Start server on port ${process.env.PORT}!!`);
// });
app.listen(3000, () => {
    console.log(`Start server on port ${3000}!!`);
});