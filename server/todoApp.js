const express = require('express');
// 모듈로 분리하기 위해 router라는 변수를 만들고 
const router = express.Router();

// middleware that is specific to this router
// router로 요청이 들어왔을때 항상 실행되는 함수 
// router.use(function timeLog(req,res,next){
//   console.log('Time',Date.now())
//   next()
// })

// http://localhost:3001/heart
// router로 이 모듈을 다 처리하는듯하다. 
router.get('/',function(req,res){
  res.send("todoApp home page")
})

// http://localhost:3001/heart/about
router.get('/list',function(req,res){
  // send와 json 차이는 뭐지? 
  res.send({
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

module.exports = router