'use strict';

import del from 'del';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import sequence from 'run-sequence';
import {exec} from 'child_process';

const $ = gulpLoadPlugins();

const SRC_DIR = 'src';
const DEV_DIR = 'dev';
const DIST_DIR = 'dist';
const JS_FILES_GLOB = `${SRC_DIR}/js/**/*.js`;
const SRC_FILES_GLOBS = [`${SRC_DIR}/!(js)/**/*`, `${SRC_DIR}/*.*`];

gulp.task('babel', () => {
  return gulp.src(JS_FILES_GLOB)
    .pipe($.babel())
    .pipe(gulp.dest(`${DEV_DIR}/js`));
});

gulp.task('bower', callback => {
  exec('bower install', callback);
});

gulp.task('build', callback => {
  sequence(['bower', 'babel', 'copy-src-files'], 'watch', callback);
});

gulp.task('clean', callback => {
  del([DEV_DIR, DIST_DIR], callback);
});

gulp.task('copy-src-files', () => {
  return gulp.src(SRC_FILES_GLOBS)
    .pipe(gulp.dest(DEV_DIR));
});

gulp.task('default', ['serve:dev']);

gulp.task('serve:dev', ['build'], callback => {
  exec('node_modules/http-server/bin/http-server dev -c-1', callback);
});

gulp.task('watch', () => {
  gulp.watch('bower.json', ['bower']);
  gulp.watch(JS_FILES_GLOB, ['babel']);
  gulp.watch(SRC_FILES_GLOBS, ['copy-src-files']);
});
