var gulp = require('gulp');
var minify = require('gulp-minify');


gulp.task('build', function () {
    gulp.src('L.Control.Basemaps.js')
        .pipe(minify({noSource: true}))
        .pipe(gulp.dest('./'))
});

gulp.task('watch', function () {
    gulp.watch('L.Control.Basemaps.js', ['build']);
});

gulp.task('default', ['build', 'watch']);


