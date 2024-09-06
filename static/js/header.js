window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const heroBrandName = document.getElementById('hero-brand-name');
    const brandName = document.getElementById('brand-name');
    const scrollY = window.scrollY;

    // Fading effect for navbar and heroBrandName
    if (scrollY > 100) {
        navbar.style.opacity = '1';
    } else {
        navbar.style.opacity = '0';
    }

    // Adjust the opacity of the heroBrandName as the user scrolls down
    heroBrandName.style.opacity = Math.max(1 - scrollY / 200, 0);
});
