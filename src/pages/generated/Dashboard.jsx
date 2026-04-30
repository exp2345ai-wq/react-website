// AUTO-GENERATED — DO NOT EDIT BY HAND
// Generated from legacy-source/dashboard.html
// by scripts/convert-html-to-react.mjs
//
// This file is the React port of the original HTML page. Every
// element, attribute, inline style, and child node from the source
// document has been mechanically translated to JSX. Inline <script>
// blocks live in ./Dashboard.scripts.js and run in a useEffect after
// mount; <style> blocks live in ./Dashboard.css and are imported
// at the top of this module.

import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import { runScripts, cleanupScripts } from './Dashboard.scripts';
import { mapHrefToRoute } from '../../utils/routeMap.js';

const PAGE_ID = "Dashboard";

export default function Dashboard() {
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
    <div ref={rootRef} className="legacy-page legacy-Dashboard">

    <div className={"dash-bg"}></div>
    <div className={"dash-grid"}></div>
    <div className={"dash-notification"} id={"notification"}></div>

    {/* Mobile Header */}
    <div className={"mobile-header"}>
        <button className={"mobile-menu-btn"} data-legacy-onclick="toggleSidebar()"><i className={"fas fa-bars"}></i></button>
        <div className={"mobile-logo"}>TARUGUARDIANS</div>
        <button className={"mobile-menu-btn"} data-legacy-onclick="TaruAuth.logout()"><i className={"fas fa-sign-out-alt"}></i></button>
    </div>

    <div className={"sidebar-overlay"} id={"sidebarOverlay"} data-legacy-onclick="toggleSidebar()"></div>

    {/* Sidebar */}
    <div className={"sidebar"} id={"sidebar"}>
        <div className={"sidebar-header"}><div className={"sidebar-logo"}>TARUGUARDIANS</div></div>
        <div className={"sidebar-user"}>
            <div className={"sidebar-avatar"} id={"sidebarAvatar"}><span id={"sidebarAvatarText"}>U</span></div>
            <div className={"sidebar-user-info"}>
                <div className={"sidebar-user-name"} id={"sidebarUserName"}>User</div>
                <div className={"sidebar-user-role"} id={"sidebarUserRole"}>Member</div>
            </div>
        </div>
        <nav className={"sidebar-nav"}>
            <a className={"sidebar-nav-item active"} data-section={"overview"} data-legacy-onclick="switchSection('overview')"><i className={"fas fa-th-large"}></i> Overview</a>
            <a className={"sidebar-nav-item"} data-section={"profile"} data-legacy-onclick="switchSection('profile')"><i className={"fas fa-user"}></i> Profile</a>
            <a className={"sidebar-nav-item"} data-section={"certificates"} data-legacy-onclick="switchSection('certificates')"><i className={"fas fa-certificate"}></i> Certificates</a>
            <a className={"sidebar-nav-item"} data-section={"submissions"} data-legacy-onclick="switchSection('submissions')"><i className={"fas fa-file-alt"}></i> Submissions</a>
            <a className={"sidebar-nav-item active"} data-section={"applications"} data-legacy-onclick="switchSection('applications')"><i className={"fas fa-paper-plane"}></i> My Applications</a>
            <a className={"sidebar-nav-item"} data-section={"settings"} data-legacy-onclick="switchSection('settings')"><i className={"fas fa-cog"}></i> Settings</a>
            <Link to="/home" className={"sidebar-nav-item"}><i className={"fas fa-home"}></i> Back to Home</Link>
        </nav>
        <div className={"sidebar-footer"}>
            <button className={"sidebar-logout"} data-legacy-onclick="TaruAuth.logout()"><i className={"fas fa-sign-out-alt"}></i> Logout</button>
        </div>
    </div>

    {/* Main Content */}
    <div className={"main-content"}>
        {/* OVERVIEW */}
        <div className={"tab-content active"} id={"section-overview"}>
            <div className={"page-header"}>
                <h1 className={"page-title"}>Welcome back, <span id={"welcomeName"}>User</span>!</h1>
                <p className={"page-subtitle"}>Here's your dashboard overview</p>
            </div>
            <div className={"stats-grid"}>
                <div className={"stat-card"}><div className={"stat-icon blue"}><i className={"fas fa-certificate"}></i></div><div className={"stat-value"} id={"statCerts"}>0</div><div className={"stat-label"}>Certificates</div></div>
                <div className={"stat-card"}><div className={"stat-icon purple"}><i className={"fas fa-file-alt"}></i></div><div className={"stat-value"} id={"statSubmissions"}>0</div><div className={"stat-label"}>Submissions</div></div>
                <div className={"stat-card"}><div className={"stat-icon pink"}><i className={"fas fa-calendar-check"}></i></div><div className={"stat-value"} id={"statEvents"}>0</div><div className={"stat-label"}>Events</div></div>
                <div className={"stat-card"}><div className={"stat-icon gold"}><i className={"fas fa-clock"}></i></div><div className={"stat-value"} id={"statDays"}>0</div><div className={"stat-label"}>Days Active</div></div>
            </div>
            <div className={"dash-section"}>
                <div className={"section-header"}><h2 className={"section-title"}><i className={"fas fa-history"}></i> Recent Certificates</h2></div>
                <div id={"recentCerts"}><div className={"empty-state"}><i className={"fas fa-certificate"}></i><p>No certificates yet.</p><button className={"btn btn-primary"} data-legacy-onclick="switchSection('certificates')"><i className={"fas fa-plus"}></i> Add Certificate</button></div></div>
            </div>
            <div className={"dash-section"}>
                <div className={"section-header"}><h2 className={"section-title"}><i className={"fas fa-file-alt"}></i> Recent Submissions</h2></div>
                <div id={"recentSubmissions"}><div className={"empty-state"}><i className={"fas fa-file-alt"}></i><p>No submissions yet.</p></div></div>
            </div>
        </div>

        {/* PROFILE */}
        <div className={"tab-content"} id={"section-profile"}>
            <div className={"page-header"}><h1 className={"page-title"}>My Profile</h1><p className={"page-subtitle"}>Manage your personal information</p></div>
            <div className={"dash-section"}>
                <div className={"profile-grid"}>
                    <div className={"profile-avatar-container"}>
                        <div className={"profile-avatar-wrapper"}>
                            <div className={"profile-avatar-glow"}></div>
                            <div className={"profile-avatar-ring"}></div>
                            <div className={"profile-avatar-inner"}>
                                <div className={"profile-avatar-large"} id={"profileAvatarLarge"}>
                                    <img id={"profileAvatarImg"} src={true} alt={true} style={{display: "none"}} />
                                    <span className={"profile-avatar-text"} id={"profileAvatarText"}>U</span>
                                </div>
                            </div>
                        </div>
                        <button className={"avatar-upload-btn"} data-legacy-onclick="document.getElementById('avatarUpload').click()">
                            <i className={"fas fa-camera"}></i> UPLOAD PHOTO
                        </button>
                        <input type={"file"} id={"avatarUpload"} accept={"image/*"} style={{display: "none"}} data-legacy-onchange="uploadAvatar(this)" />
                    </div>
                    <div>
                        <form id={"profileForm"} data-legacy-onsubmit="updateProfile(event)">
                            <div className={"profile-details"}>
                                <div className={"form-group"}><label className={"form-label"}>Full Name</label><input className={"form-input"} type={"text"} id={"profileName"} placeholder={"Your name"} /></div>
                                <div className={"form-group"}><label className={"form-label"}>Email</label><input className={"form-input"} type={"email"} id={"profileEmail"} disabled={true} /></div>
                                <div className={"form-group"}><label className={"form-label"}>Phone</label><input className={"form-input"} type={"tel"} id={"profilePhone"} placeholder={"Phone number"} /></div>
                                <div className={"form-group"}><label className={"form-label"}>College</label><input className={"form-input"} type={"text"} id={"profileCollege"} placeholder={"Your college"} /></div>
                                <div className={"form-group"}><label className={"form-label"}>Year</label><input className={"form-input"} type={"text"} id={"profileYear"} placeholder={"Your year"} /></div>
                                <div className={"form-group"}><label className={"form-label"}>Bio</label><textarea className={"form-input"} id={"profileBio"} placeholder={"Tell us about yourself"}></textarea></div>
                            </div>
                            <button type={"submit"} className={"btn btn-primary"} style={{marginTop: "16px"}}><i className={"fas fa-save"}></i> Save Changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        {/* CERTIFICATES */}
        <div className={"tab-content"} id={"section-certificates"}>
            <div className={"page-header"}><h1 className={"page-title"}>My Certificates</h1><p className={"page-subtitle"}>Manage your certificates</p></div>
            <div className={"dash-section"}>
                <div className={"section-header"}>
                    <h2 className={"section-title"}><i className={"fas fa-certificate"}></i> Certificates</h2>
                    <button className={"btn btn-primary"} data-legacy-onclick="openModal('addCertModal')"><i className={"fas fa-plus"}></i> Add Certificate</button>
                </div>
                <div className={"cert-grid"} id={"certGrid"}><div className={"empty-state"}><i className={"fas fa-certificate"}></i><p>No certificates yet.</p></div></div>
            </div>
        </div>

        {/* SUBMISSIONS */}
        <div className={"tab-content"} id={"section-submissions"}>
            <div className={"page-header"}><h1 className={"page-title"}>Form Submissions</h1><p className={"page-subtitle"}>View all your submissions</p></div>
            <div className={"dash-section"}>
                <div className={"section-header"}><h2 className={"section-title"}><i className={"fas fa-file-alt"}></i> All Submissions</h2></div>
                <div className={"table-container"} id={"submissionsTable"}><div className={"empty-state"}><i className={"fas fa-file-alt"}></i><p>No submissions yet.</p></div></div>
            </div>
        </div>

        {/* SETTINGS */}
        <div className={"tab-content"} id={"section-settings"}>
            <div className={"page-header"}><h1 className={"page-title"}>Settings</h1><p className={"page-subtitle"}>Account settings</p></div>
            <div className={"dash-section"}>
                <div className={"section-header"}><h2 className={"section-title"}><i className={"fas fa-lock"}></i> Change Password</h2></div>
                <form data-legacy-onsubmit="changePassword(event)" style={{maxWidth: "400px"}}>
                    <div className={"form-group"}><label className={"form-label"}>Current Password</label><input className={"form-input"} type={"password"} id={"currentPassword"} placeholder={"Current password"} /></div>
                    <div className={"form-group"}><label className={"form-label"}>New Password</label><input className={"form-input"} type={"password"} id={"newPassword"} placeholder={"New password"} minLength={"6"} /></div>
                    <div className={"form-group"}><label className={"form-label"}>Confirm Password</label><input className={"form-input"} type={"password"} id={"confirmNewPassword"} placeholder={"Confirm password"} /></div>
                    <button type={"submit"} className={"btn btn-primary"}><i className={"fas fa-key"}></i> Update Password</button>
                </form>
            </div>
            <div className={"dash-section"} style={{marginTop: "24px"}}>
                <div className={"section-header"}><h2 className={"section-title"}><i className={"fas fa-info-circle"}></i> Account Info</h2></div>
                <div id={"accountInfo"}></div>
            </div>
        </div>

        {/* MY APPLICATIONS */}
        <div className={"tab-content"} id={"section-applications"}>
            <div className={"page-header"}><h1 className={"page-title"}>My Applications</h1><p className={"page-subtitle"}>Track your recruitment applications</p></div>
            <div className={"dash-section"}>
                <div className={"section-header"}><h2 className={"section-title"}><i className={"fas fa-paper-plane"}></i> Applied Positions</h2></div>
                <div id={"applicationsTable"}>
                    <div className={"empty-state"}><i className={"fas fa-paper-plane"}></i><p>Loading your applications...</p></div>
                </div>
            </div>
        </div>
    </div>

    {/* Add Certificate Modal */}
    <div className={"modal-overlay"} id={"addCertModal"}>
        <div className={"modal-content"}>
            <div className={"modal-header"}>
                <h3 className={"modal-title"}>Add Certificate</h3>
                <button className={"modal-close"} data-legacy-onclick="closeModal('addCertModal')">×</button>
            </div>
            <form data-legacy-onsubmit="addCertificate(event)">
                <div className={"form-group"}><label className={"form-label"}>Certificate Name</label><input className={"form-input"} type={"text"} id={"certName"} placeholder={"e.g., Web Dev Certificate"} required={true} /></div>
                <div className={"form-group"}><label className={"form-label"}>Description</label><textarea className={"form-input"} id={"certDesc"} placeholder={"Brief description"}></textarea></div>
                <div className={"form-group"}><label className={"form-label"}>Certificate File</label><input className={"form-input"} type={"file"} id={"certFile"} accept={".pdf,.jpg,.jpeg,.png,.webp"} /></div>
                <button type={"submit"} className={"btn btn-primary"} style={{width: "100%", marginTop: "8px"}}><i className={"fas fa-plus"}></i> Add Certificate</button>
            </form>
        </div>
    </div>

    
    



    </div>
  );
}
