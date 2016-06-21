var gulp = require('gulp');
var sass = require('gulp-sass');
// var minify = require('gulp-minify-css');

// gulp.task('sass', function() {
//     gulp.src('./scss/**/*.scss')
//         .pipe(sass())
//         .pipe(concat('style.css'))
//         // .pipe(minify())
//         .pipe(gulp.dest('./www/css'));
// });


gulp.task('watch', function() {
  return gulp
    // Watch the input folder for change,
    // and run `sass` task when something happens
    .watch('./scss/**/*.scss', ['sass'])
    // When there is a change,
    // log a message in the console
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});
