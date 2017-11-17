/**
 * Created by Administrator on 2017/11/8.
 */

var srcPath = "src/**/*.js",distPath = "dist";//压缩JS输入输出路径配置
var gulp = require('gulp'),uglify = require('gulp-uglify'),rename = require('gulp-rename');

gulp.task('compress', function () {
    return gulp.src(srcPath)
        .pipe(rename({ suffix: '.min' })) // 重命名
        .pipe(uglify({
            mangle:true,//是否修改变量名
            compress: true,//是否完全压缩
            ie8:true //是否兼容 IE8
        }))
        .pipe(gulp.dest(distPath))
        .on('error', function(err) {
            console.error('Error in compress task', err.toString());
        });
});
gulp.task('default', ['compress']);//默认任务
//gulp.watch(srcPath,['default']); //监控文件改动自动执行任务