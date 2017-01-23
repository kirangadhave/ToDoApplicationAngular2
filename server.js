var express 	= require('express'),
	app 		= express(),
	path		= require('path'),
	bodyParser	= require('body-parser');

// Configure PORT
let port = process.env.PORT || 8080;

// Set View Engine to pug
app.set('view engine', 'pug');

// Configure BodyParser
app.use(bodyParser.urlencoded({ extended: true })); 

// Set Views Directory
app.set('views', path.join(__dirname, "./Client"));
app.use('/dist', express.static(path.join(__dirname,'./Client/dist')));
app.use('/node_modules', express.static(path.join(__dirname,'./node_modules')));

// Import Routes
require('./Server/Routes/routes.js')(app);

app.listen(port, function(){
	console.log('Server spinned up on port ' + port);
});