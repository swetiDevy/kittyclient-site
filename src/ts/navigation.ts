// TypeScript interface for nav link mapping
interface NavLinkMap {
    [key: string]: string;
}

// tutaj moge dodac wiecej zeczy z nava
const navLinkMapping: NavLinkMap = {
    '#home': 'nav-home',
    '#videos': 'nav-videos',
    '#features': 'nav-features',
    '#gallery': 'nav-gallery',
    'getajob.html': 'nav-job'
};


const activeClasses: string[] = ['text-white', 'border-b-2', 'border-white'];
const inactiveClasses: string[] = ['text-gray-400', 'hover:border-b-2', 'hover:border-gray-400'];

//znajdzie i podkresli zeczy z nava
function setActiveNavLink(): void {
    // Get all navigation links
    const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.nav-link');

    // Remove active class from all links
    navLinks.forEach((link: HTMLAnchorElement): void => {
        link.classList.remove(...activeClasses);
        link.classList.add(...inactiveClasses);
    });

    // Get current hash from URL (default to #home if not set)
    let currentPath: string = window.location.hash || '#home';

    // Special case for the job page
    /*if (window.location.pathname.includes('getajob.html')) {
        currentPath = 'getajob.html';
    }*/

    // Get the element ID for the current path
    const activeElementId: string = navLinkMapping[currentPath];

    // Find the active element and update its classes
    if (activeElementId) {
        const activeLink: HTMLElement | null = document.getElementById(activeElementId);

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