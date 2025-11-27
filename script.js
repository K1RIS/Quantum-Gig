/**
 * Quantum Gig - Main JavaScript File
 * Handles navigation and smooth scrolling functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation buttons
    const navButtons = document.querySelectorAll('.nav-btn');

    // Add click event listener to each navigation button
    navButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Get the target section ID from data-target attribute
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Calculate offset for fixed navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;

                // Smooth scroll to target section
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect for navbar (optional enhancement)
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const currentScrollY = window.scrollY;

        // Add shadow on scroll
        if (currentScrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }

        lastScrollY = currentScrollY;
    });
});
