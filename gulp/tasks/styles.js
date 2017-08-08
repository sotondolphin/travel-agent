var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    nestedcss = require('postcss-nested'),
    simpleVar = require('postcss-simple-vars'),
  	cssImport = require('postcss-import');

gulp.task('style', function(){
  return gulp.src('./app/assets/style/style.css')
        .pipe(postcss([cssImport,nestedcss,simpleVar,autoprefixer]))
        .on('error',function(errorInfo){
        	console.log(errorInfo.toString());
        	this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});