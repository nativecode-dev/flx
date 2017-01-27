const gulp = require('gulp')
const plugins = require('gulp-load-plugins')()
const $ = require('./gulpfile.config')

gulp.task('build', ['build:html', 'build:tsx'])

gulp.task('build:html', () => {
    return gulp.src($.sources.html)
        .pipe(plugins.wiredep($.wiredep))
        .pipe(gulp.dest($.destination.public))
})

gulp.task('build:tsx', ['build:html'], () => {
    return gulp.src($.sources.tsx)
        .pipe(plugins.webpack($.webpack))
        .pipe(gulp.dest($.destination.components))
})

gulp.task('default', ['build'])