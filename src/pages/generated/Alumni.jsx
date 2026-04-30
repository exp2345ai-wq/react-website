// AUTO-GENERATED — DO NOT EDIT BY HAND
// Generated from legacy-source/resposnsivealumnipage24.html
// by scripts/convert-html-to-react.mjs
//
// This file is the React port of the original HTML page. Every
// element, attribute, inline style, and child node from the source
// document has been mechanically translated to JSX. Inline <script>
// blocks live in ./Alumni.scripts.js and run in a useEffect after
// mount; <style> blocks live in ./Alumni.css and are imported
// at the top of this module.

import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Alumni.css';
import { runScripts, cleanupScripts } from './Alumni.scripts';
import { mapHrefToRoute } from '../../utils/routeMap.js';

const PAGE_ID = "Alumni";

export default function Alumni() {
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
    <div ref={rootRef} className="legacy-page legacy-Alumni">

{/* Background Video */}
<video className={"video-bg"} autoPlay={true} muted={true} loop={true} playsinline={true}>
    <source src={"hithaldia.mp4"} type={"video/mp4"} />
    Your browser does not support the video tag.
</video>

{/* TaruGuardians Style Navbar */}
<header className={"modern-navbar"}>
    <div className={"navbar-container"}>
        <div className={"navbar-logo"}>
            <span className={"logo-arrow left"}>&lt;</span>
            <img src={"tarulogo.png"} alt={"Tech Club Logo"} />
            <span>TaruGuardians</span>
            <span className={"logo-arrow right"}>&gt;</span>
        </div>
        <button className={"hamburger"}><i className={"fas fa-bars"}></i></button>
        <div className={"navbar-center"}>
            <div className={"navbar-links"}>
                <Link to="/home" className={"active"}>Home</Link>
                <Link to="/home">Event</Link>
                <Link to="/home">TARU WINGS</Link>
                <Link to="/home">Roadmap</Link>
                <Link to="/home">Placement Guide</Link>
                <Link to="/home">Team</Link>
            </div>
            <Link to="/auth" className={"navbar-blog-btn auth-login-btn"}>Login</Link>
            <div className={"auth-user-menu"} style={{display: "none"}}>
                <Link to="/dashboard" className={"navbar-blog-btn"}>Dashboard</Link>
            </div>
        </div>
        <div className={"mobile-menu"}>
            <Link to="/home">Home</Link>
            <Link to="/home">Event</Link>
            <Link to="/home">TARU WINGS</Link>
            <Link to="/home">Roadmap</Link>
            <Link to="/home">Placement Guide</Link>
            <Link to="/home">Team</Link>
            <Link to="/auth" className={"auth-login-btn"}>Login</Link>
            <Link to="/dashboard" className={"auth-user-menu"} style={{display: "none"}}>Dashboard</Link>
        </div>
    </div>
</header>


{/* Main Content Container */}
<div className={"main-content"}>
    {/* Main Banner Section (Carousel) */}
    <div className={"d-flex justify-content-center align-items-center"} style={{minHeight: "80vh"}}>
        <div id={"bannerCarousel"} className={"carousel slide"} data-bs-ride={"carousel"} data-bs-interval={"2000"} data-bs-wrap={"true"}>
            <div className={"carousel-inner"}>
                {/* Slide 1 */}
                <div className={"carousel-item active"}>
                    <div className={"custom-banner"}>
                        <div className={"banner-left"}>
                            <div className={"mb-2"}>
                                <img src={"tarulogo.png"} alt={"Taru Logo"} style={{height: "32px"}} />
                            </div>
                            <h2 className={"text-white fw-bold mb-1"} style={{fontSize: "1.4rem"}}>Program Head @ TaruGuadians</h2>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>Electrical Engineering</div>
                            <div className={"text-white mb-1"} style={{fontSize: "1rem"}}>Placed At</div>
                            <div className={"fw-bold mb-2"} style={{fontSize: "2.1rem", background: "#ffd600", color: "#002147", display: "inline-block", padding: "0.2em 0.7em", borderRadius: "0.25em"}}>
                                Birla Soft
                            </div>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>Position: Apprentice</div>
                            <button className={"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2"}>
                                Khushi Kumari(Batch Of 2020-2024)
                            </button>
                        </div>
                        <div className={"banner-right"}>
                            <img src={"Khushi%20Kumari.png"} alt={"Student"} className={"banner-img"} />
                        </div>
                    </div>
                </div>
                {/* Slide 2 */}
                <div className={"carousel-item"}>
                    <div className={"custom-banner"}>
                        <div className={"banner-left"}>
                            <div className={"mb-2"}>
                                <img src={"tarulogo.png"} alt={"taru Logo"} style={{height: "32px"}} />
                            </div>
                            <h2 className={"text-white fw-bold mb-1"} style={{fontSize: "1.4rem"}}>President @ TaruGuardians</h2>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>CSE(DATA SCIENCE)</div>
                            <div className={"text-white mb-1"} style={{fontSize: "1rem"}}>Placed At</div>
                            <div className={"fw-bold mb-2"} style={{fontSize: "2.1rem", background: "#ffd600", color: "#002147", display: "inline-block", padding: "0.2em 0.7em", borderRadius: "0.25em"}}>
                                BlueStock
                            </div>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>Position: SDE</div>
                            <button className={"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2"}>
                                Rohan Kumar Singh(Batch Of 2021-2025)
                            </button>
                        </div>
                        <div className={"banner-right"}>
                            <img src={"presidentrohan.jpg"} alt={"Student"} className={"banner-img"} />
                        </div>
                    </div>
                </div>
                {/* Slide 3 */}
                <div className={"carousel-item"}>
                    <div className={"custom-banner"}>
                        <div className={"banner-left"}>
                            <div className={"mb-2"}>
                                <img src={"Taru.png"} alt={"Taru Logo"} style={{height: "32px"}} />
                            </div>
                            <h2 className={"text-white fw-bold mb-1"} style={{fontSize: "1.4rem"}}>Program Head @ TaruGuardians</h2>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>Electrical Engineering</div>
                            <div className={"text-white mb-1"} style={{fontSize: "1rem"}}>Placed At</div>
                            <div className={"fw-bold mb-2"} style={{fontSize: "2.1rem", background: "#ffd600", color: "#002147", display: "inline-block", padding: "0.2em 0.7em", borderRadius: "0.25em"}}>
                                Amazon
                            </div>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>Position: SDE</div>
                            <button className={"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2"}>
                                Aryan Raj(Batch Of 2021-2025)
                            </button>
                        </div>
                        <div className={"banner-right"}>
                            <img src={"aryan.jpg"} alt={"Student"} className={"banner-img"} />
                        </div>
                    </div>
                </div>
                {/* Slide 4 */}
                <div className={"carousel-item"}>
                    <div className={"custom-banner"}>
                        <div className={"banner-left"}>
                            <div className={"mb-2"}>
                                <img src={"tarulogo.png"} alt={"Taru Logo"} style={{height: "32px"}} />
                            </div>
                            <h2 className={"text-white fw-bold mb-1"} style={{fontSize: "1.4rem"}}>Vice President @ TaruGuardians</h2>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>CSE(main)</div>
                            <div className={"text-white mb-1"} style={{fontSize: "1rem"}}>Internship At</div>
                            <div className={"fw-bold mb-2"} style={{fontSize: "2.1rem", background: "#ffd600", color: "#002147", display: "inline-block", padding: "0.2em 0.7em", borderRadius: "0.25em"}}>
                                Oasis Infobyte
                            </div>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>Position: Web Developer</div>
                            <button className={"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2"}>
                                Anand Kumar Jha(Batch Of 2021-2025)
                            </button>
                        </div>
                        <div className={"banner-right"}>
                            <img src={"vicepresident.jpg"} alt={"Student"} className={"banner-img"} />
                        </div>
                    </div>
                </div>
                {/* Slide 5 */}
                <div className={"carousel-item"}>
                    <div className={"custom-banner"}>
                        <div className={"banner-left"}>
                            <div className={"mb-2"}>
                                <img src={"Taru.png"} alt={"TARU Logo"} style={{height: "32px"}} />
                            </div>
                            <h2 className={"text-white fw-bold mb-1"} style={{fontSize: "1.4rem"}}>PR Head @ TaruGuardians</h2>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>CSE(Data Science)</div>
                            <div className={"text-white mb-1"} style={{fontSize: "1rem"}}>Internship At</div>
                            <div className={"fw-bold mb-2"} style={{fontSize: "2.1rem", background: "#ffd600", color: "#002147", display: "inline-block", padding: "0.2em 0.7em", borderRadius: "0.25em"}}>
                                TDS Avenue
                            </div>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>Position: Web Developer</div>
                            <button className={"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2"}>
                                Utsav Raj(Batch Of 2021-2025)
                            </button>
                        </div>
                        <div className={"banner-right"}>
                            <img src={"utsav%20raj.png"} alt={"Student"} className={"banner-img"} />
                        </div>
                    </div>
                </div>
                {/* Slide 6 */}
                <div className={"carousel-item"}>
                    <div className={"custom-banner"}>
                        <div className={"banner-left"}>
                            <div className={"mb-2"}>
                                <img src={"Taru.png"} alt={"TARU Logo"} style={{height: "32px"}} />
                            </div>
                            <h2 className={"text-white fw-bold mb-1"} style={{fontSize: "1.4rem"}}>Adminstrative Head @ TaruGuardians</h2>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>Information Technology</div>
                            <div className={"text-white mb-1"} style={{fontSize: "1rem"}}> Forward Program At</div>
                            <div className={"fw-bold mb-2"} style={{fontSize: "2.1rem", background: "#ffd600", color: "#002147", display: "inline-block", padding: "0.2em 0.7em", borderRadius: "0.25em"}}>
                                MCKinsey & Company
                            </div>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>Position: Forward Program </div>
                            <button className={"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2"}>
                                Mohit Kumar Singh(Batch Of 2021-2025)
                            </button>
                        </div>
                        <div className={"banner-right"}>
                            <img src={"Mohit.jpg"} alt={"Student"} className={"banner-img"} />
                        </div>
                    </div>
                </div>
                {/* Slide 7 */}
                <div className={"carousel-item"}>
                    <div className={"custom-banner"}>
                        <div className={"banner-left"}>
                            <div className={"mb-2"}>
                                <img src={"Taru.png"} alt={"TARU Logo"} style={{height: "32px"}} />
                            </div>
                            <h2 className={"text-white fw-bold mb-1"} style={{fontSize: "1.4rem"}}>Js Non Tech @ TaruGuardians</h2>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>Cyber Security</div>
                            <div className={"text-white mb-1"} style={{fontSize: "1rem"}}>Campus Representative  At</div>
                            <div className={"fw-bold mb-2"} style={{fontSize: "2.1rem", background: "#ffd600", color: "#002147", display: "inline-block", padding: "0.2em 0.7em", borderRadius: "0.25em"}}>
                                GeeksForGeeks
                            </div>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>Position: Campus Ambassdor</div>
                            <button className={"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2"}>
                                Adarsh Ranjan(Batch Of 2021-2025)
                            </button>
                        </div>
                        <div className={"banner-right"}>
                            <img src={"adarsh%20ranjan.jpg"} alt={"Student"} className={"banner-img"} />
                        </div>
                    </div>
                </div>
                {/* Slide 8 */}
                <div className={"carousel-item"}>
                    <div className={"custom-banner"}>
                        <div className={"banner-left"}>
                            <div className={"mb-2"}>
                                <img src={"Taru.png"} alt={"TARU Logo"} style={{height: "32px"}} />
                            </div>
                            <h2 className={"text-white fw-bold mb-1"} style={{fontSize: "1.4rem"}}>Treasurer @ TaruGuardians</h2>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>E.C.E</div>
                            <div className={"text-white mb-1"} style={{fontSize: "1rem"}}>TalentNext Trainee AT</div>
                            <div className={"fw-bold mb-2"} style={{fontSize: "2.1rem", background: "#ffd600", color: "#002147", display: "inline-block", padding: "0.2em 0.7em", borderRadius: "0.25em"}}>
                                Wipro
                            </div>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>Position: Trainee</div>
                            <button className={"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2"}>
                                Bishnu Chatterjee(Batch Of 2021-2025)
                            </button>
                        </div>
                        <div className={"banner-right"}>
                            <img src={"Bishnu.jpg"} alt={"Student"} className={"banner-img"} />
                        </div>
                    </div>
                </div>
                {/* Slide 9 */}
                <div className={"carousel-item"}>
                    <div className={"custom-banner"}>
                        <div className={"banner-left"}>
                            <div className={"mb-2"}>
                                <img src={"Taru.png"} alt={"TARU Logo"} style={{height: "32px"}} />
                            </div>
                            <h2 className={"text-white fw-bold mb-1"} style={{fontSize: "1.4rem"}}>JS Tech @ TaruGuardians</h2>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>Electrical Engineering </div>
                            <div className={"text-white mb-1"} style={{fontSize: "1rem"}}>Campus Ambassdor At</div>
                            <div className={"fw-bold mb-2"} style={{fontSize: "2.1rem", background: "#ffd600", color: "#002147", display: "inline-block", padding: "0.2em 0.7em", borderRadius: "0.25em"}}>
                                IIT Kharagpur
                            </div>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>Position: Campus Ambassdor</div>
                            <button className={"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2"}>
                                Harshita Sinha(Batch Of 2021-2025)
                            </button>
                        </div>
                        <div className={"banner-right"}>
                            <img src={"harshita%20sinha.jpg"} alt={"Student"} className={"banner-img"} />
                        </div>
                    </div>
                </div>
                {/* Slide 10 */}
                <div className={"carousel-item"}>
                    <div className={"custom-banner"}>
                        <div className={"banner-left"}>
                            <div className={"mb-2"}>
                                <img src={"Taru.png"} alt={"taru Logo"} style={{height: "32px"}} />
                            </div>
                            <h2 className={"text-white fw-bold mb-1"} style={{fontSize: "1.4rem"}}>Management Head @ TaruGuardians</h2>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>Civil Engineering</div>
                            <div className={"text-white mb-1"} style={{fontSize: "1rem"}}>Internship At</div>
                            <div className={"fw-bold mb-2"} style={{fontSize: "2.1rem", background: "#ffd600", color: "#002147", display: "inline-block", padding: "0.2em 0.7em", borderRadius: "0.25em"}}>
                                Bureau Of Indian Standards
                            </div>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>Position: Web Content Writer</div>
                            <button className={"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2"}>
                                Bhumika Singh(Batch Of 2021-2025)
                            </button>
                        </div>
                        <div className={"banner-right"}>
                            <img src={"Bhimika%20singh.jpg"} alt={"Student"} className={"banner-img"} />
                        </div>
                    </div>
                </div>
                {/* Slide 11 */}
                <div className={"carousel-item"}>
                    <div className={"custom-banner"}>
                        <div className={"banner-left"}>
                            <div className={"mb-2"}>
                                <img src={"Taru.png"} alt={"taru Logo"} style={{height: "32px"}} />
                            </div>
                            <h2 className={"text-white fw-bold mb-1"} style={{fontSize: "1.4rem"}}>Tech Head @ TaruGuardians</h2>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>CSE(AIML)</div>
                            <div className={"text-white mb-1"} style={{fontSize: "1rem"}}>Cracked Gate</div>
                            <div className={"fw-bold mb-2"} style={{fontSize: "2.1rem", background: "#ffd600", color: "#002147", display: "inline-block", padding: "0.2em 0.7em", borderRadius: "0.25em"}}>
                                AIR: 456, country Topper(CSE),NPTEL
                            </div>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>Position: None</div>
                            <button className={"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2"}>
                                ADI NATH BHAWANI(Batch Of 2021-2025)
                            </button>
                        </div>
                        <div className={"banner-right"}>
                            <img src={"GateTopper.png"} alt={"Student"} className={"banner-img"} />
                        </div>
                    </div>
                </div>
                {/* Slide 12 */}
                <div className={"carousel-item"}>
                    <div className={"custom-banner"}>
                        <div className={"banner-left"}>
                            <div className={"mb-2"}>
                                <img src={"Taru.png"} alt={"taru Logo"} style={{height: "32px"}} />
                            </div>
                            <h2 className={"text-white fw-bold mb-1"} style={{fontSize: "1.4rem"}}>Management Head @ TaruGuardians</h2>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>Chemical Engineering</div>
                            <div className={"text-white mb-1"} style={{fontSize: "1rem"}}>Placed At</div>
                            <div className={"fw-bold mb-2"} style={{fontSize: "2.1rem", background: "#ffd600", color: "#002147", display: "inline-block", padding: "0.2em 0.7em", borderRadius: "0.25em"}}>
                                Integri Robotics & Automation
                            </div>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>Position: Sales and Application Engineer</div>
                            <button className={"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2"}>
                                Prasoon Kumar(Batch Of 2021-2025)
                            </button>
                        </div>
                        <div className={"banner-right"}>
                            <img src={"Prasoon%20Kumar.jpg"} alt={"Student"} className={"banner-img"} />
                        </div>
                    </div>
                </div>
                {/* Slide 13 */}
                <div className={"carousel-item"}>
                    <div className={"custom-banner"}>
                        <div className={"banner-left"}>
                            <div className={"mb-2"}>
                                <img src={"Taru.png"} alt={"taru Logo"} style={{height: "32px"}} />
                            </div>
                            <h2 className={"text-white fw-bold mb-1"} style={{fontSize: "1.4rem"}}>Media Head @ TaruGuardians</h2>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>CSE(main)</div>
                            <div className={"text-white mb-1"} style={{fontSize: "1rem"}}>Placed At</div>
                            <div className={"fw-bold mb-2"} style={{fontSize: "2.1rem", background: "#ffd600", color: "#002147", display: "inline-block", padding: "0.2em 0.7em", borderRadius: "0.25em"}}>
                                XYZ Comapany
                            </div>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>Position: None</div>
                            <button className={"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2"}>
                                Supreeta Roy(Batch Of 2021-2025)
                            </button>
                        </div>
                        <div className={"banner-right"}>
                            <img src={"mediA3.jpg"} alt={"Student"} className={"banner-img"} />
                        </div>
                    </div>
                </div>
                {/* Slide 14 */}
                <div className={"carousel-item"}>
                    <div className={"custom-banner"}>
                        <div className={"banner-left"}>
                            <div className={"mb-2"}>
                                <img src={"Taru.png"} alt={"taru Logo"} style={{height: "32px"}} />
                            </div>
                            <h2 className={"text-white fw-bold mb-1"} style={{fontSize: "1.4rem"}}>Media Head @ TaruGuardians</h2>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>E.C.E</div>
                            <div className={"text-white mb-1"} style={{fontSize: "1rem"}}>Internship At</div>
                            <div className={"fw-bold mb-2"} style={{fontSize: "2.1rem", background: "#ffd600", color: "#002147", display: "inline-block", padding: "0.2em 0.7em", borderRadius: "0.25em"}}>
                                BCCl
                            </div>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>Position: Telecommunication Engineer</div>
                            <button className={"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2"}>
                                Sandeep Jha(Batch Of 2021-2025)
                            </button>
                        </div>
                        <div className={"banner-right"}>
                            <img src={"media24.jpg"} alt={"Student"} className={"banner-img"} />
                        </div>
                    </div>
                </div>
                {/* Slide 15 */}
                <div className={"carousel-item"}>
                    <div className={"custom-banner"}>
                        <div className={"banner-left"}>
                            <div className={"mb-2"}>
                                <img src={"Taru.png"} alt={"taru Logo"} style={{height: "32px"}} />
                            </div>
                            <h2 className={"text-white fw-bold mb-1"} style={{fontSize: "1.4rem"}}>PR Head @ TaruGuardians</h2>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>Not Known</div>
                            <div className={"text-white mb-1"} style={{fontSize: "1rem"}}>Placed At</div>
                            <div className={"fw-bold mb-2"} style={{fontSize: "2.1rem", background: "#ffd600", color: "#002147", display: "inline-block", padding: "0.2em 0.7em", borderRadius: "0.25em"}}>
                                XYZ Company
                            </div>
                            <div className={"fw-semibold mb-2"} style={{color: "#ffd600", fontSize: "1.1rem"}}>Position: None</div>
                            <button className={"btn btn-danger btn-lg rounded-pill px-5 shadow mt-2"}>
                                Ashna Thakur(Batch Of 2021-2025)
                            </button>
                        </div>
                        <div className={"banner-right"}>
                            <img src={"ashnatahkurreal.png"} alt={"Student"} className={"banner-img"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className={"admissions-section"}>
        <div className={"admissions-container"}>
            {/* Left Images */}
            <div className={"admissions-images"}>
                <div className={"admissions-img-group"}>
                    <img src={"rohanbhaiyaiit.png"} alt={"students"} className={"admissions-img-main"} />
                    <img src={"rohanbhaiyaiit2.jpeg"} alt={"students"} className={"admissions-img-side"} />
                </div>
                <img src={"rohanbhaiyaiit3.jpeg"} alt={"students"} className={"admissions-img-bottom"} />
            </div>
            {/* Right Content */}
            <div className={"admissions-content"}>
                <h3><span style={{fontSize: "1.5em", verticalAlign: "middle"}}></span>TaruGuardians Alumni: Pioneering Legends of Haldia Institute of Technology</h3>
                <h2> pride of the TaruGuardians </h2>
                <p>
                    TaruGuardians, the only club from Haldia Institute of Technology (HIT) to shine at IIT Bombay, secured a Top 7 startup rank in India and became NEC finalists.
                </p>
                <p>
                    Our Proud Alumni

                    From the batch of 2021–2025, four exceptional individuals from TaruGuardians represented HIT at IIT Bombay with their innovative startup:
                </p>
                <div className={"admissions-options"}>
                    <button>Rohan Kumar Singh</button>
                    <button>Aryan Raj</button>
                    <button>Mohit Kumar Singh</button>
                    <button>Bishnu Chatterjee</button>
                </div>
                <div>
                    <div style={{color: "#22223b", fontSize: "1.02rem", marginBottom: "1.2em"}}>
                    </div>
                    <button className={"explore-btn"}>
                        #NEC finalists IIT Bombay  <span style={{fontSize: "1.3em"}}></span>
                    </button>
                </div>
            </div>
        </div>
    </div>

    {/* Alumni Section */}
    <div className={"alumni-section"}>
        {/* Image Grid */}
        <div className={"alumni-grid"}>
            <div className={"alumni-box"}>
                <img src={"presidentrohan.jpg"} alt={"Alumni 1"} />
                <div className={"alumni-overlay"}>
                    <div className={"open-circle"}>#President</div>
                </div>
                <div className={"alumni-name"}>Rohan Kumar Singh<br />SDE, BlueStcok<br />Batch of 2021-2025</div>
            </div>
            <div className={"alumni-box"}>
                <img src={"programhead2.jpg"} alt={"Alumni 2"} />
                <div className={"alumni-overlay"}>
                    <div className={"open-circle"}>#Program Head</div>
                </div>
                <div className={"alumni-name"}>Aryan Raj<br />Placed <br />Batch of 2021-2025</div>
            </div>
            <div className={"alumni-box"}>
                <img src={"Khushi Kumari.png"} alt={"Alumni 16"} />
                <div className={"alumni-overlay"}>
                    <div className={"open-circle"}>#Program Head</div>
                </div>
                <div className={"alumni-name"}>Khushi Kumari<br />Apprentice, Birla Soft<br />Batch of 2020-2024</div>
            </div>
            <div className={"alumni-box"}>
                <img src={"anand%20kumar%20jha.jpg"} alt={"Alumni 3"} />
                <div className={"alumni-overlay"}>
                    <div className={"open-circle"}>#Vice President</div>
                </div>
                <div className={"alumni-name"}>Anand Kumar Jha<br />Placed, XYZ Compnay<br />Batch of 2021-2025</div>
            </div>
            <div className={"alumni-box"}>
                <img src={"Mohit.jpg"} alt={"Alumni 4"} />
                <div className={"alumni-overlay"}>
                    <div className={"open-circle"}>#Adminstrative Head</div>
                </div>
                <div className={"alumni-name"}>MOHIT KUMAR SINGH<br />NEC finalist, IIT Bombay<br />Batch of 2021-2025</div>
            </div>
            <div className={"alumni-box"}>
                <img src={"harshita%20sinha.jpg"} alt={"Alumni 5"} />
                <div className={"alumni-overlay"}>
                    <div className={"open-circle"}>#JS TECH</div>
                </div>
                <div className={"alumni-name"}>HARSHITA SINHA<br />Placed, XYZ Compnay<br />Batch of 2021-2025</div>
            </div>
            <div className={"alumni-box"}>
                <img src={"GateTopper.png"} alt={"Alumni 6"} />
                <div className={"alumni-overlay"}>
                    <div className={"open-circle"}>#TECH HEAD</div>
                </div>
                <div className={"alumni-name"}>ADI NATH BHAWANI<br />Country Topper,NPTEL(CSE),<br />Gate: AIR 456 <br />Batch of 2021-2025</div>
            </div>
            <div className={"alumni-box"}>
                <img src={"utsav%20raj.png"} alt={"Alumni 7"} />
                <div className={"alumni-overlay"}>
                    <div className={"open-circle"}>#PR HEAD</div>
                </div>
                <div className={"alumni-name"}>UTSAV RAJ<br />Placed, XYZ Company<br />Batch of 2021-2025</div>
            </div>
            <div className={"alumni-box"}>
                <img src={"adarsh%20ranjan.jpg"} alt={"Alumni 8"} />
                <div className={"alumni-overlay"}>
                    <div className={"open-circle"}>#JS Non TECH</div>
                </div>
                <div className={"alumni-name"}>ADARSH RANJAN<br />Placed, XYZ Company<br />Batch of 2021-2025</div>
            </div>

            <div className={"alumni-box"}>
                <img src={"Prasoon%20Kumar.jpg"} alt={"Alumni 10"} />
                <div className={"alumni-overlay"}>
                    <div className={"open-circle"}>#Management Head</div>
                </div>
                <div className={"alumni-name"}>PRASOON KUMAR<br />Placed,Integri Robotics & Automation<br />Batch of 2021-2025</div>
            </div>
            <div className={"alumni-box"}>
                <img src={"member.jpg"} alt={"Alumni 11"} />
                <div className={"alumni-overlay"}>
                    <div className={"open-circle"}>#Membership Head</div>
                </div>
                <div className={"alumni-name"}>Ashish Kumar<br />Placed, XYZ Company<br />Batch of 2021-2025</div>
            </div>
            <div className={"alumni-box"}>
                <img src={"sandeep.jpg"} alt={"Alumni 12"} />
                <div className={"alumni-overlay"}>
                    <div className={"open-circle"}>#Media Head</div>
                </div>
                <div className={"alumni-name"}>Sandeep Jha<br />Placed,XYZ Compnay<br />Batch of 2021-2025</div>
            </div>
            <div className={"alumni-box"}>
                <img src={"Bhimika%20singh.jpg"} alt={"Alumni 13"} />
                <div className={"alumni-overlay"}>
                    <div className={"open-circle"}>#Management Head</div>
                </div>
                <div className={"alumni-name"}>Bhumika Singh<br />Placed, XYZ Company<br />Batch of 2021-2025</div>
            </div>
            <div className={"alumni-box"}>
                <img src={"mediA3.jpg"} alt={"Alumni 14"} />
                <div className={"alumni-overlay"}>
                    <div className={"open-circle"}>#Media Head</div>
                </div>
                <div className={"alumni-name"}>Supreeta Roy<br />Placed, XYZ Company<br />Batch of 2021-2025</div>
            </div>
            <div className={"alumni-box"}>
                <img src={"ashnatahkurreal.png"} alt={"Alumni 15"} />
                <div className={"alumni-overlay"}>
                    <div className={"open-circle"}>#PR Head</div>
                </div>
                <div className={"alumni-name"}>Ashna Thakur<br />Placed, XYZ Company<br />Batch of 2021-2025</div>
            </div>
        </div>
    </div>

    {/* Footer */}
    <footer style={{fontFamily: "Arial, sans-serif", color: "white", margin: "0", padding: "0"}}>
        {/* Background Image Section */}
        <div style={{position: "relative", width: "100%", height: "90vh", backgroundImage: "url('aluminifooter.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
            {/* Overlay for readability */}
            <div style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.7)"}}></div>

            {/* Stanford Alumni Header */}
            <div style={{position: "absolute", top: "20px", left: "40px", fontSize: "48px", fontWeight: "bold", zIndex: "1"}}>TaruGuardians  <span style={{fontStyle: "italic"}}>Alumni Page</span></div>

            {/* Footer Content Overlaid on Background */}
            <div style={{position: "relative", zIndex: "1", display: "flex", flexWrap: "wrap", justifyContent: "space-between", padding: "100px 40px 20px", maxWidth: "1200px", margin: "0 auto"}}>
                {/* Contact Info Section */}
                <div style={{flex: "1", minWidth: "250px", marginBottom: "20px"}}>
                    <h2 style={{fontSize: "18px", fontWeight: "bold", marginBottom: "10px"}}>Batch of 2021–2025</h2>
                    <p style={{margin: "5px 0"}}></p>
                    <p style={{margin: "5px 0"}}><Link to="/alumni">Explore Taruguardians Alumni Page</Link></p>
                    <p style={{margin: "5px 0"}}></p>
                    <a href={"#"} style={{color: "#8C1515", textDecoration: "none", fontWeight: "bold"}} data-legacy-onmouseover="this.style.textDecoration='underline'" data-legacy-onmouseout="this.style.textDecoration='none'"></a>
                </div>

                {/* Links Columns */}
                <div style={{display: "flex", flexWrap: "wrap", flex: "3", gap: "40px"}}>
                    {/* Column 1 */}
                    <div style={{minWidth: "150px"}}>
                        <h3 style={{fontSize: "14px", fontWeight: "bold", marginBottom: "10px", textTransform: "uppercase"}}></h3>
                        <p><a style={{color: "white", textDecoration: "none"}} data-legacy-onmouseover="this.style.textDecoration='underline'" data-legacy-onmouseout="this.style.textDecoration='none'">Aryan Raj<br />
                            " Software Development Engineer (SDE)"
                        </a></p>
                        <p><a style={{color: "white", textDecoration: "none"}} data-legacy-onmouseover="this.style.textDecoration='underline'" data-legacy-onmouseout="this.style.textDecoration='none'">Rohan Kumar Singh<br />
                            "Software Development Engineer (SDE) at Bluestock"
                        </a></p>
                        <p><a style={{color: "white", textDecoration: "none"}} data-legacy-onmouseover="this.style.textDecoration='underline'" data-legacy-onmouseout="this.style.textDecoration='none'">Utsav Raj<br />
                            "CSE Branch Topper"
                        </a></p>
                    </div>
                    {/* Column 2 */}
                    <div style={{minWidth: "150px"}}>
                        <h3 style={{fontSize: "14px", fontWeight: "bold", marginBottom: "10px", textTransform: "uppercase"}}></h3>
                        <p><a style={{color: "white", textDecoration: "none"}} data-legacy-onmouseover="this.style.textDecoration='underline'" data-legacy-onmouseout="this.style.textDecoration='none'">Anand Kumar Jha<br />
                            "Distinguished Sportsperson & Topper in Sports"
                        </a></p>
                        <p><a style={{color: "white", textDecoration: "none"}} data-legacy-onmouseover="this.style.textDecoration='underline'" data-legacy-onmouseout="this.style.textDecoration='none'">Mohit Kumar Singh<br />
                            " NEC Finalist at IIT Bombay"
                        </a></p>
                        <p><a style={{color: "white", textDecoration: "none"}} data-legacy-onmouseover="this.style.textDecoration='underline'" data-legacy-onmouseout="this.style.textDecoration='none'">
                            Harshita Sinha<br />
                            "Basketball Player & Placed at XYZ Company"
                        </a></p>
                    </div>
                    {/* Column 3 */}
                    <div style={{minWidth: "150px"}}>
                        <h3 style={{fontSize: "14px", fontWeight: "bold", marginBottom: "10px", textTransform: "uppercase"}}></h3>
                        <p><a href={"#"} style={{color: "white", textDecoration: "none"}} data-legacy-onmouseover="this.style.textDecoration='underline'" data-legacy-onmouseout="this.style.textDecoration='none'"></a></p>
                        <p><a href={"#"} style={{color: "white", textDecoration: "none"}} data-legacy-onmouseover="this.style.textDecoration='underline'" data-legacy-onmouseout="this.style.textDecoration='none'"></a></p>
                        <p><a href={"#"} style={{color: "white", textDecoration: "none"}} data-legacy-onmouseover="this.style.textDecoration='underline'" data-legacy-onmouseout="this.style.textDecoration='none'"></a></p>
                    </div>
                </div>
            </div>

            {/* Social Media Icons */}
            <div style={{position: "relative", zIndex: "1", padding: "0 40px 40px", maxWidth: "1200px", margin: "0 auto"}}>
                <a href={"#"} style={{marginRight: "20px", textDecoration: "none", color: "white", fontSize: "20px"}}></a>
                <a href={"#"} style={{marginRight: "20px", textDecoration: "none", color: "white", fontSize: "20px"}}></a>
                <a href={"#"} style={{marginRight: "20px", textDecoration: "none", color: "white", fontSize: "20px"}}></a>
                <a href={"#"} style={{textDecoration: "none", color: "white", fontSize: "20px"}}></a>
            </div>
        </div>

        {/* Red Section */}
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
                    <a href={"https://medium.com/@TARUGUARDIANS_HIT-HALDIA/about"} style={{backgroundColor: "#1e90ff", color: "#fff", padding: "10px 20px", borderRadius: "25px", textDecoration: "none", fontSize: "16px"}}>Our Blog</a>
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
                        <a href={"https://www.instagram.com/_taruguardians_/"}><img src={"instag.png"} alt={"Instagram"} className={"w-7"} /></a>
                        <a href={"https://www.linkedin.com/company/taruguardians/?originalSubdomain=in"}><img src={"linkden.png"} alt={"LinkedIn"} className={"w-7"} /></a>
                        <a href={"https://www.facebook.com/TaruGuardians/"}><img src={"facebook.png"} alt={"Facebook"} className={"w-7"} /></a>
                        <a href={"https://www.youtube.com/@TaruGuardians"}><img src={"youtube.webp"} alt={"YouTube"} className={"w-7"} /></a>
                    </div>
                    <p style={{fontSize: "13px", color: "#ccc", fontStyle: "italic"}}>Stay updated with our latest posts, events, and workshops</p>
                </div>
            </div>

            {/* Copyright Notice */}
            <div style={{textAlign: "center", marginTop: "20px", fontSize: "12px", color: "#ccc"}}>
                © 2025 TaruGuardians. All rights reserved.
            </div>
        </footer>
    </footer>
</div>

{/* Bootstrap JS */}




    </div>
  );
}
