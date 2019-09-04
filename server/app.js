// const 로 써도 되는것같은데 왜 var을 씀? -> 컨벤션? 
const express = require("express");
const cors = require('cors');
const app = express();
const todoApp = require('./todoApp')

// process.env 라는게 있음 (기본 경로관련) 
const port = process.env.PORT || 3001;

// cors 미들웨어 사용하지 않고, header에 Access-Control-Allow-Origin: * 넣어서도 해결할 수 있음.
app.use(cors({
  origin: 'http://localhost:8080'
}));

app.use('/todoApp',todoApp)

app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});