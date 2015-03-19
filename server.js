var express = require('express');
var app = express();
app.use(express.static('./'));
app.use('/partials',express.static(path.join(__dirname, '/partials')));
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

