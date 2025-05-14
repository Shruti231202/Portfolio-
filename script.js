// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Change background color based on time of day
const body = document.querySelector('body');

const updateBackgroundColor = () => {
    const hours = new Date().getHours();
    if (hours < 6 || hours >= 18) {
        body.style.backgroundColor = '#1a1a1a'; // Dark for night
    } else {
        body.style.backgroundColor = '#ffffff'; // Light for day
    }
};

updateBackgroundColor(); // Run on page load

// Auto-updating footer with current year
const dateElement = document.querySelector('footer p');
if (dateElement) {
    dateElement.textContent = `© ${new Date().getFullYear()} Shruti Gupta. All rights reserved.`;
}
