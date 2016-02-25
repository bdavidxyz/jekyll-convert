---
layout: page
title: Journal
lang: en
permalink: /journal/
uid: journal
---

{% assign posts=site.posts | where:"lang", page.lang %}
<div>
{% for post in posts %}
    <div class="lang">
        <a href="{{ site.baseurl }}{{ post.url }}" class="{{ post.lang }}">
        <div class="journal-post-line">
          <span class='journal-post-title'>{{ post.title }}</span>
          <span class='journal-post-time'><time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date: "%b %-d, %Y" }}</time></span>
        </div>
        </a>
    </div>
{% endfor %}
</div>

