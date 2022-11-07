const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');

function css() {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/styles'));
}

exports.css = css;
