// testing this:
// https://www.jameslmilner.com/post/node-avif/
// it works
// run this in terminal: 'node avif_test.js'

const sharp = require("sharp");
const fs = require("fs");


fs.readFile("./_input/_images_to_size/01.jpg", (err, inputBuffer) => {
  if (err) {
    console.error(err);
    return;
  }

  // JPEG
  console.time("jpeg");
  sharp(inputBuffer)
    .jpeg({ quality: 50, speed: 1 })
    .toFile("./_output/01.jpg", (err, info) => {
      console.timeEnd("jpeg");
      console.log("jpeg", info);
    });

  // AVIF
  console.time("avif");
  sharp(inputBuffer)
    .avif({ quality: 30, speed: 1 })
    .toFile("./_output/01.avif", (err, info) => {
      console.timeEnd("avif");
      console.log("avif", info);
    });
});
