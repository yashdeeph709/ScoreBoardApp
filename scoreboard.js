var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var championship = require('./models/championship');
var jwt=require('jwt-simple');

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
        championship.findOne({user:payload.sub},function(err,data){
        	if(!data){
                res.status(401).send({message:'you have no championship'})
            }else{
                res.send(data.teams);
            }
            res.end();
	    });
});

module.exports = router;