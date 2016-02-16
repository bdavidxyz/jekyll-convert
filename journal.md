---
layout: page
title: Journal
lang: en
permalink: /journal/
---

{% assign posts=site.posts | where:"lang", page.lang %}
<ul>
{% for post in posts %}
    <li class="lang">
        <a href="{{ site.baseurl }}{{ post.url }}" class="{{ post.lang }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>

