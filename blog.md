---
layout: page
title: Blog
lang: fr
permalink: /blog/
uid: journal
---

{% assign posts=site.posts | where:"lang", page.lang %}
<ul>
{% for post in posts %}
    <li class="lang">
        <a href="{{ site.baseurl }}{{ post.url }}" class="{{ post.lang }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>

