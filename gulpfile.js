'use strict'

var gulp = require('gulp');
var paths = {
  src: './src/**/*',
  des: './template',
  kss_src: ['./node_modules/kss/lib/template/public/kss.js'],
  kss_des: './template/public'
}

gulp.task('make', function() {
  gulp.src(paths.src)
  .pipe(gulp.dest(paths.des));
});

gulp.task('copy_kss', function() {
  gulp.src(paths.kss_src)
  .pipe(gulp.dest(paths.kss_des));
});

gulp.task('watch', function() {
  gulp.watch(paths.src, ['default']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['copy_kss', 'make']);

