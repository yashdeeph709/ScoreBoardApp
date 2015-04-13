var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var config = require('./config');
var championship = require('./models/championship');
var os = require('os');

if (os.hostname() == "Vengicx") {
    mongoose.connect(config.mongoUri);
} else {
    mongoose.connect(config.mongohUri);
}

router.post('/championship', function(req, res) {
    var newChampionship = new championship({
        "user": "default",
        "ChampionShip_Name": req.body.chamname,
        "organizer": req.body.organizer,
        "description": req.body.description,
        "overs": req.body.overs,
        "players": req.body.players,
        "config": req.body.config,
        "teams": [],
        "pointstable": [],
        "matchlist": []
    });
    newChampionship.save(function(err, data) {
        if (!err) {
            res.cookie('cid', "" + data._id, {
                maxAge: 150000,
                httpOnly: true
            });
            res.end();
        } else {
            res.write('error occured');
            res.end();
        }
    });
});

router.get('/championship', function(req, res) {
    championship.find({}, function(err, result) {
        res.json(result);
        res.end();
    });
});

router.post('/addTeam', function(req, res) {
        return championship.findById(req.cookies.cid, function(err, cham) {
                if (!err) {
                    var team = {
                        "id": req.body.id,
                        "teamname": req.body.teamname,
                        "players": []
                    };
                    cham.teams.push(team);
                    return cham.save(function(err) {
                        if (!err) {
                            console.log("updated");
                        } else {
                            console.log(err);
                        }
                        return res.send(cham);
                    });
                } else {
                    res.json({
                        "error": 1
                    })
                    res.end();
                }
        });
});

module.exports = router;