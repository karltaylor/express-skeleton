const gulp = require('gulp')
const stylus = require('gulp-stylus')
const browserSync = require('browser-sync')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const autoprefixer = require('gulp-autoprefixer')
const reload = browserSync.reload

gulp.task('css', function () {
  gulp.src('app/assets/styl/index.styl')
    .pipe(stylus({
      compress: true,
      'include css': true
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('app/assets/dist'))
    .pipe(reload({stream: true}))
})

gulp.task('js', function () {
  return browserify('app/assets/js/index.js', { debug: true })
    .transform('babelify', {presets: 'es2015'})
    .bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(gulp.dest('app/assets/dist/'))
    .pipe(reload({stream: true}))
})

gulp.task('dev', ['css'], function () {
  browserSync.init({
    proxy: 'localhost:1336',
    port: 1337,
    open: false
  })
  gulp.watch('app/assets/styl/**/*.styl', ['css'])
  gulp.watch('app/assets/js/**/*.js', ['js'])
  gulp.watch('app/views/**/*.jade').on('change', reload)
})

gulp.task('serve', ['dev', 'js'])
