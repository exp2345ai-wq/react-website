// Auto-generated from legacy-source/ by scripts/convert-html-to-react.mjs
// Inline + external scripts extracted from the original HTML for the
// "Alumni" page. Replayed in source order after the React
// component mounts so every original animation / event handler runs
// exactly as it did in the legacy site.

const SCRIPTS = [
  { kind: 'external', src: "https://cdn.tailwindcss.com", type: "text/javascript" },
  { kind: 'external', src: "frontend-auth.js", type: "text/javascript" },
  { kind: 'external', src: "https://kit.fontawesome.com/a076d05399.js", type: "text/javascript" },
  { kind: 'external', src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", type: "text/javascript" },
  { kind: 'inline', type: "text/javascript", body: "\n    document.addEventListener('DOMContentLoaded', function() {\n        const hamburger = document.querySelector('.hamburger');\n        const mobileMenu = document.querySelector('.mobile-menu');\n        const navLinks = document.querySelectorAll('.navbar-links a, .mobile-menu a, .navbar-blog-btn');\n\n        // Toggle mobile menu\n        hamburger.addEventListener('click', function() {\n            mobileMenu.classList.toggle('active');\n            hamburger.innerHTML = mobileMenu.classList.contains('active') ? '<i class=\"fas fa-times\"></i>' : '<i class=\"fas fa-bars\"></i>';\n        });\n\n        // Close menu on link click and navigate\n        navLinks.forEach(link => {\n            link.addEventListener('click', function(e) {\n                e.preventDefault();\n                const href = this.getAttribute('href');\n                window.location.href = href;\n                mobileMenu.classList.remove('active');\n                hamburger.innerHTML = '<i class=\"fas fa-bars\"></i>';\n            });\n        });\n\n        // Close menu when clicking outside\n        document.addEventListener('click', function(e) {\n            if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target) && mobileMenu.classList.contains('active')) {\n                mobileMenu.classList.remove('active');\n                hamburger.innerHTML = '<i class=\"fas fa-bars\"></i>';\n            }\n        });\n    });\n" }
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
