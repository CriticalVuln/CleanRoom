// === SHARED THEME FUNCTIONALITY ===
// This file handles theme switching across all dashboard pages

// Initialize theme immediately when script loads
initializeTheme();

// Setup theme toggle immediately, with fallback for DOM ready
setupThemeToggle();
document.addEventListener('DOMContentLoaded', function() {
    // Try again in case the first attempt failed
    setupThemeToggle();
});

function initializeTheme() {
    // Check for saved theme preference, migrate old key if needed, or default to light mode
    let currentTheme = localStorage.getItem('dashboard-theme');
    
    // Migration: check for old theme key and migrate it
    if (!currentTheme) {
        const oldTheme = localStorage.getItem('theme');
        if (oldTheme) {
            currentTheme = oldTheme;
            localStorage.setItem('dashboard-theme', oldTheme);
            localStorage.removeItem('theme'); // Clean up old key
        } else {
            currentTheme = 'light'; // Default to light mode
        }
    }
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
}

function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return; // Exit if no theme toggle button found
    
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    
    // Remove any existing event listeners to avoid duplicates
    themeToggle.onclick = null;
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('dashboard-theme', newTheme);
        updateThemeIcon();
    });
}

function updateThemeIcon() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return; // Exit if no theme toggle button found
    
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    
    if (!sunIcon || !moonIcon) return; // Exit if icons not found
    
    const theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
}
