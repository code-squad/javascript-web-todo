const express = require('express');
// 모듈로 분리하기 위해 router라는 변수를 만들고 
const router = express.Router();
// fs로 읽는것의 2가지 장점. require은 동기적으로 읽어옴, 이렇게 지정한 파일은 Json밖에 못읽음 , 근데 귀찮음
// https://stackabuse.com/reading-and-writing-json-files-with-node-js/

const todolist = require("./data/todolist.json");

// const fs = require('fs');

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
  //// console.log(todolist); 로 json객체 넘어오는것 확인
  res.send(todolist)

})

module.exports = router