# 样式管理 o(*￣︶￣*)o

---

- 对项目的样式进行统一管理打包，方便外部引用

<style scoped>
  .img{
     margin-left:30px;
     height:612px;
     width:404px;
     background: url("../assets/img/theme-set.jpg") no-repeat;
  }
</style>
<div class="img"></div>

## gulpfile.js
- 不断的尝试

```javascript

/**
 * 打包UI样式
 */
let gulp = require('gulp');
let stylus = require('gulp-stylus');
let postcss = require('gulp-postcss');
let gautoprefixer = require('gulp-autoprefixer');
let cssmin = require('gulp-cssmin');//压缩成一行

gulp.task('compile', function () {
  return gulp.src('./src/*.styl')
    .pipe(stylus())
    //.pipe(stylus({use:[autoprefixer]}))
    .pipe(postcss())
    .pipe(gautoprefixer({
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

```
