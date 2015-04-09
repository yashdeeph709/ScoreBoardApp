var express = require('express');
var app = express();
//var api=require('api')

app.set('port', (process.env.PORT || 5000));

app.use('/',express.static('./public'));
app.use('/partials',express.static(__dirname+'./partials'));
//app.use('/api',api);	

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

