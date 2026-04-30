// AUTO-GENERATED — DO NOT EDIT BY HAND
// Generated from legacy-source/responsive roadmap 12.html
// by scripts/convert-html-to-react.mjs
//
// This file is the React port of the original HTML page. Every
// element, attribute, inline style, and child node from the source
// document has been mechanically translated to JSX. Inline <script>
// blocks live in ./Roadmap.scripts.js and run in a useEffect after
// mount; <style> blocks live in ./Roadmap.css and are imported
// at the top of this module.

import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Roadmap.css';
import { runScripts, cleanupScripts } from './Roadmap.scripts';
import { mapHrefToRoute } from '../../utils/routeMap.js';

const PAGE_ID = "Roadmap";

export default function Roadmap() {
  const navigate = useNavigate();
  const rootRef = useRef(null);

  useEffect(() => {
    // Wire the global SPA-navigation hook used by inline scripts that
    // assigned to window.location.href in the original site.
    const previous = window.__legacyTryNavigate;
    window.__legacyTryNavigate = (href) => {
      const mapped = mapHrefToRoute(href);
      if (mapped) {
        Promise.resolve().then(() => navigate(mapped));
        return true;
      }
      return false;
    };

    runScripts(PAGE_ID);

    // Intercept anchor clicks in case the converter missed any
    // (e.g. dynamically-injected <a> nodes).
    const root = rootRef.current;
    const onClick = (event) => {
      const a = event.target.closest && event.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href) return;
      if (href.startsWith('http://') || href.startsWith('https://') ||
          href.startsWith('mailto:') || href.startsWith('tel:') ||
          href.startsWith('#')) return;
      const mapped = mapHrefToRoute(href);
      if (mapped) {
        event.preventDefault();
        navigate(mapped);
      }
    };
    if (root) root.addEventListener('click', onClick);

    return () => {
      cleanupScripts(PAGE_ID);
      if (root) root.removeEventListener('click', onClick);
      window.__legacyTryNavigate = previous;
    };
  }, [navigate]);

  return (
    <div ref={rootRef} className="legacy-page legacy-Roadmap">


{/* Navbar */}
<header className={"modern-navbar"}>
    <div className={"navbar-container"}>
        <div className={"navbar-logo"}>
            <span className={"logo-arrow left"}>&lt;</span>
            <img src={"circlelogotaru.png"} alt={"TaruGuardians Logo"} />
            <span>TaruGuardians</span>
            <span className={"logo-arrow right"}>&gt;</span>
        </div>
        <div className={"navbar-center"}>
            <div className={"navbar-links"}>
                <Link to="/home" className={"active"}>Home</Link>
                <Link to="/home">Event</Link>
                <Link to="/home">TARU WINGS</Link>
                <Link to="/home">Roadmap</Link>
                <Link to="/home">Placement Guide</Link>
                <Link to="/home">Team</Link>
            </div>
        </div>
        <Link to="/auth" className={"navbar-blog-btn auth-login-btn"}>Login</Link>
        <div className={"auth-user-menu"} style={{display: "none"}}>
            <Link to="/dashboard" className={"navbar-blog-btn"}>Dashboard</Link>
        </div>
        <div className={"hamburger"}>≡</div>
    </div>
    {/* Mobile Menu */}
    <div className={"mobile-menu"}>
        <Link to="/home" className={"active"}>Home</Link>
        <Link to="/home">Event</Link>
        <Link to="/home">TARU WINGS</Link>
        <Link to="/home">Roadmap</Link>
        <Link to="/home">Placement Guide</Link>
        <Link to="/home">Team</Link>
        <Link to="/auth" className={"auth-login-btn"}>Login</Link>
        <Link to="/dashboard" className={"auth-user-menu"} style={{display: "none"}}>Dashboard</Link>
    </div>
</header>


{/* Main Content */}
<div className={"container"}>
    <h1 className={"roadmaps-title"}>Roadmaps By TaruGuardians Team</h1>
    <div className={"roadmap-grid"}>
        <a href={"https://roadmap.sh/full-stack"} target={"_blank"} style={{textDecoration: "none"}}>
            <div className={"roadmap-card"}>
                <img src={"web5.jpg"} alt={"Web Development Roadmap"} />
                <h2>Web Development Roadmap</h2>
            </div>
        </a>
        <a href={"https://www.codechef.com/roadmap/become-5-star"} target={"_blank"} style={{textDecoration: "none"}}>
            <div className={"roadmap-card"}>
                <img src={"cp2.jpg"} alt={"Competitive Programming Roadmap"} />
                <h2>Competitive Programming Roadmap</h2>
            </div>
        </a>
        <a href={"https://roadmap.sh/ios"} target={"_blank"} style={{textDecoration: "none"}}>
            <div className={"roadmap-card"}>
                <img src={"ios.jpg"} alt={"iOS Development Roadmap"} />
                <h2>iOS Development Roadmap</h2>
            </div>
        </a>
        <a href={"https://roadmap.sh/game-developer"} target={"_blank"} style={{textDecoration: "none"}}>
            <div className={"roadmap-card"}>
                <img src={"gamedeveloper2.jpg"} alt={"Game Development Roadmap"} />
                <h2>Game Development Roadmap</h2>
            </div>
        </a>
        <a href={"https://roadmap.sh/android"} target={"_blank"} style={{textDecoration: "none"}}>
            <div className={"roadmap-card"}>
                <img src={"app.jpg"} alt={"Android Development Roadmap"} />
                <h2>Android Development Roadmap</h2>
            </div>
        </a>
        <a href={"https://roadmap.sh/blockchain"} target={"_blank"} style={{textDecoration: "none"}}>
            <div className={"roadmap-card"}>
                <img src={"blockchasin.jpg"} alt={"Blockchain Developer Roadmap"} />
                <h2>Blockchain Developer Roadmap</h2>
            </div>
        </a>
        <a href={"https://roadmap.sh/datastructures-and-algorithms"} target={"_blank"} style={{textDecoration: "none"}}>
            <div className={"roadmap-card"}>
                <img src={"cp.jpg"} alt={"DSA Roadmap"} />
                <h2>DSA Roadmap</h2>
            </div>
        </a>
        <a href={"https://roadmap.sh/software-architect"} target={"_blank"} style={{textDecoration: "none"}}>
            <div className={"roadmap-card"}>
                <img src={"architect.jpg"} alt={"Software Architect Roadmap"} />
                <h2>Software Architect Roadmap</h2>
            </div>
        </a>
        <a href={"https://roadmap.sh/cyber-security"} target={"_blank"} style={{textDecoration: "none"}}>
            <div className={"roadmap-card"}>
                <img src={"cyber%20security.jpg"} alt={"Cyber Security Roadmap"} />
                <h2>Cyber Security Roadmap</h2>
            </div>
        </a>
        <a href={"https://roadmap.sh/data-analyst"} target={"_blank"} style={{textDecoration: "none"}}>
            <div className={"roadmap-card"}>
                <img src={"data%20analyst.jpg"} alt={"Data Analyst Roadmap"} />
                <h2>Data Analyst Roadmap</h2>
            </div>
        </a>
    </div>
</div>

{/* Footer */}
<footer className={"footer"}>
    <div className={"footer-logo-container"}>
        <img src={"circlelogotaru.png"} alt={"TaruGuardians Logo"} />
        <h3>(Turn Passion Into Purpose)</h3>
    </div>
    <div className={"footer-columns"}>
        <div className={"footer-column"}>
            <h2>TaruGuardians</h2>
            <p>Just as trees grow with deep roots, we grow with deep tech. From seeds of code to canopies of change — building a greener, smarter future.</p>
            <p>(ROOTED IN NATURE, DRIVEN BY TECH)</p>
        </div>
        <div className={"footer-column"}>
            <a href={"https://medium.com/@TARUGUARDIANS_HIT-HALDIA/about"} className={"blog-button"}>Our Blog</a>
        </div>
        <div className={"footer-column"}>
            <h3>Contact</h3>
            <p>Taru.Guardians@gmail.com</p>
        </div>
        <div className={"footer-column"}>
            <h3>Follow Us</h3>
            <div className={"social-icons"}>
                <a href={"https://www.instagram.com/_taruguardians_/"}><img src={"instag.png"} alt={"Instagram"} /></a>
                <a href={"https://www.linkedin.com/company/taruguardians/?originalSubdomain=in"}><img src={"linkden.png"} alt={"LinkedIn"} /></a>
                <a href={"https://www.facebook.com/TaruGuardians/\n"}><img src={"facebook.png"} alt={"Facebook"} /></a>
                <a href={"https://www.youtube.com/@TaruGuardians"}><img src={"youtube.webp"} alt={"YouTube"} /></a>
            </div>
            <em>Stay updated with our latest posts, events, and workshops</em>
        </div>
    </div>
    <small>© 2025 TaruGuardians. All rights reserved.</small>
</footer>




    </div>
  );
}
