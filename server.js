var express = require('express');
var app = express();
var api=require('./api');
var bodyParser = require('body-parser');
var userapi=require('./userapi');
var match=require('./scoreboard')


app.set('port', (process.env.PORT || 5000));
/* middlewares used */
app.use(bodyParser.json());
app.use(express.static('./public'));
app.use('/partials', express.static(__dirname + './partials'));
app.use('/js/services', express.static(__dirname + './js/services'));

app.use(function(req,res,next){

	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers','Content-Type,Authorization');
	next();
});
/* api paths */
app.use('/api',api);
app.use('/userapi',userapi);
app.use('/match',match);


app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});