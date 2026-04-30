// Auto-generated from legacy-source/ by scripts/convert-html-to-react.mjs
// Inline + external scripts extracted from the original HTML for the
// "Roadmap" page. Replayed in source order after the React
// component mounts so every original animation / event handler runs
// exactly as it did in the legacy site.

const SCRIPTS = [
  { kind: 'external', src: "frontend-auth.js", type: "text/javascript" },
  { kind: 'inline', type: "text/javascript", body: "\n    document.addEventListener('DOMContentLoaded', function() {\n        const blogButtons = document.querySelectorAll('.taru-blog-btn');\n        const navLinks = document.querySelectorAll('.navbar-links a, .mobile-menu a');\n\n        // Handle blog button clicks separately\n        // blogButtons.forEach(button => {\n        //     button.addEventListener('click', function(e) {\n        //         e.preventDefault();\n        //         window.open('https://medium.com/@TARUGUARDIANS_HIT-HALDIA/about', '_blank');\n        //     });\n        // });\n\n        // Handle internal navigation links, bypassing SPA for blog button\n        navLinks.forEach(link => {\n            link.addEventListener('click', function(e) {\n                e.preventDefault();\n                if (this.classList.contains('taru-blog-btn')) {\n                    window.open('https://medium.com/@TARUGUARDIANS_HIT-HALDIA/about', '_blank');\n                    return;\n                }\n            });\n        });\n    });\n    document.addEventListener('DOMContentLoaded', function() {\n        const navLinks = document.querySelectorAll('.navbar-links a, .navbar-blog-btn');\n\n        navLinks.forEach(link => {\n            link.addEventListener('click', function(e) {\n                e.preventDefault();\n                const href = this.getAttribute('href');\n                window.location.href = href; // Redirect to index.html with hash\n            });\n        });\n    });\n\n    document.addEventListener('DOMContentLoaded', function() {\n        const hamburger = document.querySelector('.hamburger');\n        const mobileMenu = document.querySelector('.mobile-menu');\n        const navLinks = document.querySelectorAll('.navbar-links a, .mobile-menu a, .navbar-blog-btn');\n\n        hamburger.addEventListener('click', function() {\n            mobileMenu.classList.toggle('active');\n            hamburger.textContent = mobileMenu.classList.contains('active') ? '×' : '≡';\n        });\n\n        navLinks.forEach(link => {\n            link.addEventListener('click', function(e) {\n                e.preventDefault();\n                const href = this.getAttribute('href');\n                window.location.href = href;\n                mobileMenu.classList.remove('active');\n                hamburger.textContent = '≡';\n            });\n        });\n    });\n" }
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
