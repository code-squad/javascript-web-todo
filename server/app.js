// const 로 써도 되는것같은데 왜 var을 씀? -> 컨벤션? 
const express = require("express");
const cors = require('cors');
const app = express();

// process.env 라는게 있음 (기본 경로관련) 
const port = process.env.PORT || 3001;

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
        "title": "서버코드 작성하기",
        "id": 1234,
        "status": "todo"
      },
      {
        "title": "라우터 404, 스위치 처리하기",
        "id": 1230,
        "status": "todo"
      },
      {
        "title": "step20 테스트코드",
        "id": 1231,
        "status": "todo"
      }
    ]
  }
  );

})
app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});