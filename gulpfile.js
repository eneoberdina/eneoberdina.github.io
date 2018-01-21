const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat-sourcemap');
const sourcemaps = require('gulp-sourcemaps');
const addsrc = require('gulp-add-src');
const rename = require('gulp-rename');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');


gulp.task('default', [
  
    'build-css',
]);

gulp.task('watch', () => {
    
    gulp.watch('./src/scss/*.scss', ['build-css']);
});

gulp.task('build-css', () => {
    gulp.src('./src/scss/*.scss')
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
        }))
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('css'))
});
