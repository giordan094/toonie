// inizializzazioni dei moduli
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var processors = [
        autoprefixer,
        cssnano
    ];

// task che:
// 1. compila il file style.scss
// 2. lo posiziona nella directory css
// 3. inizializza la creazione della sourcemap
// 4. minifica il css
// 5. scrive la sourcemap
// 6. rinomina il file in style.min.css
// 7. lo posiziona nella cartella css
gulp.task('sass', function() {
  gulp.src('css/style.scss').pipe(plumber(function(error) {
    console.log('Si è verificato un errore', error.message);
    this.emit('end');
  })).pipe(sass({
    includePaths: ['scss']
  })).pipe(gulp.dest('css'))
  .pipe(postcss(processors))
  .pipe(sourcemaps.init())
  .pipe(cleanCSS())
  .pipe(sourcemaps.write())
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest('css/'));
});

// task per l'inizializzazione del browser sync, il quale riaggiorna nel caso vengano modificati i file che sono indicati con le wildcard
gulp.task('browser-sync', function() {
  browserSync.init(["css/*.css", "js/*.js","**/*.html"], {
    server: { baseDir: "./" },
    port: 3000
  });
});

// watcher che ricompila i file scss usando il task sass ad ogni cambiamento dei files
gulp.task('watch', ['sass', 'browser-sync'], function() {
  gulp.watch(['css/**/*.scss'], ['sass']);
  gulp.watch("*.html",browserSync.reload);
});
