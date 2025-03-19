---
layout: page
title: "Naturista helyszínek Magyarországon"
subtitle: "Fedezd fel a naturizmus legszebb hazai helyszíneit!"
permalink: /helyszinek/
---

<!-- Filter Section -->
<section class="filter-section py-4">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="location-filter">
                    <h4 class="mb-3">Helyszínek szűrése</h4>
                    <div class="d-flex flex-wrap">
                        <button class="btn filter-btn active" data-filter="all">Mind</button>
                        <button class="btn filter-btn" data-filter="strand"><i class="fas fa-water"></i> Strand</button>
                        <button class="btn filter-btn" data-filter="kemping"><i class="fas fa-campground"></i> Kemping</button>
                        <button class="btn filter-btn" data-filter="szauna"><i class="fas fa-hot-tub"></i> Szauna</button>
                        <button class="btn filter-btn" data-filter="egyeb"><i class="fas fa-spa"></i> Egyéb</button>
                    </div>
                    <div class="mt-3">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Keresés helyszín neve alapján..." id="location-search">
                            <button class="btn btn-primary" type="button"><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Locations List -->
<section class="locations-section py-5">
    <div class="container">
        <div class="row">
            {% assign locations = site.helyszin | sort: "order" %}
            {% for location in locations %}
            <div class="col-12 location-item" data-category="{{ location.type }}">
                <div class="card location-large-card">
                    <div class="row g-0">
                        <div class="col-lg-4">
                            {% if location.image %}
                            <img src="{{ location.image }}" class="img-fluid location-image" alt="{{ location.title }}">
                            {% else %}
                            <img src="https://picsum.photos/seed/{{ location.slug }}/600/400" class="img-fluid location-image" alt="{{ location.title }}">
                            {% endif %}
                        </div>
                        <div class="col-lg-8">
                            <div class="card-body p-4">
                                <div class="d-flex justify-content-between align-items-start mb-2">
                                    <div>
                                        <span class="info-pill {{ location.type }}"><i class="fas 
                                            {% if location.type == 'strand' %}fa-water
                                            {% elsif location.type == 'kemping' %}fa-campground
                                            {% elsif location.type == 'szauna' %}fa-hot-tub
                                            {% else %}fa-spa{% endif %} me-1"></i> 
                                            {{ location.type | capitalize }}</span>
                                        {% if location.beginner_friendly %}
                                        <span class="info-pill"><i class="fas fa-thumbs-up me-1"></i> Ajánlott kezdőknek</span>
                                        {% endif %}
                                    </div>
                                    <div class="rating">
                                        {% assign whole_stars = location.rating | floor %}
                                        {% assign fraction = location.rating | minus: whole_stars %}
                                        {% assign next_star = whole_stars | plus: 1 %}
                                        {% for i in (1..5) %}
                                            {% if i <= whole_stars %}
                                            <i class="fas fa-star"></i>
                                            {% elsif fraction >= 0.5 and i == next_star %}
                                            <i class="fas fa-star-half-alt"></i>
                                            {% else %}
                                            <i class="far fa-star"></i>
                                            {% endif %}
                                        {% endfor %}
                                        <span class="text-muted ms-1">({{ location.rating }})</span>
                                    </div>
                                </div>
                                <h3 class="card-title">{{ location.title }}</h3>
                                <div class="location-details">
                                    <span><i class="fas fa-map-marker-alt"></i> {{ location.location }}</span>
                                    <span><i class="fas fa-road"></i> {{ location.distance }}</span>
                                    <span><i class="fas fa-tags"></i> {{ location.price }}</span>
                                </div>
                                <p class="card-text">{{ location.description }}</p>
                                <div class="mt-3 mb-3">
                                    {% for feature in location.features %}
                                    <div class="location-feature">
                                        <i class="fas 
                                        {% if feature == 'parking' %}fa-parking
                                        {% elsif feature == 'buffet' %}fa-utensils
                                        {% elsif feature == 'toilets' %}fa-toilet
                                        {% elsif feature == 'showers' %}fa-shower
                                        {% elsif feature == 'sports' %}fa-volleyball-ball
                                        {% elsif feature == 'umbrellas' %}fa-umbrella-beach
                                        {% elsif feature == 'wifi' %}fa-wifi
                                        {% elsif feature == 'restaurant' %}fa-utensils
                                        {% elsif feature == 'store' %}fa-store
                                        {% else %}fa-check{% endif %}"></i> 
                                        {% if feature == 'parking' %}Parkolási lehetőség
                                        {% elsif feature == 'buffet' %}Büfé
                                        {% elsif feature == 'toilets' %}Mosdók
                                        {% elsif feature == 'showers' %}Zuhanyzók
                                        {% elsif feature == 'sports' %}Sportpályák
                                        {% elsif feature == 'umbrellas' %}Napernyők
                                        {% elsif feature == 'wifi' %}Wi-Fi
                                        {% elsif feature == 'restaurant' %}Étterem
                                        {% elsif feature == 'store' %}Bolt
                                        {% else %}{{ feature }}{% endif %}
                                    </div>
                                    {% endfor %}
                                </div>
                                <a href="{{ location.url }}" class="btn btn-primary">Részletek megtekintése</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<!-- Facilities Section -->
<section class="facilities-section py-5 bg-light">
    <div class="container">
        <h2 class="section-title text-center mb-5">Jellemző szolgáltatások</h2>
        <div class="row text-center">
            <div class="col-6 col-md-3 mb-4">
                <div class="facility-icon mx-auto">
                    <i class="fas fa-shower"></i>
                </div>
                <h5>Zuhanyzók</h5>
                <p class="small">A legtöbb helyszínen tiszta, rendezett zuhanyzók találhatók.</p>
            </div>
            <div class="col-6 col-md-3 mb-4">
                <div class="facility-icon mx-auto">
                    <i class="fas fa-utensils"></i>
                </div>
                <h5>Éttermek, büfék</h5>
                <p class="small">Étkezési lehetőségek a kellemes időtöltéshez.</p>
            </div>
            <div class="col-6 col-md-3 mb-4">
                <div class="facility-icon mx-auto">
                    <i class="fas fa-volleyball-ball"></i>
                </div>
                <h5>Sportolási lehetőségek</h5>
                <p class="small">Sportpályák és aktív időtöltési lehetőségek.</p>
            </div>
            <div class="col-6 col-md-3 mb-4">
                <div class="facility-icon mx-auto">
                    <i class="fas fa-umbrella-beach"></i>
                </div>
                <h5>Napozóterületek</h5>
                <p class="small">Kényelmes napozóterületek a pihenéshez.</p>
            </div>
        </div>
    </div>
</section>

<!-- Help & Tips Section -->
<section class="tips-section py-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 mb-4 mb-lg-0">
                <h2 class="section-title">Segítség kezdő naturistáknak</h2>
                <p>Ha most ismerkedsz a naturizmussal, lehet, hogy vannak kérdéseid vagy bizonytalanságaid. Íme néhány hasznos tanács az első látogatásodhoz:</p>
                <ul class="list-unstyled">
                    <li class="mb-3"><i class="fas fa-check-circle text-primary me-2"></i> Vigyél magaddal törölközőt, amin ülhetsz</li>
                    <li class="mb-3"><i class="fas fa-check-circle text-primary me-2"></i> Használj napvédő krémet</li>
                    <li class="mb-3"><i class="fas fa-check-circle text-primary me-2"></i> A legtöbb helyen van textiles övezet is, ha szükséges</li>
                    <li class="mb-3"><i class="fas fa-check-circle text-primary me-2"></i> Ne fényképezz engedély nélkül</li>
                    <li class="mb-3"><i class="fas fa-check-circle text-primary me-2"></i> Viselkedj tiszteletteljesen mindenkivel</li>
                </ul>
                <a href="{{ '/naturizmusrol#kezdoknek' | relative_url }}" class="btn btn-primary mt-3">További tanácsok kezdőknek <i class="fas fa-arrow-right"></i></a>
            </div>
            <div class="col-lg-6">
                <div class="card border-0 shadow-sm">
                    <div class="card-body p-4">
                        <h4 class="mb-4">Gyakori kérdések a helyszínekkel kapcsolatban</h4>
                        <div class="accordion" id="locationFAQ">
                            {% assign location_faqs = site.faq | where: "category", "helyszinek" | sort: "order" %}
                            {% for faq in location_faqs limit:3 %}
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="heading{{ forloop.index }}">
                                    <button class="accordion-button {% unless forloop.first %}collapsed{% endunless %}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{{ forloop.index }}" aria-expanded="{% if forloop.first %}true{% else %}false{% endif %}" aria-controls="collapse{{ forloop.index }}">
                                        {{ faq.question }}
                                    </button>
                                </h2>
                                <div id="collapse{{ forloop.index }}" class="accordion-collapse collapse {% if forloop.first %}show{% endif %}" aria-labelledby="heading{{ forloop.index }}" data-bs-parent="#locationFAQ">
                                    <div class="accordion-body">
                                        {{ faq.content }}
                                    </div>
                                </div>
                            </div>
                            {% endfor %}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Handle filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    const locationItems = document.querySelectorAll('.location-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Show/hide locations based on the filter
            locationItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Handle search
    const searchInput = document.getElementById('location-search');
    
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const searchTerm = this.value.toLowerCase();
            
            locationItems.forEach(item => {
                const locationName = item.querySelector('.card-title').textContent.toLowerCase();
                const locationText = item.querySelector('.card-text').textContent.toLowerCase();
                
                if (locationName.includes(searchTerm) || locationText.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
});
</script>