---
layout: post
title:  "My bash prompt"
---

# Background
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
| ---------------- | --------------------- | --------------------- |
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


# My prompt
```bash
#######################################################################
#░██████╗██╗░░██╗ ██████╗░██████╗░░█████╗░███╗░░░███╗██████╗░████████╗#
#██╔════╝██║░░██║ ██╔══██╗██╔══██╗██╔══██╗████╗░████║██╔══██╗╚══██╔══╝#
#╚█████╗░███████║ ██████╔╝██████╔╝██║░░██║██╔████╔██║██████╔╝░░░██║░░░#
#░╚═══██╗██╔══██║ ██╔═══╝░██╔══██╗██║░░██║██║╚██╔╝██║██╔═══╝░░░░██║░░░#
#██████╔╝██║░░██║ ██║░░░░░██║░░██║╚█████╔╝██║░╚═╝░██║██║░░░░░░░░██║░░░#
#╚═════╝░╚═╝░░╚═╝ ╚═╝░░░░░╚═╝░░╚═╝░╚════╝░╚═╝░░░░░╚═╝╚═╝░░░░░░░░╚═╝░░░#
#######################################################################
# Format: \e[<Attribute>;<ForegroundColor>;<BackgroundColor>m

# --- Attribute Variables ---
# Text Attributes
ATTR_RESET="0" # RESETs all attributes
ATTR_BOLD="1"  # Bold text

# --- Color Variables ---
# Foreground Colors
FG_BLACK="30"
FG_BLACK_BRGHT="90"
FG_BLUE="34"
FG_BLUE_BRGHT="94"
FG_CYAN="36"
FG_CYAN_BRGHT="96"
FG_GREEN="32"
FG_GREEN_BRGHT="92"
FG_MAGENTA="35"
FG_MAGENTA_BRGHT="95"
FG_RED="31"
FG_RED_BRGHT="91"
FG_WHITE="37"
FG_WHITE_BRGHT="97"
FG_YELLOW="33"
FG_YELLOW_BRGHT="93"
FG_RESET="0"
FG_DEFAULT="39"

# Background Colors
BG_BLACK="40"
BG_BLACK_BRGHT="100"
BG_BLUE="44"
BG_BLUE_BRGHT="104"
BG_CYAN="46"
BG_CYAN_BRGHT="106"
BG_GREEN="42"
BG_GREEN_BRGHT="102"
BG_MAGENTA="45"
BG_MAGENTA_BRGHT="105"
BG_RED="41"
BG_RED_BRGHT="101"
BG_WHITE="47"
BG_WHITE_BRGHT="107"
BG_YELLOW="43"
BG_YELLOW_BRGHT="103"
BG_RESET="0"
BG_DEFAULT="49"

# --- Prompt Sections ---
# Define colors for different parts of the prompt.
# Change these to quickly theme your prompt.
COLOR_USER_BG=$BG_RED
COLOR_USER_FG=$FG_BRIGHT_WHITE

COLOR_DIR_BG=$BG_BLACK
COLOR_DIR_FG=$FG_RED

COLOR_NONE_BG=$BG_DEFAULT
COLOR_USER_SEP_FG=$FG_RED
COLOR_DIR_SEP_FG=$FG_BLACK

# --- Prompt Symbols ---
# Powerline symbols for a modern look.
SEPARATOR_R="" # Separator pointing right
SEPARATOR_L="" # Separator pointing left

# --- Directory Truncation Function ---
# Truncates the current working directory to a specified length.
prompt_dir() {
  local dir_path="${PWD/$HOME/\~}" # Replace home with ~
  local max_len=35                 # Max length of the path

  if [ ${#dir_path} -gt $max_len ]; then
    # Truncate by showing the first directory and the last two.
    local truncated_path=$(echo "$dir_path" | awk -F'/' '{
      if (NF>3) {
        print $1 "/.../" $(NF-1) "/" $NF
      } else {
        print $0
      }
    }')
    echo "$truncated_path"
  else
    echo "$dir_path"
  fi
}

# --- PROMPT_COMMAND ---
# This command is executed before the prompt is displayed.
PROMPT_COMMAND='short_pwd="$(prompt_dir)"'

# --- PS1 Prompt String ---
# Build the prompt using the color variables.

# Start of the prompt
PS1="\[\e[${ATTR_RESET};${COLOR_USER_SEP_FG};${COLOR_NONE_BG}m\]${SEPARATOR_L}"
PS1+="\[\e[${ATTR_BOLD};${COLOR_USER_FG};${COLOR_USER_BG}m\]"

# User section
PS1+="\u" # \u is the username

# Separator between user and directory
PS1+="\[\e[${ATTR_RESET};${COLOR_USER_SEP_FG};${COLOR_DIR_BG}m\]${SEPARATOR_R}"

# Directory section
PS1+="\[\e[${ATTR_RESET};${COLOR_DIR_FG};${COLOR_DIR_BG}m\]"
PS1+=" \$short_pwd" # The truncated directory path

# Final separator
PS1+="\[\e[${ATTR_RESET};${COLOR_DIR_SEP_FG};${BG_DEFAULT}m\]${SEPARATOR_R}"

# RESET colors and add the final prompt character
PS1+="\[\e[${ATTR_RESET}m\]\$ "
```