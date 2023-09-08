# Grinder

![eat my images, you photoshop alternative!](/piranha.png)

---
# BASH
---

READ AND PRINT TASKS FORM THE gulpfile.js DIRECTLY:

```sh
gulp --tasks
```

OR  DISPLAY LIST OF AVAILABLE COMMANDS (.Rfunctions.sh):

```sh
grind            | GRINDS images (gri|grin|grind|grind.u)
```

which are the following bash funtions

```sh
function grind {
  echo '🐲 OPENS GRINDER FOLDER + COMMANDS';
  cd ~/Sites/GRINDER/
  echo '| OPENS tasks.md';
  open tasks.md
  echo '|';
  ugrind;
  echo '| OPENS INPUT FOLDER';
  open ~/Sites/GRINDER/_input

  echo '| OPENS OUTPUT FOLDER';
  open ~/Sites/GRINDER/_output
  echo '';
  echo '
                                                    .
 ██████╗ ██████╗ ██╗███╗   ██╗██████╗ ███████╗██████╗
██╔════╝ ██╔══██╗██║████╗  ██║██╔══██╗██╔════╝██╔══██╗
██║  ███╗██████╔╝██║██╔██╗ ██║██║  ██║█████╗  ██████╔╝
██║   ██║██╔══██╗██║██║╚██╗██║██║  ██║██╔══╝  ██╔══██╗
╚██████╔╝██║  ██║██║██║ ╚████║██████╔╝███████╗██║  ██║
 ╚═════╝ ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝
                                                    .';
  echo '';
  echo 'COMMANDS WITHOUT DELETING ORIGINALS:';
  echo '|> PRODUCE IMAGES SIZED 640, 880, 1024, 1920.';
  echo 'gulp size_images';
  echo '';
  echo '|> ADDS FOLDER NAME + INDEX + LOWERCASE FILE NAME. STARTS > 10';
  echo 'gulp curatename';
  echo '';
  echo '|> RENAME IMAGES USING FOLDER NAME + INDEX.';
  echo 'gulp rename_images';
  echo '';
  echo '|> RENAME IMAGES STARTING FROM 1.JPG.';
  echo 'gulp rename_simple';
  echo '';
  echo '|> OUTPUT 1000PX WIDE JPGS OF STANDARD QUALITY (22).';
  echo 'gulp size_1k';
  echo '';
  echo '|> OUTPUT 2000PX WIDE JPGS OF HIGHER QUALITY (44).';
  echo 'gulp size_1khi';
  echo '';
  echo '|> OUTPUT 1333PX WIDE (..FOR 2000PX TALL IMAGES) JPGS, QUALITY 44 ';
  echo 'gulp size_2kvhi';
  echo '';
  echo '|> HI-QUALITY 640, 1024, 1920 IMAGES FOR QUALITY CLIENTS';
  echo 'gulp binocle ';
  echo '';
  echo '';
  echo 'COMMANDS DELETING ORIGINALS:';
  echo '';
  echo '|> PRODUCE IMAGES SIZED 640, 880, 1024, 1920 + DEL.';
  echo '|> Output also one image with no suffix, named as original, sized 1024';
  echo 'gulp sizes';
  echo '';
  echo '|> RENAME IMAGES WITH DIR NAME AND PROGRESSIVE INDEX + DEL.**';
  echo 'gulp rename';
  echo '';
  echo '|> RENAME IMAGES ADDING DIR NAME AND PROGRESSIVE INDEX + DEL**';
  echo 'gulp curate';
  echo '';
  echo '|> LOWERCASE IMAGES FILE NAME + DEL**';
  echo 'gulp lower';
  echo '';
  echo '|';
  echo '|';
}

```



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
