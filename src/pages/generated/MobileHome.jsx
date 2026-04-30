// AUTO-GENERATED — DO NOT EDIT BY HAND
// Generated from legacy-source/responsive part mobile.html
// by scripts/convert-html-to-react.mjs
//
// This file is the React port of the original HTML page. Every
// element, attribute, inline style, and child node from the source
// document has been mechanically translated to JSX. Inline <script>
// blocks live in ./MobileHome.scripts.js and run in a useEffect after
// mount; <style> blocks live in ./MobileHome.css and are imported
// at the top of this module.

import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MobileHome.css';
import { runScripts, cleanupScripts } from './MobileHome.scripts';
import { mapHrefToRoute } from '../../utils/routeMap.js';

const PAGE_ID = "MobileHome";

export default function MobileHome() {
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
    <div ref={rootRef} className="legacy-page legacy-MobileHome">

{/* SUPER ULTRA ADVANCED PREMIUM PRO MAX CODING RAIN BACKGROUND */}
<div className={"premium-coding-rain-bg"}>
    <div className={"binary-matrix-rain"} id={"binaryMatrixRain"}></div>
    <div className={"tech-grid-overlay"}></div>
</div>
{/* Ultra Premium Rain Effect */}
<div className={"rain-container"} id={"rainContainer"}></div>
{/* Premium Navbar from Original Code */}
<header className={"modern-navbar"}>
    <div className={"navbar-container"}>
        <div className={"navbar-logo premium-tooltip"} data-tooltip={"Welcome to TaruGuardians"}>
            <span className={"logo-arrow left"}>&lt;</span>
            <img src={"circlelogotaru.png"} alt={"TaruGuardians Logo"} loading={"eager"} />
            <span>TaruGuardians</span>
            <span className={"logo-arrow right"}>&gt;</span>
        </div>
        <nav className={"navbar-center"}>
            <div className={"navbar-links"}>
                <a href={"#home"} className={"active fade-in-up"}>Home</a>
                <a href={"#instagram"} className={"slide-in-left"}>Instagram Post</a>
                <a href={"#events"} className={"slide-in-right"}>Events</a>
                <a href={"#roadmap"} className={"bounce-in"}>Tech roadmap</a>
                <a href={"#team"} className={"tada"}>Team Members</a>
                <a href={"#alumni"} className={"tada"}>Alumni</a>
            </div>
        </nav>
        {/* Auth Button */}
        <Link to="/auth" className={"auth-login-btn"} style={{background: "linear-gradient(135deg,#D4AF37,#B8962E)", color: "#000", padding: "8px 16px", borderRadius: "20px", fontSize: "13px", fontWeight: "700", textDecoration: "none", marginLeft: "8px"}}>Login</Link>
        <div className={"auth-user-menu"} style={{display: "none", alignItems: "center", gap: "8px", marginLeft: "8px"}}>
            <Link to="/dashboard" style={{background: "var(--premium-gradient)", color: "#000", padding: "8px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: "700", textDecoration: "none"}}>Dashboard</Link>
        </div>
        <div className={"hamburger"}>≡</div>
    </div>
    <div className={"mobile-menu"}>
        <a href={"#home"}>Home</a>
        <a href={"#instagram"}>Our Instagram Post</a>
        <a href={"#events"}>Events</a>
        <a href={"#roadmap"}>Tech roadmap</a>
        <a href={"#team"}>Team Members</a>
        <a href={"#alumni"}>Alumni</a>
        <Link to="/auth" className={"auth-login-btn"} style={{color: "var(--premium-gold)", fontWeight: "700"}}>Login / Sign Up</Link>
        <Link to="/dashboard" className={"auth-user-menu"} style={{display: "none", color: "var(--premium-gold)", fontWeight: "700"}}>My Dashboard</Link>
    </div>
</header>
{/* Ultra Premium Homepage */}
<section className={"hero-scene"} id={"home"}>
    <div className={"floating-tech-elements"}>
        <div className={"tech-element"} style={{width: "80px", height: "80px", top: "20%", left: "10%", animationDelay: "0s"}}></div>
        <div className={"tech-element"} style={{width: "100px", height: "100px", top: "60%", left: "80%", animationDelay: "1s"}}></div>
        <div className={"tech-element"} style={{width: "70px", height: "70px", top: "80%", left: "20%", animationDelay: "2s"}}></div>
        <div className={"tech-element"} style={{width: "90px", height: "90px", top: "30%", left: "70%", animationDelay: "3s"}}></div>
    </div>
    {/* NEW: Premium Circular Elements */}
    <div className={"premium-circular-elements"}>
        <div className={"circular-element"}></div>
        <div className={"circular-element"}></div>
        <div className={"circular-element"}></div>
        <div className={"circular-element"}></div>
    </div>
    <div className={"binary-rain"} id={"binaryRain"}></div>
    <div className={"tech-orb"} style={{top: "20%", left: "20%"}}></div>
    <div className={"tech-orb"} style={{top: "70%", left: "70%"}}></div>
    
    <div className={"holographic-logo"}>
        <h1 className={"holographic-title"}>TARUGUARDIANS</h1>
        <p className={"holographic-subtitle"}>Where Code Meets Creativity</p>
        <p className={"holographic-subtitle"}>The Fusion of 95% Tech, 5% Non-Tech</p>
        <div className={"hero-cta"}>
            <Link to="/events" className={"premium-btn"}>Explore Events</Link>
        </div>
        {/* Recruitment CTA */}
        <div style={{textAlign: "center", marginTop: "30px"}}>
            <h3 style={{color: "var(--premium-gold)", fontSize: "1.5rem", fontWeight: "700", marginBottom: "10px"}}>Be a part of TaruGuardians</h3>
            <p style={{color: "var(--premium-white)", fontSize: "0.9rem", marginBottom: "15px", opacity: "0.8"}}>Join TaruGuardians to learn, grow, and lead.</p>
            <button data-legacy-onclick="window.location.href='recruitment.html'" style={{background: "linear-gradient(135deg, var(--premium-gold), var(--premium-gold-light))", border: "none", color: "#000", fontSize: "1rem", fontWeight: "700", padding: "14px 35px", borderRadius: "30px", cursor: "pointer", boxShadow: "0 4px 20px var(--premium-shadow)"}}>Apply Now →</button>
        </div>
    </div>
</section>
{/* Instagram Section */}
<section className={"content-section"} id={"instagram"}>
    <h2 className={"section-title"}>Our Instagram Post</h2>
    <div className={"responsive-grid"}>
        <Link to="/instagram" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"premium-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"card-image-container"}>
                    <img src={"post%204.png"} alt={"Gandhi Jayanti"} className={"card-image"} />
                </div>
                <h3 className={"card-title"}>Children's Day</h3>
                <p className={"card-content"}>TaruGuardians wish every child a happy children's day</p>
            </div>
        </Link>
        <Link to="/instagram" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"premium-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"card-image-container"}>
                    <img src={"post%203.png"} alt={"Gandhi Jayanti"} className={"card-image"} />
                </div>
                <h3 className={"card-title"}>Without a Guru, none can cross over</h3>
                <p className={"card-content"}>TaruGuardians wish everyone a happy Guru Nanak jayanti ✨</p>
            </div>
        </Link>
        <Link to="/instagram" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"premium-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"card-image-container"}>
                    <img src={"post 2`"} alt={"Gandhi Jayanti"} className={"card-image"} />
                </div>
                <h3 className={"card-title"}>Diwali Post</h3>
                <p className={"card-content"}>Team TaruGuardians wish everyone a very Happy and Joyous Diwali 🪔💛!</p>
            </div>
        </Link>
        <Link to="/instagram" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"premium-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"card-image-container"}>
                    <img src={"post%201.png"} alt={"Gandhi Jayanti"} className={"card-image"} />
                </div>
                <h3 className={"card-title"}>Dhanteras Post</h3>
                <p className={"card-content"}>Team TaruGuardians wish everyone a bright , blessed and blissful Dhanteras 🙌🏻.</p>
            </div>
        </Link>
        <Link to="/instagram" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"premium-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"card-image-container"}>
                    <img src={"r7.png"} alt={"From circuits to saplings"} className={"card-image"} />
                </div>
                <h3 className={"card-title"}>From circuits to saplings</h3>
                <p className={"card-content"}>Join TaruGuardians and start your journey of coding, creating, and conserving.</p>
            </div>
        </Link>
        <Link to="/instagram" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"premium-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"card-image-container"}>
                    <img src={"r6.png"} alt={"Touching Skies with Unwavering Glory"} className={"card-image"} />
                </div>
                <h3 className={"card-title"}>Touching Skies with Unwavering Glory</h3>
                <p className={"card-content"}>Team TaruGuardians extends its heartfelt gratitude to the heroes of the Indian Air Force.</p>
            </div>
        </Link>
        <Link to="/instagram" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"premium-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"card-image-container"}>
                    <img src={"r5.png"} alt={"धर्मो जयति नाधर्मः"} className={"card-image"} />
                </div>
                <h3 className={"card-title"}>धर्मो जयति नाधर्मः</h3>
                <p className={"card-content"}>Team TaruGuardians wishes everyone a Happy Dussehra.</p>
            </div>
        </Link>

    </div>
</section>
{/* Events Section */}
<section className={"content-section"} id={"events"}>
    <h2 className={"section-title"}>Events</h2>
    <div className={"responsive-grid"}>
        <Link to="/events" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"premium-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"card-image-container"}>
                    <img src={"Event%202.png"} alt={"Abhivyakti(hindi diwas) 2025"} className={"card-image"} />
                </div>
                <h3 className={"card-title"}>Abhivyakti 2025</h3>
                <p className={"card-content"}>TaruGuardians bringing an offline non-technical event about communication and fun.</p>
                <p className={"card-content"} style={{color: "var(--premium-gold)", marginTop: "0.5rem"}}>Date: September 13, 2025</p>
            </div>
        </Link>
        <Link to="/events" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"premium-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"card-image-container"}>
                    <img src={"Event%201.png"} alt={"Python Workshop 2025"} className={"card-image"} />
                </div>
                <h3 className={"card-title"}>Python Workshop</h3>
                <p className={"card-content"}>Step into the world where ideas turn into code!</p>
                <p className={"card-content"} style={{color: "var(--premium-gold)", marginTop: "0.5rem"}}>Date: August 17, 2025</p>
            </div>
        </Link>
        <Link to="/events" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"premium-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"card-image-container"}>
                    <img src={"Gate.jpg"} alt={"GATE & Placement Talk 2025"} className={"card-image"} />
                </div>
                <h3 className={"card-title"}>GATE & Placement Talk</h3>
                <p className={"card-content"}>Crack GATE & Placements with Chandan Jha (AVP, GFG).</p>
                <p className={"card-content"} style={{color: "var(--premium-gold)", marginTop: "0.5rem"}}>Date: March 23, 2025</p>
            </div>
        </Link>
        <Link to="/events" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"premium-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"card-image-container"}>
                    <img src={"FIFMAIMAGE.jpg"} alt={"FIGMA CRAFT 2.0 event 2025"} className={"card-image"} />
                </div>
                <h3 className={"card-title"}>FIGMA CRAFT 2.0</h3>
                <p className={"card-content"}>Design, Collaborate, Create by TaruGuardians.</p>
                <p className={"card-content"} style={{color: "var(--premium-gold)", marginTop: "0.5rem"}}>Date: March 1st & 2nd, 2025</p>
            </div>
        </Link>
    </div>
</section>
{/* Tech Roadmap Section */}
<section className={"content-section"} id={"roadmap"}>
    <h2 className={"section-title"}>Tech Roadmap</h2>
    <div className={"responsive-grid"}>
        <Link to="/roadmap" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"premium-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"card-image-container"}>
                    <img src={"cp2.jpg"} alt={"Competitive Programming"} className={"card-image"} />
                </div>
                <h3 className={"card-title"}>Competitive Programming</h3>
                <p className={"card-content"}>Roadmap By TaruGuardians team for Competitive Programming. Master algorithms, data structures, and problem-solving techniques.</p>
            </div>
        </Link>
        <Link to="/roadmap" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"premium-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"card-image-container"}>
                    <img src={"cp.jpg"} alt={"Web Development"} className={"card-image"} />
                </div>
                <h3 className={"card-title"}>Web Development</h3>
                <p className={"card-content"}>Roadmap for cracking tech placements in Web Development. From HTML/CSS to advanced frameworks and deployment.</p>
            </div>
        </Link>
        <Link to="/roadmap" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"premium-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"card-image-container"}>
                    <img src={"ios.jpg"} alt={"iOS Development"} className={"card-image"} />
                </div>
                <h3 className={"card-title"}>iOS Development</h3>
                <p className={"card-content"}>Roadmap By TaruGuardians team for iOS Development. Learn Swift, UIKit, SwiftUI and build amazing iOS applications.</p>
            </div>
        </Link>
        <Link to="/roadmap" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"premium-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"card-image-container"}>
                    <img src={"code.jpg"} alt={"Blockchain Development"} className={"card-image"} />
                </div>
                <h3 className={"card-title"}>Blockchain Development</h3>
                <p className={"card-content"}>Roadmap By TaruGuardians team for Blockchain Development. Explore smart contracts, DApps, and decentralized technologies.</p>
            </div>
        </Link>
        <Link to="/roadmap" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"premium-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"card-image-container"}>
                    <img src={"gamedeveloper2.jpg"} alt={"Game Development"} className={"card-image"} />
                </div>
                <h3 className={"card-title"}>Game Development</h3>
                <p className={"card-content"}>Roadmap By TaruGuardians team for Game Development. Create immersive gaming experiences with Unity, Unreal Engine, and more.</p>
            </div>
        </Link>
        <Link to="/roadmap" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"premium-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"card-image-container"}>
                    <img src={"cyber%20security.jpg"} alt={"Cybersecurity"} className={"card-image"} />
                </div>
                <h3 className={"card-title"}>Cybersecurity</h3>
                <p className={"card-content"}>Roadmap By TaruGuardians team for Cybersecurity. Learn ethical hacking, network security, and protection strategies.</p>
            </div>
        </Link>
    </div>
</section>
{/* Team Section - MOVED BEFORE ALUMNI */}
<section className={"content-section"} id={"team"}>
    <h2 className={"section-title"}>Team Members</h2>
    <div className={"responsive-grid"}>
        <Link to="/alumni" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"premium-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"card-image-container"}>
                    <img src={"New President.jpg"} alt={"Prakash Kumar"} className={"card-image"} />
                </div>
                <h3 className={"card-title"}>Prakash Kumar</h3>
                <p className={"card-content"}>President</p>
                {/*                <p class="card-content">Leading TaruGuardians with a vision to bridge the gap between technology and nature. Passionate about creating impactful tech communities.</p>*/}
            </div>
        </Link>
        <Link to="/alumni" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"premium-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"card-image-container"}>
                    <img src={"new2vicepresident.png"} alt={"Mukul Anand"} className={"card-image"} />
                </div>
                <h3 className={"card-title"}>Mukul Anand</h3>
                <p className={"card-content"}>Vice President</p>
                {/*                <p class="card-content">Driving club initiatives and ensuring smooth operations. Specializes in AI and machine learning with multiple project experiences.</p>*/}
            </div>
        </Link>
        <Link to="/alumni" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"premium-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"card-image-container"}>
                    <img src={"treasurer.png"} alt={"Pushkar Aditya"} className={"card-image"} />
                </div>
                <h3 className={"card-title"}>Pushkar Aditya</h3>
                <p className={"card-content"}>Treasurer</p>
                {/*                <p class="card-content">Managing club finances and resources efficiently. Background in economics with a passion for fintech and blockchain technology.</p>*/}
            </div>
        </Link>
        <Link to="/alumni" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"premium-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"card-image-container"}>
                    <img src={"techhead.png"} alt={"Aashish Kishore"} className={"card-image"} />
                </div>
                <h3 className={"card-title"}>Aashish Kishore</h3>
                <p className={"card-content"}>Tech Head</p>
                {/*                <p class="card-content">Overseeing all technical projects and workshops. Full-stack developer with expertise in web technologies and cloud computing.</p>*/}
            </div>
        </Link>
        <Link to="/alumni" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"premium-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"card-image-container"}>
                    <img src={"newjs.png"} alt={"Akshat Thakur"} className={"card-image"} />
                </div>
                <h3 className={"card-title"}>Akshat Thakur</h3>
                <p className={"card-content"}>Joint Secretary</p>
                {/*                <p class="card-content">Supporting club operations and member coordination. Skilled in data analytics and project management.</p>*/}
            </div>
        </Link>
        <Link to="/alumni" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"premium-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"card-image-container"}>
                    <img src={"adminstrative.png"} alt={"Ritik Kumar"} className={"card-image"} />
                </div>
                <h3 className={"card-title"}>Ritik Kumar</h3>
                <p className={"card-content"}>Administrative Head</p>
                {/*                <p class="card-content">Managing administrative tasks and ensuring smooth club functioning. Experienced in event planning and coordination.</p>*/}
            </div>
        </Link>
        <Link to="/alumni" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"premium-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"card-image-container"}>
                    <img src={"newjs2.png"} alt={"Kriti Divyansha"} className={"card-image"} />
                </div>
                <h3 className={"card-title"}>Kriti Divyansha</h3>
                <p className={"card-content"}>Joint Secretary</p>
                {/*                <p class="card-content">Assisting in club operations and member engagement. Background in design and content creation.</p>*/}
            </div>
        </Link>
    </div>
</section>
{/* Alumni Section - MOVED AFTER TEAM */}
<section className={"content-section"} id={"alumni"}>
    <h2 className={"section-title"}>Our Distinguished Alumni</h2>
    <div className={"alumni-grid"}>
        <Link to="/alumni" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"alumni-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"alumni-image-container"}>
                    <img src={"rohan%20kumar%20singh.jpg"} alt={"Rohan Kumar Singh"} className={"alumni-image"} />
                </div>
                <h3 className={"alumni-name"}>Rohan Kumar Singh</h3>
                <p className={"alumni-role"}>President</p>
                <p className={"alumni-batch"}>Batch of 2025</p>
                {/*                <p class="alumni-batch">Led the club to new heights with innovative events and expanded our tech community reach across campus.</p>*/}
            </div>
        </Link>
        <Link to="/alumni" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"alumni-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"alumni-image-container"}>
                    <img src={"anand%20kumar%20jha.jpg"} alt={"Anand Kumar Jha"} className={"alumni-image"} />
                </div>
                <h3 className={"alumni-name"}>Anand Kumar Jha</h3>
                <p className={"alumni-role"}>Vice President</p>
                <p className={"alumni-batch"}>Batch of 2025</p>
                {/*                <p class="alumni-batch">Instrumental in organizing major tech events and workshops that benefited hundreds of students.</p>*/}
            </div>
        </Link>
        <Link to="/alumni" style={{textDecoration: "none", color: "inherit"}}>
            <div className={"alumni-card content-fade-in super-ultra-advanced-3d-tilt"}>
                <div className={"alumni-image-container"}>
                    <img src={"utsav%20raj.png"} alt={"Utsav Raj"} className={"alumni-image"} />
                </div>
                <h3 className={"alumni-name"}>Utsav Raj</h3>
                <p className={"alumni-role"}>PR Head</p>
                <p className={"alumni-batch"}>Batch of 2025</p>
                {/*                <p class="alumni-batch">Expanded our network with industry partners and increased club visibility through strategic partnerships.</p>*/}
            </div>
        </Link>
    </div>
</section>
{/* Footer from Original Code */}
<footer className={"footer"}>
    <div className={"footer-logo-container"}>
        <img src={"circlelogotaru.png"} alt={"TaruGuardians Logo"} loading={"eager"} />
        <h3>(Turn Passion Into Purpose)</h3>
    </div>
    <div className={"footer-columns"}>
        <div className={"footer-column"}>
            <h2>TaruGuardians</h2>
            <p>Just as trees grow with deep roots, we grow with deep tech. From seeds of code to canopies of change — building a greener, smarter future.</p>
            <p>(ROOTED IN NATURE, DRIVEN BY TECH)</p>
        </div>
        <div className={"footer-column"}>
            <h3>Contact</h3>
            <p>Taru.Guardians@gmail.com</p>
        </div>
        <div className={"footer-column"}>
            <h3>Follow Us</h3>
            <div className={"social-icons"}>
                <a href={"#"}><img src={"instag.png"} alt={"Instagram"} loading={"eager"} /></a>
                <a href={"#"}><img src={"linkden.png"} alt={"LinkedIn"} loading={"eager"} /></a>
                <a href={"#"}><img src={"facebook.png"} alt={"Facebook"} loading={"eager"} /></a>
                <a href={"#"}><img src={"youtube.webp"} alt={"YouTube"} loading={"eager"} /></a>
            </div>
            <em>Stay updated with our latest posts, events, and workshops</em>
        </div>
    </div>
    <small>© 2025 TaruGuardians. All rights reserved.</small>
</footer>

{/* RECRUITMENT MODAL FOR MOBILE */}
<div id={"recruitmentModal"} style={{display: "none", position: "fixed", top: "0", left: "0", width: "100%", height: "100%", background: "rgba(0,0,0,0.95)", zIndex: "10000", justifyContent: "center", alignItems: "flex-start", padding: "20px", overflowY: "auto"}}>
    <div style={{background: "linear-gradient(135deg, #1a1a2e, #16213e)", borderRadius: "20px", maxWidth: "500px", width: "100%", maxHeight: "90vh", overflowY: "auto", position: "relative", border: "1px solid rgba(212,175,55,0.3)", margin: "auto"}}>
        <button data-legacy-onclick="closeRecruitmentModal()" style={{position: "absolute", top: "15px", right: "15px", background: "none", border: "none", color: "var(--premium-gold)", fontSize: "28px", cursor: "pointer", zIndex: "10"}}>×</button>
        
        <div style={{height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", margin: "0"}}>
            <div id={"formProgress"} style={{height: "100%", background: "linear-gradient(90deg, var(--premium-gold), var(--premium-gold-light))", width: "33%", transition: "width 0.3s ease", borderRadius: "2px"}}></div>
        </div>
        
        <div style={{padding: "25px"}}>
            {/* Step 1: Basic Info */}
            <div id={"step1"} className={"form-step"}>
                <h2 style={{color: "var(--premium-gold)", fontSize: "1.3rem", marginBottom: "20px", textAlign: "center"}}>
                    Join <span style={{color: "var(--premium-gold-light)"}}>TaruGuardians</span>
                </h2>
                <div style={{display: "grid", gap: "12px"}}>
                    <input type={"text"} id={"recName"} placeholder={"Full Name *"} style={{width: "100%", padding: "12px 15px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "10px", color: "#fff", fontSize: "0.95rem", outline: "none"}} />
                    <input type={"email"} id={"recEmail"} placeholder={"Email Address *"} style={{width: "100%", padding: "12px 15px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "10px", color: "#fff", fontSize: "0.95rem", outline: "none"}} />
                    <input type={"tel"} id={"recPhone"} placeholder={"Phone Number *"} style={{width: "100%", padding: "12px 15px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "10px", color: "#fff", fontSize: "0.95rem", outline: "none"}} />
                    <input type={"text"} id={"recWhatsapp"} placeholder={"WhatsApp Number *"} style={{width: "100%", padding: "12px 15px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "10px", color: "#fff", fontSize: "0.95rem", outline: "none"}} />
                    <input type={"text"} id={"recRoll"} placeholder={"Class Roll Number *"} style={{width: "100%", padding: "12px 15px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "10px", color: "#fff", fontSize: "0.95rem", outline: "none"}} />
                    <select id={"recDepartment"} style={{width: "100%", padding: "12px 15px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "10px", color: "#fff", fontSize: "0.95rem", outline: "none"}}>
                        <option value={true}>Select Department *</option>
                        <option value={"CSE"}>Computer Science & Engineering</option>
                        <option value={"IT"}>Information Technology</option>
                        <option value={"ECE"}>Electronics & Communication</option>
                        <option value={"EE"}>Electrical Engineering</option>
                        <option value={"ME"}>Mechanical Engineering</option>
                        <option value={"CE"}>Civil Engineering</option>
                        <option value={"Other"}>Other</option>
                    </select>
                    <select id={"recYear"} style={{width: "100%", padding: "12px 15px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "10px", color: "#fff", fontSize: "0.95rem", outline: "none"}}>
                        <option value={true}>Select Year *</option>
                        <option value={"1st"}>1st Year</option>
                        <option value={"2nd"}>2nd Year</option>
                        <option value={"3rd"}>3rd Year</option>
                        <option value={"4th"}>4th Year</option>
                    </select>
                </div>
                <button data-legacy-onclick="nextStep(2)" style={{width: "100%", marginTop: "18px", background: "linear-gradient(135deg, var(--premium-gold), var(--premium-gold-light))", color: "#000", border: "none", padding: "12px", fontSize: "0.95rem", fontWeight: "600", borderRadius: "10px", cursor: "pointer"}}>Next <i className={"fas fa-arrow-right"}></i></button>
            </div>
            
            {/* Step 2: Role Selection */}
            <div id={"step2"} className={"form-step"} style={{display: "none"}}>
                <h2 style={{color: "var(--premium-gold)", fontSize: "1.3rem", marginBottom: "20px", textAlign: "center"}}>
                    Choose Your <span style={{color: "var(--premium-gold-light)"}}>Role</span>
                </h2>
                <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px"}}>
                    <label className={"role-option"} style={{background: "rgba(255,255,255,0.05)", border: "2px solid rgba(212,175,55,0.2)", borderRadius: "12px", padding: "12px", cursor: "pointer", transition: "all 0.3s", textAlign: "center"}}>
                        <input type={"radio"} name={"recPosition"} value={"Public Relation"} style={{display: "none"}} />
                        <i className={"fas fa-bullhorn"} style={{fontSize: "1.3rem", color: "var(--premium-gold)", marginBottom: "6px"}}></i>
                        <div style={{color: "#fff", fontSize: "0.8rem", fontWeight: "500"}}>PR</div>
                    </label>
                    <label className={"role-option"} style={{background: "rgba(255,255,255,0.05)", border: "2px solid rgba(212,175,55,0.2)", borderRadius: "12px", padding: "12px", cursor: "pointer", transition: "all 0.3s", textAlign: "center"}}>
                        <input type={"radio"} name={"recPosition"} value={"Web/App Developer"} style={{display: "none"}} />
                        <i className={"fas fa-code"} style={{fontSize: "1.3rem", color: "var(--premium-gold)", marginBottom: "6px"}}></i>
                        <div style={{color: "#fff", fontSize: "0.8rem", fontWeight: "500"}}>Developer</div>
                    </label>
                    <label className={"role-option"} style={{background: "rgba(255,255,255,0.05)", border: "2px solid rgba(212,175,55,0.2)", borderRadius: "12px", padding: "12px", cursor: "pointer", transition: "all 0.3s", textAlign: "center"}}>
                        <input type={"radio"} name={"recPosition"} value={"Photographer/Videographer"} style={{display: "none"}} />
                        <i className={"fas fa-camera"} style={{fontSize: "1.3rem", color: "var(--premium-gold)", marginBottom: "6px"}}></i>
                        <div style={{color: "#fff", fontSize: "0.8rem", fontWeight: "500"}}>Photo</div>
                    </label>
                    <label className={"role-option"} style={{background: "rgba(255,255,255,0.05)", border: "2px solid rgba(212,175,55,0.2)", borderRadius: "12px", padding: "12px", cursor: "pointer", transition: "all 0.3s", textAlign: "center"}}>
                        <input type={"radio"} name={"recPosition"} value={"Video Editor"} style={{display: "none"}} />
                        <i className={"fas fa-video"} style={{fontSize: "1.3rem", color: "var(--premium-gold)", marginBottom: "6px"}}></i>
                        <div style={{color: "#fff", fontSize: "0.8rem", fontWeight: "500"}}>Video</div>
                    </label>
                    <label className={"role-option"} style={{background: "rgba(255,255,255,0.05)", border: "2px solid rgba(212,175,55,0.2)", borderRadius: "12px", padding: "12px", cursor: "pointer", transition: "all 0.3s", textAlign: "center"}}>
                        <input type={"radio"} name={"recPosition"} value={"Graphics Designer"} style={{display: "none"}} />
                        <i className={"fas fa-paint-brush"} style={{fontSize: "1.3rem", color: "var(--premium-gold)", marginBottom: "6px"}}></i>
                        <div style={{color: "#fff", fontSize: "0.8rem", fontWeight: "500"}}>Designer</div>
                    </label>
                    <label className={"role-option"} style={{background: "rgba(255,255,255,0.05)", border: "2px solid rgba(212,175,55,0.2)", borderRadius: "12px", padding: "12px", cursor: "pointer", transition: "all 0.3s", textAlign: "center"}}>
                        <input type={"radio"} name={"recPosition"} value={"Content Writer"} style={{display: "none"}} />
                        <i className={"fas fa-pen"} style={{fontSize: "1.3rem", color: "var(--premium-gold)", marginBottom: "6px"}}></i>
                        <div style={{color: "#fff", fontSize: "0.8rem", fontWeight: "500"}}>Writer</div>
                    </label>
                </div>
                <div style={{display: "flex", gap: "10px", marginTop: "18px"}}>
                    <button data-legacy-onclick="nextStep(1)" style={{flex: "1", background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(212,175,55,0.3)", padding: "12px", fontSize: "0.95rem", borderRadius: "10px", cursor: "pointer"}}><i className={"fas fa-arrow-left"}></i> Back</button>
                    <button data-legacy-onclick="nextStep(3)" style={{flex: "1", background: "linear-gradient(135deg, var(--premium-gold), var(--premium-gold-light))", color: "#000", border: "none", padding: "12px", fontSize: "0.95rem", fontWeight: "600", borderRadius: "10px", cursor: "pointer"}}>Next <i className={"fas fa-arrow-right"}></i></button>
                </div>
            </div>
            
            {/* Step 3: Role-specific & Why Join */}
            <div id={"step3"} className={"form-step"} style={{display: "none"}}>
                <h2 style={{color: "var(--premium-gold)", fontSize: "1.3rem", marginBottom: "20px", textAlign: "center"}}>
                    Tell Us <span style={{color: "var(--premium-gold-light)"}}>More</span>
                </h2>
                <div id={"roleSpecificFields"}></div>
                <div style={{marginTop: "12px"}}>
                    <label style={{color: "rgba(255,255,255,0.8)", fontSize: "0.85rem", marginBottom: "6px", display: "block"}}>Why do you want to join TaruGuardians? *</label>
                    <textarea id={"recWhyJoin"} rows={"3"} placeholder={"Share your motivation..."} style={{width: "100%", padding: "12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "10px", color: "#fff", fontSize: "0.95rem", outline: "none", resize: "vertical"}}></textarea>
                </div>
                <div style={{display: "flex", gap: "10px", marginTop: "18px"}}>
                    <button data-legacy-onclick="nextStep(2)" style={{flex: "1", background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(212,175,55,0.3)", padding: "12px", fontSize: "0.95rem", borderRadius: "10px", cursor: "pointer"}}><i className={"fas fa-arrow-left"}></i> Back</button>
                    <button data-legacy-onclick="submitRecruitment()" id={"submitBtn"} style={{flex: "1", background: "linear-gradient(135deg, var(--premium-gold), var(--premium-gold-light))", color: "#000", border: "none", padding: "12px", fontSize: "0.95rem", fontWeight: "600", borderRadius: "10px", cursor: "pointer"}}>Submit <i className={"fas fa-paper-plane"}></i></button>
                </div>
            </div>
            
            {/* Success Step */}
            <div id={"stepSuccess"} className={"form-step"} style={{display: "none", textAlign: "center"}}>
                <div style={{fontSize: "3.5rem", marginBottom: "15px"}}>🎉</div>
                <h2 style={{color: "var(--premium-gold)", fontSize: "1.5rem", marginBottom: "12px"}}>Application Submitted!</h2>
                <p style={{color: "rgba(255,255,255,0.8)", marginBottom: "20px", fontSize: "0.9rem"}}>Thank you for applying to TaruGuardians. We'll review your application soon.</p>
                <div style={{background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: "12px", padding: "15px", marginBottom: "18px"}}>
                    <p style={{color: "var(--premium-gold)", fontWeight: "600", marginBottom: "8px", fontSize: "0.9rem"}}>Join our WhatsApp Community</p>
                    <a href={"https://chat.whatsapp.com/IKUt4M5NcHVKYyoTezoJYi"} target={"_blank"} style={{color: "#000", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", padding: "10px 18px", borderRadius: "25px", fontWeight: "600", fontSize: "0.85rem"}}>
                        <i className={"fab fa-whatsapp"}></i> Join Group
                    </a>
                </div>
                <button data-legacy-onclick="closeRecruitmentModal()" style={{background: "linear-gradient(135deg, var(--premium-gold), var(--premium-gold-light))", color: "#000", border: "none", padding: "10px 25px", fontSize: "0.95rem", fontWeight: "600", borderRadius: "25px", cursor: "pointer"}}>Done</button>
            </div>
        </div>
    </div>
</div>








    </div>
  );
}
