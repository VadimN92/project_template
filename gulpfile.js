'use strict';

var gulp = require('gulp'); /*Підключаємо gulp*/
var sass = require('gulp-ruby-sass'); /*Плагін для sass*/
var uglify = require('gulp-uglify');  /*Мініфікація JS*/
var concat = require('gulp-concat');  /*Склейка файлів */
var sourcemaps = require('gulp-sourcemaps'); /*Отладка коду, дебагінг кода в Chrome*/


gulp.task('js', function() { /*Створюємо завдання*/
    gulp.src(['./media/**/*.js']) /*Вибираємо всі файли в папці media з розширенням js*/
        .pipe(concat('script.js')) /*Записуємо все в один файл "конкатинуємо"*/
        .pipe(gulp.dest('js')); /*зберігаємо */
});

gulp.task('sass', function(){

});


gulp.task('watch', function(){

});