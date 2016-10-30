var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  gulp.src('scss/app.scss')
    .pipe(autoprefixer()
    )
    .pipe(sass({
      includePaths: ['scss']
    }))
    .pipe(gulp.dest('public/stylesheets'));
});



gulp.task('watch', ['sass'], function() {
  gulp.watch(["scss/*.scss"], ['sass']);
});
