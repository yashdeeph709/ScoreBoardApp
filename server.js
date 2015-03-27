var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use('/',express.static('./public'));
app.use('/partials',express.static(__dirname+'./partials'));

app.get('/championship',function(req,res){
//show championship status and create a new one
});
app.get('/score',function(req,res){
//show score and submit score
});
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

