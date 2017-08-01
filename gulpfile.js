/*
+-----------+---------------------------------------------------------------------+
|   Tasks   |                             Description                             |
+-----------+---------------------------------------------------------------------+
| “scripts” | Task fired when there’s a change in the js file.                    |
| “deploy”  | Deploy to production                                                |
| “watch”   | Watches for changes in the js files                                 |
| "default" | Tell gulp to first fire the scripts task and then to start watching |
| "sass"    | compile scss to css                                                 |
+-----------+---------------------------------------------------------------------+
 */


// declarations, dependencies
// ----------------------------------------------------------------------------
let gulp            = require('gulp'),
    browserify      = require('browserify'),
    source          = require('vinyl-source-stream'),
    gutil           = require('gulp-util'),
    babelify        = require('babelify'),
    sass            = require('gulp-sass'),
    filter          = require('gulp-filter'),
    autoprefixer    = require('gulp-autoprefixer'),
    sourcemaps      = require('gulp-sourcemaps'),
    plumber         = require('gulp-plumber'),
    merge           = require('merge-stream'),
    concat          = require('gulp-concat'),
    rename          = require('gulp-rename');

// dependencies
let dependencies = [
    'react',
    'react-dom'
];
// keep a count of the times a task refires
let scriptsCount = 0;

// Gulp tasks
// ----------------------------------------------------------------------------
gulp.task('scripts',function() {
    bundleApp(false);
});

gulp.task('deploy',function() {
    bundleApp(true);
});

gulp.task('watch',function() {
    gulp.watch(['./app/*.js'],['scripts']);
    gulp.watch(['./app/sass/*.scss'],['sass']);
});

gulp.task('default',['scripts','watch','sass']);

gulp.task('sass', function() {
    let sassStream;

    sassStream = gulp.src('app/sass/**/*.scss')
        .pipe(sass({
            errLogToConsole: true
        }));
    return merge(sassStream)
        .pipe(concat('app.css'))
        .pipe(gulp.dest('web/css/'));
});

// Private Functions
// ----------------------------------------------------------------------------
function bundleApp(isProduction) {
    scriptsCount++;

    // bundle all js files together in a sinle one and let use modules in frontend
    let appBundler = browserify({
        entries: './app/app.js',
        debug: true
    });


    // create separate vendors.js on first running so dont need to react everytime
    if(!isProduction && scriptsCount === 1){
        browserify({
            require: dependencies,
            debug: true
        })
            .bundle()
            .on('error', gutil.log)
            .pipe(source('vendors.js'))
            .pipe(gulp.dest('./web/js/'));
    }

    // make external dependencies to avoid get bundled by app bundler, once this dependencies are alreadt bundled for dev env
    if(!isProduction){
        dependencies.forEach(function(dep){
            appBundler.external(dep);
        })
    }

    // generatr ES5 from ES6 and JSX
    appBundler
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .on('error',gutil.log)
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./web/js/'));
}
