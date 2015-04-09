var express=require('express');
var router=express.Router();
var mongoClient=require('mongodb').MongoClient;

var url="mongodb://localhost:27017/scoreboard";

mongoClient.connect(url,function(err,db){
	if(err==null){
		console.log("db connected");
	}else{
		console.log("db err");
	}
});

router.get('/',function(req,res){

});
router.get('/Champioship',function(req,res){

});
router.get('/Champioship',function(){

});
router.get('/Champioship',function(){

});
router.get('/Champioship',function(){

});
router.get('/Champioship',function(){

});

module.exports=router;
