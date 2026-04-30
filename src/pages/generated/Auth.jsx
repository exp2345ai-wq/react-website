// AUTO-GENERATED — DO NOT EDIT BY HAND
// Generated from legacy-source/auth.html
// by scripts/convert-html-to-react.mjs
//
// This file is the React port of the original HTML page. Every
// element, attribute, inline style, and child node from the source
// document has been mechanically translated to JSX. Inline <script>
// blocks live in ./Auth.scripts.js and run in a useEffect after
// mount; <style> blocks live in ./Auth.css and are imported
// at the top of this module.

import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import { runScripts, cleanupScripts } from './Auth.scripts';
import { mapHrefToRoute } from '../../utils/routeMap.js';

const PAGE_ID = "Auth";

export default function Auth() {
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
    <div ref={rootRef} className="legacy-page legacy-Auth">

    {/* Loading Screen - with force hide fallback */}
    <div className={"auth-loading-screen"} id={"loadingScreen"} style={{zIndex: "999999"}}>
        <div className={"loading-orb"}>
            <div className={"loading-orb-ring"}></div>
            <div className={"loading-orb-ring"}></div>
            <div className={"loading-orb-ring"}></div>
        </div>
        <div className={"loading-text"}>INITIALIZING</div>
    </div>

    {/* Mouse Follower */}
    <div className={"mouse-follower"} id={"mouseFollower"}></div>

    {/* 3D Canvas */}
    <canvas id={"three-canvas"}></canvas>

    {/* Nebula Overlay */}
    <div className={"nebula-overlay"}></div>

    {/* Cyber Grid */}
    <div className={"cyber-grid"}>
        <div className={"cyber-grid-plane"}></div>
    </div>

    {/* Matrix Rain */}
    <div className={"matrix-rain"} id={"matrixRain"}></div>

    {/* Floating Particles */}
    <div className={"floating-particles"} id={"floatingParticles"}></div>

    {/* Energy Lines */}
    <div className={"energy-lines"} id={"energyLines"}></div>

    {/* DNA Helix */}
    <div className={"dna-helix"} id={"dnaHelix"}></div>

    {/* Scanner Line */}
    <div className={"scanner-line"}></div>

    {/* Corner Decorations */}
    <div className={"corner-decor top-left"}></div>
    <div className={"corner-decor top-right"}></div>
    <div className={"corner-decor bottom-left"}></div>
    <div className={"corner-decor bottom-right"}></div>

    {/* HUD Elements */}
    <div className={"hud-element hud-top-left"}>
        <div>SYS.AUTH.V2.0</div>
        <div id={"hudTime"}>00:00:00</div>
    </div>
    <div className={"hud-element hud-top-right"}>
        <div>SECURE CONNECTION</div>
        <div>ENCRYPTED: AES-256</div>
    </div>
    <div className={"hud-element hud-bottom-left"}>
        <div>PROTOCOL: TG-AUTH</div>
        <div id={"hudDate"}>2024.01.01</div>
    </div>
    <div className={"hud-element hud-bottom-right"}>
        <div>STATUS: ONLINE</div>
        <div>LATENCY: <span id={"hudLatency"}>12</span>ms</div>
    </div>

    {/* Notification */}
    <div className={"auth-notification"} id={"notification"}></div>

    {/* Success Particles Container */}
    <div className={"success-particles"} id={"successParticles"}></div>

    {/* Main Auth Card */}
    <div className={"auth-universe"}>
        <div className={"auth-card-wrapper"}>
            <div className={"auth-card"} id={"authCard"}>
                {/* Logo */}
                <div className={"auth-logo"}>
                    <div className={"auth-logo-icon"}>
                        <div className={"logo-ring"}></div>
                        <div className={"logo-ring"}></div>
                        <img src={"circlelogotaru.png"} alt={"TaruGuardians"} data-legacy-onerror="this.style.display='none'" />
                    </div>
                    <h1>TaruGuardians</h1>
                    <div className={"subtitle"}>Authentication Portal</div>
                </div>

                {/* Tab Switcher */}
                <div className={"auth-tabs"}>
                    <button className={"auth-tab active"} id={"loginTab"} data-legacy-onclick="switchTab('login')">Login</button>
                    <button className={"auth-tab"} id={"signupTab"} data-legacy-onclick="switchTab('signup')">Sign Up</button>
                    <div className={"tab-indicator"} id={"tabIndicator"}></div>
                </div>

                {/* Forms Container */}
                <div className={"forms-container"}>
                    {/* Login Form */}
                    <form className={"auth-form"} id={"loginForm"} data-legacy-onsubmit="handleLogin(event)">
                        <div className={"input-group"}>
                            <i className={"fas fa-envelope input-icon"}></i>
                            <input type={"email"} id={"loginEmail"} placeholder={"Email Address"} required={true} autoComplete={"email"} />
                            <div className={"input-glow"}></div>
                            <div className={"error-message"} id={"loginEmailError"}>Please enter a valid email</div>
                        </div>

                        <div className={"input-group"}>
                            <i className={"fas fa-lock input-icon"}></i>
                            <input type={"password"} id={"loginPassword"} placeholder={"Password"} required={true} autoComplete={"current-password"} />
                            <button type={"button"} className={"password-toggle"} data-legacy-onclick="togglePassword('loginPassword', this)">
                                <i className={"fas fa-eye"}></i>
                            </button>
                            <div className={"input-glow"}></div>
                            <div className={"error-message"} id={"loginPasswordError"}>Password is required</div>
                        </div>

                        <button type={"submit"} className={"auth-submit"} id={"loginBtn"}>
                            <span className={"btn-text"}>Access Portal</span>
                            <div className={"btn-loader"}><div className={"spinner"}></div></div>
                        </button>
                    </form>

                    {/* Signup Form */}
                    <form className={"auth-form hidden"} id={"signupForm"} data-legacy-onsubmit="handleSignup(event)">
                        <div className={"input-group"}>
                            <i className={"fas fa-user input-icon"}></i>
                            <input type={"text"} id={"signupName"} placeholder={"Full Name"} required={true} autoComplete={"name"} />
                            <div className={"input-glow"}></div>
                            <div className={"error-message"} id={"signupNameError"}>Name is required</div>
                        </div>

                        <div className={"input-group"}>
                            <i className={"fas fa-envelope input-icon"}></i>
                            <input type={"email"} id={"signupEmail"} placeholder={"Email Address"} required={true} autoComplete={"email"} />
                            <div className={"input-glow"}></div>
                            <div className={"error-message"} id={"signupEmailError"}>Please enter a valid email</div>
                        </div>

                        <div className={"input-group"}>
                            <i className={"fas fa-lock input-icon"}></i>
                            <input type={"password"} id={"signupPassword"} placeholder={"Create Password"} required={true} autoComplete={"new-password"} />
                            <button type={"button"} className={"password-toggle"} data-legacy-onclick="togglePassword('signupPassword', this)">
                                <i className={"fas fa-eye"}></i>
                            </button>
                            <div className={"input-glow"}></div>
                            <div className={"error-message"} id={"signupPasswordError"}>Password must be at least 6 characters</div>
                        </div>

                        <div className={"input-group"}>
                            <i className={"fas fa-lock input-icon"}></i>
                            <input type={"password"} id={"signupConfirmPassword"} placeholder={"Confirm Password"} required={true} autoComplete={"new-password"} />
                            <button type={"button"} className={"password-toggle"} data-legacy-onclick="togglePassword('signupConfirmPassword', this)">
                                <i className={"fas fa-eye"}></i>
                            </button>
                            <div className={"input-glow"}></div>
                            <div className={"error-message"} id={"signupConfirmPasswordError"}>Passwords do not match</div>
                        </div>

                        <button type={"submit"} className={"auth-submit"} id={"signupBtn"}>
                            <span className={"btn-text"}>Sign Up</span>
                            <div className={"btn-loader"}><div className={"spinner"}></div></div>
                        </button>

                        <button type={"button"} className={"google-btn signup-google-btn"} data-legacy-onclick="handleGoogleLogin()">
                            <svg viewBox={"0 0 24 24"}>
                                <path fill={"#4285F4"} d={"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"}></path>
                                <path fill={"#34A853"} d={"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}></path>
                                <path fill={"#FBBC05"} d={"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}></path>
                                <path fill={"#EA4335"} d={"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"}></path>
                            </svg>
                            <span>Continue with Google</span>
                        </button>
                    </form>
                </div>

                {/* Continue with Google Button Below Box */}
                <button type={"button"} className={"external-google-btn"} data-legacy-onclick="handleGoogleLogin()">
                    <svg viewBox={"0 0 24 24"}>
                        <path fill={"#4285F4"} d={"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"}></path>
                        <path fill={"#34A853"} d={"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}></path>
                        <path fill={"#FBBC05"} d={"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}></path>
                        <path fill={"#EA4335"} d={"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"}></path>
                    </svg>
                    <span>Continue with Google</span>
                </button>
            </div>
        </div>
    </div>

    {/* Frontend Auth Script */}
    

    



    </div>
  );
}
