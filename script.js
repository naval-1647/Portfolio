// ===================================
// SMOOTH SCROLL & NAVIGATION
// ===================================

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (window.innerWidth <= 968) {
                navMenu.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        }
    });
});

// ===================================
// MOBILE MENU TOGGLE
// ===================================

const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

// ===================================
// NAVBAR SCROLL EFFECT & HIGHLIGHTING
// ===================================

const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    // Add shadow to navbar on scroll
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Highlight active section in navbar
    let current = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===================================
// SCROLL ANIMATIONS (FADE IN)
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// ===================================
// CONTACT FORM VALIDATION
// ===================================

const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const formSuccess = document.getElementById('form-success');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Show error message
function showError(input, message) {
    const errorElement = document.getElementById(`${input.id}-error`);
    errorElement.textContent = message;
    errorElement.classList.add('show');
    input.style.borderColor = '#ff4757';
}

// Clear error message
function clearError(input) {
    const errorElement = document.getElementById(`${input.id}-error`);
    errorElement.textContent = '';
    errorElement.classList.remove('show');
    input.style.borderColor = '';
}

// Validate name
function validateName() {
    const name = nameInput.value.trim();
    
    if (name === '') {
        showError(nameInput, 'Name is required');
        return false;
    } else if (name.length < 2) {
        showError(nameInput, 'Name must be at least 2 characters');
        return false;
    } else {
        clearError(nameInput);
        return true;
    }
}

// Validate email
function validateEmail() {
    const email = emailInput.value.trim();
    
    if (email === '') {
        showError(emailInput, 'Email is required');
        return false;
    } else if (!emailRegex.test(email)) {
        showError(emailInput, 'Please enter a valid email address');
        return false;
    } else {
        clearError(emailInput);
        return true;
    }
}

// Validate message
function validateMessage() {
    const message = messageInput.value.trim();
    
    if (message === '') {
        showError(messageInput, 'Message is required');
        return false;
    } else if (message.length < 10) {
        showError(messageInput, 'Message must be at least 10 characters');
        return false;
    } else {
        clearError(messageInput);
        return true;
    }
}

// Real-time validation on input
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
messageInput.addEventListener('blur', validateMessage);

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isMessageValid) {
        // Show success message
        formSuccess.textContent = '✓ Thank you! Your message has been sent successfully. I\'ll get back to you soon!';
        formSuccess.classList.add('show');

        // Clear form
        contactForm.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            formSuccess.classList.remove('show');
        }, 5000);

        // In a real application, you would send the form data to a server here
        console.log('Form submitted:', {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        });
    }
});

// ===================================
// DOWNLOAD RESUME FUNCTIONALITY
// ===================================

const downloadResumeBtn = document.getElementById('download-resume');

downloadResumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Download the resume PDF
    const link = document.createElement('a');
    link.href = 'assets/Naval_Kishor_Jha_Resume.pdf';
    link.download = 'Naval_Kishor_Jha_Resume.pdf';
    link.click();
});

// ===================================
// TYPING EFFECT FOR HERO (OPTIONAL)
// ===================================

// Uncomment if you want a typing effect for the hero subtitle
/*
const subtitleElement = document.querySelector('.hero-subtitle');
const subtitleText = 'Backend Developer | Python | Django | FastAPI | MongoDB';
let charIndex = 0;

function typeEffect() {
    if (charIndex < subtitleText.length) {
        subtitleElement.textContent += subtitleText.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 50);
    }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    subtitleElement.textContent = '';
    setTimeout(typeEffect, 500);
});
*/

// ===================================
// PERFORMANCE: LAZY LOADING IMAGES
// ===================================

// If you add images later, you can use this for lazy loading
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
});

// ===================================
// SCROLL TO TOP BUTTON (OPTIONAL)
// ===================================

// Uncomment if you want to add a scroll-to-top button
/*
// Create scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #00d4ff, #00ff88);
    color: #0a0e27;
    border: none;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    font-size: 1.2rem;
    box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
`;

document.body.appendChild(scrollTopBtn);

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

// Scroll to top on click
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'translateY(-5px)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'translateY(0)';
});
*/

// ===================================
// INITIALIZE ON PAGE LOAD
// ===================================

window.addEventListener('load', () => {
    // Trigger initial scroll event to set active nav link
    window.dispatchEvent(new Event('scroll'));
    
    // Add visible class to hero content immediately
    document.querySelector('.hero-content').classList.add('visible');
    
    console.log('Portfolio website loaded successfully! 🚀');
});

// ===================================
// CURSOR TRAIL EFFECT (OPTIONAL)
// ===================================

// Uncomment for a cool cursor trail effect
/*
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll('.circle');

circles.forEach(function (circle) {
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener('mousemove', function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + 'px';
        circle.style.top = y - 12 + 'px';
        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();
*/
