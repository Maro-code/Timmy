document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. MOBILE MENU TOGGLE (FIXED)
    // ==========================================
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            // Toggle the active class on the menu (slide in/out)
            navMenu.classList.toggle('active');
            // Toggle the active class on the hamburger (turn lines to X)
            hamburger.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // ==========================================
    // 2. X-RAY CURSOR LOGIC
    // ==========================================
    const cursor = document.querySelector('.cursor-dot');
    
    // Only run on desktop
    if (cursor && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .project-card');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('active');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('active');
            });
        });
    }

    // ==========================================
    // 3. SCROLL CHARACTER ("T") LOGIC
    // ==========================================
    const scrollChar = document.querySelector('.scroll-character');
    
    if (scrollChar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = scrollTop / docHeight;
            const screenWidth = window.innerWidth - 60;
            const newPos = scrollPercent * screenWidth;

            scrollChar.style.transform = `translateX(${20 + newPos}px)`;
        });
    }

    // ==========================================
    // 4. SMOOTH SCROLLING
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================
    // 5. SCROLL ANIMATIONS (Fade In)
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Optional: Stop observing once it has appeared
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.about-content, .project-card, .case-section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ==========================================
    // --- Form Handling (AJAX) ---
const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    async function handleFormSubmit(e) {
        e.preventDefault(); // STOP REDIRECT

        const form = e.target;
        const submitBtn = form.querySelector('.submit-btn'); // Change selector if button class differs
        const originalText = submitBtn ? submitBtn.textContent : 'Send';

        // Loading State
        if (submitBtn) {
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
        }

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                form.reset();
                showNotification('Message sent successfully! 🚀', 'success');
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    showNotification(data["errors"].map(error => error["message"]).join(", "), 'error');
                } else {
                    showNotification('Oops! There was a problem sending your message.', 'error');
                }
            }
        } catch (error) {
            showNotification('Network error. Please check your connection.', 'error');
        } finally {
            if (submitBtn) {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        }
    }

    // --- Notification Popup ---
    function showNotification(message, type) {
        let notification = document.querySelector('.notification-popup');
        
        // Create it if it doesn't exist
        if (!notification) {
            notification = document.createElement('div');
            notification.className = 'notification-popup';
            // Inline styles to ensure it works even if CSS is missing
            notification.style.position = 'fixed';
            notification.style.left = '50%';
            notification.style.transform = 'translateX(-50%)';
            notification.style.zIndex = '10000';
            notification.style.padding = '1rem 2rem';
            notification.style.borderRadius = '50px';
            notification.style.color = 'white';
            notification.style.fontWeight = 'bold';
            notification.style.transition = 'top 0.5s ease';
            notification.style.top = '-100px'; 
            notification.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
            notification.style.display = 'flex';
            notification.style.alignItems = 'center';
            document.body.appendChild(notification);
        }

        // Set Color based on type
        if (type === 'success') notification.style.backgroundColor = '#10b981';
        else notification.style.backgroundColor = '#ef4444';

        notification.textContent = message;

        // Show
        setTimeout(() => { notification.style.top = '30px'; }, 10);

        // Hide after 4 seconds
        setTimeout(() => { notification.style.top = '-100px'; }, 4000);
    }
});