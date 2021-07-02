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

---
# Tasks without deleting originals.
---

## **(size_images)** Produce images sized 640, 880, 1024, 1920.

**WHAT:**
Produce sized images and lowercase the file names. Output also one image with no suffix, named same as original, to use with jekyll_seo Open Graph / Twitter Cards.

**HOW:**
Put images into ```_input/_images_to_size/``` then run:

```sh
gulp size_images
```

## **(curatename)** Curate images names.

**WHAT:**
Adds folder name + index, lowercasing the original file name.
Starts from 10, to avoid single digit no. in the first 9 jpgs.
Edit gulp files to start from 0 if you prefer.

**HOW:**
Put images into ```_input/_images_to_rename/``` then run:

```sh
gulp curatename
```

## **(rename_images)** Rename images.

**WHAT:**
Changes the original file name and name images using folder name + index .
To avoid single digit no. for the first 9 jpgs, set ```var index = 10;``` in the gulpfile.js.

**HOW:**
Put images into ```_input/_images_to_rename/``` then run:

```sh
gulp rename_images
```

## **(rename_simple)** Rename images without dir name.

**WHAT:**
Changes the original file name and name images starting from 1.jpg.
To avoid single digit no. for the first 9 jpgs, set ```var index = 10;``` in the gulpfile.js.

**HOW:**
Put images into ```_input/_images_to_rename/``` then run:

```sh
gulp rename_images
```



---
# Tasks to produce a single sized image
---

## **(size_1k)** produces single image

**WHAT:**
Output 1000px wide jpgs of standard quality (22).

**HOW:**
Put images into ```_input/_images_to_rename/``` then run:

```sh
gulp size_1k
```


## **(size_1khi)** produces single 1k wide image

**WHAT:**
Output 1000px wide jpgs of higher quality (44).

**HOW:**
Put images into ```_input/_images_to_size/``` then run:

```sh
gulp size_1khi
```

## **(size_2khi)** produces single 2k wide image

**WHAT:**
Output 2000px wide jpgs of higher quality (44).

**HOW:**
Put images into ```_input/_images_to_size/``` then run:

```sh
gulp size_1khi
```


## **(size_2kvhi)** produces single 1.3k wide image

**WHAT:**
Output 1333px wide (usually used for 2000px tall images) jpgs of higher quality (44).

**HOW:**
Put images into ```_input/_images_to_size/``` then run:

```sh
gulp size_2kvhi
```


## **(binocle)** hi-quality 640, 1024, 1920 imges for demanding clients

**WHAT:**
Copy images to process into ```_input/_images_to_size/```.

```sh
gulp binocle
```

---
# Tasks which delete source images
---

## **(sizes)** Produce images sized 640, 880, 1024, 1920 + del.

**WHAT:**
Output also one image with no suffix, named same as original, to use with jekyll_seo Open Graph / Twitter Cards.

**HOW:**
Put images into ```_input/_images_to_size/``` then run:

```sh
gulp sizes
```

## **(rename)** Rename images with dir name and progressive index + del.**

```sh
gulp rename
```

## **(curate)** Rename images adding dir name and progressive index + del**

```sh
gulp curate
```

## **(lower)** lowercase images file name + del**

**WHAT:**
Output into ```_input/_images_to_size/```.

```sh
gulp lower
```


---
# SVGO
---

## Clean up dirty svg code

Put files into: ```_input/svgs```.
run: ```cdf```
then: ```svgo *.svg --pretty --enable=sortAttrs,removeDimensions```
BOOM DONE!

Note: you have to install it globally first:

```npm install -g svgo```

##### Curtesy of:

[svgo npm](https://github.com/svg/svgo)

Usage:

```sh
svgo [OPTIONS] [ARGS]
```
Examples:

```svgo -h```
```svgo --help```
```$ svgo test.svg```
```$ svgo *.svg```
```$ svgo test.svg -o test.min.svg```
```$ svgo test.svg other.svg third.svg```

with STDIN / STDOUT:

```$ cat test.svg | svgo -i - -o - > test.min.svg```

with folder

```$ svgo -f ../path/to/folder/with/svg/files```
or:

```$ svgo -f ../path/to/folder/with/svg/files -o ../path/to/folder/with/svg/output```
```$ svgo *.svg -o ../path/to/folder/with/svg/output```

with strings:

```$ svgo -s '<svg version="1.1">test</svg>' -o test.min.svg```

or even with Data URI base64:

```$ svgo -s 'data:image/svg+xml;base64,...' -o test.min.svg```
