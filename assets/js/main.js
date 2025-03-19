/**
 * Magyar Naturizmus - Egyszerűsített JS funkcionalitás
 */

document.addEventListener('DOMContentLoaded', function() {
    // Back to top gomb funkcionalitás
    let backToTopButton = document.getElementById("btn-back-to-top");

    if (backToTopButton) {
        window.onscroll = function() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        };

        backToTopButton.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Képek hibakezelése
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function() {
            const seed = Math.floor(Math.random() * 1000);
            this.src = 'https://picsum.photos/seed/' + seed + '/800/600';
        };
    });
    
    // Helyszínek szűrői, ha léteznek
    const filterButtons = document.querySelectorAll('.filter-btn');
    const locationItems = document.querySelectorAll('.location-item');
    
    if (filterButtons.length > 0 && locationItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Szűrési logika...
            });
        });
    }
});