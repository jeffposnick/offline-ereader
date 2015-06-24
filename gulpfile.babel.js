import del from 'del';
import {exec} from 'child_process';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();
const SRC_DIR = 'src';
const DEV_DIR = 'dev';
const DIST_DIR = 'dist';
const JS_FILES_GLOB = `${SRC_DIR}/js/**/*.js`;

gulp.task('babel', () => {
  return gulp.src(JS_FILES_GLOB)
    .pipe($.babel())
    .pipe(gulp.dest(`${DEV_DIR}/js`));
});

gulp.task('bower', () => {
  return $.bower()
    .pipe(gulp.dest(DEV_DIR));
});

gulp.task('clean', callback => {
  del([DEV_DIR, DIST_DIR], callback);
});

gulp.task('watch', () => {
  gulp.watch('bower.json', ['bower']);
  gulp.watch(JS_FILES_GLOB, ['babel']);
});

gulp.task('serve:dev', ['watch'], callback => {
  exec('node_modules/http-server/bin/http-server dev -c-1', callback);
});

gulp.task('default', ['serve:dev']);
