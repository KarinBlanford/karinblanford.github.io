var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
// var minify = require('gulp-minify-css');

gulp.task('sass', function() {
    gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(concat('style.css'))
        // .pipe(minify())
        .pipe(gulp.dest('./www/css'));
});
