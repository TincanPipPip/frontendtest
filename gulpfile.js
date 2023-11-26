const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const minifyJS = require('gulp-uglify');
const concat = require('gulp-concat');

// Task to compile SCSS to CSS
gulp.task('compile-scss', () => {
  return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// Task to minify CSS
gulp.task('minify-css', () => {
  return gulp.src('dist/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css/minified'));
});

// Task to compile and minify JS
gulp.task('compile-js', () => {
  return gulp.src('src/js/*.js')
    .pipe(concat('all.js')) // Concatenate all JS files into one
    .pipe(minifyJS())
    .pipe(gulp.dest('dist/js'));
});

// Task to watch for changes in SCSS and JS files
gulp.task('watch', () => {
  gulp.watch('src/scss/*.scss', gulp.series('compile-scss', 'minify-css'));
  gulp.watch('src/js/*.js', gulp.series('compile-js'));
});

// Default task
gulp.task('default', gulp.series('compile-scss', 'minify-css', 'compile-js', 'watch'));
