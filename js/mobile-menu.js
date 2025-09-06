// ===== MOBILE HAMBURGER MENU FUNCTIONALITY =====

document.addEventListener('DOMContentLoaded', function() {
    
    // Header Mobile Menu
    const headerToggle = document.querySelector('.mobile-menu-toggle');
    const headerMenu = document.querySelector('.mobile-menu');
    const headerOverlay = document.querySelector('.mobile-menu-overlay');
    
    // Footer Mobile Menu
    const footerToggle = document.querySelector('.footer-mobile-toggle');
    const footerMenu = document.querySelector('.footer-mobile-menu');
    const footerOverlay = document.querySelector('.footer-mobile-overlay');
    
    // Header Hamburger Menu
    if (headerToggle && headerMenu) {
        headerToggle.addEventListener('click', function() {
            headerToggle.classList.toggle('active');
            headerMenu.classList.toggle('active');
            if (headerOverlay) {
                headerOverlay.classList.toggle('active');
            }
            document.body.classList.toggle('menu-open');
        });
    }
    
    // Footer Hamburger Menu
    if (footerToggle && footerMenu) {
        footerToggle.addEventListener('click', function() {
            footerToggle.classList.toggle('active');
            footerMenu.classList.toggle('active');
            if (footerOverlay) {
                footerOverlay.classList.toggle('active');
            }
        });
    }
    
    // Close menus when clicking overlay
    if (headerOverlay) {
        headerOverlay.addEventListener('click', function() {
            headerToggle.classList.remove('active');
            headerMenu.classList.remove('active');
            headerOverlay.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    }
    
    if (footerOverlay) {
        footerOverlay.addEventListener('click', function() {
            footerToggle.classList.remove('active');
            footerMenu.classList.remove('active');
            footerOverlay.classList.remove('active');
        });
    }
    
    // Close menus when clicking a link
    const headerLinks = headerMenu?.querySelectorAll('a');
    const footerLinks = footerMenu?.querySelectorAll('a');
    
    if (headerLinks) {
        headerLinks.forEach(link => {
            link.addEventListener('click', function() {
                headerToggle.classList.remove('active');
                headerMenu.classList.remove('active');
                if (headerOverlay) headerOverlay.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }
    
    if (footerLinks) {
        footerLinks.forEach(link => {
            link.addEventListener('click', function() {
                footerToggle.classList.remove('active');
                footerMenu.classList.remove('active');
                if (footerOverlay) footerOverlay.classList.remove('active');
            });
        });
    }
    
    // Close menus on window resize if desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 767) {
            headerToggle?.classList.remove('active');
            headerMenu?.classList.remove('active');
            headerOverlay?.classList.remove('active');
            footerToggle?.classList.remove('active');
            footerMenu?.classList.remove('active');
            footerOverlay?.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});
