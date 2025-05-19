"use strict";
// tutaj moge dodac wiecej zeczy z nava
const navLinkMapping = {
    '#home': 'nav-home',
    '#videos': 'nav-videos',
    '#features': 'nav-features',
    '#gallery': 'nav-gallery',
    'getajob.html': 'nav-job'
};
const activeClasses = ['text-white', 'border-b-2', 'border-white'];
const inactiveClasses = ['text-gray-400', 'hover:border-b-2', 'hover:border-gray-400'];
//znajdzie i podkresli zeczy z nava
function setActiveNavLink() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    // Remove active class from all links
    navLinks.forEach((link) => {
        link.classList.remove(...activeClasses);
        link.classList.add(...inactiveClasses);
    });
    // Get current hash from URL (default to #home if not set)
    let currentPath = window.location.hash || '#home';
    // Special case for the job page
    /*if (window.location.pathname.includes('getajob.html')) {
        currentPath = 'getajob.html';
    }*/
    // Get the element ID for the current path
    const activeElementId = navLinkMapping[currentPath];
    // Find the active element and update its classes
    if (activeElementId) {
        const activeLink = document.getElementById(activeElementId);
        if (activeLink) {
            activeLink.classList.remove(...inactiveClasses);
            activeLink.classList.add(...activeClasses);
        }
    }
}
// Event listeners
// Uruchom, gdy strona się załaduje
document.addEventListener('DOMContentLoaded', setActiveNavLink);
// Uruchom za każdym razem, gdy hash się zmieni
window.addEventListener('hashchange', setActiveNavLink);
