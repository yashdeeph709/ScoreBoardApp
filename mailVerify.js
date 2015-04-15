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
