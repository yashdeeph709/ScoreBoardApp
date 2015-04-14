var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var signup = require('./models/signup');
var login  = require('./models/login');
var mandrill=require('mandrill-api/mandrill');

mandrill_client = new mandrill.Mandrill('g0ztvmVrxFHb8--EWZA8Ag');
router.post('/user', function(req, res) {
    var verificationCode=Math.floor(Math.random()*100000000);
    var newUser = new signup({
        "firstname":req.body.fname,
        "lastname":req.body.lname,
        "emailid":req.body.email,
        "password":req.body.password,
        "validation":verificationCode
    });
        var message = {
        "html": "<a href='http://scoreboardv.herokuapp.com/userapi/verify/"+verificationCode+"'>for activating your scoreboard account click here!</a></body><html>",
        "subject": "Scoreboard Email ID verification Mail!",
        "from_email": "yashdeeph709@gmail.com",
        "from_name": "Yashdeep Hinge",
        "to": [{
                "email": req.body.email,
                "name": req.body.fname,
                "type": "to"
            }],
        "headers": {
            "Reply-To": "noreply@example.com"
        }
    };
    mandrill_client.messages.send({"message": message, "async": async, "ip_pool": ip_pool}, function(result) {
        console.log(result);
    }, function(e) {
        console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
    });

    newUser.save(function(err, data) {
        if (!err) {
            res.cookie('uid', "" + data._id, {
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

router.get('/verify/:verificationCode',function(req,res){

});

router.get('/user',function(req,res){
    var login=new login({
        "email":req.body.email,
        "password":req.body.password
    });
});

module.exports = router;