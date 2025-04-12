---
layout: default
title: 首页
---

<section class="posts">
  {% for post in site.posts %}
    <article class="post">
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <div class="post-date">{{ post.date | date: "%Y-%m-%d" }}</div>
      <div class="excerpt">{{ post.excerpt }}</div>
    </article>
  {% endfor %}
</section>
