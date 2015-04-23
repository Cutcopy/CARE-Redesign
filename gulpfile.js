var gulp = require('gulp');
var browserSync = require('browser-sync');
var stylus = require('gulp-stylus');
var reload = browserSync.reload;
var jade = require('gulp-jade');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('default', function(){
    gulp.src('/stylus/main.styl')
        .pipe(stylus())
        .pipe(gulp.dest('/css/main.css'));


    gulp.watch('/stylus/partials/**/*.styl', ['styles']);


  browserSync({
    server: {
      baseDir: ''
    }
  });

  gulp.watch(['*.html', 'css/**/*.css', 'js/**/*.js'], {cwd: ''}, reload);



  var YOUR_LOCALS = {};
 
  gulp.src('./lib/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./dist/'))


 

    return gulp.src('img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist'));
});