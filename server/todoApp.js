const express = require('express');

// 모든 미니앱마다 router라는 변수를 사용해야하나? 
const router = express.Router();


const todolist = require("./data/todolist.json");


// router로 요청이 들어왔을때 항상 실행되는 함수 
// router.use(function timeLog(req,res,next){
//   console.log('Time',Date.now())
//   next()
// })

// router 객체가 app 마냥 요청을 처리한다. 
router.get('/',function(req,res){
  res.send("todoApp home page")
})

router.get('/list',function(req,res){
  res.send(todolist)
})

module.exports = router