---
layout: post
title:  "My bash prompt"
---

The basic structure of an ANSI escape code is:  
`\e[<Attribute>;<ForegroundColor>;<BackgroundColor>m`  
or  
`\033[<Attribute>;<ForegroundColor>;<BackgroundColor>m`  

`<Attribute>` values:
| Code | Effect    |
| :--- | :-------- |
| 0    | Reset     |
| 1    | Bold      |
| 4    | Underline |

`ESC[38;5;{ID}m` Set foreground color.  
`ESC[48;5;{ID}m` Set background color.


`<ForegroundColor>;<BackgroundColor>` values:
| Color Name       | Foreground Color Code | Background Color Code |
| :--------------- | :-------------------- | :-------------------- |
| Black            | `30`                  | `40`                  |
| Black (bright)   | `90`                  | `100`                 |
| Blue             | `34`                  | `44`                  |
| Blue (bright)    | `94`                  | `104`                 |
| Cyan             | `36`                  | `46`                  |
| Cyan (bright)    | `96`                  | `106`                 |
| Green            | `32`                  | `42`                  |
| Green (bright)   | `92`                  | `102`                 |
| Magenta          | `35`                  | `45`                  |
| Magenta (bright) | `95`                  | `105`                 |
| Red              | `31`                  | `41`                  |
| Red (bright)     | `91`                  | `101`                 |
| White            | `37`                  | `47`                  |
| White (bright)   | `97`                  | `107`                 |
| Yellow           | `33`                  | `43`                  |
| Yellow (bright)  | `93`                  | `103`                 |
| Reset            | `0`                   | `0`                   |
| Default          | `39`                  | `49`                  |

