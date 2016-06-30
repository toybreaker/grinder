'use strict';
// images task to optimize images.

var gulp         = require('gulp');
var changeCase   = require('change-case');
var rename       = require('gulp-rename');
var responsive   = require('gulp-responsive');
var gm           = require('gulp-gm');

// testing stuff not yet ready...
var gulpSharp    = require('gulp-sharp');
var imagemin     = require('gulp-imagemin');
var pngquant     = require('imagemin-pngquant');
// end testing



// GM GraphicsMagick
// OK!
// Turns tifs into jpgs
gulp.task("tifs", function () {

  gulp.src('./_src/tif2jpg/*.tif')
    .pipe(gm(function (gmfile) {

      return gmfile.setFormat('jpg');

    }))

    .pipe(gulp.dest('./_done/tif2jpg'));
});


// Reponsive sizing
// OK!
gulp.task('jpgs', function () {
  return gulp.src('./_src/jpg2responsive/*.jpg')
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
        //fullHD
        width: 1920,
        quality: 71,
        progressive: true,
        rename: {
          suffix: '-1920'
        }
      }]
    }))
    .pipe(gulp.dest('./_done/jpg2responsive'));
});


// Rename all to lowercase
// OK!
gulp.task("lower", function () {
  return gulp.src( './_src/2lowercase/*.*' )
    .pipe(rename(function(fix) {
       fix.basename = changeCase.lowerCase(fix.basename);
     }))
    .pipe(gulp.dest( './_done/2lowercase' ));
});


// start______TEST STUFF__________

// Compress jpegs
gulp.task('imagemin', function () {
  return gulp.src('./_src/jpg2min/*.jpg')
      pipe(imagemin({
        progressive: true
      }))
      .pipe(gulp.dest('./_done/jpg2min'));
});

// working only with jpg and how to rename?
gulp.task('imageresize', function() {
  return gulp.src('./_src/p_lowercased/*.+(jpeg|jpg|png|tiff|webp)')
    .pipe(imageResize({ width: 1920 }))
    .pipe(rename(function (path) { path.basename += "-1920"; }))
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('./assets/p'))
    .pipe(rename({
      suffix: '@2x'
    }))
    .pipe(imageResize({ width: 960 }))
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('./assets/p'))
});

// not OK! TIFFFetchNormalTag error
gulp.task("tif", function () {
  gulp.src('./_src/p_input/*.tif')

    .pipe(gm(function (gmfile) {

      return gmfile.format("jpg");

    }, {
      imageMagick: true
    }))

    .pipe(gulp.dest('./_src/p_jpeg'));
});

// should work, but doesnt..
gulp.task('tif', function () {
  return gulp.src('./_src/p_lowercased/*.tif')
    .pipe(responsive({
      '*.tif': [{
        //nexus5
        width: 640,
        quality: 51,
        progressive: true,
        sharper: true,
        rename: {
          suffix: '-640',
          extname: '.jpg'
        }
      }, {
        //ipad
        width: 1024,
        quality: 51,
        progressive: true,
        rename: {
          suffix: '-1024',
          extname: '.jpg'
        }
      }, {
        //fullHD
        width: 1920,
        quality: 44,
        progressive: true,
        rename: {
          suffix: '-1920',
          extname: '.jpg'
        }
      }]
    }))
    .pipe(gulp.dest('./assets/p'));
});

// sharp lab.. maybe not
gulp.task('sha', function(){

  return gulp.src( './_src/p_lowercased/*.+(jpeg|jpg|png|tiff|webp)' )
    .pipe(gulpSharp({
      resize : [640],
      max : true,
      quality : 55,
      progressive : true
    }))
    .pipe(gulp.dest('./assets/p'));

});



// end______TEST STUFF__________
