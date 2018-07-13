var gulp = require("gulp");
var minImg = require("gulp-imagemin");
var minJs = require("gulp-uglify");
var minCss = require("gulp-sass-china");

gulp.task("minImg",function(){
    gulp.src()
    .pipe(minImg())
    .pipe(gulp.dest());
})

gulp.task("minJs",function(){
	gulp.src()
	.pipe(minJs())
	.pipe(gulp.dest());
})

gulp.task("minCss",function(){
	gulp.src()
	.pipe(minCss({
		outputStyle:"compressed"
	}))
	.pipe(gulp.dest())
})