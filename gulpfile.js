'use strict';

var gulp = require('gulp');
var del = require('del');
var path = require('path');

var $ = require('gulp-load-plugins')();
var browserify = require('browserify');
var watchify = require('watchify');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var shell = require('gulp-shell');
var babelify = require('babelify');
var sourceFile = './app/scripts/app.js';
var destFolder = './dist/scripts';
var destFileName = 'app.js';

gulp.task('styles', function () {
    return $.rubySass('app/styles/main.scss', {
            style: 'expanded',
            precision: 10
        })
        .pipe(gulp.dest('dist/styles'))
        .pipe($.size());
});

gulp.task('scripts', function () {
    var bundler = watchify(
        browserify({
            entries: [sourceFile],
            insertGlobals: true,
            cache: {},
            packageCache: {},
            fullPaths: true
        }).transform(babelify)
    );

    bundler.on('update', rebundle);

    function rebundle() {
        return bundler.bundle()
            .pipe(source(destFileName))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(sourcemaps.write(destFolder))
            .pipe(gulp.dest(destFolder));
    }

    return rebundle();
});

gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(gulp.dest('dist'))
        .pipe($.size());
});

// update watch and clean when has fonts
gulp.task('fonts', function() {
    return gulp.src('app/fonts/*')
        .pipe(gulp.dest('dist/fonts'))
        .pipe($.size());
});

// update watch and clean when has images
gulp.task('images', function () {
    return gulp.src('app/images/**/*')
        .pipe(gulp.dest('dist/images'))
        .pipe($.size());
});

gulp.task('jest', function () {
    var nodeModules = path.resolve('./node_modules');
    return gulp.src('app/scripts/**/__tests__')
        .pipe($.jest({
            scriptPreprocessor: nodeModules + '/gulp-jest/preprocessor.js',
            unmockedModulePathPatterns: [nodeModules + '/react']
        }));
});

gulp.task('clean', function (cb) {
    cb(del.sync(['dist/styles', 'dist/scripts']));
});

gulp.task('bundle', ['styles', 'scripts'], function(){
    return gulp.src('./app/index.html')
               .pipe(gulp.dest('dist'));
});

gulp.task('server', function () {
    gulp.src('./dist')
        .pipe($.webserver({
            livereload: true,
            port: 9000
        }));
});

gulp.task('home', function() {
    gulp.src(".").pipe(shell(['open http://localhost:9000']));
});

gulp.task('build', ['html', 'bundle', 'images', 'fonts']);

gulp.task('default', ['clean', 'build', 'jest' ]);
