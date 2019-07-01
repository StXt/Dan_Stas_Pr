var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('css'))
});