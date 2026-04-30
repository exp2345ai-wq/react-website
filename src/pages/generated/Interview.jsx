// AUTO-GENERATED — DO NOT EDIT BY HAND
// Generated from legacy-source/responsive interview.html
// by scripts/convert-html-to-react.mjs
//
// This file is the React port of the original HTML page. Every
// element, attribute, inline style, and child node from the source
// document has been mechanically translated to JSX. Inline <script>
// blocks live in ./Interview.scripts.js and run in a useEffect after
// mount; <style> blocks live in ./Interview.css and are imported
// at the top of this module.

import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Interview.css';
import { runScripts, cleanupScripts } from './Interview.scripts';
import { mapHrefToRoute } from '../../utils/routeMap.js';

const PAGE_ID = "Interview";

export default function Interview() {
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
    <div ref={rootRef} className="legacy-page legacy-Interview">

<header className={"modern-navbar"}>
    <div className={"navbar-container"}>
        <div className={"navbar-logo"}>
            <span className={"logo-arrow left"}>&lt;</span>
            <img src={"tarulogo.png"} alt={"TaruGuardians Logo"} />
            <span>TaruGuardians</span>
            <span className={"logo-arrow right"}>&gt;</span>
        </div>
        <nav className={"navbar-center"}>
            <div className={"navbar-links"}>
                <Link to="/home" className={"active"}>Home</Link>
                <Link to="/home">Event</Link>
                <Link to="/home">TARU WINGS</Link>
                <Link to="/home">Roadmap</Link>
                <Link to="/home">Placement Guide</Link>
                <Link to="/home">Team</Link>
            </div>
        </nav>
        <Link to="/auth" className={"taru-blog-btn auth-login-btn"}>Login</Link>
        <div className={"auth-user-menu"} style={{display: "none"}}>
            <Link to="/dashboard" className={"taru-blog-btn"}>Dashboard</Link>
        </div>
        <div className={"hamburger"}>≡</div>
    </div>
    <div className={"mobile-menu"}>
        <div className={"navbar-links"}>
            <Link to="/home" className={"active"}>Home</Link>
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

<div className={"scene section"} id={"home"}>
    <div className={"cloud"} style={{top: "5%", animationDelay: "0s"}}></div>
    <div className={"cloud"} style={{top: "5%", animationDelay: "5s"}}></div>
    <div className={"cloud"} style={{top: "5%", animationDelay: "10s"}}></div>
    <div className={"bird-container"} style={{top: "20%", left: "-100px", animationDelay: "0s"}}>
        <lottie-player src={"bird2.json"} background={"transparent"} speed={"1"} loop={true} autoPlay={true}></lottie-player>
    </div>
    <div className={"bird-container"} style={{top: "21%", left: "-150px", animationDelay: "0.5s"}}>
        <lottie-player src={"Animation - 1744827928378.json"} background={"transparent"} speed={"1"} loop={true} autoPlay={true}></lottie-player>
    </div>
    <div className={"bird-container"} style={{top: "22%", left: "-200px", animationDelay: "1s"}}>
        <lottie-player src={"Animation - 1744827928378.json"} background={"transparent"} speed={"1"} loop={true} autoPlay={true}></lottie-player>
    </div>
    <div className={"bird-container"} style={{top: "24%", left: "-300px", animationDelay: "2s"}}>
        <lottie-player src={"Animation - 1744827928378.json"} background={"transparent"} speed={"1"} loop={true} autoPlay={true}></lottie-player>
    </div>
    <div className={"bird-container"} style={{top: "25%", left: "-350px", animationDelay: "2.5s"}}>
        <lottie-player src={"bird2.json"} background={"transparent"} speed={"1"} loop={true} autoPlay={true}></lottie-player>
    </div>
    <div className={"bird-container"} style={{top: "26%", left: "-400px", animationDelay: "3s"}}>
        <lottie-player src={"Animation - 1744827928378.json"} background={"transparent"} speed={"1"} loop={true} autoPlay={true}></lottie-player>
    </div>
    <div className={"tree-container"} style={{left: "5vw"}}>
        <lottie-player src={"Animation - 1744827567361.json"} background={"transparent"} speed={"1"} loop={true} autoPlay={true}></lottie-player>
    </div>
    <div className={"tree-container"} style={{left: "25vw", animationDelay: "1s"}}>
        <lottie-player src={"Animation - 1744827567361.json"} background={"transparent"} speed={"1"} loop={true} autoPlay={true}></lottie-player>
    </div>
    <div className={"tree-container"} style={{left: "50vw", animationDelay: "2s"}}>
        <lottie-player src={"Animation - 1744827567361.json"} background={"transparent"} speed={"1"} loop={true} autoPlay={true}></lottie-player>
    </div>
    <div className={"tree-container"} style={{left: "75vw", animationDelay: "2.5s"}}>
        <lottie-player src={"Animation - 1744827567361.json"} background={"transparent"} speed={"1"} loop={true} autoPlay={true}></lottie-player>
    </div>
    <div className={"tree-container"} style={{left: "100vw", animationDelay: "3s"}}>
        <lottie-player src={"Animation - 1744827567361.json"} background={"transparent"} speed={"1"} loop={true} autoPlay={true}></lottie-player>
    </div>
    <div className={"tree-container"} style={{left: "125vw", animationDelay: "3s"}}>
        <lottie-player src={"Animation - 1744827567361.json"} background={"transparent"} speed={"1"} loop={true} autoPlay={true}></lottie-player>
    </div>
    <div className={"smoke"}></div>
    <div className={"ground"}></div>
</div>
<div className={"roadmap-container"} id={"spa-content"}>
    <div className={"tech-section section"} id={"tech"}>
        <div className={"row"}>
            <div className={"box"} id={"box1"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>On Campus Placement Roadmap</div>
                    <div className={"box-description"}>Cracking on-campus placements typically includes a predefined process organized <span>BY</span> college.</div>
                    <div className={"box-buttons"}>
                        <a href={"https://preplaced.in/blog/how-to-get-placed-in-a-product-based-company-with-roadmap?utm_source=chatgpt.com"} className={"box-button"}>DSA</a>
                        <a href={"https://preplaced.in/blog/how-to-get-placed-in-a-product-based-company-with-roadmap?utm_source=chatgpt.com"} className={"box-button"}>Development</a>
                        <a href={"https://preplaced.in/blog/how-to-get-placed-in-a-product-based-company-with-roadmap?utm_source=chatgpt.com"} className={"box-button"}>Quant Aptitude</a>
                    </div>
                    <a href={"https://preplaced.in/blog/how-to-get-placed-in-a-product-based-company-with-roadmap?utm_source=chatgpt.com"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
            <div className={"box"} id={"box2"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>On Campus Placement Roadmap</div>
                    <div className={"box-description"}>Cracking on-campus placements typically includes a predefined process organized <span>BY</span> college.</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>DSA</a>
                        <a href={"#"} className={"box-button"}>Development</a>
                        <a href={"#"} className={"box-button"}>Quant Aptitude</a>
                    </div>
                    <a href={"https://preplaced.in/blog/how-to-get-placed-in-a-product-based-company-with-roadmap?utm_source=chatgpt.com"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
            <div className={"box"} id={"box3"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>On Campus Placement Roadmap</div>
                    <div className={"box-description"}>Cracking on-campus placements typically includes a predefined process organized <span>BY</span> college.</div>
                    <div className={"box-buttons"}>
                        <a href={"https://preplaced.in/blog/how-to-get-placed-in-a-product-based-company-with-roadmap?utm_source=chatgpt.com"} className={"box-button"}>DSA</a>
                        <a href={"https://preplaced.in/blog/how-to-get-placed-in-a-product-based-company-with-roadmap?utm_source=chatgpt.com"} className={"box-button"}>Development</a>
                        <a href={"https://preplaced.in/blog/how-to-get-placed-in-a-product-based-company-with-roadmap?utm_source=chatgpt.com"} className={"box-button"}>Quant Aptitude</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
        </div>
        <div className={"row"}>
            <div className={"box"} id={"box4"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>On Campus Placement Roadmap</div>
                    <div className={"box-description"}>Cracking on-campus placements typically includes a predefined process organized <span>BY</span> college.</div>
                    <div className={"box-buttons"}>
                        <a href={"https://preplaced.in/blog/how-to-get-placed-in-a-product-based-company-with-roadmap?utm_source=chatgpt.com"} className={"box-button"}>DSA</a>
                        <a href={"#"} className={"box-button"}>Development</a>
                        <a href={"#"} className={"box-button"}>Quant Aptitude</a>
                    </div>
                    <a href={"https://preplaced.in/blog/how-to-get-placed-in-a-product-based-company-with-roadmap?utm_source=chatgpt.com"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
            <div className={"box"} id={"box5"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>On Campus Placement Roadmap</div>
                    <div className={"box-description"}>Cracking on-campus placements typically includes a predefined process organized <span>BY</span> college.</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>DSA</a>
                        <a href={"#"} className={"box-button"}>Development</a>
                        <a href={"#"} className={"box-button"}>Quant Aptitude</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
            <div className={"box"} id={"box6"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>On Campus Placement Roadmap</div>
                    <div className={"box-description"}>Cracking on-campus placements includes a predefined process organized <span>BY</span> college.</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>DSA</a>
                        <a href={"#"} className={"box-button"}>Development</a>
                        <a href={"#"} className={"box-button"}>Quant Aptitude</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
        </div>
        <div className={"row"}>
            <div className={"box"} id={"box7"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>On Campus Placement Roadmap</div>
                    <div className={"box-description"}>Cracking on-campus placements typically includes a predefined process organized <span>BY</span> college.</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>DSA</a>
                        <a href={"#"} className={"box-button"}>Development</a>
                        <a href={"#"} className={"box-button"}>Quant Aptitude</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
            <div className={"box"} id={"box8"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>On Campus Placement Roadmap</div>
                    <div className={"box-description"}>Cracking on-campus placements typically includes a predefined process organized <span>BY</span> college.</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>DSA</a>
                        <a href={"#"} className={"box-button"}>Development</a>
                        <a href={"#"} className={"box-button"}>Quant Aptitude</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
            <div className={"box"} id={"box9"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>On Campus Placement Roadmap</div>
                    <div className={"box-description"}>Cracking on-campus placements involves includes a predefined process organized <span>BY</span> college.</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>DSA</a>
                        <a href={"#"} className={"box-button"}>Development</a>
                        <a href={"#"} className={"box-button"}>Quant Aptitude</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
        </div>
        <div className={"row"}>
            <div className={"box"} id={"box10"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>On Campus Placement Roadmap</div>
                    <div className={"box-description"}>Cracking on-campus placements typically includes a predefined process organized <span>BY</span> college.</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>DSA</a>
                        <a href={"#"} className={"box-button"}>Development</a>
                        <a href={"#"} className={"box-button"}>Quant Aptitude</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
            <div className={"box"} id={"box11"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>On Campus Placement Roadmap</div>
                    <div className={"box-description"}>Cracking on-campus placements typically includes a predefined process organized <span>BY</span> college.</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>DSA</a>
                        <a href={"#"} className={"box-button"}>Development</a>
                        <a href={"#"} className={"box-button"}>Quant Aptitude</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
            <div className={"box"} id={"box12"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>On Campus Placement Roadmap</div>
                    <div className={"box-description"}>Cracking on-campus placements typically includes a predefined process organized <span>BY</span> college.</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>DSA</a>
                        <a href={"#"} className={"box-button"}>Development</a>
                        <a href={"#"} className={"box-button"}>Quant Aptitude</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
        </div>
        <div className={"row"}>
            <div className={"box"} id={"box13"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>On Campus Placement Roadmap</div>
                    <div className={"box-description"}>Cracking on-campus placements typically includes a predefined process organized <span>BY</span> college.</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>DSA</a>
                        <a href={"#"} className={"box-button"}>Development</a>
                        <a href={"#"} className={"box-button"}>Quant Aptitude</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
            <div className={"box"} id={"box14"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>On Campus Placement Roadmap</div>
                    <div className={"box-description"}>Cracking on-campus placements includes a predefined process organized <span>BY</span> college.</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>DSA</a>
                        <a href={"#"} className={"box-button"}>Development</a>
                        <a href={"#"} className={"box-button"}>Quant Aptitude</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
            <div className={"box"} id={"box15"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>On Campus Placement Roadmap</div>
                    <div className={"box-description"}>Cracking on-campus placements typically includes a predefined process organized <span>BY</span> college.</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>DSA</a>
                        <a href={"#"} className={"box-button"}>Development</a>
                        <a href={"#"} className={"box-button"}>Quant Aptitude</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
        </div>
    </div>
    <div className={"nontech-section section"} id={"nontech"}>
        <div className={"row"}>
            <div className={"box"} id={"box16"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>Roadmap To Crack Off Campus Placement</div>
                    <div className={"box-description"}>Cracking an off-campus placement requires a strategic blend of preparation, networking, and consistency.</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>Resume Building</a>
                        <a href={"#"} className={"box-button"}>Interview Prep</a>
                        <a href={"#"} className={"box-button"}>Mock Tests</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
            <div className={"box"} id={"box17"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>Roadmap To Crack Off Campus Placement</div>
                    <div className={"box-description"}>Cracking an off-campus placement requires a strategic blend of preparation, networking, and consistency.</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>Resume Building</a>
                        <a href={"#"} className={"box-button"}>Interview Prep</a>
                        <a href={"#"} className={"box-button"}>Mock Tests</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
            <div className={"box"} id={"box18"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>Roadmap To Crack Off Campus Placement</div>
                    <div className={"box-description"}>Cracking an off-campus placement requires a strategic blend of preparation, networking, and consistency.</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>Resume Building</a>
                        <a href={"#"} className={"box-button"}>Interview Prep</a>
                        <a href={"#"} className={"box-button"}>Mock Tests</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
        </div>
        <div className={"row"}>
            <div className={"box"} id={"box19"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>Roadmap To Crack Off Campus Placement</div>
                    <div className={"box-description"}>Cracking an off-campus placement requires a strategic blend of preparation, networking, and consistency.</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>Resume Building</a>
                        <a href={"#"} className={"box-button"}>Interview Prep</a>
                        <a href={"#"} className={"box-button"}>Mock Tests</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
            <div className={"box"} id={"box20"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>Roadmap To Crack Off Campus Placement</div>
                    <div className={"box-description"}>Cracking an off-campus placement requires a strategic blend of preparation, networking, and consistency.</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>Resume Building</a>
                        <a href={"#"} className={"box-button"}>Interview Prep</a>
                        <a href={"#"} className={"box-button"}>Mock Tests</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
            <div className={"box"} id={"box21"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>Roadmap To Crack Off Campus Placement</div>
                    <div className={"box-description"}>Cracking an off-campus placement requires a strategic blend of preparation, networking, and consistency.</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>Resume Building</a>
                        <a href={"#"} className={"box-button"}>Interview Prep</a>
                        <a href={"#"} className={"box-button"}>Mock Tests</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
        </div>
        <div className={"row"}>
            <div className={"box"} id={"box22"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>Roadmap To Crack Off Campus Placement</div>
                    <div className={"box-description"}>Cracking an off-campus placement requires a strategic blend of preparation, networking, and consistency.</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>Resume Building</a>
                        <a href={"#"} className={"box-button"}>Interview Prep</a>
                        <a href={"#"} className={"box-button"}>Mock Tests</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
            <div className={"box"} id={"box23"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>Roadmap To Crack Off Campus Placement</div>
                    <div className={"box-description"}>Cracking an off-campus placement requires a strategic blend of preparation, networking, and consistency.</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>Resume Building</a>
                        <a href={"#"} className={"box-button"}>Interview Prep</a>
                        <a href={"#"} className={"box-button"}>Mock Tests</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
            <div className={"box"} id={"box24"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>Roadmap To Crack Off Campus Placement</div>
                    <div className={"box-description"}>Cracking an off-campus placement requires a strategic blend of preparation, networking, and consistency.</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>Resume Building</a>
                        <a href={"#"} className={"box-button"}>Interview Prep</a>
                        <a href={"#"} className={"box-button"}>Mock Tests</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
        </div>
        <div className={"row"}>
            <div className={"box"} id={"box25"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>Video Editor – Freelancing</div>
                    <div className={"box-description"}>Master editing tools, storytelling, and reels optimization using Premiere Pro, After Effects & trendy transitions.</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>Communication</a>
                        <a href={"#"} className={"box-button"}>Skills</a>
                        <a href={"#"} className={"box-button"}>Time Management</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
            <div className={"box"} id={"box26"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>Content Writer – Freelancing</div>
                    <div className={"box-description"}>Strong grammar, SEO basics, and niche writing samples with tools like Grammarly & Ubersuggest are must-haves.</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>Communication</a>
                        <a href={"#"} className={"box-button"}>Skills</a>
                        <a href={"#"} className={"box-button"}>Time Management</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
            <div className={"box"} id={"box27"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>Photography & Photo Editing – Freelancing</div>
                    <div className={"box-description"}>Start by editing photos for friends/family and showcase the results as your portfolio on Fiverr or Behance.</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>Communication</a>
                        <a href={"#"} className={"box-button"}>Skills</a>
                        <a href={"#"} className={"box-button"}>Time Management</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
        </div>
    </div>
    <div className={"taruplacement-section section"} id={"taruplacement"}>
        <div className={"row"}>
            <div className={"box"} id={"box28"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>Graphics Designer</div>
                    <div className={"box-description"}>Roadmap to Logos, social media posts, branding</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>Canva</a>
                        <a href={"#"} className={"box-button"}>Adobe Illustrator</a>
                        <a href={"#"} className={"box-button"}>Figma</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
            <div className={"box"} id={"box29"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>UI/UX Designer</div>
                    <div className={"box-description"}>Roadmap To UI/UX Designer</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>Figma</a>
                        <a href={"#"} className={"box-button"}>Adobe XD</a>
                        <a href={"#"} className={"box-button"}>Sketch</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
            <div className={"box"} id={"box30"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>Motion Graphics Roadmap</div>
                    <div className={"box-description"}>Roadmap To Motion Graphics Artist</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>Blender</a>
                        <a href={"#"} className={"box-button"}>Adobe Animate</a>
                        <a href={"#"} className={"box-button"}>Vyond</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
        </div>
        <div className={"row"}>
            <div className={"box"} id={"box31"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>Video Editor</div>
                    <div className={"box-description"}>Roadmap To YouTube, reels, event footage</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>Adobe Premiere Pro</a>
                        <a href={"#"} className={"box-button"}>Final Cut Pro</a>
                        <a href={"#"} className={"box-button"}>CapCut</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
            <div className={"box"} id={"box32"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>Roadmap To Illustrator</div>
                    <div className={"box-description"}>Roadmap To Comics, children's books, merchandise art</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>Procreate (iPad)</a>
                        <a href={"#"} className={"box-button"}>Adobe Illustrator</a>
                        <a href={"#"} className={"box-button"}>Krita</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
            <div className={"box"} id={"box33"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>Content Writer</div>
                    <div className={"box-description"}>Roadmap To Writing Blogs, newsletters, articles</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>Google Docs</a>
                        <a href={"#"} className={"box-button"}>Grammarly</a>
                        <a href={"#"} className={"box-button"}>MS Word</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
        </div>
        <div className={"row"}>
            <div className={"box"} id={"box34"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>Script Writer</div>
                    <div className={"box-description"}>Roadmap To Script Writer For YouTube, reels, animations</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>YouTube video scripts</a>
                        <a href={"#"} className={"box-button"}>vloggers</a>
                        <a href={"#"} className={"box-button"}>educators</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
            <div className={"box"} id={"box35"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>Performance Marketer (Google/Facebook Ads)</div>
                    <div className={"box-description"}>Roadmap To Performance Marketer (Google/Facebook Ads)</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>Google Ads</a>
                        <a href={"#"} className={"box-button"}>Meta Ads Manager</a>
                        <a href={"#"} className={"box-button"}>LinkedIn Ads</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
            <div className={"box"} id={"box36"} data-legacy-onclick="openDetailsPage()">
                <div className={"box-content"}>
                    <div className={"box-title"}>Brand Strategist</div>
                    <div className={"box-description"}>Roadmap To Google Analytics, Looker Studio, Hotjar</div>
                    <div className={"box-buttons"}>
                        <a href={"#"} className={"box-button"}>Graphics Design</a>
                        <a href={"#"} className={"box-button"}>Video Editing</a>
                        <a href={"#"} className={"box-button"}>Content Creation</a>
                    </div>
                    <a href={"#"} className={"box-link"} data-legacy-onclick="openDetailsPage()">Visit to See More</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div className={"nav"} id={"navbar"}>
    <a href={"#home"} className={"nav-link active"}>Home</a>
    <a href={"#tech"} className={"nav-link"}>On Campus Placement</a>
    <a href={"#nontech"} className={"nav-link"}>Off Campus</a>
    <a href={"#taruplacement"} className={"nav-link"}>Nontech Skills</a>
</div>
<footer>
    <div className={"footer-logo-container"}>
        <img src={"circlelogotaru.png"} alt={"TaruGuardians Logo"} />
        <h3>(TURN PASSION INTO PURPOSE)</h3>
    </div>
    <div className={"footer-columns"}>
        <div className={"footer-column"}>
            <h2>TaruGuardians</h2>
            <p>Just as trees grow with deep roots, we grow with deep tech. From seeds of code to canopies of change — building a greener, smarter future.</p>
            <p>(ROOTED IN NATURE, DRIVEN BY TECH)</p>
        </div>
        <div className={"footer-column"}>
            <a href={"https://medium.com/@TARUGUARDIANS_HIT-HALDIA/about"} className={"footer-blog-btn"}>Our Blog</a>
        </div>
        <div className={"footer-column"}>
            <h3>Contact</h3>
            <p>Taru.Guardians@gmail.com</p>
        </div>
        <div className={"footer-column"}>
            <h3>Follow Us</h3>
            <div className={"social-icons"}>
                <a href={"https://www.instagram.com/_taruguardians_/"}><i className={"fab fa-instagram"}></i></a>
                <a href={"https://www.linkedin.com/company/taruguardians/?originalSubdomain=in"}><i className={"fab fa-linkedin"}></i></a>
                <a href={"https://www.facebook.com/TaruGuardians/"}><i className={"fab fa-facebook"}></i></a>
                <a href={"https://www.youtube.com/@TaruGuardians"}><i className={"fab fa-youtube"}></i></a>
            </div>
            <p style={{fontStyle: "italic"}}>Stay updated with our latest posts, events, and workshops</p>
        </div>
    </div>
    <small>© 2025 TaruGuardians. All rights reserved.</small>
</footer>



    </div>
  );
}
