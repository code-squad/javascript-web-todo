var express = require("express");
var cors = require('cors');
var app = express();

app.use(cors({
  origin: 'http://localhost:8080'
}));

app.get("/todolist",(req,res,next)=>{
  res.json({
    "statusCode": 200,
    "body": [
      {
        "title": "로컬서버 웹팩에서 데이터 받아오기",
        "id": 1233,
        "status": "todo"
      },
      {
        "title": "스터디준비",
        "id": 1234,
        "status": "todo"
      },
      {
        "title": "알고리즘공부",
        "id": 1230,
        "status": "todo"
      },
      {
        "title": "컴퓨터게임",
        "id": 1231,
        "status": "todo"
      }
    ]
  }
  );

})
app.listen(3000, () => {
 console.log("Server running on port 3000");
});