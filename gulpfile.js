var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	ts = require('gulp-typescript'),
	tsProject = ts.createProject('./tsconfig.json'),
	path = require('path');

var js_source = "./Client/src/js/**/*.js";
var ts_source = "./Client/src/app/**/*.ts";
var css_source = "./Client/src/css/main.styl";
var dist = "./Client/dist";

var logger = function(error) {
	console.log('-----------------------------');
	console.log('Error logged.');
	console.log(error);
	console.log('-----------------------------');
}

gulp.task('default', function(){
	gulp.watch(css_source, ['compile-css']);
	gulp.watch(ts_source, ['ts-compile']);
	gulp.watch(js_source, ['js-copy']);
});

gulp.task('compile-css', function(){
	gulp.src(css_source)
		.pipe(stylus())
		.on('error', logger)
		.pipe(gulp.dest(dist));
});

gulp.task('js-copy', function(){
	gulp.src(js_source)
		.pipe(gulp.dest(dist));
})

gulp.task('ts-compile', function(){
	gulp.src(ts_source)
		.pipe(tsProject())
		.pipe(gulp.dest(dist))
});