// Auto-generated from legacy-source/ by scripts/convert-html-to-react.mjs
// Inline + external scripts extracted from the original HTML for the
// "Interview" page. Replayed in source order after the React
// component mounts so every original animation / event handler runs
// exactly as it did in the legacy site.

const SCRIPTS = [
  { kind: 'external', src: "https://cdn.tailwindcss.com", type: "text/javascript" },
  { kind: 'external', src: "https://unpkg.com/@lottiefiles/lottie-player@1.7.1/dist/lottie-player.js", type: "text/javascript" },
  { kind: 'external', src: "frontend-auth.js", type: "text/javascript" },
  { kind: 'inline', type: "text/javascript", body: "\n    document.addEventListener('DOMContentLoaded', function() {\n        const hamburger = document.querySelector('.hamburger');\n        const mobileMenu = document.querySelector('.mobile-menu');\n        const navLinks = document.querySelectorAll('.navbar-links a, .mobile-menu a');\n        const blogButtons = document.querySelectorAll('.taru-blog-btn');\n        const bottomNavLinks = document.querySelectorAll('.nav-link');\n        const sections = document.querySelectorAll('.section');\n        const mainPage = 'TARUGUARDIANS FIRST PAGE.html';\n\n        // Toggle mobile menu\n        hamburger.addEventListener('click', function() {\n            mobileMenu.classList.toggle('active');\n            hamburger.textContent = mobileMenu.classList.contains('active') ? '×' : '≡';\n        });\n\n        // Handle navigation links\n        navLinks.forEach(link => {\n            link.addEventListener('click', function(e) {\n                e.preventDefault();\n                const href = this.getAttribute('href');\n\n                // Handle blog button separately\n                if (this.classList.contains('taru-blog-btn')) {\n                    window.open('https://medium.com/@TARUGUARDIANS_HIT-HALDIA/about', '_blank');\n                    return;\n                }\n\n                // Update active state\n                navLinks.forEach(l => l.classList.remove('active'));\n                this.classList.add('active');\n\n                // Extract section ID from href\n                const sectionId = href.includes('#') ? href.split('#')[1] : null;\n                const isMainPageLink = href.startsWith(mainPage);\n\n                // Redirect to main page with section\n                if (isMainPageLink && sectionId) {\n                    window.location.href = href; // Redirect to TARUGUARDIANS FIRST PAGE.html#section\n                } else if (sectionId) {\n                    // If on current page, scroll to section\n                    const section = document.getElementById(sectionId);\n                    if (section) {\n                        section.scrollIntoView({ behavior: 'smooth' });\n                    }\n                }\n\n                // Close mobile menu if open\n                if (mobileMenu.classList.contains('active')) {\n                    mobileMenu.classList.remove('active');\n                    hamburger.textContent = '≡';\n                }\n            });\n        });\n\n        // Placeholder for details page navigation\n        function openDetailsPage() {\n            console.log('Opening details page...');\n        }\n\n        // Debounce function to limit scroll event frequency\n        function debounce(func, wait) {\n            let timeout;\n            return function executedFunction(...args) {\n                const later = () => {\n                    clearTimeout(timeout);\n                    func(...args);\n                };\n                clearTimeout(timeout);\n                timeout = setTimeout(later, wait);\n            };\n        }\n\n        // Scroll event listener for bottom navigation highlighting\n        const updateActiveNav = debounce(() => {\n            let currentSection = '';\n            let minDistance = Infinity;\n\n            if (window.scrollY < 100) {\n                currentSection = 'home';\n            } else {\n                sections.forEach(section => {\n                    const rect = section.getBoundingClientRect();\n                    const distance = Math.abs(rect.top);\n                    if (distance < minDistance && rect.top <= window.innerHeight * 0.3) {\n                        minDistance = distance;\n                        currentSection = section.getAttribute('id');\n                    }\n                });\n            }\n\n            bottomNavLinks.forEach(link => {\n                link.classList.remove('active');\n                if (link.getAttribute('href') === `#${currentSection}`) {\n                    link.classList.add('active');\n                }\n            });\n        }, 50);\n\n        window.addEventListener('scroll', updateActiveNav);\n        updateActiveNav();\n\n        // Expose functions to global scope for oninput event\n        window.openDetailsPage = openDetailsPage;\n    });\n" }
];

const LOADED = (typeof window !== 'undefined' && (window.__legacyLoadedExternalScripts ||= new Set())) || new Set();

export async function runScripts(pageId) {
  for (const s of SCRIPTS) {
    if (s.kind === 'external') {
      if (LOADED.has(s.src)) continue;
      await new Promise((resolve) => {
        const el = document.createElement('script');
        el.src = s.src;
        if (s.type) el.type = s.type;
        el.async = false;
        el.onload = () => resolve();
        el.onerror = () => resolve();
        el.setAttribute('data-legacy-page', pageId);
        document.body.appendChild(el);
        LOADED.add(s.src);
      });
    } else {
      if (s.type && s.type !== 'text/javascript' && s.type !== 'application/javascript') continue;
      try {
        // eslint-disable-next-line no-new-func
        const fn = new Function(s.body);
        fn.call(window);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn('[' + pageId + '] script error:', err);
      }
    }
  }
}

export function cleanupScripts(pageId) {
  document.querySelectorAll('[data-legacy-page="' + pageId + '"]').forEach((n) => n.remove());
}
