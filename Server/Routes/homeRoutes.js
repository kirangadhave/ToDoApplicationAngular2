module.exports = function(app) {

	// Handle basic Get request
	app.get('/', function(req, res){
		res.render('index');
	});

}