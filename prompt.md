I am trying to create a personal website on github pages using jekyll (which i'm new to). My repository currently has the following layout:

```bash
willie ~/repo/willieloea.github.io$ tree
.
├── 404.html
├── about.md
├── assets
│   └── main.css
├── blog.md
├── _config.yml
├── Gemfile
├── Gemfile.lock
├── index.md
├── _layouts
│   └── custom-home.html
├── pictures
│   ├── Gospers_glider_gun.gif
│   ├── profile_picture.jpg
│   └── title-icon.ico
├── _posts
│   ├── 2023-11-21-what-will-this-be.md
│   ├── 2023-11-30-the-stage.md
│   ├── 2024-04-30-ca-mol.md
│   ├── 2025-07-07-my-bash-prompt.md
│   └── 2025-08-01-release.md
└── README.md

5 directories, 18 files
```

Things correctly install:
```bash
willie ~/repo/willieloea.github.io$ bundle install
Bundle complete! 4 Gemfile dependencies, 98 gems now installed.
Use `bundle info [gemname]` to see where a bundled gem is installed.
```

And the site runs when I start it up:
```
willie ~/repo/willieloea.github.io$ bundle exec jekyll serve
Configuration file: /home/willie/repo/willieloea.github.io/_config.yml
To use retry middleware with Faraday v2.0+, install `faraday-retry` gem
            Source: /home/willie/repo/willieloea.github.io
       Destination: /home/willie/repo/willieloea.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
       Jekyll Feed: Generating feed for posts
                    done in 0.291 seconds.
 Auto-regeneration: enabled for '/home/willie/repo/willieloea.github.io'
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
```

But when I go to `http://127.0.0.1:4000/`, I don't what is in `index.md`, i see something like this:
```html
<html lang="en">
  <body class="vsc-domain-127-0-0-1 vsc-initialized">
    <header>
      <h1>{{ site.title | default: "My Site" }}</h1>
    </header>
    <main>
      {{ content }}
    </main>
    <footer>
      <p>{{ site.time | date: '%Y' }} Willie Loftie-Eaton</p>
    </footer>
  </body>
</html>
```

`_config.yml` contains the following:
```yml
title: Willie Loftie-Eaton
email: willieloea@gmail.com
description: >- # this means to ignore newlines until "baseurl:"
  my little corner of the internet
baseurl: "" # the subpath of your site, e.g. /blog
url: "https://willieloea.github.io"
twitter_username: willieloea
github_username:  willieloea

# Build settings
theme: minima
plugins:
  - jekyll-feed
permalink: /blog/:title
```

`index.md` contains the following:
```md
---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: custom-home
---

<h1>Hi, I'm Willie Loftie-Eaton</h1>

![profile picture](./pictures/profile_picture.jpg)

## About Me
I am a BSc Hons Computer Science student at the University of Stellenbosch. I
enjoy studying Computer Science, Mathematics, and Statistics. In my free time I
practice guitar, read, play ultimate frisbee, and run. I would like to have an
impactful career and hence I try to organize my life such that I gather useful
skills, and learn about cool problems to tackle (energy abundance seems
interesting). I'm interested in making civilization last as long as possible.
I'm always looking for friends, so feel free to reach out if you want to chat.

To know more about me, you can visit my [blog](./blog)
where I will share things that interest me.  
My CV can be found [here](https://drive.google.com/drive/folders/1osDFVEo7hA5AT-f72qt0CtxR-abmIgxA?usp=sharing).

*** 

## My Work
[Demo E-commerece app](https://github.com/willieloea/ecommapp)  
During vacation in January 2024, I learned how to build a web-app using the MERN
(mongoDB, Express.js, React.js, Node.js) stack. 
As of yet, the repo isn't 'presentation ready', but the app was able to allow
users to see products stored on a database, add items to a cart, and send a
WhatsApp message through Twillio, notifying the owner what was in the cart.

[CAlab](https://github.com/willieloftieeaton/CAlab)  
The goal of this project is to enable computations and visualizations of
Cellular Automata. It is something I work on in my free time, and at the moment
is capible of computing 1-dimensional Cellular Automata.

[This website](https://github.com/willieloftieeaton/willieloftieeaton.github.io)  
This website serves to inform you about me, and is a place where I can share my ideas and work with the world.
```

`_layouts/custom-home.html` contains the following:
```html
{% raw %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>{{ page.title | default: site.title }}</title>
    <link rel="stylesheet" href="{{ '/assets/main.css' | relative_url }}">
    <link rel="icon" type="image/x-icon" href="{{ '/pictures/title-icon.ico' | relative_url }}">
  </head>
  <body>
    <header>
      <h1>{{ site.title | default: "My Site" }}</h1>
    </header>
    <main>
      {{ content }}
    </main>
    <footer>
      <p>{{ site.time | date: '%Y' }} Willie Loftie-Eaton</p>
    </footer>
  </body>
</html>
{% endraw %}
```

This is in my `Gemfile`:
```
source "https://rubygems.org"
gem "github-pages", "~> 232", group: :jekyll_plugins

# This is the default theme for new Jekyll sites. You may change this to anything you like.
gem "minima", "~> 2.5"

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
```

Please tell me what i should do to get my index.md displaying when I go to willieloea.github.io.