---
layout: page
title: "Kapcsolat"
subtitle: "Kérdésed van? Szeretnél többet megtudni a naturizmusról vagy a magyar naturista helyszínekről? Vedd fel velünk a kapcsolatot!"
permalink: /kapcsolat/
---

<!-- Contact Info -->
<section class="contact-info py-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 mb-4">
                <div class="contact-info-card text-center">
                    <div class="contact-icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <h4 class="mb-3">E-mail</h4>
                    <p class="mb-2">Kérdéseid vannak? Írj nekünk bátran!</p>
                    <a href="mailto:{{ site.email }}" class="text-primary">{{ site.email }}</a>
                </div>
            </div>
            <div class="col-lg-4 mb-4">
                <div class="contact-info-card text-center">
                    <div class="contact-icon">
                        <i class="fas fa-clock"></i>
                    </div>
                    <h4 class="mb-3">Válaszidő</h4>
                    <p class="mb-0">Munkanapokon 24 órán belül válaszolunk.</p>
                    <p>Hétvégén és ünnepnapokon a válaszadás hosszabb időt vehet igénybe.</p>
                </div>
            </div>
            <div class="col-lg-4 mb-4">
                <div class="contact-info-card text-center">
                    <div class="contact-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <h4 class="mb-3">Közösségi média</h4>
                    <p class="mb-3">Kövess minket a közösségi médiában is!</p>
                    <div class="social-links">
                        <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                        <a href="#" target="_blank"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Contact Form -->
<section class="contact-form py-5 bg-light">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="contact-form-container">
                    <h2 class="section-title text-center mb-4">Küldj üzenetet</h2>
                    <form id="contactForm" action="https://formspree.io/f/{{ site.formspree_id }}" method="POST">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="name">Név*</label>
                                    <input type="text" class="form-control" id="name" name="name" required>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="email">E-mail cím*</label>
                                    <input type="email" class="form-control" id="email" name="email" required>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="subject">Tárgy*</label>
                            <input type="text" class="form-control" id="subject" name="subject" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Üzenet*</label>
                            <textarea class="form-control" id="message" name="message" rows="6" required></textarea>
                        </div>
                        <div class="form-check mb-4">
                            <input class="form-check-input" type="checkbox" id="privacy" name="privacy" required>
                            <label class="form-check-label" for="privacy">
                                Elolvastam és elfogadom az <a href="{{ '/adatvedelmi-iranyelvek' | relative_url }}" class="text-primary">adatvédelmi irányelveket</a>*
                            </label>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-primary btn-lg">Üzenet küldése <i class="fas fa-paper-plane ms-2"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- FAQ Section -->
<section class="faq-section py-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10 text-center">
                <h2 class="section-title mb-5">Gyakran Ismételt Kérdések</h2>
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="faq-link-card">
                            <div class="faq-icon">
                                <i class="fas fa-question-circle"></i>
                            </div>
                            <h4 class="mb-3">Általános kérdések</h4>
                            <p class="mb-4">Válaszok a naturizmussal kapcsolatos leggyakoribb kérdésekre. Tudj meg többet a mozgalomról, alapelvekről és gyakorlati kérdésekről.</p>
                            <a href="{{ '/naturizmusrol#gyakori-kerdesek' | relative_url }}" class="btn btn-outline-primary">GYIK megtekintése</a>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="faq-link-card">
                            <div class="faq-icon">
                                <i class="fas fa-map-marked-alt"></i>
                            </div>
                            <h4 class="mb-3">Helyszínekkel kapcsolatos kérdések</h4>
                            <p class="mb-4">Minden amit a magyar naturista strandokról, kempingekről és egyéb helyszínekről tudni szeretnél. Nyitvatartás, árak, szolgáltatások.</p>
                            <a href="{{ '/helyszinek' | relative_url }}" class="btn btn-outline-primary">Helyszínek böngészése</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

{% include newsletter.html %}