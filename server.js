var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(
    serveStatic("../angularjs")
).listen(process.env.PORT || 5000);