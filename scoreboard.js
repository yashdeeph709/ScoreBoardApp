var express = require('express');
var router = express.Router();
var Championship = require('./models/championship');
var jwt = require('jwt-simple');
var authorize = require('./authorizeModule');
var match = require('./models/match');
var strike=true,totalover;

router.get('/getTeams', function(req, res) {
    var payload = authorize(req, res);
//    console.log(payload.sub)
    Championship.findOne({
        user: payload.sub
    }, function(err, data) {
        if (!data) {
            return res.status(401).send({      message: 'you have no championship'    });
        } else {
            totalover=data.overs;
            res.status(200).send(data.teams);
        }
        res.end();
    });
});

router.post('/startmatch', function(req, res) {
    var payload = authorize(req, res);
    if (req.body.team1 === req.body.team2) {
        return res.status(401).send({
            message: 'Pls select two different teams'
        });
    }
    if (req.body.bat1 === req.body.bat2) {
        return res.status(401).send({
            message: 'Pls select two different batsmans'
        });
    }
    if (req.body.bat1 == "" || req.body.bat2 == "" || req.body.team1 == "" || req.body.team2 == "") {
        return res.status(401).send({
            message: 'Pls choose all fields'
        });
    }
    var second=req.body.tossWinner===req.body.team1?req.body.team2:req.body.team1;
    var overs;

    Championship.findOne({
        user: payload.sub
    }, function(err, data) {
        if(err) return res.status(401).send({message:"data over found"+data.overs})
        overs=data.overs;
    });
//    console.log(overs+"is no of overs")
    var newmatch = new match({
        Completed: 0,
        UserId: payload.sub,
        IningNumber:0,
        Team1: req.body.tossWinner,
        Team2: second,
        Winner:"",
        overs: overs | totalover,
        Inings: [{
            team:req.body.tossWinner,
            runrate: 0,
            runs: 0,
            overs: {
                over: 0,
                ball: 1
            },
            boundaries: 0,
            sixes: 0,
//            balls: [],
            wickets: [],
            batting: [{
                Name: req.body.bat1,
                Runs: 0
            }, {
                Name: req.body.bat2,
                Runs: 0
            }],
            bowling: [{
                Name: req.body.bowl,
                Overs: 0,
                Wicket: 0
            }]
        }]
    });
    newmatch.save(function(err) {
        if (!err) {
            return res.status(200).send({
                message: 'Done',
                matchid:newmatch._id
            });
        } else {
            console.log(err)
        }
    });
});

router.post('/run', function(req, res) {
        var payload = authorize(req, res);
        var runs = req.body.run,extra;
        match.findOne({"_id":req.body.matchid}, function(err, match) {
        if(err) return res.status(401).send({"message":err});
        if(err) return res.status(401).send({"message":err});

        if(match.IningNumber>1){
            return res.status(200).send({
                    'MatchOver':true          
            });
        }

        //match completion logic
        if(match.IningNumber==1 && match.Inings[match.IningNumber].overs.over === match.overs){
                match.Completed=1;
                if(match.Inings[0].runs==match.Inings[1].runs){
                    match.Winner="Draw";
                }
                if(match.Inings[0].runs>match.Inings[1].runs){
                    match.Winner=match.Team1;
                }
                if(match.Inings[0].runs<match.Inings[1].runs){
                    match.Winner=match.Team2;
                }
                
                match.save(function(err){console.log(err)});
                Championship.findOne({'user':payload.sub},function(err,cham){
                    cham.matchlist.push({
                    date:new Date().getDate()+"/"+new Date().getMonth()+"/"+new Date().getFullYear(),
                    team1:match.Team1,
                    team2:match.Team2,
                    winner:match.Winner
                });
                cham.save(function(err){console.log(err)});
                });
                return res.status(200).send({    'MatchOver':true          });
        }

        //Ining Completion logic
        if(match.Inings[match.IningNumber].overs.over === match.overs) {
            match.IningNumber++;
            match.save(function(err){});
            return res.status(200).send({'IningOver': match.IningNumber});
        }

        //boundary calculation logic
        if(req.body.run===4){
            match.Inings[match.IningNumber].boundaries++;
        }
        //sixes calculation logic
        if(req.body.run===6){
            match.Inings[match.IningNumber].sixes++;
        }
        //strike change logic
        if(req.body.run===1 ||req.body.run===3){
            strike?strike=false:strike=true;
        }
        //overstrike change
        if(match.Inings[match.IningNumber].overs.ball===5){
            strike?strike=false:strike=true;   
        }
        //over logic
        if(match.Inings[match.IningNumber].overs.ball===5){
            match.Inings[match.IningNumber].bowling[match.Inings[match.IningNumber].bowling.length-1].Overs++;
        }
        //extra calculation logic
        if (req.body.extra == 'wide' || req.body.extra == 'noob') {
            runs += 1;
            extra = 1;
        }
        //batsman run calculation
        if(strike==true){
            match.Inings[match.IningNumber].batting[match.Inings[match.IningNumber].batting.length-2].Runs+=req.body.run;
        }else{
            match.Inings[match.IningNumber].batting[match.Inings[match.IningNumber].batting.length-1].Runs+=req.body.run;
        }
/*        var ball = {
            run: req.body.run,
            extra: extra
        }
*/
//        match.Inings[match.IningNumber].balls.push(ball);

        match.Inings[match.IningNumber].runs += runs;

        if (match.Inings[match.IningNumber].overs.ball == 5) {
            match.Inings[match.IningNumber].overs.over += 1;
            match.Inings[match.IningNumber].overs.ball = 0;
        } else {
            if (req.body.extra == "") match.Inings[match.IningNumber].overs.ball += 1;
        }



        match.save(function(err) {
            if (err) return res.status(401).send({
                message: "error occured" + err
            });
            match.Inings[match.IningNumber].strike=strike;
            res.send(match);
            res.end();
        });
    });
});

router.post('/startsecond',function(req,res){
    if(req.body.bat1==null || req.body.bat2==null || req.body.bowl==null){
        return res.status(401).send({message:"You haven't selected one of the field"})
    }
    match.findOne({"_id":req.body.matchid},function(err,match){
        match.Inings.push({
            team:match.Team2,
            runrate: 0,
            runs: 0,
            overs: {
                over: 0,
                ball: 1
            },
            boundaries: 0,
            sixes: 0,
            balls: [],
            wickets: [],
            batting: [{
                Name: req.body.bat1,
                Runs: 0
            },{
                Name: req.body.bat2,
                Runs: 0
            }],
            bowling: [{
                    Name:req.body.bowl,
                    Overs:0,
                    Wicket:0   
            }]
            });
        match.save(function(err){
            if(err) return res.status(401).send({message:"match ining not saved"})
        });
        res.status(200).send({message:"Ok done"})
    });
});

router.post('/getPlayers',function(req,res){
    var resdata={};
    var payload = authorize(req, res);
    match.findOne({"_id":req.body.matchid},function(err,match){
        Championship.findOne({"user":payload.sub},{teams:true,"teams.players.pname":true},function(err,cham){
            if(err) return res.status(401).send("err occured"+err);
            if(!cham) return res.status(401).send("cham doen't exits");
            for(i=0;i<cham.teams.length;i++){
                if(cham.teams[i].teamname==match.Team2 && req.body.team==2){
                    resdata=cham.teams[i].players;
                }
                if(cham.teams[i].teamname==match.Team1 && req.body.team==1){
                    resdata=cham.teams[i].players;
                }
            }
            res.json(resdata);
        });
    })
});

router.post('/wicket',function(req,res){
    var payload = authorize(req, res);
    match.findOne({"_id":req.body.matchid},function(err,mat){
        if(!mat) return res.status(401).send("you have no match");
        mat.Inings[mat.IningNumber].batting.push({
            Name: req.body.nextMan,
            Runs: 0
        }); 
        mat.Inings[mat.IningNumber].bowling[mat.Inings[mat.IningNumber].bowling.length-1].Wicket++;
            mat.save(function(err){
            if(!err){
                res.send({wicket:"done"});
            }
        });
    });
});

module.exports = router;