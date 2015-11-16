var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	cssmin = require('gulp-cssmin'),
	del = require('del');
gulp.task('concat',function(){
	return gulp.src('src/*.css')
	.pipe(concat('app.css'))
	.pipe(gulp.dest('tmp'))	
});
gulp.task('cssmin',['concat'],function(){
	return gulp.src('tmp/app.css')
	.pipe(cssmin())
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('desq'));
});
gulp.task('del',['cssmin'],function(){
	return del('tmp');
});
gulp.task('default',['concat','cssmin','del']);
