document.addEventListener('DOMContentLoaded', () => {
    // Loads both simultaneously for better performance
    Promise.all([
        loadComponent('/components/nav.html', 'navbar-placeholder'),
        loadComponent('/components/footer.html', 'footer-placeholder')
    ]);
});

async function loadComponent(url, placeholderId) {
    const placeholder = document.getElementById(placeholderId);
    if (!placeholder) return;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const html = await response.text();
        placeholder.innerHTML = html;
    } catch (error) {
        console.error(`Failed to load ${url}:`, error);
    }
}