---
layout: home
title: Blog
permalink: /blog/
---
## My Blog Posts
{% raw %}
{% for post in site.posts %}
  <article>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt }}</p>
    <p><a href="{{ post.url | relative_url }}">Read more</a></p>
  </article>
{% endfor %}
{% endraw %}