var express = require('express');
var app = express();

app.set('port', (8080));

app.use(express.static(__dirname + '/dist'));

app.get('/', function(request, response) {
  response.sendfile('src/dist/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
