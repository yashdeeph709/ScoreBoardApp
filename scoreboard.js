var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Championship = require('./models/championship');
var jwt=require('jwt-simple');
var match=require('./models/match');
var overs;
router.get('/getTeams',function(req,res){
		if(!req.headers.authorization){
            console.log('authorization header not found in getTeams');
            return res.status(401).send({message:'Your not authorized'});
        }
        var token=req.headers.authorization;
        var payload=jwt.decode(token,'shh...');
   
        if(!payload.sub){
            return res.status(401).send({message:'you are not authorized to view'});
        }
        console.log(payload.sub)
        Championship.findOne({user:payload.sub},function(err,data){
        	if(!data){
                res.status(401).send({message:'you have no championship'})
            }else{
                overs=data.overs;
                res.send(data.teams);
            }
            res.end();
	    });
});

router.post('/startmatch',function(req,res){
      if(!req.headers.authorization){
            console.log('authorization header not found in run');
            return res.status(401).send({message:'Your not authorized'});
        }
        var token=req.headers.authorization;
        var payload=jwt.decode(token,'shh...');
        if(!payload.sub){
            return res.status(401).send({message:'you are not authorized to view'});
        }
        console.log(payload.sub);
        console.log(req.body);
        var newmatch=new match({
            MatchId:12,
            Team1:req.body.team1,
            Team2:req.body.team2,
            TotalOvers:overs,
            Inings:[{
                order:1,
                runrate:0,
                overs:0,
                boundaries:0,
                sixes:0,
                balls:[],
                wickets:[],
                batting:[{
                    Order:1,
                    Name:req.body.bat1,
                    Runs:0
                },{
                    Order:2,
                    Name:req.body.bat2,
                    Runs:0
                }],
                bowling:[{
                        Name:req.body.bowl,
                        Overs:0,
                        Wicket:0
                }]
            }]
        });
        newmatch.save(function(err){console.log(err)});
});
module.exports = router;