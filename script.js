document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 1000);
        }, 500);
    });

    // Reveal animations on scroll
    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', reveal);
    reveal();

    // Sticky Navbar & Dynamic Background
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    // Login Modal
    const modal = document.getElementById('login-modal');
    const loginTrigger = document.getElementById('login-trigger');
    const closeModal = document.querySelector('.close-modal');

    loginTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Mock Login
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.querySelector('input[type="email"]').value;
        const navItem = document.getElementById('login-nav-item');

        // Simulating login - just change the navbar item
        navItem.innerHTML = `<a href="#" class="login-btn">Hello, ${email.split('@')[0]}</a>`;
        modal.style.display = 'none';
        alert('Welcome to Kerala Spice Aryanad!');
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        if (navLinks.style.display === 'flex') {
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'rgba(27, 67, 50, 0.95)';
            navLinks.style.padding = '2rem';

            navLinks.querySelectorAll('li').forEach(li => {
                li.style.margin = '1rem 0';
                li.style.textAlign = 'center';
            });
        }
    });

    // Menu Filtering
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuCards = document.querySelectorAll('.menu-card');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');

            menuCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });

    // Form Submission (Mock)
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.querySelector('input[type="text"]').value;
        alert(`Thank you, ${name}! We've received your message.`);
        contactForm.reset();
    });
});
