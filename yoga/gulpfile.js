'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const concat = require('gulp-concat');

function defaultTask() {
    return gulp.src('./css/*.less')
        .pipe(less())
        .pipe(concat('all.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
}

exports.default = defaultTask;
exports.watch = function () {
    gulp.watch('./css/*.less', gulp.series('default'));
}