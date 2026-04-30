document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-links a, .navbar-blog-btn');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            window.location.href = href; // Redirect to index.html with hash
        });
    });
});

// Scroll snapping based on window width
if (window.innerWidth > 768) {
    // Enable section blocking or scroll snapping
    document.querySelector('#tech-wheel').style.scrollSnapType = 'y mandatory';
} else {
    // Disable section blocking for smooth scrolling
    document.querySelector('#tech-wheel').style.scrollSnapType = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    // Tech Wheel Variables
    const techWheelSection = document.getElementById('tech-wheel');
    const techWheel = document.getElementById('techWheel');
    const webDevText = document.getElementById('webDevText');
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.getElementById('progress-text');
    const scrollHint = document.querySelector('.scroll-hint');
    const body = document.body;

    const techItems = [
        { id: 'competitive', name: 'PHOTOGRAPHER', desc: 'Capture Vibrant Moments during events and acttivites.Mainly Focus On The Caputure Moments During Events or Activities.', url: '' },
        { id: 'design', name: 'Graphics Designer', desc: 'The GRAPHICS Design Members Works On  to UI/UX and graphic design using Figma.', url: '' },
        { id: 'web', name: 'Web Development', desc: 'The Web Development WOrk On website And Teach In Campus about Web Development.', url: '' },
        { id: 'ai', name: 'VIDEO EDITOR', desc: 'The Video Editing Wing teaches the art of video storytelling using tools like Premiere Pro and CapCut, where members work on editing reels, promotional videos, and event highlights to craft engaging and dynamic visual stories.', url: '' },
        { id: 'cyber', name: 'PR ', desc: 'WIll Be Added Soon', url: '' },
        { id: 'app', name: 'App Development', desc: 'The App Development Wing focuses on building Android and iOS apps.', url: '' },
        { id: 'blockchain', name: 'CONTENT WRITER', desc: 'TWIll Be Added Soon', url: '' },
        { id: 'foss', name: 'Web DEVELOPER ', desc: 'WIll Be Added Soon', url: '' }
    ];

    let currentRotation = 0;
    let targetRotation = 0;
    let isWheelActive = false;
    let scrollLocked = false;
    let rotationCompleted = false;
    let isDragging = false;
    let lastX = 0;
    let rotationSpeed = 0;
    let totalRotation = 0;
    const techItemElements = [];
    const easing = 0.05;
    const maxSpeed = 1.5;
    let currentActiveItem = null;
    let isNavigating = false;

    // Navbar Variables
    const navLinks = document.querySelectorAll('.navbar-links a, .navbar-blog-btn');
    const sections = document.querySelectorAll('section[id], footer[id]');

    // Check if device is mobile
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Update active link based on scroll position for mobile
    function updateActiveLink() {
        if (isMobile()) {
            const hash = window.location.hash;
            if (!hash || hash === '#home') {
                navLinks.forEach(link => link.classList.remove('active'));
                document.querySelector('.navbar-links a[href="#home"]').classList.add('active');
            }
        }
    }

    function createTechItems() {
        if (isMobile()) {
            techWheel.innerHTML = ''; // Clear wheel content on mobile
            return;
        }
        techItems.forEach((item, index) => {
            const techItem = document.createElement('div');
            techItem.className = 'tech-item';
            techItem.dataset.id = item.id;

            const dot = document.createElement('div');
            dot.className = 'dot';

            const span = document.createElement('span');
            span.textContent = item.name;

            techItem.appendChild(dot);
            techItem.appendChild(span);
            techWheel.appendChild(techItem);

            const angle = index * (360 / techItems.length);
            techItemElements.push({ element: techItem, angle, data: item });
        });
    }

    function openPage(url) {
        try {
            window.open('./' + url, '_blank', 'noopener,noreferrer');
        } catch (err) {
            console.error('Failed to open page:', err);
            window.location.href = './' + url;
        }
    }

    function updateContent(item) {
        if (isMobile()) return; // Skip content update on mobile
        if (currentActiveItem && currentActiveItem.id === item.id) return;
        currentActiveItem = item;

        webDevText.innerHTML = '';
        const h3 = document.createElement('h3');
        h3.textContent = `${item.name} Wing`;

        const p = document.createElement('p');
        p.textContent = item.desc;

        const readMoreLink = document.createElement('a');
        readMoreLink.className = 'read-more';
        readMoreLink.href = './' + item.url;
        readMoreLink.setAttribute('target', '_blank');
        readMoreLink.textContent = 'Read More →';
        readMoreLink.onclick = (e) => {
            e.preventDefault();
            openPage(item.url);
        };

        webDevText.appendChild(h3);
        webDevText.appendChild(p);
        webDevText.appendChild(readMoreLink);
    }

    function animate() {
        if (isMobile()) return; // Skip animation on mobile
        const delta = targetRotation - currentRotation;
        const rotationChange = delta * easing;

        if (!isDragging) {
            rotationSpeed *= 0.92;
            if (Math.abs(rotationSpeed) < 0.01) rotationSpeed = 0;
            currentRotation += rotationSpeed;
            totalRotation += Math.abs(rotationSpeed);
        }

        currentRotation += rotationChange;
        totalRotation += Math.abs(rotationChange);

        updateWheel();
        requestAnimationFrame(animate);
    }

    function updateWheel() {
        if (isMobile()) return; // Skip wheel update on mobile
        techWheel.style.transform = `translate(-50%, -50%) rotate(${currentRotation}deg)`;

        techItemElements.forEach(({ element, angle, data }) => {
            const currentAngle = angle + currentRotation;
            const translateX = window.innerWidth < 900 ? 250 : 400;
            element.style.transform = `rotate(${currentAngle}deg) translateX(${translateX}px) rotate(${-currentAngle}deg)`;

            const normalized = (currentAngle + 360) % 360;
            const diff = Math.min(
                Math.abs((normalized - 230 + 360) % 360),
                Math.abs((230 - normalized + 360) % 360)
            );

            if (diff < 30) {
                element.classList.add('active');
                if (diff < 15) {
                    updateContent(data);
                }
            } else {
                element.classList.remove('active');
            }
        });

        updateProgress();
    }

    function updateProgress() {
        if (isMobile()) return; // Skip progress update on mobile
        const progress = Math.min((totalRotation / 230) * 100, 100);
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}%`;

        if (progress >= 100 && !rotationCompleted) {
            rotationCompleted = true;
            scrollLocked = false;
            body.classList.remove('scroll-locked');
            if (scrollHint) scrollHint.classList.add('hidden');
        }
    }

    function resetWheelState() {
        if (isMobile()) return; // Skip wheel state reset on mobile
        rotationCompleted = false;
        scrollLocked = true;
        isWheelActive = true;
        body.classList.add('scroll-locked');
        if (scrollHint) scrollHint.classList.remove('hidden');
        currentRotation = 0;
        targetRotation = 0;
        totalRotation = 0;
        updateWheel();
    }

    function setupEventListeners() {
        if (isMobile()) return; // Skip event listeners on mobile
        techWheelSection.addEventListener('mousedown', startDrag);
        techWheelSection.addEventListener('touchstart', startDrag, { passive: false });
        window.addEventListener('wheel', handleWheelEvent, { passive: false });
        window.addEventListener('touchmove', preventDefaultScroll, { passive: false });
        window.addEventListener('scroll', preventDefaultScroll, { passive: false });
        window.addEventListener('resize', handleResize);
    }

    function startDrag(e) {
        if (isMobile() || !isWheelActive || rotationCompleted) return;
        if (e.target.closest('.tech-item') || e.target.closest('.read-more')) {
            return;
        }

        isDragging = true;
        lastX = e.clientX || e.touches[0].clientX;
        e.preventDefault();
        document.addEventListener('mousemove', drag);
        document.addEventListener('touchmove', drag, { passive: false });
        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchend', endDrag);
    }

    function drag(e) {
        if (!isDragging) return;
        const currentX = e.clientX || e.touches[0].clientX;
        const deltaX = currentX - lastX;
        lastX = currentX;
        rotationSpeed = deltaX * 0.15;
        rotationSpeed = Math.min(Math.max(rotationSpeed, -maxSpeed), maxSpeed);
        targetRotation += rotationSpeed;
    }

    function endDrag() {
        isDragging = false;
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('touchmove', drag);
        document.removeEventListener('mouseup', endDrag);
        document.removeEventListener('touchend', endDrag);
    }

    function handleWheelEvent(e) {
        if (isMobile() || !isWheelActive || rotationCompleted) return;
        if (e.target.closest('.tech-item') || e.target.closest('.read-more')) {
            return;
        }

        if (scrollLocked) {
            e.preventDefault();
            const delta = e.deltaY > 0 ? 0.3 : -0.3;
            targetRotation += delta;
            return false;
        }
    }

    function preventDefaultScroll(e) {
        if (isMobile()) return; // Allow normal scrolling on mobile
        if (scrollLocked && isWheelActive && !e.target.closest('.tech-item') && !e.target.closest('.read-more')) {
            e.preventDefault();
            return false;
        }
    }

    function handleResize() {
        adjustWheelForScreenSize();
        updateActiveLink();
        if (isMobile()) {
            // Disable wheel functionality on mobile
            isWheelActive = false;
            scrollLocked = false;
            body.classList.remove('scroll-locked');
            if (scrollHint) scrollHint.classList.add('hidden');
            techWheel.innerHTML = ''; // Clear wheel content
            document.querySelector('#tech-wheel').style.scrollSnapType = 'none';
        } else {
            // Reinitialize wheel on desktop if needed
            if (!techWheel.innerHTML) {
                createTechItems();
                if (techItems.length > 0) {
                    updateContent(techItems[0]);
                }
            }
            document.querySelector('#tech-wheel').style.scrollSnapType = 'y mandatory';
        }
    }

    function initWheel() {
        if (isMobile()) return; // Skip initialization on mobile
        createTechItems();
        resetWheelState();
        animate();
        setupEventListeners();

        if (techItems.length > 0) {
            updateContent(techItems[0]);
        }
    }

    // IntersectionObserver for tech wheel
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && (!isNavigating || window.location.hash === '#tech-wheel')) {
                if (!isMobile()) {
                    initWheel();
                    if (scrollLocked) {
                        techWheelSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            } else {
                isWheelActive = false;
                scrollLocked = false;
                body.classList.remove('scroll-locked');
                if (scrollHint) scrollHint.classList.add('hidden');
            }
        });
    }, { threshold: 0.5 });

    sectionObserver.observe(techWheelSection);

    // Navbar navigation handling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            if (targetId === 'tech-wheel') {
                isNavigating = false;
            } else {
                isNavigating = true;
            }
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                // Reset scroll lock and wheel states when navigating
                scrollLocked = false;
                isWheelActive = false;
                rotationCompleted = true;
                body.classList.remove('scroll-locked');
                if (scrollHint) scrollHint.classList.add('hidden');
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setActiveLink(targetId);
                if (targetId !== 'tech-wheel') {
                    setTimeout(() => {
                        isNavigating = false;
                    }, 1000);
                }
            }
        });
    });

    // Handle URL hash for redirects from other pages
    function handleHashNavigation() {
        const hash = window.location.hash;
        if (hash) {
            const targetId = hash.substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setActiveLink(targetId);
                if (targetId === 'team-organizers') console.log('Navigated to Team Organizers via hash');
                if (targetId === 'tech-wheel' && !isMobile()) {
                    initWheel();
                } else {
                    isNavigating = true;
                    setTimeout(() => {
                        isNavigating = false;
                    }, 1000);
                }
            }
        }
    }

    // Call handleHashNavigation on page load
    handleHashNavigation();

    // Update active link on resize and hash change
    window.addEventListener('resize', updateActiveLink);
    window.addEventListener('hashchange', updateActiveLink);
    updateActiveLink();

    // Responsive adjustments for tech wheel
    function adjustWheelForScreenSize() {
        if (isMobile()) return; // Skip adjustments on mobile
        const wheelContainer = document.getElementById('techWheelContainer');
        if (wheelContainer) {
            if (window.innerWidth < 900) {
                wheelContainer.style.width = '600px';
                wheelContainer.style.height = '600px';
                techWheel.style.width = '600px';
                techWheel.style.height = '600px';
            } else {
                wheelContainer.style.width = '1200px';
                wheelContainer.style.height = '1200px';
                techWheel.style.width = '1200px';
                techWheel.style.height = '1200px';
            }
        }
    }

    window.addEventListener('resize', adjustWheelForScreenSize);
    if (!isMobile() && techWheel) {
        adjustWheelForScreenSize();
        animate();
    }

    // --- Announcement Box Setup ---
    const announcementBox = document.getElementById('announcementBox');
    const headerEl = document.getElementById('headerText');
    const headerStatic = document.querySelector('.simple-announcement1 h1');
    const textEls = [
        document.getElementById('text1'),
        document.getElementById('text2'),
        document.getElementById('text3')
    ];

    if (!announcementBox || !headerEl || !headerStatic || textEls.some(el => !el)) {
        console.error('Announcement Box: Missing DOM elements', {
            announcementBox: !!announcementBox,
            headerEl: !!headerEl,
            headerStatic: !!headerStatic,
            textEls: textEls.map(el => !!el)
        });
    } else {
        console.log('Announcement Box: All DOM elements found');
    }

    const headerText = "LEADERSHIP TEAM";
    const texts = {
        text1: [
            " PRESIDENT: PRAKASH KUMAR",
            " VICE PRESIDENT: MUKUL ANAND",
            "JOINT SECRETARY: Akshat Thakur",
            "JOINT SECRETARY: Kriti Divyansha",
            "TREASURER: Pushkar Aditya",
            "TREASURER: Santripti"
        ],
        text2: [
            " TECH HEAD: Aashish Kishore",
            "ADMINSTRATIVE HEAD: Ritik Kumar",
            "EVENT & MANAGEMENT HEAD: Hrithik Bhadani",
            "MEDIA HEAD: Manyata Manas",
            "MEDIA HEAD: Sneh Raj",
            "CONTENT HEAD: Sarthak Kumar"

        ],
        text3: [
            "EVENT & MANAGEMENT HEAD: Namya Singh",

            "PR HEAD: Saikat Bhattacharya",
            "PR HEAD: Nakshatra Sarkar",
            "PROGRAM HEAD: Piyali Nath",
            "MEMBERSHIP HEAD: Pawan Gope",
            "MEMBERSHIP HEAD: Abhijit Choudhury"
        ]
    };

    function typeMonsterText(el, texts, speed = 100, deleteSpeed = 50) {
        if (!el) return;
        let i = 0, charIndex = 0, isDeleting = false, current = "";

        function type() {
            const full = texts[i];
            if (isDeleting) {
                current = full.substring(0, --charIndex);
            } else {
                current = full.substring(0, ++charIndex);
            }

            el.textContent = current;
            announcementBox.classList.add('shake');
            setTimeout(() => announcementBox.classList.remove('shake'), 100);

            if (!isDeleting && charIndex === full.length) {
                isDeleting = true;
                setTimeout(type, 1200);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                i = (i + 1) % texts.length;
                setTimeout(type, 600);
            } else {
                setTimeout(type, isDeleting ? deleteSpeed : speed);
            }
        }

        console.log(`Announcement Box: Starting typewriter for element ${el.id}`);
        type();
    }

    if (headerEl) typeMonsterText(headerEl, [headerText], 100, 50);
    if (textEls[0]) typeMonsterText(textEls[0], texts.text1, 100, 50);
    if (textEls[1]) typeMonsterText(textEls[1], texts.text2, 100, 50);
    if (textEls[2]) typeMonsterText(textEls[2], texts.text3, 100, 50);

    if (headerStatic) {
        setTimeout(() => {
            headerStatic.style.visibility = 'visible';
            console.log('Announcement Box: Static header revealed');
        }, headerText.length * 100 + 1000);
    }

    function adjustAnnouncementBoxForScreenSize() {
        if (announcementBox) {
            if (window.innerWidth < 900) {
                announcementBox.style.minWidth = '200px';
                announcementBox.style.fontSize = '1rem';
                announcementBox.style.top = '30px';
                announcementBox.style.right = '40px';
                announcementBox.style.padding = '12px 20px 10px 16px';
            } else {
                announcementBox.style.minWidth = '280px';
                announcementBox.style.fontSize = '1.2rem';
                announcementBox.style.top = '30px';
                announcementBox.style.right = '40px';
                announcementBox.style.padding = '18px 28px 14px 24px';
            }
        }
    }

    window.addEventListener('resize', adjustAnnouncementBoxForScreenSize);
    adjustAnnouncementBoxForScreenSize();

    // --- Navbar Highlighting Logic ---
    function removeActiveClasses() {
        navLinks.forEach(link => link.classList.remove('active'));
    }

    function setActiveLink(sectionId) {
        const activeLink = document.querySelector(`.navbar-links a[href="#${sectionId}"], .navbar-blog-btn[href="#${sectionId}"]`);
        if (activeLink) {
            removeActiveClasses();
            activeLink.classList.add('active');
            console.log(`Highlighted section: ${sectionId}`);
        } else {
            console.warn(`No link found for section ID: ${sectionId}`);
        }
    }

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -20% 0px', // Adjusted for better detection
        threshold: [0.1, 0.3, 0.5] // Multiple thresholds for smoother transitions
    };

    const observer = new IntersectionObserver((entries) => {
        // Skip if scroll is locked and tech wheel is active
        if (scrollLocked && isWheelActive && !isMobile()) {
            console.log('Scroll locked, skipping navbar update');
            return;
        }

        let highestRatio = 0;
        let activeSectionId = null;

        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > highestRatio) {
                highestRatio = entry.intersectionRatio;
                activeSectionId = entry.target.id;
                console.log(`Section in view: ${activeSectionId}, ratio: ${entry.intersectionRatio}`);
            }
        });

        if (activeSectionId) {
            setActiveLink(activeSectionId);
        }
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            removeActiveClasses();
            this.classList.add('active');
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                // Reset scroll lock and wheel states when navigating
                scrollLocked = false;
                isWheelActive = false;
                rotationCompleted = true;
                body.classList.remove('scroll-locked');
                if (scrollHint) scrollHint.classList.add('hidden');
                targetElement.scrollIntoView({ behavior: 'smooth' });
                console.log(`Clicked link: ${targetId}`);
            } else {
                console.warn(`Target section not found: ${targetId}`);
            }
        });
    });

    // Fallback: Check scroll position on manual scroll
    window.addEventListener('scroll', () => {
        if (scrollLocked && isWheelActive && !isMobile()) return;

        let closestSection = null;
        let minDistance = Infinity;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const distance = Math.abs(rect.top);
            if (distance < minDistance) {
                minDistance = distance;
                closestSection = section.id;
            }
        });

        if (closestSection) {
            setActiveLink(closestSection);
        }
    });

    console.log('Page initialization complete');
});