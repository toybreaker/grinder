'use strict';
// images task to optimize images.
var gulp         = require('gulp');
var responsive   = require('gulp-responsive');
var imagemin     = require('gulp-imagemin');

gulp.task('bum', () =>
    gulp.src('./BUM/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./BAM'))
);

// Reponsive sizing
// OK
gulp.task('default', function () {
  return gulp.src('./BIM/*.jpg')
    .pipe(responsive({
      '*.jpg': [{
        //nexus5
        width: 640,
        quality: 61,
        progressive: true,
        sharper: true,
        rename: {
          suffix: '-640'
        }
      }, {
        //ipad
        width: 1024,
        quality: 66,
        progressive: true,
        rename: {
          suffix: '-1024'
        }
      }, {
        //average laptop screen
        width: 1680,
        quality: 66,
        progressive: true,
        rename: {
          suffix: '-1680'
        }
      }, {
        //fullHD
        width: 1920,
        quality: 71,
        progressive: true,
        rename: {
          suffix: '-1920'
        }
      }]
    }))
    .pipe(gulp.dest('./BAM/'));
});


gulp.task('bim', function () {
  return gulp.src('./BIM/*.jpg')
    .pipe(responsive({
      '*.jpg': [{
        //average laptop screen
        width: 1680,
        quality: 44,
        progressive: true,
        rename: {
          suffix: '-1680'
        }
      }, {
        //fullHD
        width: 1920,
        quality: 69,
        progressive: true,
        rename: {
          suffix: '-1920'
        }
      }]
    }))
    .pipe(gulp.dest('./BUM/'));
});
