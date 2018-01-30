const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
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
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest('css'))
});


