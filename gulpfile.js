'use strict';

var gulp = require('gulp');
var Sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync');

gulp.task('Sass', function() {
	return gulp.src('./public/scss/**/*.scss')
	.pipe(Sass().on('error', Sass.logError))
	.pipe(gulp.dest('./public/css'));
});

gulp.task('Sass:watch', function() {
	gulp.watch('./public/scss/**/*.scss', ['Sass']);
});

gulp.task('browser-sync', function() {
	browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./public/**/*.html").on("change", browserSync.reload);
  gulp.watch("./public/**/*.css").on("change", browserSync.reload);
  gulp.watch("./public/**/*.js").on("change", browserSync.reload);
  gulp.watch("./public/scss/**/*.scss").on("change", browserSync.reload);
});