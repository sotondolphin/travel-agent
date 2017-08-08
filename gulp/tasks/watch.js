var gulp = require('gulp'),
    watch = require('gulp-watch'),
    // only import the create() method
    browserSync = require('browser-sync').create();

gulp.task('watch', function(){
	browserSync.init({
		notify:false,
  	server:{
    	baseDir: "app"
    }
  });

  //file on computer to watch;what to do 
	watch('./app/index.html',function(){
    browserSync.reload();
	});

	watch('./app/assets/style/**/*.css', function(){
		gulp.start('cssInject');
	});

});

gulp.task('cssInject',['style'] ,function(){
	return gulp.src('./app/temp/styles/style.css')
        		 .pipe(browserSync.stream());
});