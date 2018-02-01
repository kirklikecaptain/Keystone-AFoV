var gulp = require('gulp');
var livereload = require('gulp-livereload');

livereload({ start: true })

gulp.task('default', function () {
  livereload.listen(3000);
  gulp.watch(['public/styles/**/*.scss', 'templates/views/**/*.hbs'])
  .on('change', livereload.changed);
});
