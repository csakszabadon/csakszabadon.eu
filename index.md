---
layout: home
---

<!-- Hero Section -->
<section class="hero">
    <div class="hero-overlay"></div>
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-lg-8 text-white">
                <h1 class="display-4 fw-bold">Fedezd fel a naturizmust Magyarországon</h1>
                <p class="lead">Szabadság, tisztelet és természetközeliség - Ismerd meg a magyar naturista helyszíneket és közösségeket</p>
                <div class="mt-4">
                    <a href="/helyszinek" class="btn btn-primary btn-lg me-3"><i class="fas fa-map-marked-alt"></i> Helyszínek felfedezése</a>
                    <a href="/naturizmusrol" class="btn btn-outline-light btn-lg"><i class="fas fa-info-circle"></i> Tudj meg többet</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Introduction Section -->
<section class="intro-section py-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right" data-aos-duration="1000">
                <h2 class="section-title">Mi a naturizmus?</h2>
                <p>A naturizmus egy életmód, amely a meztelen közös időtöltésen alapul, és célja az önelfogadás, a mások iránti tisztelet, valamint a természettel való harmónia megteremtése.</p>
                <p>A naturista életmód a test és az elme szabadságát hirdeti, valamint az előítéletektől mentes, tiszteletteljes emberi kapcsolatok fontosságát hangsúlyozza.</p>
                <a href="{{ '/naturizmusrol' | relative_url }}" class="btn btn-outline-primary mt-3">Bővebben a naturizmusról <i class="fas fa-arrow-right"></i></a>
            </div>
            <div class="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
                <div class="intro-image-container">
                    <!-- <img src="https://picsum.photos/seed/naturism1/600/400" alt="Naturizmus Magyarországon" class="img-fluid rounded shadow"> -->
                    <img src="/assets/images/page/1.jpg" alt="Naturizmus Magyarországon" class="img-fluid rounded shadow" style="width: 400px;">
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Featured Locations -->
<section class="featured-locations py-5 bg-light">
    <div class="container">
        <h2 class="section-title text-center mb-5" data-aos="fade-up">Népszerű helyszínek</h2>
        <div class="row">
            {% assign featured_locations = site.helyszin | sort: "rating" | reverse | limit: 3 %}
            {% for location in featured_locations %}
            <div class="col-lg-4 col-md-6 mb-4" data-aos="flip-left" data-aos-delay="{{ forloop.index | times: 100 }}">
                {% include location-card.html location=location %}
            </div>
            {% endfor %}
        </div>
        <div class="text-center mt-4">
            <a href="{{ '/helyszinek' | relative_url }}" class="btn btn-primary">Összes helyszín megtekintése <i class="fas fa-list"></i></a>
        </div>
    </div>
</section>

<!-- Recent Blog Posts -->
<section class="recent-posts py-5">
    <div class="container">
        <h2 class="section-title text-center mb-5" data-aos="fade-up">Friss hírek, blogbejegyzések</h2>
        <div class="row">
            {% assign recent_posts = site.blog | sort: "date" | reverse | limit: 3 %}
            {% for post in recent_posts %}
            <div class="col-lg-4 col-md-6 mb-4" data-aos="zoom-in" data-aos-delay="{{ forloop.index | times: 100 }}">
                {% include post-card.html post=post %}
            </div>
            {% endfor %}
        </div>
        <div class="text-center mt-4">
            <a href="{{ '/blog' | relative_url }}" class="btn btn-primary">Összes blogbejegyzés <i class="fas fa-newspaper"></i></a>
        </div>
    </div>
</section>

<!-- Principles Section -->
<section class="principles-section py-5 bg-light">
    <div class="container">
        <h2 class="section-title text-center mb-5" data-aos="fade-up">A naturizmus alapelvei</h2>
        <div class="row justify-content-center">
            {% assign principles = site.alapelvek | sort: "order" %}
            {% for principle in principles %}
            <div class="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="{{ forloop.index | times: 100 }}">
                {% include principle-card.html principle=principle %}
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="cta-section py-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="cta-card text-center p-5" data-aos="zoom-in">
                    <h2 class="mb-4">Fedezd fel a naturizmust!</h2>
                    <p class="lead mb-4">Ismerd meg a magyar naturista helyszíneket, közösségeket és eseményeket. Indulj el egy új, természetközelibb életmód felé!</p>
                    <div>
                        <a href="{{ '/helyszinek' | relative_url }}" class="btn btn-primary btn-lg me-3">Helyszínek felfedezése</a>
                        <a href="{{ '/naturizmusrol' | relative_url }}" class="btn btn-outline-primary btn-lg">A naturizmusról bővebben</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>