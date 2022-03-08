# Grinder

![eat my images, you photoshop alternative!](/piranha.png)

Image processor that outputs responsive image sets to use with _srcset_


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



---
## INFO
---

---
[TASKS](tasks.md)
---
[AVIF](avif.md)
---
[DEV](dev.md)
---
[BASH](bash.md)
---
[SVGO](svg.md)
---
[README](readme.md)
---
