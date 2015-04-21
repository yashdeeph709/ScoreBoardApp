var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var signup = require('./models/signup');
var login = require('./models/login');
var mandrill = require('mandrill-api/mandrill');
var bcrypt=require('bcrypt-nodejs');
var jwt = require('jwt-simple');

mandrill_client = new mandrill.Mandrill('g0ztvmVrxFHb8--EWZA8Ag');

router.post('/register', function(req, res) {
    var verificationCode = Math.floor(Math.random() * 100000000);
    var newUser = new signup({
        "firstname": req.body.fname,
        "lastname": req.body.lname,
        "emailid": req.body.email,
        "password": req.body.password,
        "verify": verificationCode
    });
    sendMailForVerification(req.body,verificationCode);
    newUser.save(function(err){createSendToken(newUser,req,res);});
});

router.post('/login', function(req, res) {
    var user = {emailid: req.body.emailid};
    console.log(user);
    login.findOne(user, function(err, userlogged) {
        if(err){ throw err}
        
        if(!userlogged){
            console.log('user not exit'+userlogged);
            return res.status(401).send({message:'Email Doesnt exists'});
        }
        userlogged.comparePasswords(req.body.password,function(err,isMatch){
            if(err){ throw err }
            if(!isMatch){ return res.status(401).send({message:'Wrong email/password'}); }
            createSendToken(userlogged,req,res);
        });

    });
});

router.get('/verify/:code', function(req, res) {
    console.log('verification url called with ' + req.params.code);
    signup.findOne({
        'verify': req.params.code
    }, function(err, data) {
        if (!err) {
            var verify = new login({
                'emailid': data.emailid,
                'password': data.password
            });
            verify.save(function(err, data) {
                if (!err) {
                    res.send("<h1>Verification Successful</h1>")
                } else {
                    res.send("<h1>Verification error occured</h1>")
                }
            })
        }
    });
});

function createSendToken(user,req,res){
    var payload = {iss: req.hostname,sub: user.id};
    var token = jwt.encode(payload, "shh...");
    res.status(200).send({
            user: user.emailid,
            token: token
    }); 
}

function sendMailForVerification(user,verificationCode){
var message = {
        "html": "<a href='http://scoreboardv.heroku.com/userapi/changePassword/" + verificationCode + "'>for activating your scoreboard account click here!</a></body><html>",
        "subject": "Scoreboard Password reset Mail!",
        "from_email": "yashdeeph709@gmail.com",
        "from_name": "Yashdeep Hinge",
        "to": [{"email": user.emailid,"name": user.fname,"type": "to"}],
        "headers": {"Reply-To": "yashdeeph709@gmail.com"}
    };
    mandrill_client.messages.send({"message": message},function(result) {
        console.log(result);}, function(e) {
        console.log(e.name + ' - ' + e.message);
    });
}

module.exports = router;