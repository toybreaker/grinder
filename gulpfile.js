'use strict';
// GULP tasks to SIZE AND RENAME images.
var changeCase   = require('change-case-all');
var gulp         = require('gulp');
var rename       = require('gulp-rename');
var responsive   = require('gulp-responsive');
var del          = require('del');


// testing AVIF genaration (working)
// usage: 'gulp jpgavif'
const { src, dest } = require("gulp");
const sharpResponsive = require("gulp-sharp-responsive");

const jpgavif = () => src("./_input/_images_to_size/**/*.jpg")
  .pipe(sharpResponsive({
    formats: [
      // jpeg
      { width: 640,
        format: "jpeg",
        jpegOptions: { quality: 55, progressive: true },
        rename: { suffix: "-640" }
      },{
        width: 880,
        format: "jpeg",
        jpegOptions: { quality: 44, progressive: true },
        rename: { suffix: "-880" }
      },{
        width: 1024,
        format: "jpeg",
        jpegOptions: { quality: 44, progressive: true },
        rename: { suffix: "-1024" }
      },{
        width: 1920,
        format: "jpeg",
        jpegOptions: { quality: 33, progressive: true },
        rename: { suffix: "-1920" }
      },{
        width: 1024,
        format: "jpeg",
        jpegOptions: { quality: 44, progressive: true }
      },
      // avif
      { width: 640,
        format: "avif",
        avifOptions: { quality: 40, chromaSubsampling: '4:4:4' },
        rename: { suffix: "-640" }
      },{
        width: 880,
        format: "avif",
        avifOptions: { quality: 40, chromaSubsampling: '4:4:4' },
        rename: { suffix: "-880" }
      },{
        width: 1024,
        format: "avif",
        avifOptions: { quality: 40, chromaSubsampling: '4:4:4' },
        rename: { suffix: "-1024" }
      },{
        width: 1920,
        format: "avif",
        avifOptions: { quality: 40, chromaSubsampling: '4:4:4' },
        rename: { suffix: "-1920" }
      },{
        width: 1024,
        format: "avif",
        avifOptions: { quality: 40, chromaSubsampling: '4:4:4' }
      }
    ]
  }))
  .pipe(dest("./_output/"));

// WHAT: enable to run: 'gulp jpgavif'
module.exports = {
  jpgavif,
};


// WHAT: adds folder name + index, lowercasing the original file name.
// starts from 10, to avoid single digit no. to the first 9 jpgs
var index = 10;
gulp.task('curatename', function (done) {
  // put image folders w/ proper name into _images_to_rename
  return gulp.src('./_input/_images_to_rename/**/*.jpg')
  .pipe(rename(function(fix) {
     fix.basename = changeCase.lowerCase(fix.basename);
   }))
  .pipe(rename(function (path) {
    // prefix w/ folder name + suffix w/ index (starting at 10!)
    path.basename =  (path.dirname + '-' + path.basename + '-' + index++);
  }))
  // output to _images_to_process folder for next step
  .pipe(gulp.dest('./_output/'));
});

// WHAT: delete the original file name + name them using folder name + index .
// to avoid single digit no. to the first 9 jpgs, start from 10, intead of 0
var index = 0;
gulp.task('rename_images', function (done) {
  // put image folders w/ proper name into _images_to_rename
  return gulp.src('./_input/_images_to_rename/**/*.jpg')
  .pipe(rename(function (path) {
    // prefix w/ folder name + suffix w/ index (starting at 10!)
    path.basename =  (path.dirname + '-' + index++);
  }))
  // output to _images_to_process folder for next step
  .pipe(gulp.dest('./_output/'));
});

// WHAT: delete the original file name + name them using index.
// to avoid single digit no. to the first 9 jpgs, start from 10, intead of 0 or 1
var index = 1;
gulp.task('rename_simple', function (done) {
  // put image folders w/ proper name into _images_to_rename
  return gulp.src('./_input/_images_to_rename/**/*.*')
  .pipe(rename(function (path) {
    // prefix w/ folder name + suffix w/ index (starting at 10!)
    path.basename =  (index++);
  }))
  // output to _images_to_process folder for next step
  .pipe(gulp.dest('./_output/'));
});

// Reponsive sizing w/ gulp4
// NOTE: Does transfer folder and lowercase the jpgs names
// OK!
gulp.task('size_images', function (done) {
  return gulp.src('./_input/_images_to_size/**/*.jpg')
    .pipe(rename(function(fix) {
       fix.basename = changeCase.lowerCase(fix.basename);
     }))
    .pipe(responsive({
      '**/*.jpg': [{
        width: 640,
        quality: 55,
        progressive: true,
        sharper: true,
        rename: {
          suffix: '-640'
        }
      }, {
        width: 880,
        quality: 44,
        progressive: true,
        rename: {
          suffix: '-880'
        }
      }, {
        width: 1024,
        quality: 44,
        progressive: true,
        rename: {
          suffix: '-1024'
        }
      }, {
        //fullHD
        width: 1920,
        quality: 33,
        progressive: true,
        rename: {
          suffix: '-1920'
        }
      }, {
        //named same as original for use with jekyll_seo Open Graph / Twitter Cards
        width: 1024,
        quality: 44,
        progressive: true
      }],
    }, {
      // global configuration for all images
      errorOnEnlargement: false,
      withMetadata: false,
      withoutEnlargement: false,
      //try this, sometimes doesn't work
      //withoutChromaSubsampling: true
    }))
    // this is needed otherwise it outputs .jpeg, gosh...
    .pipe(rename(function(fix) {
      fix.extname = '.jpg';
    }))
    // puy jpgs ready in place for SSG to use
    .pipe(gulp.dest('./_output/'));
  done();
});

// Reponsive sizing w/ gulp4
// NOTE: Does transfer folder and lowercase the jpgs names
// OK!
gulp.task('binocle', function (done) {
  return gulp.src('./_input/_images_to_size/**/*.jpg')
    .pipe(rename(function(fix) {
       fix.basename = changeCase.lowerCase(fix.basename);
     }))
    .pipe(responsive({
      '**/*.jpg': [{
        width: 640,
        quality: 61,
        progressive: true,
        sharper: true,
        rename: {
          suffix: '-640'
        }
      }, {
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
      }],
    }, {
      // global configuration for all images
      errorOnEnlargement: false,
      withMetadata: false,
      withoutEnlargement: false,
      //try this, sometimes doesn't work
      //withoutChromaSubsampling: true
    }))
    // this is needed otherwise it outputs .jpeg, gosh...
    .pipe(rename(function(fix) {
      fix.extname = '.jpg';
    }))
    // puy jpgs ready in place for SSG to use
    .pipe(gulp.dest('./_output/'));
  done();
});

// Reponsive sizing w/ gulp4
// NOTE: Does transfer folder and lowercase the jpgs names
// OK!
gulp.task('size_1k', function (done) {
  return gulp.src('./_input/_images_to_size/**/*.*')
    .pipe(rename(function(fix) {
       fix.basename = changeCase.lowerCase(fix.basename);
     }))
     .pipe(rename(function(fix) {
       fix.extname = '.jpg';
     }))
    .pipe(responsive({
      '**/*.jpg': [{
        //single image
        width: 1000,
        quality: 22,
        sharper: true,
        progressive: true
      }],
    }, {
      // global configuration for all images
      errorOnEnlargement: false,
      withMetadata: false,
      withoutEnlargement: false,
      //try this, sometimes doesn't work
      //withoutChromaSubsampling: true
    }))
    // this is needed otherwise it outputs .jpeg, gosh...
    .pipe(rename(function(fix) {
      fix.extname = '.jpg';
    }))
    // puy jpgs ready in place for SSG to use
    .pipe(gulp.dest('./_output/'));
  done();
});


gulp.task('size_1khi', function (done) {
  return gulp.src('./_input/_images_to_size/**/*.*')
    .pipe(rename(function(fix) {
       fix.basename = changeCase.lowerCase(fix.basename);
     }))
     .pipe(rename(function(fix) {
       fix.extname = '.jpg';
     }))
    .pipe(responsive({
      '**/*.jpg': [{
        //single image
        width: 1000,
        quality: 39,
        sharper: true,
        progressive: true
      }],
    }, {
      // global configuration for all images
      errorOnEnlargement: false,
      withMetadata: false,
      withoutEnlargement: false,
      //try this, sometimes doesn't work
      //withoutChromaSubsampling: true
    }))
    // this is needed otherwise it outputs .jpeg, gosh...
    .pipe(rename(function(fix) {
      fix.extname = '.jpg';
    }))
    // puy jpgs ready in place for SSG to use
    .pipe(gulp.dest('./_output/'));
  done();
});



gulp.task('size_2khi', function (done) {
  return gulp.src('./_input/_images_to_size/**/*.*')
    .pipe(rename(function(fix) {
       fix.basename = changeCase.lowerCase(fix.basename);
     }))
     .pipe(rename(function(fix) {
       fix.extname = '.jpg';
     }))
    .pipe(responsive({
      '**/*.jpg': [{
        //single image
        width: 2000,
        quality: 39,
        sharper: true,
        progressive: true
      }],
    }, {
      // global configuration for all images
      errorOnEnlargement: false,
      withMetadata: false,
      withoutEnlargement: false,
      //try this, sometimes doesn't work
      //withoutChromaSubsampling: true
    }))
    // this is needed otherwise it outputs .jpeg, gosh...
    .pipe(rename(function(fix) {
      fix.extname = '.jpg';
    }))
    // puy jpgs ready in place for SSG to use
    .pipe(gulp.dest('./_output/'));
  done();
});

//used for vertical 1333x2000px images
gulp.task('size_2kvhi', function (done) {
  return gulp.src('./_input/_images_to_size/**/*.*')
    .pipe(rename(function(fix) {
       fix.basename = changeCase.lowerCase(fix.basename);
     }))
     .pipe(rename(function(fix) {
       fix.extname = '.jpg';
     }))
    .pipe(responsive({
      '**/*.jpg': [{
        //single image
        width: 1333,
        quality: 39,
        sharper: true,
        progressive: true
      }],
    }, {
      // global configuration for all images
      errorOnEnlargement: false,
      withMetadata: false,
      withoutEnlargement: false,
      //try this, sometimes doesn't work
      //withoutChromaSubsampling: true
    }))
    // this is needed otherwise it outputs .jpeg, gosh...
    .pipe(rename(function(fix) {
      fix.extname = '.jpg';
    }))
    // puy jpgs ready in place for SSG to use
    .pipe(gulp.dest('./_output/'));
  done();
});



// Rename all to lowercase w/ gulp4
// OK! (is this used in other tasks? ops, i forgot!)
gulp.task(function lowercase(done) {
  return gulp.src( './_input/_images_to_lowercase/**/*.*' )
    .pipe(rename(function(fix) {
       fix.basename = changeCase.lowerCase(fix.basename);
     }))

    .pipe(gulp.dest( './_input/_images_to_size/' ));
  done();
});

// DELETE TASKS

// empty "images_to_lowercase"
gulp.task('delete_images_to_lowercase_dir_content', function(done) {
    del(['./_input/_images_to_lowercase/**']);
  done();
});

// empty "_images_to_size"
gulp.task('delete_images_to_size_dir_content', function(done) {
    del(['./_input/_images_to_size/**']);
  done();
});

// empty "_images_to_rename"
gulp.task('delete_images_to_rename_dir_content', function(done) {
    del(['./_input/_images_to_rename/**']);
  done();
});


// PROCESS+DELETE COMMANDS

// Rename all to lowercase + del
gulp.task('lower', gulp.series(['lowercase', 'delete_images_to_lowercase_dir_content']));

// Produce all the different sizes images + del
gulp.task('sizes', gulp.series(['size_images', 'delete_images_to_size_dir_content']));

// Produce all the different sizes images + del
gulp.task('size1k', gulp.series(['size_1k', 'delete_images_to_size_dir_content']));

// Rename images with dir name and progressive index + del
gulp.task('rename', gulp.series(['rename_images', 'delete_images_to_rename_dir_content']));

// Rename images adding dir name and progressive index + del
gulp.task('curate', gulp.series(['curatename', 'delete_images_to_rename_dir_content']));
