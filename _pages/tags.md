---
layout: page
title: "Címkék"
permalink: /tags/
---

<div class="container">
  <div class="row">
    <div class="col-lg-8">
      <h2>Összes címke</h2>
      
      <div class="tag-cloud mb-5">
        {% assign tags = site.blog | map: "tags" | compact | uniq %}
        {% for tag in tags %}
          <a href="#{{ tag | slugify }}" class="btn btn-sm btn-outline-primary mb-2 me-2">{{ tag }}</a>
        {% endfor %}
      </div>
      
      <div class="tag-list">
        {% assign tags = site.blog | map: "tags" | compact | uniq %}
        {% for tag in tags %}
          <h3 id="{{ tag | slugify }}">{{ tag }}</h3>
          <ul class="post-list">
            {% for post in site.blog %}
              {% if post.tags contains tag %}
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