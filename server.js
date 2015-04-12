var express = require('express');
var app = express();
var api=require('./api');
var oauth=require('./oauth');
var bodyParser = require('body-parser');
var os=require('os');

console.log(os.hostname());
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());
app.use(express.static('./public'));
app.use('/partials', express.static(__dirname + './partials'));
app.use('/api',api);
app.use('/o',oauth);

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});