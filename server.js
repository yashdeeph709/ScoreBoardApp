var express = require('express');
var app = express();
var api=require('./api');
var oauth=require('./oauth');
var bodyParser = require('body-parser');
var cookie=require('cookie-parser');
var userapi=require('./userapi');
var os=require('os');

app.set('port', (process.env.PORT || 5000));
/* middlewares used */
app.use(bodyParser.json());
app.use(cookie());
app.use(express.static('./public'));
app.use('/partials', express.static(__dirname + './partials'));

/* api paths */
app.use('/api',api);
app.use('/userapi',userapi);
app.use('/o',oauth);

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});