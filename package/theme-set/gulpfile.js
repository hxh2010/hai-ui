/**
 * 打包UI样式
 */
let autoprefixer = require('autoprefixer');
let cssnano = require('cssnano');
let salad = require('postcss-salad')(require('./salad.config.json'));//BEM
let poststylus = require('poststylus');

let gulp = require('gulp');
let stylus = require('gulp-stylus');
let postcss = require('gulp-postcss');
let gulpAutoprefixer = require('gulp-autoprefixer');
let cssmin = require('gulp-cssmin');//压缩成一行

gulp.task('compile', function () {
  return gulp.src('./src/*.styl')
    .pipe(stylus())
    .pipe(postcss())
    .pipe(gulpAutoprefixer({
      browsers: ['last 5 versions', 'Android >= 4.0'],
      cascade: true, //是否美化属性值 默认：true 像这样：
      remove: true //是否去掉不必要的前缀 默认：true
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'));
});

gulp.task('iconfont', function() {
  return gulp.src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/fonts'));
});

gulp.task('build', ['compile', 'iconfont']);

gulp.task('watch', function () {
  gulp.watch('./src/*.styl', ['compile']);
});





