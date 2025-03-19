/**
 * Magyar Naturizmus - Egyesített JavaScript Fájl
 * Szerző: Claude
 * Verzió: 1.0
 */

// Globális függvények és inicializálás, ami az összes oldalon fut
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Back to top button functionality
    let backToTopButton = document.getElementById("btn-back-to-top");

    // When the user scrolls down 300px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    if (backToTopButton) {
        backToTopButton.addEventListener("click", function() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            
            // Add smooth scroll behavior
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Add active class to nav item corresponding to current page
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Check if the current page matches the nav link
        if (currentLocation.includes(linkPath) && linkPath !== 'index.html') {
            link.classList.add('active');
        } else if ((currentLocation.endsWith('/') || currentLocation.endsWith('/index.html')) && linkPath === 'index.html') {
            link.classList.add('active');
        }
    });

    // Initialize Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Add hover effect to location cards
    const locationCards = document.querySelectorAll('.location-card');
    
    locationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('shadow-lg');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('shadow-lg');
        });
    });

    // Add scroll animation to nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple image lazy loading
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }

    // Add a simple preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.classList.add('preloader-hide');
            
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        });
    }

    // Check if images are missing/not loaded and apply fallback
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            // If image fails to load, apply a fallback
            this.src = 'https://picsum.photos/400/300?random=' + Math.floor(Math.random() * 100);
            this.alt = 'Alternatív kép';
        });
    });
    
    // Optional: Add a simple dark/light mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            // Save preference to localStorage
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
        });
        
        // Check for saved dark/light mode preference
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
        }
    }

    // Helyszínek oldal specifikus kód
    initLocationPage();

    // Kapcsolat oldal specifikus kód
    initContactPage();
});

// Helyszínek oldal specifikus funkciók
function initLocationPage() {
    // Csak akkor futtassa, ha a helyszínek oldalon vagyunk
    const mapElement = document.getElementById('mapid');
    if (!mapElement) return;

    // Initialize the map
    const map = L.map('mapid').setView([47.1625, 19.5033], 7);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Add markers for each location
    const locations = [
        {
            name: "Délegyházi Naturista Strand",
            lat: 47.2452,
            lng: 19.1126,
            type: "strand"
        },
        {
            name: "Sziksósfürdő",
            lat: 46.2333,
            lng: 20.0833,
            type: "strand"
        },
        {
            name: "Bereki Naturista Kemping",
            lat: 46.7100,
            lng: 17.4776,
            type: "kemping"
        },
        {
            name: "Naturista Szauna Budapest",
            lat: 47.4979,
            lng: 19.0402,
            type: "szauna"
        },
        {
            name: "Naturista Klub és Közösségi Tér",
            lat: 47.4869,
            lng: 19.0688,
            type: "egyeb"
        }
    ];
    
    // Custom icons for different location types
    const icons = {
        strand: L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34]
        }),
        kemping: L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34]
        }),
        szauna: L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34]
        }),
        egyeb: L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34]
        })
    };
    
    // Add markers to the map
    locations.forEach(location => {
        const marker = L.marker([location.lat, location.lng], {
            icon: icons[location.type] || L.icon.Default
        }).addTo(map);
        
        marker.bindPopup(`<b>${location.name}</b><br>Kattints a részletekért!`);
    });
    
    // Handle filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    const locationItems = document.querySelectorAll('.location-item');
    
    if (filterButtons.length > 0 && locationItems.length > 0) {
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
    }
    
    // Handle search
    const searchInput = document.getElementById('location-search');
    
    if (searchInput && locationItems.length > 0) {
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
}

// Kapcsolat oldal specifikus funkciók
function initContactPage() {
    // Csak akkor futtassa, ha a kapcsolat oldalon vagyunk
    const contactForm = document.getElementById('contactForm');
    const contactMap = document.getElementById('contact-map');
    
    // Contact Form Validation
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Simple form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (name && email && subject && message) {
                // Form is valid, show success message
                alert('Köszönjük üzenetedet! Hamarosan válaszolunk.');
                this.reset();
            } else {
                alert('Kérjük, töltsd ki az összes kötelező mezőt!');
            }
        });
    }
    
    // Initialize the contact page map
    if (contactMap) {
        const map = L.map('contact-map').setView([47.1625, 19.5033], 7);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        // Add markers for each location
        const locations = [
            {
                name: "Délegyházi Naturista Strand",
                lat: 47.2452,
                lng: 19.1126,
                type: "strand"
            },
            {
                name: "Sziksósfürdő",
                lat: 46.2333,
                lng: 20.0833,
                type: "strand"
            },
            {
                name: "Bereki Naturista Kemping",
                lat: 46.7100,
                lng: 17.4776,
                type: "kemping"
            },
            {
                name: "Naturista Szauna Budapest",
                lat: 47.4979,
                lng: 19.0402,
                type: "szauna"
            },
            {
                name: "Naturista Klub és Közösségi Tér",
                lat: 47.4869,
                lng: 19.0688,
                type: "egyeb"
            }
        ];
        
        // Custom icons for different location types
        const icons = {
            strand: L.icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34]
            }),
            kemping: L.icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34]
            }),
            szauna: L.icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34]
            }),
            egyeb: L.icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34]
            })
        };
        
        // Add markers to the map
        locations.forEach(location => {
            const marker = L.marker([location.lat, location.lng], {
                icon: icons[location.type] || L.icon.Default
            }).addTo(map);
            
            marker.bindPopup(`<b>${location.name}</b><br>Kattints a részletekért!`);
        });
    }
}