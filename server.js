var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(
    serveStatic("public/")
).listen(process.env.PORT || 5000);