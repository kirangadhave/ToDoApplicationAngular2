module.exports = function(app){

	// Adding new task
	app.post('/tasks/add', function(req, res){
		res.send(req.body);
	})

}