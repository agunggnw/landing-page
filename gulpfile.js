var gulp = require('gulp');
var minJS = require('gulp-uglify');
var minCSS = require('gulp-minify-css');
var es = require('event-stream');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var ver = require('gulp-rev');
var watch = require('gulp-watch');

gulp.task('dev', function(cb) {
    return es.concat(
        // gulp.src('./prebuild/assets/css/*.css')
        //     .pipe(concat('app.css'))
        //     .pipe(rename('pre.min.css'))
        //     .pipe(minCSS())
        //     .pipe(gulp.dest('public/css')),

        // gulp.src('./prebuild/assets/js/*.js')
        //     .pipe(concat('app.js'))
        //     .pipe(rename('pre.min.js'))
        //     .pipe(minJS())
        //     .pipe(gulp.dest('public/js')),
        watch('./public/css/pre.min.css')
            .pipe(rename('app.min.css'))
            .pipe(gulp.dest('./public/css'))
    );
});

gulp.task('build', function(cb) {
    return es.concat(
        gulp.src('./public/css/*.css')
            .pipe(concat('app.css'))
            .pipe(rename('app.min.css'))
            .pipe(minCSS())
            .pipe(ver())
            .pipe(gulp.dest('public/css')),

        gulp.src('./public/js/*.js')
            .pipe(concat('app.js'))
            .pipe(rename('app.min.js'))
            .pipe(ver())
            .pipe(minJS())
            .pipe(gulp.dest('public/js'))
    );
});