document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
});

async function loadNavbar() {
    try {
        const response = await fetch('/components/nav.html'); 
        const html = await response.text();
        document.getElementById('navbar-placeholder').innerHTML = html;
    } catch (error) {
        console.error('Failed to load navbar:', error);
    }
}