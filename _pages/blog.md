---
layout: archive
title: "Blog & Hírek"
subtitle: "Friss hírek, érdekes cikkek és hasznos információk a naturizmusról, helyszínekről és eseményekről"
use_search: true
permalink: /blog/
---

<!-- Blog Posts -->
{% assign blog_posts = site.blog | sort: "date" | reverse %}
{% for post in blog_posts %}
{% if forloop.first %}
<!-- Featured Post -->
<div class="blog-post-card featured" data-aos="fade-up">
    <div class="row g-0">
        <div class="col-md-6">
            {% if post.image %}
            <a href="{{ post.url | relative_url }}">
                <img src="{{ post.image }}" class="img-fluid blog-post-image w-100 h-100" alt="{{ post.title }}">
            </a>
            {% else %}
            <a href="{{ post.url | relative_url }}">
                <img src="https://picsum.photos/seed/naturism20/600/400" class="img-fluid blog-post-image w-100 h-100" alt="{{ post.title }}">
            </a>
            {% endif %}
        </div>
        <div class="col-md-6">
            <div class="card-body p-4">
                <div class="d-flex align-items-center mb-2">
                    {% if post.categories %}
                    {% for category in post.categories limit:2 %}
                    <span class="category-badge {% if forloop.first %}history{% endif %}">{{ category }}</span>
                    {% endfor %}
                    {% endif %}
                </div>
                <h3 class="card-title"><a href="{{ post.url | relative_url }}" class="text-decoration-none">{{ post.title }}</a></h3>
                <div class="blog-post-meta">
                    <span><i class="far fa-calendar-alt"></i> {{ post.date | date: "%Y. %m. %d." }}</span>
                    <span><i class="far fa-user"></i> {{ post.author }}</span>
                </div>
                <p class="blog-post-excerpt">{{ post.excerpt }}</p>
                <a href="{{ post.url | relative_url }}" class="btn btn-primary btn-sm">Tovább olvasom <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    </div>
</div>
{% else %}
<!-- Regular Posts -->
<div class="blog-post-card" data-aos="fade-up" data-aos-delay="{{ forloop.index | times: 50 }}">
    <div class="row g-0">
        <div class="col-md-4">
            {% if post.image %}
            <a href="{{ post.url | relative_url }}">
                <img src="{{ post.image }}" class="img-fluid blog-post-image w-100 h-100" alt="{{ post.title }}">
            </a>
            {% else %}
            <a href="{{ post.url | relative_url }}">
                <img src="https://picsum.photos/seed/naturism{{ forloop.index | plus: 20 }}/600/400" class="img-fluid blog-post-image w-100 h-100" alt="{{ post.title }}">
            </a>
            {% endif %}
        </div>
        <div class="col-md-8">
            <div class="card-body p-4">
                <div class="d-flex align-items-center mb-2">
                    {% if post.categories %}
                    {% for category in post.categories limit:2 %}
                    <span class="category-badge {% if forloop.first %}{{ category | slugify }}{% endif %}">{{ category }}</span>
                    {% endfor %}
                    {% endif %}
                </div>
                <h4 class="card-title"><a href="{{ post.url | relative_url }}" class="text-decoration-none">{{ post.title }}</a></h4>
                <div class="blog-post-meta">
                    <span><i class="far fa-calendar-alt"></i> {{ post.date | date: "%Y. %m. %d." }}</span>
                    <span><i class="far fa-user"></i> {{ post.author }}</span>
                </div>
                <p class="blog-post-excerpt">{{ post.excerpt }}</p>
                <a href="{{ post.url | relative_url }}" class="btn btn-primary btn-sm">Tovább olvasom <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    </div>
</div>
{% endif %}
{% endfor %}

<!-- Pagination -->
<nav class="my-5" data-aos="fade-up">
    <ul class="pagination justify-content-center">
        <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true"><i class="fas fa-chevron-left"></i></a>
        </li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
            <a class="page-link" href="#"><i class="fas fa-chevron-right"></i></a>
        </li>
    </ul>
</nav>