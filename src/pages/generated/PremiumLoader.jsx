// AUTO-GENERATED — DO NOT EDIT BY HAND
// Generated from legacy-source/responsive premium 3.html
// by scripts/convert-html-to-react.mjs
//
// This file is the React port of the original HTML page. Every
// element, attribute, inline style, and child node from the source
// document has been mechanically translated to JSX. Inline <script>
// blocks live in ./PremiumLoader.scripts.js and run in a useEffect after
// mount; <style> blocks live in ./PremiumLoader.css and are imported
// at the top of this module.

import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './PremiumLoader.css';
import { runScripts, cleanupScripts } from './PremiumLoader.scripts';
import { mapHrefToRoute } from '../../utils/routeMap.js';

const PAGE_ID = "PremiumLoader";

export default function PremiumLoader() {
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
    <div ref={rootRef} className="legacy-page legacy-PremiumLoader">

{/* Celestial Veil Loader */}

{/* Scroll Progress */}
{/*<div class="scroll-progress"></div>*/}
{/* Dark Mode Toggle */}
<div className={"dark-mode-toggle"}><i className={"fas fa-moon"}></i></div>
{/* Premium Navbar */}
<header className={"modern-navbar"}>
    <div className={"navbar-container"}>
        <div className={"navbar-logo premium-tooltip"} data-tooltip={"Welcome to Luxury Tech Hub"}>
            <img src={"tarulogo.png"} alt={"TaruGuardians Logo"} />
            TaruGuardians
        </div>
        <nav className={"navbar-center"}>
            <div className={"navbar-links"}>
                <a href={"#hero"} className={"active fade-in-up"}>Home</a>
                <a href={"#features"} className={"slide-in-left"}>Tech Tools</a>
                <a href={"#testimonials"} className={"slide-in-right"}>Events</a>
                <a href={"#cta"} className={"zoom-in"}>Roadmaps</a>
                <a href={"#placement"} className={"rotate-in"}>Placement Guide</a>
                <a href={"#team"} className={"bounce-in"}>Team</a>
                <a href={"#alumni"} className={"tada"}>Alumni</a>
            </div>
        </nav>
{/*        <a class="taru-blog-btn" href="https://medium.com/@TARUGUARDIANS_HIT-HALDIA/about">Our Blog</a>*/}
        <div className={"hamburger"}>≡</div>
    </div>
    <div className={"mobile-menu"}>
        <a href={"#hero"}>Home</a>
        <a href={"#features"}>Tech Tools</a>
        <a href={"#testimonials"}>Events</a>
        <a href={"#cta"}>Roadmaps</a>
        <a href={"#placement"}>Placement Guide</a>
        <a href={"#team"}>Team</a>
        <a href={"#alumni"}>Alumni</a>
        <a className={"taru-blog-btn"} href={"https://medium.com/@TARUGUARDIANS_HIT-HALDIA/about"}>Our Blog</a>
    </div>
</header>
{/* Home Scene - Luxurious Tech Hub */}
<div className={"scene"} id={"hero"}>
    {/* 3D Canvas */}
    <canvas id={"three-canvas"}></canvas>
    {/* Particles */}
    <div id={"particles-js"}></div>
    {/* Floating Elements */}
    <div className={"floating-elements"}>
        <div className={"floating-element"} data-speed={"0.05"}><i className={"fas fa-code"}></i></div>
        <div className={"floating-element"} data-speed={"0.1"}><i className={"fas fa-laptop-code"}></i></div>
        <div className={"floating-element"} data-speed={"0.15"}><i className={"fas fa-rocket"}></i></div>
        <div className={"floating-element"} data-speed={"0.2"}><i className={"fas fa-lightbulb"}></i></div>
    </div>
    {/* Parallax Layers */}
    <div className={"parallax-layer layer-bg"} data-speed={"0.5"}></div>
    <div className={"parallax-layer layer-mid"} data-speed={"0.3"}></div>
    <div className={"parallax-layer layer-front"} data-speed={"0.1"}></div>
    {/* Line Canvas for Connections */}
    <canvas id={"line-canvas"}></canvas>
    {/* Premium Overlay for Depth */}
    <div className={"premium-overlay"}></div>
    {/* Hero Content */}
    <div className={"hero-content"} data-aos={"fade-up"} data-aos-duration={"1500"}>
        <div className={"hero-badge"}>Turn Passion Into Purpose</div>
        <h1 className={"hero-title"}>Ultra Premium Tech Hub</h1>
        <p className={"hero-subtitle"}>Elevate Your Campus Placement Journey with Cutting-Edge Innovations and Luxurious Guidance</p>
        <a href={"#features"} className={"premium-btn"}>Discover Premium Roadmaps</a>
    </div>
    {/* Social Icons in Hero */}
    <div className={"hero-social"} data-aos={"fade-up"} data-aos-delay={"500"}>
        <a href={"#"} className={"fab fa-twitter premium-tooltip"} data-tooltip={"Follow on Twitter"}></a>
        <a href={"#"} className={"fab fa-linkedin premium-tooltip"} data-tooltip={"Connect on LinkedIn"}></a>
        <a href={"#"} className={"fab fa-github premium-tooltip"} data-tooltip={"View on GitHub"}></a>
    </div>
</div>
<section className={"premium-instagram"} id={"instagram"} data-aos={"fade-in"}>
    <h2 className={"section-title"} data-aos={"fade-down"}>Our Instagram Highlights</h2>
    <div className={"instagram-grid"}>
        <div className={"instagram-card fade-in-up"} data-aos={"zoom-in"} data-aos-delay={"100"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Post+1"} alt={"Instagram Post 1"} className={"instagram-image"} />
            <p className={"instagram-content"}>Exciting moments from our latest hackathon! #TechHub</p>
            <p className={"instagram-date"}>Posted on: September 1, 2025</p>
        </div>
        <div className={"instagram-card slide-in-left"} data-aos={"zoom-in"} data-aos-delay={"200"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Post+2"} alt={"Instagram Post 2"} className={"instagram-image"} />
            <p className={"instagram-content"}>Behind the scenes of AI workshop preparations. #Innovation</p>
            <p className={"instagram-date"}>Posted on: September 5, 2025</p>
        </div>
        <div className={"instagram-card slide-in-right"} data-aos={"zoom-in"} data-aos-delay={"300"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Post+3"} alt={"Instagram Post 3"} className={"instagram-image"} />
            <p className={"instagram-content"}>Team bonding at tech talk series. #Community</p>
            <p className={"instagram-date"}>Posted on: September 10, 2025</p>
        </div>
        <div className={"instagram-card zoom-in"} data-aos={"zoom-in"} data-aos-delay={"400"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Post+4"} alt={"Instagram Post 4"} className={"instagram-image"} />
            <p className={"instagram-content"}>Highlights from cybersecurity summit. #SecurityFirst</p>
            <p className={"instagram-date"}>Posted on: September 15, 2025</p>
        </div>
        <div className={"instagram-card rotate-in"} data-aos={"zoom-in"} data-aos-delay={"500"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Post+5"} alt={"Instagram Post 5"} className={"instagram-image"} />
            <p className={"instagram-content"}>Data science bootcamp in action! #DataDriven</p>
            <p className={"instagram-date"}>Posted on: September 20, 2025</p>
        </div>
        <div className={"instagram-card bounce-in"} data-aos={"zoom-in"} data-aos-delay={"600"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Post+6"} alt={"Instagram Post 6"} className={"instagram-image"} />
            <p className={"instagram-content"}>Blockchain conference vibes. #FutureTech</p>
            <p className={"instagram-date"}>Posted on: September 25, 2025</p>
        </div>
        <div className={"instagram-card flip-in-x"} data-aos={"zoom-in"} data-aos-delay={"700"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Post+7"} alt={"Instagram Post 7"} className={"instagram-image"} />
            <p className={"instagram-content"}>DevOps masterclass sessions. #Efficiency</p>
            <p className={"instagram-date"}>Posted on: September 30, 2025</p>
        </div>
        <div className={"instagram-card light-speed-in"} data-aos={"zoom-in"} data-aos-delay={"800"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Post+8"} alt={"Instagram Post 8"} className={"instagram-image"} />
            <p className={"instagram-content"}>Innovation expo showcases. #Creativity</p>
            <p className={"instagram-date"}>Posted on: October 5, 2025</p>
        </div>
    </div>
</section>
{/* Premium Features Section */}

{/* Premium Divider */}
<div className={"premium-divider"}></div>
{/* Testimonials Section */}

{/* Premium Divider */}
<section className={"premium-events"} id={"events"} data-aos={"fade-in"}>
    <h2 className={"section-title"} data-aos={"fade-down"}>Upcoming Premium Events</h2>
    <div className={"events-grid"}>
        <div className={"event-card fade-in-up"} data-aos={"zoom-in"} data-aos-delay={"100"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Hackathon+2025"} alt={"Hackathon 2025"} className={"event-poster"} />
            <h3 className={"event-title"}>Hackathon 2025</h3>
            <p className={"event-desc"}>Join the ultimate coding challenge with premium prizes and networking opportunities.</p>
            <p className={"event-date"}>Date: October 15, 2025</p>
        </div>
        <div className={"event-card slide-in-left"} data-aos={"zoom-in"} data-aos-delay={"200"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=AI+Workshop"} alt={"AI Workshop"} className={"event-poster"} />
            <h3 className={"event-title"}>AI Workshop</h3>
            <p className={"event-desc"}>Dive deep into artificial intelligence with hands-on sessions from industry experts.</p>
            <p className={"event-date"}>Date: November 5, 2025</p>
        </div>
        <div className={"event-card slide-in-right"} data-aos={"zoom-in"} data-aos-delay={"300"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Tech+Talk+Series"} alt={"Tech Talk Series"} className={"event-poster"} />
            <h3 className={"event-title"}>Tech Talk Series</h3>
            <p className={"event-desc"}>Insights from top tech leaders on emerging trends and innovations.</p>
            <p className={"event-date"}>Date: December 10, 2025</p>
        </div>
        <div className={"event-card zoom-in"} data-aos={"zoom-in"} data-aos-delay={"400"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Cybersecurity+Summit"} alt={"Cybersecurity Summit"} className={"event-poster"} />
            <h3 className={"event-title"}>Cybersecurity Summit</h3>
            <p className={"event-desc"}>Explore advanced security strategies in a premium setting.</p>
            <p className={"event-date"}>Date: January 20, 2026</p>
        </div>
        <div className={"event-card rotate-in"} data-aos={"zoom-in"} data-aos-delay={"500"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Data+Science+Bootcamp"} alt={"Data Science Bootcamp"} className={"event-poster"} />
            <h3 className={"event-title"}>Data Science Bootcamp</h3>
            <p className={"event-desc"}>Intensive training for aspiring data scientists with real-world projects.</p>
            <p className={"event-date"}>Date: February 15, 2026</p>
        </div>
        <div className={"event-card bounce-in"} data-aos={"zoom-in"} data-aos-delay={"600"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Blockchain+Conference"} alt={"Blockchain Conference"} className={"event-poster"} />
            <h3 className={"event-title"}>Blockchain Conference</h3>
            <p className={"event-desc"}>Discuss the future of decentralized technologies with global experts.</p>
            <p className={"event-date"}>Date: March 10, 2026</p>
        </div>
        <div className={"event-card flip-in-x"} data-aos={"zoom-in"} data-aos-delay={"700"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=DevOps+Masterclass"} alt={"DevOps Masterclass"} className={"event-poster"} />
            <h3 className={"event-title"}>DevOps Masterclass</h3>
            <p className={"event-desc"}>Learn elite DevOps practices for seamless deployments.</p>
            <p className={"event-date"}>Date: April 5, 2026</p>
        </div>
        <div className={"event-card light-speed-in"} data-aos={"zoom-in"} data-aos-delay={"800"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Innovation+Expo"} alt={"Innovation Expo"} className={"event-poster"} />
            <h3 className={"event-title"}>Innovation Expo</h3>
            <p className={"event-desc"}>Showcase and discover cutting-edge tech innovations.</p>
            <p className={"event-date"}>Date: May 20, 2026</p>
        </div>
    </div>
</section>
<div className={"premium-divider"}></div>
{/* Premium Team Section - Super Luxurious */}

<section className={"premium-features"} id={"features"} data-aos={"fade-in"}>
    <h2 className={"section-title"} data-aos={"fade-down"}>Premium Features</h2>
    <div className={"features-grid"}>
        <div className={"feature-card fade-in-up"} data-aos={"zoom-in"}>
            <i className={"feature-icon fas fa-microchip"}></i>
            <h3 className={"feature-title"}>Advanced DSA Mastery</h3>
            <p className={"feature-desc"}>Unlock elite algorithms with luxurious interactive tutorials.</p>
        </div>
        <div className={"feature-card slide-in-left"} data-aos={"zoom-in"} data-aos-delay={"200"}>
            <i className={"feature-icon fas fa-robot"}></i>
            <h3 className={"feature-title"}>AI-Powered Mock Interviews</h3>
            <p className={"feature-desc"}>Experience high-end simulation for tech placements.</p>
        </div>
        <div className={"feature-card slide-in-right"} data-aos={"zoom-in"} data-aos-delay={"400"}>
            <i className={"feature-icon fas fa-code"}></i>
            <h3 className={"feature-title"}>Coding Challenges Suite</h3>
            <p className={"feature-desc"}>Premium problems curated for top-tier preparation.</p>
        </div>
        <div className={"feature-card zoom-in"} data-aos={"zoom-in"} data-aos-delay={"600"}>
            <i className={"feature-icon fas fa-cloud"}></i>
            <h3 className={"feature-title"}>Cloud-Based Resume Builder</h3>
            <p className={"feature-desc"}>Craft luxurious resumes with AI assistance.</p>
        </div>
        <div className={"feature-card rotate-in"} data-aos={"zoom-in"} data-aos-delay={"800"}>
            <i className={"feature-icon fas fa-database"}></i>
            <h3 className={"feature-title"}>Data Science Roadmaps</h3>
            <p className={"feature-desc"}>Elite paths for data-driven careers.</p>
        </div>
        <div className={"feature-card bounce-in"} data-aos={"zoom-in"} data-aos-delay={"1000"}>
            <i className={"feature-icon fas fa-shield"}></i>
            <h3 className={"feature-title"}>Cybersecurity Essentials</h3>
            <p className={"feature-desc"}>Premium protection knowledge for tech roles.</p>
        </div>
        <div className={"feature-card flip-in-x"} data-aos={"zoom-in"} data-aos-delay={"1200"}>
            <i className={"feature-icon fas fa-chart-line"}></i>
            <h3 className={"feature-title"}>Analytics Dashboard</h3>
            <p className={"feature-desc"}>Track progress with luxurious visualizations.</p>
        </div>
        <div className={"feature-card light-speed-in"} data-aos={"zoom-in"} data-aos-delay={"1400"}>
            <i className={"feature-icon fas fa-laptop-code"}></i>
            <h3 className={"feature-title"}>DevOps Mastery</h3>
            <p className={"feature-desc"}>High-end deployment strategies.</p>
        </div>
        <div className={"feature-card roll-in"} data-aos={"zoom-in"} data-aos-delay={"1600"}>
            <i className={"feature-icon fas fa-server"}></i>
            <h3 className={"feature-title"}>Serverless Computing</h3>
            <p className={"feature-desc"}>Premium cloud architectures.</p>
        </div>
        <div className={"feature-card rubber-band"} data-aos={"zoom-in"} data-aos-delay={"1800"}>
            <i className={"feature-icon fas fa-mobile-alt"}></i>
            <h3 className={"feature-title"}>Mobile App Development</h3>
            <p className={"feature-desc"}>Luxurious cross-platform solutions.</p>
        </div>
    </div>
</section>
{/* Premium Divider */}
<div className={"premium-divider"}></div>
{/* Premium Alumni Section - Super Advance Luxurious */}
<section className={"premium-team"} id={"team"} data-aos={"fade-in"}>
    <h2 className={"section-title"} data-aos={"fade-down"}>Elite Team Members</h2>
    <div className={"team-grid"}>
        <div className={"team-card fade-in-up"} data-aos={"zoom-in"} data-aos-delay={"100"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=John+Doe"} alt={"John Doe"} className={"team-photo"} />
            <h3 className={"team-name"}>John Doe</h3>
            <p className={"team-post"}>Founder & CEO</p>
        </div>
        <div className={"team-card slide-in-left"} data-aos={"zoom-in"} data-aos-delay={"200"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Jane+Smith"} alt={"Jane Smith"} className={"team-photo"} />
            <h3 className={"team-name"}>Jane Smith</h3>
            <p className={"team-post"}>CTO & Tech Lead</p>
        </div>
        <div className={"team-card slide-in-right"} data-aos={"zoom-in"} data-aos-delay={"300"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Mike+Johnson"} alt={"Mike Johnson"} className={"team-photo"} />
            <h3 className={"team-name"}>Mike Johnson</h3>
            <p className={"team-post"}>Senior Developer</p>
        </div>
        <div className={"team-card zoom-in"} data-aos={"zoom-in"} data-aos-delay={"400"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Emily+Davis"} alt={"Emily Davis"} className={"team-photo"} />
            <h3 className={"team-name"}>Emily Davis</h3>
            <p className={"team-post"}>AI Specialist</p>
        </div>
        <div className={"team-card rotate-in"} data-aos={"zoom-in"} data-aos-delay={"500"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Alex+Wilson"} alt={"Alex Wilson"} className={"team-photo"} />
            <h3 className={"team-name"}>Alex Wilson</h3>
            <p className={"team-post"}>Data Scientist</p>
        </div>
        <div className={"team-card bounce-in"} data-aos={"zoom-in"} data-aos-delay={"600"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Sarah+Brown"} alt={"Sarah Brown"} className={"team-photo"} />
            <h3 className={"team-name"}>Sarah Brown</h3>
            <p className={"team-post"}>UX/UI Designer</p>
        </div>
        <div className={"team-card flip-in-x"} data-aos={"zoom-in"} data-aos-delay={"700"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=David+Lee"} alt={"David Lee"} className={"team-photo"} />
            <h3 className={"team-name"}>David Lee</h3>
            <p className={"team-post"}>DevOps Engineer</p>
        </div>
        <div className={"team-card light-speed-in"} data-aos={"zoom-in"} data-aos-delay={"800"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Lisa+Garcia"} alt={"Lisa Garcia"} className={"team-photo"} />
            <h3 className={"team-name"}>Lisa Garcia</h3>
            <p className={"team-post"}>Product Manager</p>
        </div>
        <div className={"team-card roll-in"} data-aos={"zoom-in"} data-aos-delay={"900"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Tom+Martinez"} alt={"Tom Martinez"} className={"team-photo"} />
            <h3 className={"team-name"}>Tom Martinez</h3>
            <p className={"team-post"}>Blockchain Expert</p>
        </div>
        <div className={"team-card rubber-band"} data-aos={"zoom-in"} data-aos-delay={"1000"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Anna+Taylor"} alt={"Anna Taylor"} className={"team-photo"} />
            <h3 className={"team-name"}>Anna Taylor</h3>
            <p className={"team-post"}>Cybersecurity Lead</p>
        </div>
        <div className={"team-card wobble"} data-aos={"zoom-in"} data-aos-delay={"1100"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Chris+Anderson"} alt={"Chris Anderson"} className={"team-photo"} />
            <h3 className={"team-name"}>Chris Anderson</h3>
            <p className={"team-post"}>Full Stack Developer</p>
        </div>
        <div className={"team-card jello"} data-aos={"zoom-in"} data-aos-delay={"1200"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Rachel+Thomas"} alt={"Rachel Thomas"} className={"team-photo"} />
            <h3 className={"team-name"}>Rachel Thomas</h3>
            <p className={"team-post"}>ML Engineer</p>
        </div>
        <div className={"team-card swing"} data-aos={"zoom-in"} data-aos-delay={"1300"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Kevin+White"} alt={"Kevin White"} className={"team-photo"} />
            <h3 className={"team-name"}>Kevin White</h3>
            <p className={"team-post"}>Cloud Architect</p>
        </div>
        <div className={"team-card tada"} data-aos={"zoom-in"} data-aos-delay={"1400"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Nina+Harris"} alt={"Nina Harris"} className={"team-photo"} />
            <h3 className={"team-name"}>Nina Harris</h3>
            <p className={"team-post"}>Content Strategist</p>
        </div>
        <div className={"team-card bounce-in"} data-aos={"zoom-in"} data-aos-delay={"1500"}>
            <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Mark+Clark"} alt={"Mark Clark"} className={"team-photo"} />
            <h3 className={"team-name"}>Mark Clark</h3>
            <p className={"team-post"}>QA Lead</p>
        </div>
    </div>
</section>


{/* Premium Divider */}
{/*<div class="premium-divider"></div>*/}
{/* Premium Events Section - Super Luxurious */}

{/* Premium Divider */}
<div className={"premium-divider"}></div>
{/* Premium Instagram Section - Super Luxurious */}
<section className={"premium-alumni"} id={"alumni"} data-aos={"fade-in"}>
<h2 className={"section-title"} data-aos={"fade-down"}>Distinguished Alumni Success</h2>
<div className={"alumni-grid"}>
    <div className={"alumni-card fade-in-up"} data-aos={"zoom-in"} data-aos-delay={"100"}>
        <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Alice+Johnson"} alt={"Alice Johnson"} className={"alumni-photo"} />
        <h3 className={"alumni-name"}>Alice Johnson</h3>
        <p className={"alumni-company"}>Google</p>
        <p className={"alumni-batch"}>Batch of 2023</p>
    </div>
    <div className={"alumni-card slide-in-left"} data-aos={"zoom-in"} data-aos-delay={"200"}>
        <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Bob+Smith"} alt={"Bob Smith"} className={"alumni-photo"} />
        <h3 className={"alumni-name"}>Bob Smith</h3>
        <p className={"alumni-company"}>Microsoft</p>
        <p className={"alumni-batch"}>Batch of 2022</p>
    </div>
    <div className={"alumni-card slide-in-right"} data-aos={"zoom-in"} data-aos-delay={"300"}>
        <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Carol+Davis"} alt={"Carol Davis"} className={"alumni-photo"} />
        <h3 className={"alumni-name"}>Carol Davis</h3>
        <p className={"alumni-company"}>Amazon</p>
        <p className={"alumni-batch"}>Batch of 2024</p>
    </div>
    <div className={"alumni-card zoom-in"} data-aos={"zoom-in"} data-aos-delay={"400"}>
        <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=David+Wilson"} alt={"David Wilson"} className={"alumni-photo"} />
        <h3 className={"alumni-name"}>David Wilson</h3>
        <p className={"alumni-company"}>Meta</p>
        <p className={"alumni-batch"}>Batch of 2021</p>
    </div>
    <div className={"alumni-card rotate-in"} data-aos={"zoom-in"} data-aos-delay={"500"}>
        <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Eva+Martinez"} alt={"Eva Martinez"} className={"alumni-photo"} />
        <h3 className={"alumni-name"}>Eva Martinez</h3>
        <p className={"alumni-company"}>Apple</p>
        <p className={"alumni-batch"}>Batch of 2023</p>
    </div>
    <div className={"alumni-card bounce-in"} data-aos={"zoom-in"} data-aos-delay={"600"}>
        <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Frank+Lee"} alt={"Frank Lee"} className={"alumni-photo"} />
        <h3 className={"alumni-name"}>Frank Lee</h3>
        <p className={"alumni-company"}>Tesla</p>
        <p className={"alumni-batch"}>Batch of 2022</p>
    </div>
    <div className={"alumni-card flip-in-x"} data-aos={"zoom-in"} data-aos-delay={"700"}>
        <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Grace+Taylor"} alt={"Grace Taylor"} className={"alumni-photo"} />
        <h3 className={"alumni-name"}>Grace Taylor</h3>
        <p className={"alumni-company"}>Netflix</p>
        <p className={"alumni-batch"}>Batch of 2024</p>
    </div>
    <div className={"alumni-card light-speed-in"} data-aos={"zoom-in"} data-aos-delay={"800"}>
        <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Henry+Garcia"} alt={"Henry Garcia"} className={"alumni-photo"} />
        <h3 className={"alumni-name"}>Henry Garcia</h3>
        <p className={"alumni-company"}>SpaceX</p>
        <p className={"alumni-batch"}>Batch of 2020</p>
    </div>
    <div className={"alumni-card roll-in"} data-aos={"zoom-in"} data-aos-delay={"900"}>
        <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Ivy+Anderson"} alt={"Ivy Anderson"} className={"alumni-photo"} />
        <h3 className={"alumni-name"}>Ivy Anderson</h3>
        <p className={"alumni-company"}>IBM</p>
        <p className={"alumni-batch"}>Batch of 2023</p>
    </div>
    <div className={"alumni-card rubber-band"} data-aos={"zoom-in"} data-aos-delay={"1000"}>
        <img src={"https://via.placeholder.com/300x250/1A1A1A/D4AF37?text=Jack+White"} alt={"Jack White"} className={"alumni-photo"} />
        <h3 className={"alumni-name"}>Jack White</h3>
        <p className={"alumni-company"}>Oracle</p>
        <p className={"alumni-batch"}>Batch of 2022</p>
    </div>
</div>
</section>
{/* Premium Divider */}
<div className={"premium-divider"}></div>
{/* CTA Section */}

{/* Premium Bot */}
<div id={"bot"}>🤖</div>
{/* Premium Chat Modal */}
<div id={"chat-modal"}>
    <div id={"chat-header"}>Luxury AI Assistant <span id={"close-btn"}>×</span></div>
    <div id={"chat-body"}></div>
    <div id={"chat-input"}>
        <input id={"user-input"} type={"text"} placeholder={"Inquire about premium tech..."} />
        <button id={"send-btn"}>Send</button>
    </div>
</div>



    </div>
  );
}
