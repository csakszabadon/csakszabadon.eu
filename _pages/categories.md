---
layout: page
title: "Kategóriák"
permalink: /categories/
---

<div class="container">
  <div class="row">
    <div class="col-lg-8">
      <h2>Összes kategória</h2>
      <div class="category-list">
        {% assign categories = site.blog | map: "categories" | compact | uniq %}
        {% for category in categories %}
          <h3 id="{{ category | slugify }}">{{ category }}</h3>
          <ul class="post-list">
            {% for post in site.blog %}
              {% if post.categories contains category %}
                <li>
                  <h4>
                    <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a>
                  </h4>
                  <p class="post-meta">{{ post.date | date: "%Y. %m. %d." }} &middot; {{ post.author }}</p>
                  <p>{{ post.excerpt }}</p>
                </li>
              {% endif %}
            {% endfor %}
          </ul>
        {% endfor %}
      </div>
    </div>
    <div class="col-lg-4">
      {% include sidebar.html %}
    </div>
  </div>
</div>