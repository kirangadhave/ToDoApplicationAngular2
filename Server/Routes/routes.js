module.exports = function(app) {

	require('./homeRoutes.js')(app);
	require('./taskRoutes.js')(app);

}