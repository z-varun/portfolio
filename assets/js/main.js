// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ==================== RESUME DROPDOWN - CLICK HANDLER ====================
const resumeDropdown = document.getElementById('resumeDropdown');
const resumeDropbtn = document.getElementById('resumeDropbtn');

if (resumeDropbtn && resumeDropdown) {
    // Toggle dropdown on button click
    resumeDropbtn.addEventListener('click', (e) => {
        e.stopPropagation();
        resumeDropdown.classList.toggle('open');
    });

    // Close dropdown when clicking a link
    document.querySelectorAll('.dropdown-option').forEach(link => {
        link.addEventListener('click', () => {
            resumeDropdown.classList.remove('open');
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!resumeDropdown.contains(e.target)) {
            resumeDropdown.classList.remove('open');
        }
    });
}


// ==================== DARK/LIGHT THEME TOGGLE ====================
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const storedTheme = localStorage.getItem('theme') || 'light';

// Set initial theme
if (storedTheme === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    updateThemeIcon();
}

// Theme toggle event
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        // Add transition class for smooth effect
        htmlElement.classList.add('theme-transition');

        // Update theme
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Update button icon
        updateThemeIcon();

        // Remove transition class after animation
        setTimeout(() => {
            htmlElement.classList.remove('theme-transition');
        }, 300);
    });
}

function updateThemeIcon() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const icon = themeToggle.querySelector('i');

    if (currentTheme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        themeToggle.classList.add('dark-mode');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        themeToggle.classList.remove('dark-mode');
    }
}
