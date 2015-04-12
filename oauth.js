var express=require('express');
var router=express.Router();
var request = require('request');

router.post('/auth/google', function(req, res) {
    var url = "https://accounts.google.com/o/oauth2/token";
    var apiUrl = "https://www.googleapis.com/plus/v1/people/me/openIdConnect";
    var params = {
        client_id: req.body.client_id,
        redirect_uri: req.body.redirectUri,
        code: req.body.code,
        grant_type: 'authorization_code',
        client_secret: 'tFj9o49HLVyZuRog-wjODIua'
    };
    request.post(url, {
        json: true,
        form: params
    }, function(err, response, token) {
        if (!err) {
            var accessToken = token.access_token;
            var headers = {
                Authorization: 'Bearer ' + accessToken
            }
            request.get({
                url: apiUrl,
                headers: headers,
                json: true
            }, function(err, response, profile) {
                if (err) {
                    console.log(err);
                } else {

                	console.log(profile);
                }
            });
        } else {
            console.log(err);
        }
    });
});

module.exports=router;
