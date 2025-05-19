"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const triggerLinkIds = ['more', 'nav-features', 'nav-videos', 'nav-gallery'];
    triggerLinkIds.forEach(id => {
        const linkElement = document.getElementById(id);
        if (linkElement) {
            linkElement.addEventListener('click', (event) => {
                const showElement = document.getElementById('show');
                const footerElement = document.getElementById('footer');
                if (showElement) {
                    showElement.classList.remove('hidden');
                }
                if (footerElement) {
                    footerElement.classList.remove('fixed');
                }
            });
        }
    });
});
//    const triggerLinkIds = ['more', 'nav-features', 'nav-videos'];
