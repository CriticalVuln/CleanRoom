// === SHARED THEME FUNCTIONALITY ===
// This file handles theme switching across all dashboard pages

// Immediate theme application function - call this in <head> to prevent FOUC
function applyThemeImmediately() {
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
    
    // Apply theme immediately to prevent flash
    document.documentElement.setAttribute('data-theme', currentTheme);
}

// Initialize theme immediately when script loads
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    setupThemeToggle();
});

// Also try to initialize immediately in case DOMContentLoaded already fired
if (document.readyState === 'loading') {
    // DOM is still loading, wait for DOMContentLoaded
} else {
    // DOM is already loaded, initialize immediately
    initializeTheme();
    setupThemeToggle();
}

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
            console.log(`Migrated theme from old key: ${oldTheme}`);
        } else {
            currentTheme = 'light'; // Default to light mode
            console.log('No saved theme found, defaulting to light mode');
        }
    } else {
        console.log(`Found saved theme: ${currentTheme}`);
    }
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    console.log(`Theme initialized to: ${currentTheme}`);
    updateThemeIcon();
}

function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) {
        console.warn('Theme toggle button not found! Make sure element with id="themeToggle" exists.');
        return; // Exit if no theme toggle button found
    }
    
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    
    if (!sunIcon || !moonIcon) {
        console.warn('Theme toggle icons not found! Make sure .sun-icon and .moon-icon elements exist inside the theme toggle button.');
        return; // Exit if icons not found
    }
    
    // Remove any existing event listeners to avoid duplicates
    themeToggle.onclick = null;
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        console.log(`Switching theme from ${currentTheme} to ${newTheme}`);
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('dashboard-theme', newTheme);
        updateThemeIcon();
    });
    
    console.log('Theme toggle setup completed successfully');
}

function updateThemeIcon() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) {
        console.warn('Theme toggle button not found during icon update!');
        return; // Exit if no theme toggle button found
    }
    
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    
    if (!sunIcon || !moonIcon) {
        console.warn('Theme icons not found during icon update!');
        return; // Exit if icons not found
    }
    
    const theme = document.documentElement.getAttribute('data-theme');
    console.log(`Updating theme icon for theme: ${theme}`);
    
    if (theme === 'dark') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
}
