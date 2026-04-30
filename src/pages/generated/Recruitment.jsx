// AUTO-GENERATED — DO NOT EDIT BY HAND
// Generated from legacy-source/recruitment.html
// by scripts/convert-html-to-react.mjs
//
// This file is the React port of the original HTML page. Every
// element, attribute, inline style, and child node from the source
// document has been mechanically translated to JSX. Inline <script>
// blocks live in ./Recruitment.scripts.js and run in a useEffect after
// mount; <style> blocks live in ./Recruitment.css and are imported
// at the top of this module.

import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Recruitment.css';
import { runScripts, cleanupScripts } from './Recruitment.scripts';
import { mapHrefToRoute } from '../../utils/routeMap.js';

const PAGE_ID = "Recruitment";

export default function Recruitment() {
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
    <div ref={rootRef} className="legacy-page legacy-Recruitment">

    <div className={"container"}>
        <div className={"form-card"}>
            <h1 className={"form-title"}>Join <span>TaruGuardians</span></h1>
            <p className={"form-subtitle"}>The only club at HIT that conducts both technical and non-technical events</p>
            
            <div className={"progress-bar"}>
                <div className={"progress-fill"} id={"progressFill"}></div>
            </div>

            {/* Step 1: Basic Info */}
            <div className={"step active"} id={"step1"}>
                <div className={"info-box"}>
                    <h4><i className={"fas fa-info-circle"}></i> Welcome to TaruGuardians</h4>
                    <p>TaruGuardians focuses on overall development of students by enhancing skills such as leadership, management, communication, and creativity. Join us to learn, grow, and lead!</p>
                </div>
                
                <div className={"form-group"}>
                    <label className={"form-label"}>Full Name *</label>
                    <input type={"text"} id={"recName"} className={"form-input"} placeholder={"Enter your full name"} />
                </div>
                <div className={"form-group"}>
                    <label className={"form-label"}>Email Address *</label>
                    <input type={"email"} id={"recEmail"} className={"form-input"} placeholder={"Enter your email"} />
                </div>
                <div className={"form-group"}>
                    <label className={"form-label"}>Phone Number *</label>
                    <input type={"tel"} id={"recPhone"} className={"form-input"} placeholder={"Enter phone number"} />
                </div>
                <div className={"form-group"}>
                    <label className={"form-label"}>WhatsApp Number *</label>
                    <input type={"tel"} id={"recWhatsapp"} className={"form-input"} placeholder={"Enter WhatsApp number"} />
                </div>
                <div className={"form-group"}>
                    <label className={"form-label"}>Class Roll Number *</label>
                    <input type={"text"} id={"recRoll"} className={"form-input"} placeholder={"e.g., 25/IT/001"} />
                </div>
                <div className={"form-group"}>
                    <label className={"form-label"}>Department *</label>
                    <select id={"recDepartment"} className={"form-select"}>
                        <option value={true}>Select Department</option>
                        <option value={"CSE"}>Computer Science & Engineering</option>
                        <option value={"IT"}>Information Technology</option>
                        <option value={"ECE"}>Electronics & Communication</option>
                        <option value={"EE"}>Electrical Engineering</option>
                        <option value={"ME"}>Mechanical Engineering</option>
                        <option value={"CE"}>Civil Engineering</option>
                        <option value={"Other"}>Other</option>
                    </select>
                </div>
                <div className={"form-group"}>
                    <label className={"form-label"}>Year *</label>
                    <select id={"recYear"} className={"form-select"}>
                        <option value={true}>Select Year</option>
                        <option value={"1st"}>1st Year</option>
                        <option value={"2nd"}>2nd Year</option>
                        <option value={"3rd"}>3rd Year</option>
                        <option value={"4th"}>4th Year</option>
                    </select>
                </div>
                <button className={"btn btn-primary"} data-legacy-onclick="nextStep(2)">Next Step <i className={"fas fa-arrow-right"}></i></button>
            </div>

            {/* Step 2: Role Selection */}
            <div className={"step"} id={"step2"}>
                <h3 style={{textAlign: "center", marginBottom: "20px"}}>Choose Your <span style={{color: "var(--accent)"}}>Position</span></h3>
                <div className={"roles-grid"}>
                    <div className={"role-card"} data-legacy-onclick="selectRole('Public Relation', this)">
                        <i className={"fas fa-bullhorn"}></i>
                        <span>Public Relation</span>
                    </div>
                    <div className={"role-card"} data-legacy-onclick="selectRole('Web/App Developer', this)">
                        <i className={"fas fa-code"}></i>
                        <span>Web/App Developer</span>
                    </div>
                    <div className={"role-card"} data-legacy-onclick="selectRole('Photographer/Videographer', this)">
                        <i className={"fas fa-camera"}></i>
                        <span>Photographer</span>
                    </div>
                    <div className={"role-card"} data-legacy-onclick="selectRole('Video Editor', this)">
                        <i className={"fas fa-video"}></i>
                        <span>Video Editor</span>
                    </div>
                    <div className={"role-card"} data-legacy-onclick="selectRole('Graphics Designer', this)">
                        <i className={"fas fa-paint-brush"}></i>
                        <span>Graphics Designer</span>
                    </div>
                    <div className={"role-card"} data-legacy-onclick="selectRole('Content Writer', this)">
                        <i className={"fas fa-pen"}></i>
                        <span>Content Writer</span>
                    </div>
                </div>
                <input type={"hidden"} id={"selectedRole"} value={true} />
                <div className={"btn-group"}>
                    <button className={"btn btn-secondary"} data-legacy-onclick="nextStep(1)"><i className={"fas fa-arrow-left"}></i> Back</button>
                    <button className={"btn btn-primary"} data-legacy-onclick="nextStep(3)">Next <i className={"fas fa-arrow-right"}></i></button>
                </div>
            </div>

            {/* Step 3: Role-specific & Why Join */}
            <div className={"step"} id={"step3"}>
                <div id={"roleSpecificFields"}></div>
                <div className={"form-group"}>
                    <label className={"form-label"}>Why do you want to join TaruGuardians? *</label>
                    <textarea id={"recWhyJoin"} className={"form-textarea"} placeholder={"Share your motivation and reasons for joining..."}></textarea>
                </div>
                <div className={"btn-group"}>
                    <button className={"btn btn-secondary"} data-legacy-onclick="nextStep(2)"><i className={"fas fa-arrow-left"}></i> Back</button>
                    <button className={"btn btn-primary"} data-legacy-onclick="submitRecruitment()" id={"submitBtn"}>Submit Application <i className={"fas fa-paper-plane"}></i></button>
                </div>
            </div>

            {/* Success */}
            <div className={"step"} id={"stepSuccess"}>
                <div className={"success-message"}>
                    <div className={"success-icon"}>🎉</div>
                    <h2 className={"success-title"}>Application Submitted!</h2>
                    <p style={{color: "rgba(255,255,255,0.8)", marginBottom: "20px"}}>Thank you for applying to TaruGuardians. We'll review your application and get back to you soon!</p>
                    <div className={"whatsapp-box"}>
                        <h4><i className={"fab fa-whatsapp"}></i> Join Our WhatsApp Community</h4>
                        <p style={{marginBottom: "15px", fontSize: "0.9rem"}}>Stay updated with latest events and announcements!</p>
                        <a href={"https://chat.whatsapp.com/IKUt4M5NcHVKYyoTezoJYi"} target={"_blank"} className={"whatsapp-link"}>
                            <i className={"fab fa-whatsapp"}></i> Join WhatsApp Group
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    


    </div>
  );
}
