// AUTO-GENERATED — DO NOT EDIT BY HAND
// Generated from legacy-source/responsive event page.html
// by scripts/convert-html-to-react.mjs
//
// This file is the React port of the original HTML page. Every
// element, attribute, inline style, and child node from the source
// document has been mechanically translated to JSX. Inline <script>
// blocks live in ./Events.scripts.js and run in a useEffect after
// mount; <style> blocks live in ./Events.css and are imported
// at the top of this module.

import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Events.css';
import { runScripts, cleanupScripts } from './Events.scripts';
import { mapHrefToRoute } from '../../utils/routeMap.js';

const PAGE_ID = "Events";

export default function Events() {
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
    <div ref={rootRef} className="legacy-page legacy-Events min-h-screen bg-black text-white font-sans">

{/* Modern Navbar */}
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

{/* Spacer for sticky navbar */}
<div className={"h-20"}></div>
<div className={"max-w-7xl mx-auto px-4"}>
  {/* Upcoming Event Row (Small Cards) */}
  <h2 className={"text-2xl font-semibold mb-4 border-b border-gray-700 pb-2"}>Upcoming Event</h2>
  <div id={"upcoming-event"} className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10"}></div>
  {/* Ongoing Event Row (Small Cards) */}
  <h2 className={"text-2xl font-semibold mb-4 border-b border-gray-700 pb-2"}>Ongoing Event</h2>
  <div id={"ongoing-event"} className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10"}></div>
  {/* Completed Events Row (3 cards in one row) */}
  <h2 className={"text-2xl font-semibold mb-4 border-b border-gray-700 pb-2"}>Completed Events</h2>
  <div id={"completed-events"} className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10"}></div>
</div>

<footer className={"bg-black text-white py-10"}>
  <div className={"flex flex-col items-center mb-10"}>
    <img src={"tarulogo.png"} alt={"TaruGuardians Logo"} className={"w-28 h-28 rounded-full object-cover mb-3 shadow-lg"} />
    <p className={"font-bold text-lg"}>(Turn Passion Into Purpose)</p>
  </div>
  <div className={"container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-10 items-start text-center md:text-left"}>
    <div>
      <h2 className={"text-2xl font-bold mb-3"}>TaruGuardians</h2>
      <p className={"font-[cursive] text-sm leading-relaxed"}>
        𝔄𝔰 𝔱𝔯𝔢𝔢𝔰 𝔤𝔯𝔬𝔴 𝔴𝔦𝔱𝔥 𝔡𝔢𝔢𝔭 𝔯𝔬𝔬𝔱𝔰, 𝔴𝔢 𝔤𝔯𝔬𝔴 𝔴𝔦𝔱𝔥 𝔡𝔢𝔢𝔭 𝔱𝔢𝔠𝔥. 𝔉𝔯𝔬𝔪 𝔰𝔢𝔢𝔡𝔰 𝔬𝔣 𝔠𝔬𝔡𝔢 𝔱𝔬 𝔠𝔞𝔫𝔬𝔭𝔦𝔢𝔰 𝔬𝔣 𝔠𝔥𝔞𝔫𝔤𝔢 — 𝔟𝔲𝔦𝔩𝔡𝔦𝔫𝔤 𝔞 𝔤𝔯𝔢𝔢𝔫𝔢𝔯, 𝔰𝔪𝔞𝔯𝔱𝔢𝔯 𝔣𝔲𝔱𝔲𝔯𝔢.
      </p>
      <p className={"mt-3 text-xs font-bold"}>(𝚁𝙾𝙾𝚃𝙴𝙳 𝙸𝙽 𝙽𝙰𝚃𝚄𝚁𝙴, 𝙳𝚁𝙸𝚅𝙴𝙽 𝙱𝚈 𝚃𝙴𝙲𝙷)</p>
    </div>
    <div className={"flex justify-center md:justify-start"}>
      <a href={"https://medium.com/@TARUGUARDIANS_HIT-HALDIA/about"} className={"bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full transition"}> Our Blog </a>
    </div>
    <div>
      <h3 className={"text-xl font-semibold mb-2"}>Contact</h3>
      <p className={"text-sm"}>TaruGuardians@gmail.com</p>
    </div>
    <div className={"text-center md:text-left"}>
      <h3 className={"text-xl font-semibold mb-4"}>Follow Us</h3>
      <div className={"flex justify-center md:justify-start gap-4 mb-3"}>
        <a href={"https://www.instagram.com/_taruguardians_/"}><img src={"instag.png"} alt={"Instagram"} className={"w-7"} /></a>
        <a href={"https://www.linkedin.com/company/taruguardians/?originalSubdomain=in"}><img src={"linkden.png"} alt={"LinkedIn"} className={"w-7"} /></a>
        <a href={"https://www.facebook.com/TaruGuardians/"}><img src={"facebook.png"} alt={"Facebook"} className={"w-7"} /></a>
        <a href={"https://www.youtube.com/@TaruGuardians"}><img src={"youtube.webp"} alt={"YouTube"} className={"w-7"} /></a>
      </div>
      <p className={"italic text-sm font-[cursive]"}>
        𝓢𝓽𝓪𝔂 𝓾𝓹𝓭𝓪𝓽𝓮𝓭 𝔀𝓲𝓽𝓱 𝓸𝓾𝓻 𝓵𝓪𝓽𝓮𝓼𝓽 𝓹𝓸𝓼𝓽𝓼, 𝓮𝓿𝓮𝓷𝓽𝓼, 𝓪𝓷𝓭 𝓦𝓸𝓻𝓴𝓼𝓱𝓸𝓹𝓼!
      </p>
    </div>
  </div>
  <hr className={"my-6 border-gray-700"} />
  <div className={"text-center text-sm text-gray-400"}>
    © 2025 TaruGuardians. All rights reserved.
  </div>
</footer>


    </div>
  );
}
