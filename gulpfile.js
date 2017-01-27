const fs = require('fs')
const gulp = require('gulp')
const plugins = require('gulp-load-plugins')()
const $ = require('./gulpfile.config')

gulp.task('build', ['build:html', 'build:js', 'build:tsx'])

gulp.task('build:html', () => {
    gulp.src($.sources.html)
        .pipe(plugins.debug($.debug.html))
        .pipe(plugins.wiredep($.wiredep))
        .pipe(gulp.dest($.destination.public))
})

gulp.task('build:js', () => {
    gulp.src($.sources.js)
        .pipe(plugins.debug($.debug.js))
        .pipe(gulp.dest($.destination.server))
})

gulp.task('build:tsx', () => {
    gulp.src($.sources.tsx)
        .pipe(plugins.debug($.debug.tsx))
        .pipe(plugins.webpack($.webpack))
        .pipe(gulp.dest($.destination.components))
})

gulp.task('run', ['build'], () => {
    gulp.src($.destination.public)
        .pipe(plugins.webserver($.webserver))
})

gulp.task('default', ['build'])