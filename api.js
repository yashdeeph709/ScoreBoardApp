var express=require('express');
var router=express.Router();
var mongoose=require('mongoose');
var config=require('./config');
var championship=require('./models/championship');
var os=require('os');

if(os.hostname()=="Vengicx"){
mongoose.connect(config.mongoUri);
}else{
mongoose.connect(config.mongohUri);
}

router.post('/createcship',function(req,res){
      var newChampionship=new championship({
        "user":"default",
        "ChampionShip_Name":req.body,
        "organizer":req.body.organizer,
        "description":req.body.description,
        "overs":req.body.overs,
        "players":req.body.players,
        "config":req.body.config,
        "teams":[],
        "pointstable":[],
        "matchlist":[]
        });
      newChampionship.save(function(err){console.log(err)});
});
router.post('/addTeam',function(req,res){
      championship.find({},function(err,result){
            res.write(JSON.stringify(result[0]));
            res.end();
      });
});
router.post('/addTeam',function(req,res){
      
});
router.post('/championships',function(req,res){
       var cursor=conn.collection('championships').find({});

});

module.exports=router;
