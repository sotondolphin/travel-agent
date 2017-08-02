var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer')
    simpleVar = require('postcss-simple-vars')
    nestedcss = require('postcss-nested'),
    cssImport = require('postcss-import');

// task to be named; function to run the task 
  gulp.task('default', function(){
            console.log('horay, you created a gulp task');
    });

  gulp.task('html', function(){
    console.log('imagine something useful being done to your HTML here');
  });

  gulp.task('style', function(){
    return gulp.src('./app/assets/style/style.css')
        .pipe(postcss([cssImport,nestedcss,simpleVar,autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
  });


  gulp.task('watch', function(){
    
    //file on computer to watch;what to do 
    watch('./app/index.html',function(){
        gulp.start('html');
    });

    watch('./app/assets/style/**/*.css', function(){
        gulp.start('style');
    });
  });
