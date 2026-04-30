document.addEventListener('DOMContentLoaded', function () {
    const nonTechBtn = document.getElementById("nonTechBtn");
    nonTechBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "https://yourblogurl.com";
    });

    // Highlight active section in navbar
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar-links a");
    window.addEventListener("scroll", () => {
        let currentSection = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            if (scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    });

    // Tech Wheel Logic
    const techWheelSection = document.getElementById('tech-wheel');
    const techWheel = document.getElementById('techWheel');
    const webDevText = document.getElementById('webDevText');
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.getElementById('progress-text');
    const scrollHint = document.querySelector('.scroll-hint');
    const body = document.body;

    const techItems = [
        { id: 'competitive', name: 'Competitive Coding', desc: 'The Competitive Coding Wing empowers students to improve their problem-solving skills through contests, practice sessions, and peer learning.' },
        { id: 'design', name: 'Graphics Designer', desc: 'The Design Wing introduces students to UI/UX and graphic design using tools like Figma, promoting creative thinking and aesthetics.' },
        { id: 'web', name: 'Web Development', desc: 'The aim of Web Development Wing is to create awareness about Web Development in the college.' },
        { id: 'ai', name: 'Content Writer', desc: 'The AI/ML Wing introduces students to the world of machine learning and artificial intelligence through real-world projects.' },
        { id: 'cyber', name: 'Video Editor', desc: 'The Cyber Security Wing educates students about online threats, ethical hacking, and secure coding practices.' },
        { id: 'app', name: 'App Development', desc: 'The App Development Wing focuses on building Android and iOS apps through training in platforms like Flutter.' },
        { id: 'blockchain', name: 'Photo Grapher', desc: 'The Blockchain Wing explores decentralized technology and cryptocurrencies, offering workshops on smart contracts.' },
        { id: 'foss', name: 'PR & Management', desc: 'The FOSS Wing promotes the use of Free and Open Source Software and contributes to open-source projects.' }
    ];

    let currentRotation = 0;
    let isWheelActive = false;
    let scrollLocked = false;
    let rotationCompleted = false;
    let hasAutoScrolled = false;
    const techItemElements = [];

    // Initialize tech items
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
        techItemElements.push({
            element: techItem,
            angle: index * (360 / techItems.length),
            data: item
        });
    });

    function updateWheel() {
        techWheel.style.transform = `translate(-50%, -50%) rotate(${currentRotation}deg)`;
        let closestItem = null;
        let minDiff = Infinity;

        techItemElements.forEach(({ element, angle, data }) => {
            const currentAngle = (angle + currentRotation) % 360;
            const normalized = (currentAngle + 360) % 360;
            element.style.transform = `rotate(${currentAngle}deg) translateX(300px) rotate(${-currentAngle}deg)`;
            const diff = Math.abs((normalized - 270 + 360) % 360);
            if (diff < minDiff) {
                minDiff = diff;
                closestItem = data;
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });

        if (closestItem) {
            webDevText.innerHTML = `
                <h3>${closestItem.name} Wing</h3>
                <p>${closestItem.desc}</p>
                <a class="read-more" href="#">...Read More</a>`;
        }

        updateProgress();
    }

    function updateProgress() {
        const progress = Math.min((Math.abs(currentRotation) / 360) * 100, 100);
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}%`;
        if (progress >= 100 && !rotationCompleted) {
            rotationCompleted = true;
            scrollLocked = false;
            body.classList.remove('scroll-locked');
            scrollHint.classList.add('hidden');
        }
    }

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!hasAutoScrolled) {
                    hasAutoScrolled = true;
                    techWheelSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setTimeout(() => {
                        isWheelActive = true;
                        scrollLocked = true;
                        body.classList.add('scroll-locked');
                        techWheel.classList.add('visible');
                        updateWheel();
                    }, 800);
                }
            } else {
                // Hide wheel when not in section
                techWheel.classList.remove('visible');
                if (!scrollLocked) {
                    isWheelActive = false;
                    hasAutoScrolled = false;
                    currentRotation = 0;
                    rotationCompleted = false;
                    scrollHint.classList.remove('hidden');
                    updateProgress();
                }
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50% 0px' });

    sectionObserver.observe(techWheelSection);

    function handleWheelEvent(e) {
        if (!isWheelActive || rotationCompleted) return;
        e.preventDefault();
        const delta = e.deltaY > 0 ? 1.5 : -1.5;
        currentRotation += delta;
        updateWheel();
    }

    window.addEventListener('wheel', handleWheelEvent, { passive: false });

    let touchStartY = 0;
    let touchEndY = 0;

    window.addEventListener('touchstart', (e) => {
        if (isWheelActive && !rotationCompleted) {
            touchStartY = e.touches[0].clientY;
        }
    });

    window.addEventListener('touchmove', (e) => {
        if (isWheelActive && !rotationCompleted) {
            e.preventDefault();
            touchEndY = e.touches[0].clientY;
            const deltaY = touchStartY - touchEndY;
            const delta = deltaY > 0 ? 1 : -1;
            currentRotation += delta * 0.5;
            updateWheel();
            touchStartY = touchEndY;
        }
    }, { passive: false });

    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const wasLocked = scrollLocked;
                if (wasLocked) {
                    scrollLocked = false;
                    body.classList.remove('scroll-locked');
                }
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (wasLocked && !rotationCompleted && targetId === 'tech-wheel') {
                    setTimeout(() => {
                        scrollLocked = true;
                        body.classList.add('scroll-locked');
                        isWheelActive = true;
                        techWheel.classList.add('visible');
                    }, 1000);
                }
            }
        });
    });

    updateWheel();
});