/* =========================================
   1. PROJECT DATA
   ========================================= */
const projectData = {
    'access-more': {
        title: 'Ecowatch',
        subtitle: 'A UX case study on prioritizing speed, trust, and verified data in crisis reporting.',
        tag: 'Mobile App',
        // ADD THE LINK HERE
        prototypeLink: 'https://www.figma.com/proto/AyP0nfIWgUJ1zvqUrflMY8/Portfolio?page-id=56%3A197&node-id=117-2420&p=f&viewport=1218%2C1511%2C0.36&t=0HzK9i3Qlb9HnWHs-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=89%3A2727',
        images: [
            './images/ecopage1.png',
            './images/ecopage2.png',
            './images/ecopage3.png'
        ],
        caseStudy: {
            overview: {
                title: 'Project Overview',
                content: `Ecowatch is a concept for a community-powered safety utility designed to keep users informed about environmental hazards and civil unrest. The goal is to move away from the "social media" model of safety reporting and propose a "map-first" utility that prioritizes speed and verified data. `
            },
            problem: {
                title: 'The Problem',
                content: `In a crisis, current platforms (like X/Twitter) fail to provide clear, actionable data. Users are forced to sift through hashtags, opinions, and old posts to find safety information.`,
                list: [
                    'Social Noise vs. Safety Signal: Urgent alerts are often buried under a wall of hashtags, opinions, and irrelevant posts. Users struggle to filter facts from viral content.',
                    'Lack of Spatial Context: Reading a post that says "Flood in Ojuelegba" requires the user to mentally map where that is relative to their current location. This cognitive load delays decision-making.',
                    'Slow Reporting Friction: Most platforms require users to type captions and select tags to post. In a crisis (e.g., a fire or robbery), users need to report in seconds, not minutes.'
                ]
            },
            solution: {
                title: 'The Solution',
                content: `My design proposal centers on a Map-First Architecture. Instead of a feed, the user opens the app to an immediate visualization of their surroundings.
                        I established a universal color system to reduce cognitive load during high-stress moments:`,
                list: [
                    '🔴Red (Danger): Critical threats (Floods, Fire, Violence)',
                    '🟡 Yellow (Caution): Situational awareness (Traffic, Roadwork)',
                    '🟢 Green (Safe): Verified safe routes and zones.',
                    'The "like" button was replaced with a "Verify" shields. This would simply ensure only accurate  information is disseminated'
                ]
            },
            outcome: {
                title: 'Use Case Scenario',
                content: `David, a commuter driving home to Ikeja during a sudden downpour. When traffic grinds to a halt, he opens Ecowatch and—instead of scrolling through a cluttered news feed—is immediately presented with a live map showing a pulsing red cluster 2km ahead. By swiping up the incident card, he instantly sees a "Severe Flooding" report verified by 23 other users. Armed with this confirmed real-time data, David identifies the blocked route and chooses a safer green alternative, tapping the "Confirm" shield as he passes to validate the safe route for drivers behind him.`
            }
        }
    },
    'coffee': {
        title: 'Daily Focus',
        subtitle: 'A micro‑experience for intentional prioritization',
        tag: 'Mobile App',
        // ADD THE LINK HERE
        prototypeLink: 'https://www.figma.com/proto/AyP0nfIWgUJ1zvqUrflMY8/Portfolio?page-id=56%3A198&node-id=56-199&p=f&viewport=386%2C249%2C0.47&t=hAaPmiENLDtIGeXV-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=56%3A199',
        images: ['./images/Focus1.png', 
                './images/Focus2.png', 
                './images/Focus3.png', 
                './images/Focus4.png'],
        caseStudy: {
            overview: { 
                title: 'Project Overview', 
                content: 'Daily Focus is a minimalist mobile micro‑experience designed to help users identify and commit to one meaningful priority for the day. Instead of functioning as a full productivity or task‑management app, it focuses on a single moment: helping users decide what truly matters today.' },
            problem: { 
                title: 'The Problem', content: 'Many people begin their day feeling mentally overloaded. Notifications, task lists, and competing responsibilities make it difficult to decide where to start. While most productivity tools aim to solve this with more features, they often introduce additional cognitive load.As a result, users:',
                list: ['Struggle to identify their true priority', 'Jump between tasks without commitment','Feel pressured rather than supported by productivity tools']},
            solution: { title: 'The Solution', content: 'Daily Focus offers a calm, distraction‑free experience that helps users:', list: ['Pause and reflect', 'Choose one clear focus for the day','Commit to it intentionally'] },
            process: { title: 'Design Process', content: 'The design process focused on clarity, restraint, and speed. The experience was intentionally constrained to a mobile‑only flow of four screens to prevent feature creep and reduce cognitive load. A linear user flow was chosen so users could complete the experience in under a minute, moving from intention‑setting to commitment without distractions. Visual and interaction decisions emphasized minimalism, single‑choice prioritization, calm language, and gentle commitment, with optional time awareness included only to support focus rather than performance tracking.' },
            outcome: { title: 'Use Case Scenario', content: 'A user opens Daily Focus at the start of their day. They are prompted with a simple question: “What deserves your focus today?” Instead of reviewing a long task list, they reflect briefly and enter one clear intention—such as “Complete project proposal.” After reviewing their choice, they commit to it. The focus is then locked, providing a single reference point they can return to whenever they feel distracted. The experience ends quickly, leaving the user with clarity rather than obligation.' }
        }
    }
};

/* =========================================
   2. MAIN INITIALIZATION (Runs on Load)
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    // --- B. GLOBAL INTERACTIVE ELEMENTS (Cursor & Scroll) ---
    initCursor();
    initScrollCharacter();

    // --- C. PROJECT PAGE SPECIFIC LOGIC ---
    // Only run this if we are actually on the project details page
    if (document.getElementById('project-title')) {
        loadProjectData();
        initCarousel();
    }
});

/* =========================================
   3. HELPER FUNCTIONS
   ========================================= */

// --- Project Loading Logic ---
function getProjectFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('project') || 'access-more';
}

function loadProjectData() {
    const projectId = getProjectFromURL();
    const project = projectData[projectId];

    if (!project) {
        return;
    }

    // Safety Check: Do elements exist?
    const titleEl = document.getElementById('project-title');
    if (!titleEl) return; 

    // Update Text Content
    document.getElementById('project-tag').textContent = project.tag;
    titleEl.textContent = project.title;
    document.getElementById('project-subtitle').textContent = project.subtitle;

    // --- NEW CODE: UPDATE PROTOTYPE BUTTON ---
    const protoBtn = document.getElementById('prototypebtn');
    if (protoBtn) {
        if (project.prototypeLink) {
            // If link exists in data, set it
            protoBtn.href = project.prototypeLink;
            protoBtn.style.display = 'inline-block'; // Ensure it's visible
        } else {
            // Optional: Hide button if no link exists for this project
            protoBtn.style.display = 'none'; 
        }
    }
    // -----------------------------------------

    // Load Carousel Images
    const carouselSlides = document.getElementById('carousel-slides');
    const carouselIndicators = document.getElementById('carousel-indicators');
    
    if (carouselSlides) {
        carouselSlides.innerHTML = '';
        carouselIndicators.innerHTML = '';

        project.images.forEach((image, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.innerHTML = `<img src="${image}" alt="${project.title} - Image ${index + 1}">`;
            carouselSlides.appendChild(slide);

            const indicator = document.createElement('div');
            indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
            indicator.addEventListener('click', () => goToSlide(index));
            carouselIndicators.appendChild(indicator);
        });
    }

    // Load Case Study (This part remains the same)
    const caseStudyContent = document.getElementById('case-study-content');
    if (caseStudyContent) {
        caseStudyContent.innerHTML = '';
        if (project.caseStudy) {
             Object.values(project.caseStudy).forEach(section => {
                const sectionDiv = document.createElement('div');
                sectionDiv.className = 'case-section';
                
                // Build HTML safely
                let html = '';
                if (section.title) html += `<h3>${section.title}</h3>`;
                if (section.content) html += `<p>${section.content}</p>`;
                
                if (section.list && Array.isArray(section.list)) {
                    html += '<ul>';
                    section.list.forEach(item => html += `<li>${item}</li>`);
                    html += '</ul>';
                }
                
                sectionDiv.innerHTML = html;
                caseStudyContent.appendChild(sectionDiv);
            });
        }
    }

    document.title = `${project.title} - Project Details`;
}

// --- Carousel Logic ---
let currentSlide = 0;

function initCarousel() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });

    // Touch gestures
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    if (carouselWrapper) {
        let touchStartX = 0;
        let touchEndX = 0;
        carouselWrapper.addEventListener('touchstart', (e) => touchStartX = e.changedTouches[0].screenX);
        carouselWrapper.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchEndX < touchStartX - 50) nextSlide();
            if (touchEndX > touchStartX + 50) prevSlide();
        });
    }
}

function updateCarousel() {
    const slideElements = document.querySelectorAll('.carousel-slide');
    const indicatorElements = document.querySelectorAll('.indicator');
    const slidesContainer = document.getElementById('carousel-slides');
    
    if (slideElements.length > 0 && slidesContainer) {
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        indicatorElements.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.carousel-slide').length;
    if (totalSlides === 0) return;
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    const totalSlides = document.querySelectorAll('.carousel-slide').length;
    if (totalSlides === 0) return;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

// --- UI Logic (Cursor & Scroll) ---
function initCursor() {
    const cursor = document.querySelector('.cursor-dot');
    if (cursor && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        document.querySelectorAll('a, button, input, textarea, select, .carousel-btn').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('active'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
        });
    }
}

function initScrollCharacter() {
    const scrollChar = document.querySelector('.scroll-character');
    if (scrollChar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = scrollTop / (docHeight || 1); // Avoid divide by zero
            const screenWidth = window.innerWidth - 60;
            const newPos = scrollPercent * screenWidth;
            scrollChar.style.transform = `translateX(${20 + newPos}px)`;
        });
    }
}
