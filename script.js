// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// Simple Glitch Effect Simulation for Hero Title
const glitchText = document.querySelector('.glitch-text');
if (glitchText) {
    setInterval(() => {
        const isGlitching = Math.random() > 0.9;
        if (isGlitching) {
            glitchText.style.textShadow = `
                ${Math.random() * 5}px ${Math.random() * 5}px 0px rgba(255, 255, 255, 0.8),
                -${Math.random() * 5}px -${Math.random() * 5}px 0px rgba(255, 255, 255, 0.8)
            `;
            setTimeout(() => {
                glitchText.style.textShadow = 'none';
            }, 100);
        }
    }, 200);
}

// Reveal Elements on Scroll
const revealElements = document.querySelectorAll('.feature-card, .glass-panel');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        } else {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
        }
    });
};

// Initial state for reveal elements
revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
});

window.addEventListener('scroll', revealOnScroll);
// Trigger once on load
revealOnScroll();
