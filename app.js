var express = require( 'express' );
var swig = require('swig');
var app = express(); // creates an instance of an express application
debugger;


// app.use('/special/',function(request, response) {
// 	console.log('special');
	
// });

app.use(function(request, response, next) {
	console.log(request.method + request.url);
	next();
});



app.get('/', function(request, response) {
	response.send('directory');
});
app.get('/news', function(request, response) {
	response.send('news');
});
app.get('/test', function(request, response) {
	response.send('this is a test');
});

app.get('/special', function(request, response) {
	response.send('this is a test');
});

app.get('/special/test', function(request, response) {
	response.send('this is a special test');
});

app.listen(3000);