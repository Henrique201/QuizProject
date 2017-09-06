var app = require('./config/server.js');
var port = 3000;
app.listen(port,function(){
 console.log('server listen port' + port);
});
