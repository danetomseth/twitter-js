var express = require( 'express' );
var app = express(); // creates an instance of an express application

app.get('/', function(request, response) {
	response.send('posting...');
});
app.get('/news', function(request, response) {
	response.send('news...');
});

app.listen(3000);