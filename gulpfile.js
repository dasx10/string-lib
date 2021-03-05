const gulp = require('gulp');
const jsmin = require('gulp-uglify');

function build () {
	gulp.src('./src/index.js')
	.pipe(jsmin())
	.pipe(gulp.dest('./'))
}

module.exports.default = build
