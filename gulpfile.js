const gulp = require('gulp'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    babili = require('gulp-babili');

gulp.task('default', () =>
    gulp.src('./js/main.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(babili({
            mangle: {
                keepClassName: true
            }
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist'))
);