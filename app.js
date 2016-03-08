var express = require( 'express' );
var app = express();
var swig = require('swig');
var routes = require('./routes/');

swig.setDefaults({ cache: false });

var locals = {
    title: 'Twitter Template',
    tagName: [
        { name: 'tag1'},
        { name: 'tag2' },
        { name: 'tag3'}
    ]
};



app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use('/', routes);




app.use(function(request, response, next) {
	console.log(request.method + request.url);
	next();
});
app.get('/', function(request, response) {
	//response.render('index',locals);
	//response.render( 'index', {title: 'Hall of Fame', people: people} );
	response.render('index', locals);
});
app.listen(3000);