var express = require('express');
var app = express();
var api=require('./api');
app.use(express.static('./public'));
app.use('/api', api);
app.get("*", function(req, res) {
    res.sendfile('public/index.html');
});
app.listen(3000);