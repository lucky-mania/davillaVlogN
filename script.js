// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initNavigation();
    initCurrentDate();
    initCreators();
    initAnimations();
    initSocialLinks();
    initScrollEffects();
    initTypewriterEffect();
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const icon = navToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.className = 'fas fa-bars';
            
            // Smooth scroll to section
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.className = 'fas fa-bars';
        }
    });
}

// Display current date in newspaper format
function initCurrentDate() {
    const dateElement = document.getElementById('current-date');
    const now = new Date();
    
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    const formattedDate = now.toLocaleDateString('pt-BR', options);
    dateElement.textContent = formattedDate;
}

// Creators data and display
function initCreators() {
    // Easy to edit creators data - just modify this array
    const creators = [
        {
            name: "Criadora 1",
            role: "Desenvolvedora Frontend",
            description: "Especialista em HTML, CSS e JavaScript com foco em experiência do usuário e design responsivo.",
            avatar: "👩‍💻"
        },
        {
            name: "Criadora 2", 
            role: "Desenvolvedora Backend",
            description: "Focada em desenvolvimento de sistemas, banco de dados e arquitetura de software.",
            avatar: "👩‍🔬"
        },
        {
            name: "Criadora 3",
            role: "Designer UX/UI",
            description: "Responsável pelo design visual e experiência do usuário do projeto.",
            avatar: "🎨"
        }
    ];

    const creatorsGrid = document.getElementById('creators-grid');
    
    creators.forEach((creator, index) => {
        const creatorCard = createCreatorCard(creator, index);
        creatorsGrid.appendChild(creatorCard);
    });
}

// Create individual creator card
function createCreatorCard(creator, index) {
    const card = document.createElement('div');
    card.className = 'creator-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    
    card.innerHTML = `
        <div class="creator-avatar">${creator.avatar}</div>
        <h3 class="creator-name">${creator.name}</h3>
        <p class="creator-role">${creator.role}</p>
        <p class="creator-description">${creator.description}</p>
    `;
    
    // Animate card appearance
    setTimeout(() => {
        card.style.transition = 'all 0.6s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, index * 200);
    
    // Add hover sound effect (visual feedback)
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    return card;
}

// Initialize scroll-based animations
function initAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Add staggered animation for multiple elements
                const siblings = Array.from(entry.target.parentNode.children);
                const index = siblings.indexOf(entry.target);
                entry.target.style.animationDelay = `${index * 0.1}s`;
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Social media links functionality
function initSocialLinks() {
    const youtubeBtn = document.getElementById('youtube-btn');
    const instagramBtn = document.getElementById('instagram-btn');
    
    // Add click handlers for social media buttons
    youtubeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Add animation effect
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // Replace with actual YouTube channel URL
        const youtubeURL = 'https://youtube.com/@suaescola';
        showRedirectMessage('YouTube', youtubeURL);
    });
    
    instagramBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Add animation effect
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // Replace with actual Instagram URL
        const instagramURL = 'https://instagram.com/suaescola';
        showRedirectMessage('Instagram', instagramURL);
    });
}

// Show redirect message (can be replaced with actual navigation)
function showRedirectMessage(platform, url) {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
        color: white;
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 1000;
        text-align: center;
        max-width: 400px;
        width: 90%;
        animation: fadeIn 0.3s ease;
    `;
    
    message.innerHTML = `
        <h3 style="margin-bottom: 1rem; color: var(--secondary-color);">Redirecionando para ${platform}</h3>
        <p style="margin-bottom: 1.5rem;">Você será redirecionado para nosso ${platform}.</p>
        <div style="display: flex; gap: 1rem; justify-content: center;">
            <button onclick="window.open('${url}', '_blank')" style="
                background: white;
                color: var(--primary-color);
                border: none;
                padding: 0.75rem 1.5rem;
                border-radius: 25px;
                cursor: pointer;
                font-weight: bold;
                transition: all 0.3s ease;
            ">Ir para ${platform}</button>
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: transparent;
                color: white;
                border: 2px solid white;
                padding: 0.75rem 1.5rem;
                border-radius: 25px;
                cursor: pointer;
                transition: all 0.3s ease;
            ">Cancelar</button>
        </div>
    `;
    
    document.body.appendChild(message);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (message.parentNode) {
            message.remove();
        }
    }, 5000);
}

// Scroll effects for navigation
function initScrollEffects() {
    const nav = document.querySelector('.vintage-nav');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Hide/show navigation on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Parallax effect for header
    const header = document.querySelector('.newspaper-header');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        header.style.transform = `translateY(${scrolled * 0.2}px)`;
    });
}

// Typewriter effect for headlines
function initTypewriterEffect() {
    const headlines = document.querySelectorAll('.headline');
    
    headlines.forEach((headline, index) => {
        const text = headline.textContent;
        headline.textContent = '';
        headline.style.borderRight = '3px solid var(--primary-color)';
        
        setTimeout(() => {
            typeWriter(headline, text, 0);
        }, index * 1000);
    });
}

function typeWriter(element, text, i) {
    if (i < text.length) {
        element.textContent += text.charAt(i);
        setTimeout(() => typeWriter(element, text, i + 1), 100);
    } else {
        // Remove cursor effect
        setTimeout(() => {
            element.style.borderRight = 'none';
        }, 1000);
    }
}

// Interactive elements enhancement
document.addEventListener('DOMContentLoaded', function() {
    // Add interactive hover effects to cards
    const cards = document.querySelectorAll('.course-info-card, .creator-card, .sidebar-box');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 15px 30px var(--shadow-color)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 6px 15px var(--shadow-color)';
        });
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.social-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .social-btn {
            position: relative;
            overflow: hidden;
        }
        
        .vintage-nav.scrolled {
            background-color: rgba(139, 69, 19, 0.95);
            backdrop-filter: blur(10px);
        }
    `;
    document.head.appendChild(style);
});

// Add loading states and smooth transitions
function showLoading(element) {
    element.innerHTML = '<div class="loading"></div>';
}

function hideLoading(element, content) {
    setTimeout(() => {
        element.innerHTML = content;
    }, 500);
}

// Easter egg - Konami code
let konamiCode = [];
const correctCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    
    if (konamiCode.length > correctCode.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.length === correctCode.length && 
        konamiCode.every((code, index) => code === correctCode[index])) {
        
        // Easter egg animation
        document.body.style.animation = 'pulse 2s infinite';
        
        setTimeout(() => {
            document.body.style.animation = '';
            alert('🎉 Parabéns! Você encontrou o easter egg! 🎉\n\nFeito com ❤️ pelas alunas de ADS - Turno Manhã');
        }, 2000);
        
        konamiCode = [];
    }
});

// Accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
    // Add keyboard navigation support
    const focusableElements = document.querySelectorAll(
        'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '3px solid var(--accent-color)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
    
    // Add ARIA labels where needed
    const socialBtns = document.querySelectorAll('.social-btn');
    socialBtns.forEach(btn => {
        const platform = btn.classList.contains('youtube-btn') ? 'YouTube' : 'Instagram';
        btn.setAttribute('aria-label', `Visitar nosso ${platform}`);
    });
});

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced scroll handler for better performance
const debouncedScrollHandler = debounce(function() {
    // Additional scroll-based animations can be added here
    console.log('Scroll event processed');
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);
