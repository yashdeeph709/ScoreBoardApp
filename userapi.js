var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var signup = require('./models/signup');
var login = require('./models/login');
var mandrill = require('mandrill-api/mandrill');

mandrill_client = new mandrill.Mandrill('g0ztvmVrxFHb8--EWZA8Ag');
router.post('/user', function(req, res) {

    var verificationCode = Math.floor(Math.random() * 100000000);
    var newUser = new signup({
        "firstname": req.body.fname,
        "lastname": req.body.lname,
        "emailid": req.body.email,
        "password": req.body.password,
        "verify": verificationCode
    });
    var message = {
        "html": "<a href='http://127.0.0.1:5000/userapi/verify/" + verificationCode + "'>for activating your scoreboard account click here!</a></body><html>",
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
    mandrill_client.messages.send({
        "message": message,
    }, function(result) {
        console.log(result);
    }, function(e) {
        console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
    });

    newUser.save(function(err, data) {
        if (!err) {
            console.log(data);
            res.end();
        } else {
            console.log(err);
            res.end();
        }
    });
});

router.get('/verify/:code', function(req, res) {
        console.log('verification url called with '+req.params.code);
        signup.findOne({
                'verify': req.params.code
            }, function(err, data) {
               console.log(data); 
                if(!err){
                    var verify=new login({
                        'emailid':data.emailid,
                        'password':data.password
                    });
                    verify.save(function(err,data){
                        if(!err){
                            res.send("<h1>Verification Successful</h1>")
                        }else{
                            res.send("<h1>Verification error occured</h1>")
                        }
                    })
                } else {
                    console.log(err);
                }});
        });

    router.get('/user/:email/:password',function(req, res) {
        login.findOne({'emailid':req.params.email,'password':req.params.password},function(err,data){
            console.log("Errors:"+err+"/n Data:"+data);
            if(!err && data!=null){
            res.cookie('uid', ""+data._id, {
                maxAge: 10000,
                httpOnly: true
            });
                res.send({'success':1});
            }else{
                res.send({'success':0});
            }
        })
   
    });
    router.get('/logout',function(req,res){
        res.clearCookie('uid');
        res.clearCookie('cid')
        res.redirect('/');
    });
    module.exports = router;