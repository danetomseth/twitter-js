var express = require( 'express' );
var app = express();
var swig = require('swig');

swig.setDefaults({ cache: false });


// app.use('/special/',function(request, response) {
// 	console.log('special');
	
// });


var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

// swig.renderFile(__dirname + '/views/index.html', locals, function (err, output) {
//     console.log(output);
// });

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(function(request, response, next) {
	console.log(request.method + request.url);
	next();
});

app.get('/', function(request, response) {
	response.render('index',locals);
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