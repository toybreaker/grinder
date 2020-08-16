# Grinder

![eat my images, you photoshop alternative!](/piranha.png)

Image processor that outputs responsive image sets to use with _srcset_

Currently using:

- [gulp-responsive](https://github.com/mahnunchik/gulp-responsive)

- [gulp-rename](https://github.com/hparra/gulp-rename)

- [del](https://github.com/sindresorhus/del)

- [change-case-all](https://github.com/btxtiger/change-case-all)


_Note:_ gulp-responsive depends on [sharp](https://github.com/lovell/sharp). Sharp is one of the fastest Node.js modules for resizing JPEG, PNG, WebP and TIFF images.

**How to use it?**

### Install node dependencies into project's local dir.

```sh
npm install
```

## Tasks without deleting originals.

### **(size_images)** Produce images sized 640, 880, 1024, 1920.**

**WHAT:**
Produce sized images and lowercase the file names. Output also one image with no suffix, named same as original, to use with jekyll_seo Open Graph / Twitter Cards.

**HOW:**
Put images into ```_input/_images_to_size/``` then run:

```sh
gulp size_images
```

### **(curatename)** Curate images names.**

**WHAT:**
Adds folder name + index, lowercasing the original file name.
Starts from 10, to avoid single digit no. in the first 9 jpgs.
Edit gulp files to start from 0 if you prefer.

**HOW:**
Put images into ```_input/_images_to_rename/``` then run:

```sh
gulp curatename
```

### **(rename_images)** Rename images.

**WHAT:**
Changes the original file name and name images using folder name + index .
To avoid single digit no. for the first 9 jpgs, set ```var index = 10;``` in the gulpfile.js.

**HOW:**
Put images into ```_input/_images_to_rename/``` then run:

```sh
gulp rename_images
```




## Tasks which delete source images


### **(sizes)** Produce images sized 640, 880, 1024, 1920 + del.

**WHAT:**
Output also one image with no suffix, named same as original, to use with jekyll_seo Open Graph / Twitter Cards.

**HOW:**
Put images into ```_input/_images_to_size/``` then run:

```sh
gulp sizes
```

### **(rename)** Rename images with dir name and progressive index + del.**

```sh
gulp rename
```

### **(curate)** Rename images adding dir name and progressive index + del**

```sh
gulp curate
```


### **(lower)** lowercase images file name + del**

**WHAT:**
Output into ```_input/_images_to_size/```.

```sh
gulp lower
```
