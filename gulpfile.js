'use strict';
// images task to optimize images.
var gulp         = require('gulp');
var responsive   = require('gulp-responsive');


// Reponsive sizing
// OK?
gulp.task('default', function () {
  return gulp.src('./BOWL/*.jpg')
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
