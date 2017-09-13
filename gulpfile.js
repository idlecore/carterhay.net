/**
  * @Author Carter Hay 
  * 
 **/

const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug2');
const htmlmin = require('gulp-htmlmin');
const cleancss = require('gulp-clean-css');


gulp.task('sass', function() {
  return gulp.src('./src/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleancss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./build/css'));
});


gulp.task('js', function() {
  return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./build/js'));
});


gulp.task('pug', function() {
  return gulp.src('./src/html/*.pug')
    .pipe(pug({}))
    .pipe(htmlmin({collapseWhitespace:true}))
    .pipe(gulp.dest('./build'));
});

gulp.task('img', function() {
  return gulp.src('./src/img/*')
    .pipe(gulp.dest('./build/img'));
});


gulp.task('default', function() {
  gulp.start('js');
  gulp.start('sass');
  gulp.start('pug');
  gulp.start('img');
})

