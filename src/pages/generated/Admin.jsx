// AUTO-GENERATED — DO NOT EDIT BY HAND
// Generated from legacy-source/admin.html
// by scripts/convert-html-to-react.mjs
//
// This file is the React port of the original HTML page. Every
// element, attribute, inline style, and child node from the source
// document has been mechanically translated to JSX. Inline <script>
// blocks live in ./Admin.scripts.js and run in a useEffect after
// mount; <style> blocks live in ./Admin.css and are imported
// at the top of this module.

import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Admin.css';
import { runScripts, cleanupScripts } from './Admin.scripts';
import { mapHrefToRoute } from '../../utils/routeMap.js';

const PAGE_ID = "Admin";

export default function Admin() {
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
    <div ref={rootRef} className="legacy-page legacy-Admin">

    <div className={"dash-bg"}></div>
    <div className={"dash-grid"}></div>
    <div className={"dash-notification"} id={"notification"}></div>

    <div className={"mobile-header"}>
        <button className={"mobile-menu-btn"} data-legacy-onclick="toggleSidebar()"><i className={"fas fa-bars"}></i></button>
        <div className={"mobile-logo"}>ADMIN PANEL</div>
        <button className={"mobile-menu-btn"} data-legacy-onclick="TaruAuth.logout()"><i className={"fas fa-sign-out-alt"}></i></button>
    </div>

    <div className={"sidebar-overlay"} id={"sidebarOverlay"} data-legacy-onclick="toggleSidebar()"></div>

    <div className={"sidebar"} id={"sidebar"}>
        <div className={"sidebar-header"}>
            <div className={"sidebar-logo"}>TARUGUARDIANS</div>
            <div className={"sidebar-logo-sub"}>Admin Panel</div>
        </div>
        <div className={"sidebar-user"}>
            <div className={"sidebar-avatar"} id={"sidebarAvatar"}><span id={"sidebarAvatarText"}>A</span></div>
            <div className={"sidebar-user-info"}>
                <div className={"sidebar-user-name"} id={"sidebarUserName"}>Admin</div>
                <div className={"sidebar-user-role"}>Administrator</div>
            </div>
        </div>
        <nav className={"sidebar-nav"}>
            <a className={"sidebar-nav-item active"} data-section={"overview"} data-legacy-onclick="switchSection('overview')"><i className={"fas fa-th-large"}></i> Dashboard</a>
            <a className={"sidebar-nav-item"} data-section={"users"} data-legacy-onclick="switchSection('users')"><i className={"fas fa-users"}></i> Users</a>
            <a className={"sidebar-nav-item"} data-section={"submissions"} data-legacy-onclick="switchSection('submissions')"><i className={"fas fa-file-alt"}></i> Submissions</a>
            <a className={"sidebar-nav-item"} data-section={"recruitment"} data-legacy-onclick="switchSection('recruitment')"><i className={"fas fa-user-plus"}></i> Recruitment</a>
            <Link to="/home" className={"sidebar-nav-item"}><i className={"fas fa-home"}></i> Back to Home</Link>
        </nav>
        <div className={"sidebar-footer"}>
            <button className={"sidebar-logout"} data-legacy-onclick="TaruAuth.logout()"><i className={"fas fa-sign-out-alt"}></i> Logout</button>
        </div>
    </div>

    <div className={"main-content"}>
        {/* OVERVIEW */}
        <div className={"tab-content active"} id={"section-overview"}>
            <div className={"page-header"}>
                <h1 className={"page-title"}>Admin Dashboard</h1>
                <p className={"page-subtitle"}>System overview and management</p>
            </div>
            <div className={"stats-grid"} id={"statsGrid"}>
                <div className={"stat-card"} title={"Total website visitors"}><div className={"stat-icon gold"}><i className={"fas fa-eye"}></i></div><div className={"stat-value"} id={"statVisitors"}>0</div><div className={"stat-label"}>Total Visitors</div></div>
                <div className={"stat-card"} title={"Currently online users"}><div className={"stat-icon green"}><i className={"fas fa-users"}></i></div><div className={"stat-value"} id={"statOnline"}>0</div><div className={"stat-label"}>Online Now</div></div>
                <div className={"stat-card"} title={"Total registered users"}><div className={"stat-icon blue"}><i className={"fas fa-user-plus"}></i></div><div className={"stat-value"} id={"statTotal"}>0</div><div className={"stat-label"}>Total Users</div></div>
                <div className={"stat-card"} title={"Active users in last 30 days"}><div className={"stat-icon purple"}><i className={"fas fa-user-check"}></i></div><div className={"stat-value"} id={"statActive"}>0</div><div className={"stat-label"}>Active (30d)</div></div>
            </div>
            <div className={"dash-section"} style={{marginTop: "24px"}}>
                <div className={"section-header"}><h2 className={"section-title"}><i className={"fas fa-list"}></i> All Registered Users</h2></div>
                <div className={"table-container"} id={"allUsersTable"}>
                    <div className={"empty-state"}><i className={"fas fa-users"}></i><p>Loading users...</p></div>
                </div>
                <div className={"pagination"} id={"allUsersPagination"}></div>
            </div>
        </div>

        {/* USERS */}
        <div className={"tab-content"} id={"section-users"}>
            <div className={"page-header"}>
                <h1 className={"page-title"}>User Management</h1>
                <p className={"page-subtitle"}>Manage all registered users</p>
            </div>
            <div className={"dash-section"}>
                <div className={"section-header"}>
                    <h2 className={"section-title"}><i className={"fas fa-users"}></i> All Users</h2>
                    <div className={"search-bar"}>
                        <input type={"text"} className={"search-input"} id={"userSearch"} placeholder={"Search users..."} data-legacy-oninput="searchUsers()" />
                        <select className={"search-input"} id={"roleFilter"} data-legacy-onchange="searchUsers()" style={{minWidth: "120px"}}>
                            <option value={true}>All Roles</option>
                            <option value={"user"}>User</option>
                            <option value={"admin"}>Admin</option>
                        </select>
                        <select className={"search-input"} id={"statusFilter"} data-legacy-onchange="searchUsers()" style={{minWidth: "130px"}}>
                            <option value={true}>All Status</option>
                            <option value={"active"}>Active</option>
                            <option value={"inactive"}>Inactive</option>
                        </select>
                    </div>
                </div>
                <div className={"table-container"} id={"usersTableContainer"}>
                    <div className={"empty-state"}><i className={"fas fa-users"}></i><p>Loading users...</p></div>
                </div>
                <div className={"pagination"} id={"usersPagination"}></div>
            </div>
        </div>

        {/* SUBMISSIONS */}
        <div className={"tab-content"} id={"section-submissions"}>
            <div className={"page-header"}>
                <h1 className={"page-title"}>Form Submissions</h1>
                <p className={"page-subtitle"}>View and manage all form submissions</p>
            </div>
            <div className={"dash-section"}>
                <div className={"section-header"}>
                    <h2 className={"section-title"}><i className={"fas fa-file-alt"}></i> All Submissions</h2>
                    <div className={"search-bar"}>
                        <select className={"search-input"} id={"subStatusFilter"} data-legacy-onchange="loadSubmissions()" style={{minWidth: "130px"}}>
                            <option value={true}>All Status</option>
                            <option value={"pending"}>Pending</option>
                            <option value={"reviewed"}>Reviewed</option>
                            <option value={"approved"}>Approved</option>
                            <option value={"rejected"}>Rejected</option>
                        </select>
                    </div>
                </div>
                <div className={"table-container"} id={"submissionsTableContainer"}>
                    <div className={"empty-state"}><i className={"fas fa-file-alt"}></i><p>Loading submissions...</p></div>
                </div>
                <div className={"pagination"} id={"subsPagination"}></div>
            </div>
        </div>

        {/* RECRUITMENT */}
        <div className={"tab-content"} id={"section-recruitment"}>
            <div className={"page-header"}>
                <h1 className={"page-title"}>Recruitment Management</h1>
                <p className={"page-subtitle"}>View and manage all recruitment applications</p>
            </div>
            
            <div className={"stats-grid"} style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "30px"}}>
                <div className={"stat-card"} style={{background: "linear-gradient(135deg, #1a1a2e, #16213e)", border: "1px solid rgba(0,240,255,0.3)", borderRadius: "16px", padding: "25px", textAlign: "center"}}>
                    <div style={{fontSize: "2.5rem", color: "#00f0ff", fontWeight: "700"}} id={"recTotal"}>0</div>
                    <div style={{color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", marginTop: "5px"}}>Total Applicants</div>
                </div>
                <div className={"stat-card"} style={{background: "linear-gradient(135deg, #1a1a2e, #16213e)", border: "1px solid rgba(255,215,0,0.3)", borderRadius: "16px", padding: "25px", textAlign: "center"}}>
                    <div style={{fontSize: "2.5rem", color: "#ffd700", fontWeight: "700"}} id={"recPending"}>0</div>
                    <div style={{color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", marginTop: "5px"}}>Pending</div>
                </div>
                <div className={"stat-card"} style={{background: "linear-gradient(135deg, #1a1a2e, #16213e)", border: "1px solid rgba(123,47,247,0.3)", borderRadius: "16px", padding: "25px", textAlign: "center"}}>
                    <div style={{fontSize: "2.5rem", color: "#7b2ff7", fontWeight: "700"}} id={"recReviewed"}>0</div>
                    <div style={{color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", marginTop: "5px"}}>Reviewed</div>
                </div>
                <div className={"stat-card"} style={{background: "linear-gradient(135deg, #1a1a2e, #16213e)", border: "1px solid rgba(0,255,136,0.3)", borderRadius: "16px", padding: "25px", textAlign: "center"}}>
                    <div style={{fontSize: "2.5rem", color: "#00ff88", fontWeight: "700"}} id={"recApproved"}>0</div>
                    <div style={{color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", marginTop: "5px"}}>Approved</div>
                </div>
            </div>

            <div className={"dash-section"} style={{background: "linear-gradient(135deg, #1a1a2e, #16213e)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", padding: "25px"}}>
                <div className={"section-header"} style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px", flexWrap: "wrap", gap: "15px"}}>
                    <h2 className={"section-title"} style={{color: "#fff", fontSize: "1.3rem", margin: "0"}}><i className={"fas fa-users"} style={{color: "#00f0ff", marginRight: "10px"}}></i> All Applicants</h2>
                    <div style={{display: "flex", gap: "10px", flexWrap: "wrap"}}>
                        <select data-legacy-onchange="loadRecruitment()" style={{padding: "10px 15px", background: "#1a1a3e", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "10px", color: "#fff", minWidth: "150px", cursor: "pointer"}} id={"recPositionFilter"}>
                            <option value={true}>All Positions</option>
                            <option value={"Public Relation"}>Public Relation</option>
                            <option value={"Web/App Developer"}>Web/App Developer</option>
                            <option value={"Photographer/Videographer"}>Photographer</option>
                            <option value={"Video Editor"}>Video Editor</option>
                            <option value={"Graphics Designer"}>Graphics Designer</option>
                            <option value={"Content Writer"}>Content Writer</option>
                        </select>
                        <select data-legacy-onchange="loadRecruitment()" style={{padding: "10px 15px", background: "#1a1a3e", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "10px", color: "#fff", minWidth: "130px", cursor: "pointer"}} id={"recStatusFilter"}>
                            <option value={true}>All Status</option>
                            <option value={"pending"}>Pending</option>
                            <option value={"reviewed"}>Reviewed</option>
                            <option value={"approved"}>Approved</option>
                            <option value={"rejected"}>Rejected</option>
                        </select>
                        <input type={"text"} data-legacy-oninput="loadRecruitment()" placeholder={"Search by name/email..."} style={{padding: "10px 15px", background: "#1a1a3e", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "10px", color: "#fff", minWidth: "200px"}} />
                    </div>
                </div>
                <div style={{overflowX: "auto", color: "#fff"}} id={"recruitmentTableContainer"}>
                    <div style={{textAlign: "center", padding: "40px", color: "rgba(255,255,255,0.5)"}}><i className={"fas fa-spinner fa-spin"} style={{fontSize: "2rem", marginBottom: "15px"}}></i><p>Loading applicants...</p></div>
                </div>
                <div id={"recPagination"} style={{marginTop: "20px", textAlign: "center"}}></div>
            </div>
        </div>
    </div>

    {/* Applicant Detail Modal */}
    <div id={"applicantModal"} style={{display: "none", position: "fixed", top: "0", left: "0", width: "100%", height: "100%", background: "rgba(0,0,0,0.8)", zIndex: "2000", justifyContent: "center", alignItems: "center", padding: "20px"}}>
        <div style={{background: "var(--bg-card)", border: "1px solid var(--glass-border)", borderRadius: "16px", maxWidth: "700px", width: "100%", maxHeight: "85vh", overflowY: "auto", position: "relative"}}>
            <button data-legacy-onclick="closeApplicantModal()" style={{position: "absolute", top: "15px", right: "15px", background: "none", border: "none", color: "var(--text)", fontSize: "24px", cursor: "pointer"}}>×</button>
            <div style={{padding: "25px"}} id={"applicantDetails"}></div>
        </div>
    </div>

    
    



    </div>
  );
}
