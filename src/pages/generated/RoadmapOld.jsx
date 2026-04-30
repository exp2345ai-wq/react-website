// AUTO-GENERATED — DO NOT EDIT BY HAND
// Generated from legacy-source/roadmap12.html
// by scripts/convert-html-to-react.mjs
//
// This file is the React port of the original HTML page. Every
// element, attribute, inline style, and child node from the source
// document has been mechanically translated to JSX. Inline <script>
// blocks live in ./RoadmapOld.scripts.js and run in a useEffect after
// mount; <style> blocks live in ./RoadmapOld.css and are imported
// at the top of this module.

import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RoadmapOld.css';
import { runScripts, cleanupScripts } from './RoadmapOld.scripts';
import { mapHrefToRoute } from '../../utils/routeMap.js';

const PAGE_ID = "RoadmapOld";

export default function RoadmapOld() {
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
    <div ref={rootRef} className="legacy-page legacy-RoadmapOld">


{/* Navbar */}
<header className={"modern-navbar"}>
    <div className={"navbar-container"}>
        <div className={"navbar-logo"}>
            <span className={"logo-arrow left"}>&lt;</span>
            <img src={"tarulogo.png"} alt={"TaruGuardians Logo"} />
            TaruGuardians
            <span className={"logo-arrow right"}>&gt;</span>
        </div>
        <nav className={"navbar-center"}>
            <div className={"navbar-links"}>
                <a href={"navbarsuccessful.html#home"}>Home</a>
                <a href={"navbarsuccessful.html#tech-wheel"}>Tech Tool</a>
                <a href={"navbarsuccessful.html#events"}>Events</a>
                <a href={"#"} className={"active"}>Roadmaps</a>
                <a href={"navbarsuccessful.html#projects"}>Projects</a>
                <a href={"navbarsuccessful.html#team"}>Team</a>
                <a href={"navbarsuccessful.html#alumni"}>Alumni</a>
                {/*                <a href="navbarsuccessful.html#blog" class="navbar-blog-btn">Blog</a>*/}
            </div>
        </nav>
        <a href={"#"} className={"navbar-blog-btn"}>Our Blog</a>
    </div>
</header>

{/* Main Content */}
<div className={"container"}>
    <h1 className={"roadmaps-title"}>Roadmaps By TaruGuardians Team</h1>
    <div className={"roadmap-grid"}>

        <a href={" https://roadmap.sh/full-stack"} target={"_blank"} style={{textDecoration: "none"}}>
        <div className={"roadmap-card"}>
            <img src={"web5.jpg"} alt={"Roadmap 1"} />
            <h2>Web Development Roadmap
        </h2></div>
        </a>
            <a href={"https://roadmap.sh/devops"} target={"_blank"} style={{textDecoration: "none"}}>
        <div className={"roadmap-card"}>
            <img src={"cp2.jpg"} alt={"Roadmap 2"} />
            <h2>Competetive programming Roadmap</h2>
        </div>
            </a>
                <a href={"https://roadmap.sh/data-analyst"} target={"_blank"} style={{textDecoration: "none"}}>
        <div className={"roadmap-card"}>
            <img src={"ios.jpg"} alt={"NLP Roadmap"} />
            <h2>ios Development Roadmap</h2>
        </div>
                </a>
                    <a href={"https://roadmap.sh/android"} target={"_blank"} style={{textDecoration: "none"}}>
        <div className={"roadmap-card"}>
            <img src={"gamedeveloper2.jpg"} alt={"Machine Learning Roadmap"} />
            <h2>Game Development Roadmap</h2>
        </div>
                    </a>
                        <a href={"https://roadmap.sh/ios"} target={"_blank"} style={{textDecoration: "none"}}>
        <div className={"roadmap-card"}>
            <img src={"app.jpg"} alt={"Competitive Programming Roadmap"} />
            <h2>Android Development Roadmap</h2>
        </div>
                        </a>
                            <a href={"https://roadmap.sh/blockchain"} target={"_blank"} style={{textDecoration: "none"}}>
        <div className={"roadmap-card"}>
            <img src={"blockchasin.jpg"} alt={"Information Security Roadmap"} />
            <h2>Blockchain Developer Roadmap</h2>
        </div>
                            </a>
                                <a href={"https://roadmap.sh/cyber-security"} target={"_blank"} style={{textDecoration: "none"}}>
        <div className={"roadmap-card"}>
            <img src={"cp.jpg"} alt={"Machine Learning Roadmap"} />
            <h2>DSA Roadmap</h2>
        </div>
                                </a>
                                    <a href={"https://roadmap.sh/game-developer"} target={"_blank"} style={{textDecoration: "none"}}>
        <div className={"roadmap-card"}>
            <img src={"architect.jpg"} alt={"Competitive Programming Roadmap"} />
            <h2>Software Architect Roadmap</h2>
        </div>
                                    </a>
                                        <a href={"https://roadmap.sh/mlops"} target={"_blank"} style={{textDecoration: "none"}}>
        <div className={"roadmap-card"}>
            <img src={"cyber%20security.jpg"} alt={"Information Security Roadmap"} />
            <h2>Cyber Security Roadmap</h2>
        </div>
                                        </a>
                                            <a href={"https://roadmap.sh/software-architect"} target={"_blank"} style={{textDecoration: "none"}}>
        <div className={"roadmap-card"}>
            <img src={"data%20analyst.jpg"} alt={"Machine Learning Roadmap"} />
            <h2>Data Analyst Roadmap</h2>
        </div>
                                            </a>
{/*                                                <a href="https://roadmap.sh/ai-data-scientist" target="_blank" style="text-decoration: none;">*/}
{/*        <div class="roadmap-card">*/}
{/*            <img src="ai%20data%20analyst.jpg" alt="Competitive Programming Roadmap">*/}
{/*            <h2>Competitive Programming Roadmap</h2>*/}
{/*        </div>*/}
{/*                                                </a>*/}
{/*                                                    <a href="https://roadmap.sh/postgresql-dba" target="_blank" style="text-decoration: none;">*/}
{/*        <div class="roadmap-card">*/}
{/*            <img src="web2.webp" alt="Information Security Roadmap">*/}
{/*            <h2>Information Security Roadmap</h2>*/}
{/*        </div>*/}
                                                    
    </div>
</div>

{/* Footer */}

<footer style={{backgroundColor: "#000", color: "#fff", padding: "40px 20px", fontFamily: "Arial, sans-serif", position: "relative", textAlign: "center"}}>
    {/* Font Awesome CDN for social media icons */}
    

    {/* Logo and Tagline */}
    <div style={{textAlign: "center", marginBottom: "20px"}}>
        <img src={"circlelogotaru.png"} alt={"TaruGuardians Logo"} style={{width: "100px", height: "100px", borderRadius: "50%", display: "block", margin: "0 auto 5px"}} />
        <h3 style={{fontSize: "18px", color: "#fff", margin: "0"}}>(TURN PASSION INTO PURPOSE)</h3>
    </div>

    {/* Footer Content */}
    <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap", maxWidth: "1200px", margin: "0 auto"}}>
        {/* Description Section */}
        <div style={{margin: "20px", minWidth: "200px"}}>
            <h2 style={{fontSize: "24px", marginBottom: "15px"}}>TaruGuardians</h2>
            <p style={{fontSize: "14px", color: "#ccc", lineHeight: "1.6", maxWidth: "300px"}}>
                Just as trees grow with deep roots, we grow with deep tech. From seeds of code to canopies of change — building a greener, smarter future.
            </p>
            <p style={{fontSize: "12px", color: "#ccc", marginTop: "10px"}}>(ROOTED IN NATURE, DRIVEN BY TECH)</p>
        </div>

        {/* Blog Button Section */}
        <div style={{margin: "20px", minWidth: "200px", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <a href={"#"} style={{backgroundColor: "#1e90ff", color: "#fff", padding: "10px 20px", borderRadius: "25px", textDecoration: "none", fontSize: "16px"}}>Our Blog</a>
        </div>

        {/* Contact Section */}
        <div style={{margin: "20px", minWidth: "200px"}}>
            <h3 style={{fontSize: "18px", marginBottom: "15px"}}>Contact</h3>
            <p style={{fontSize: "14px", color: "#ccc"}}>Taru.Guardians@gmail.com</p>
        </div>

        {/* Follow Us Section */}
        <div style={{margin: "20px", minWidth: "200px"}}>
            <h3 style={{fontSize: "18px", marginBottom: "15px"}}>Follow Us</h3>
            <div style={{display: "flex", justifyContent: "center", gap: "10px", marginBottom: "10px"}}>
                <a href={"#"} style={{color: "#ff69b4", fontSize: "20px"}}><i className={"fab fa-instagram"}></i></a>
                <a href={"#"} style={{color: "#1e90ff", fontSize: "20px"}}><i className={"fab fa-linkedin"}></i></a>
                <a href={"#"} style={{color: "#3b5998", fontSize: "20px"}}><i className={"fab fa-facebook"}></i></a>
                <a href={"#"} style={{color: "#ff0000", fontSize: "20px"}}><i className={"fab fa-youtube"}></i></a>
            </div>
            <p style={{fontSize: "12px", color: "#ccc", fontStyle: "italic"}}>Stay updated with our latest posts, events, and workshops</p>
        </div>
    </div>

    {/* Copyright Notice */}
    <div style={{textAlign: "center", marginTop: "20px", fontSize: "12px", color: "#ccc"}}>
        © 2025 TaruGuardians. All rights reserved.
    </div>
</footer>
{/*<footer class="footer">*/}
{/*    <div class="footer-content">*/}
{/*        <div class="footer-logo-container">*/}
{/*            <div class="footer-logo">*/}
{/*                <img src="circlelogotaru.png" alt="TaruGuardians Logo" />*/}
{/*            </div>*/}
{/*            <div class="footer-center-sub">(Turn Passion Into Purpose)</div>*/}
{/*        </div>*/}

{/*        <div class="footer-main-content">*/}
{/*            <div class="footer-left">*/}
{/*                <h2>TaruGuardians</h2>*/}
{/*                <p>As trees grow with deep roots, we grow with deep tech. From seeds of code to canopies of change — building a greener, smarter future.</p>*/}
{/*                <small>(ROOTED IN NATURE, DRIVEN BY TECH)</small>*/}
{/*            </div>*/}
{/*            <div class="footer-right">*/}
{/*                <div class="footer-contact">Contact</div>*/}
{/*                <div class="footer-email">TaruGuardians@gmail.com</div>*/}
{/*                <div style="font-weight:700; margin-bottom:8px;">Follow Us</div>*/}
{/*                <div class="footer-socials">*/}
{/*                    <a href="#"><i class="fab fa-instagram"></i></a>*/}
{/*                    <a href="#"><i class="fab fa-linkedin"></i></a>*/}
{/*                    <a href="#"><i class="fab fa-facebook"></i></a>*/}
{/*                    <a href="#"><i class="fab fa-youtube"></i></a>*/}
{/*                </div>*/}
{/*                <p>Stay updated with our latest posts, events, and Workshops!</p>*/}
{/*            </div>*/}
{/*        </div>*/}
{/*    </div>*/}
{/*    <div class="footer-bottom">*/}
{/*        © 2025 TaruGuardians. All rights reserved.*/}
{/*    </div>*/}
{/*</footer>*/}




    </div>
  );
}
