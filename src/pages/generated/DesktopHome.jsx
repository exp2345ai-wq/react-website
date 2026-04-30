// AUTO-GENERATED — DO NOT EDIT BY HAND
// Generated from legacy-source/TARUGUARDIANS FIRST PAGE.html
// by scripts/convert-html-to-react.mjs
//
// This file is the React port of the original HTML page. Every
// element, attribute, inline style, and child node from the source
// document has been mechanically translated to JSX. Inline <script>
// blocks live in ./DesktopHome.scripts.js and run in a useEffect after
// mount; <style> blocks live in ./DesktopHome.css and are imported
// at the top of this module.

import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DesktopHome.css';
import { runScripts, cleanupScripts } from './DesktopHome.scripts';
import { mapHrefToRoute } from '../../utils/routeMap.js';

const PAGE_ID = "DesktopHome";

export default function DesktopHome() {
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
    <div ref={rootRef} className="legacy-page legacy-DesktopHome">


{/* === Modern Navbar with Animated Logo and Glowing Blog Button at Right === */}
<div className={"dark-mode-toggle parallax custom-cursor"} data-speed={"0.05"}><i className={"fas fa-moon"}></i></div>

{/* Navbar */}
<header className={"modern-navbar"}>
    <div className={"navbar-container"}>
        <div className={"navbar-logo"}>
            <span className={"logo-arrow left"}>&lt;</span>
            <img src={"Taru%20Wing.png"} alt={"Tech Club Logo"} />
            <span>TaruGuardians</span>
            <span className={"logo-arrow right"}>&gt;</span>
        </div>
        <div className={"navbar-center"}>
            <nav className={"navbar-links"}>
                <a href={"#home"} className={"active custom-cursor"}>Home</a>
                <a href={"#events"} className={"custom-cursor"}>Event</a>
                <a href={"#tech-wheel"} className={"custom-cursor"}>TARU WINGS</a>
                <a href={"#roadmaps"} className={"custom-cursor"}>Roadmap</a>
                <a href={"#projects"} className={"custom-cursor"}>Placement Guide</a>
                <a href={"#team"} className={"custom-cursor"}>Team</a>
            </nav>
        </div>
        <Link to="/auth" className={"navbar-blog-btn custom-cursor auth-login-btn"} style={{marginLeft: "12px", background: "linear-gradient(90deg,#1a8a3f 0%,#0d9e5e 100%)"}}>Login</Link>
        <div className={"auth-user-menu"} style={{display: "none", alignItems: "center", gap: "10px", marginLeft: "12px"}}>
            <img className={"auth-user-avatar"} src={true} alt={true} style={{width: "34px", height: "34px", borderRadius: "50%", border: "2px solid #3b82f6", objectFit: "cover"}} />
            <Link to="/dashboard" className={"navbar-blog-btn custom-cursor"} style={{padding: "8px 18px", fontSize: "14px", background: "linear-gradient(90deg,#0a1b4c,#1e2761)"}}>Dashboard</Link>
        </div>
    </div>
</header>

{/* Home Section */}
{/* Home Section */}
<section id={"home"} className={"content-section"}>
    <div className={"main-content"}>
        <canvas id={"three-canvas"}></canvas>
        <div id={"particles-js"}></div>
        <div className={"floating-elements"}>
            <div className={"floating-element parallax"} data-speed={"0.05"}><i className={"fas fa-code"}></i></div>
            <div className={"floating-element parallax"} data-speed={"0.1"}><i className={"fas fa-laptop-code"}></i></div>
            <div className={"floating-element parallax"} data-speed={"0.15"}><i className={"fas fa-rocket"}></i></div>
            <div className={"floating-element parallax"} data-speed={"0.2"}><i className={"fas fa-lightbulb"}></i></div>
        </div>
        <canvas id={"line-canvas"}></canvas>

        {/* NEW HEADING */}
        <div className={"main-heading"}>
            <h1>taruguardians</h1>
            <p>Where Code Meets Creativity,
                The Sole Architect of Your Tech and Non-Tech Ascent<br />
                Beyond the Code, Beyond the Ordinary,<br />
                The Fusion of 95% Tech, 5% Non-Tech, Equip, Build, and Conquer with Our Roadmaps and Placement Guides</p>
            {/* Be a part of TaruGuardians - Right after heading text */}
            <div style={{marginTop: "30px"}}>
                <h3 style={{color: "#00f0ff", fontSize: "24px", fontWeight: "700", marginBottom: "10px"}}>Be a part of TaruGuardians</h3>
                <p style={{color: "rgba(255,255,255,0.7)", fontSize: "14px", marginBottom: "18px"}}>Join TaruGuardians to learn, grow, and lead.</p>
                <Link to="/recruitment" style={{display: "inline-block", textDecoration: "none", background: "linear-gradient(90deg, #00f0ff, #00b4d8)", color: "#000", fontSize: "15px", fontWeight: "700", padding: "12px 35px", borderRadius: "25px", boxShadow: "0 4px 25px rgba(0,240,255,0.4)"}}>Apply Now →</Link>
            </div>
        </div>

        {/* Slideshow Section Added Here */}
        {/* Independent Circular Slideshows on Left and Right */}
        <div className={"left-slideshow-container"}>
            <div className={"circular-slideshow"} id={"left-slideshow"}>
                <div className={"slide active"}>
                    <img src={"Event%201.png"} alt={"Slide 1"} />
                </div>
                <div className={"slide"}>
                    <img src={"Event%202.png"} alt={"Slide 2"} />
                </div>
                <div className={"slide"}>
                    <img src={"Event%203.png"} alt={"Slide 3"} />
                </div>
                <div className={"slide"}>
                    <img src={"Event%204.png"} alt={"Slide 4"} />
                </div>
                <div className={"slide"}>
                    <img src={"Event%205.png"} alt={"Slide 5"} />
                </div>
            </div>
        </div>

        <div className={"right-slideshow-container"}>
            <div className={"circular-slideshow"} id={"right-slideshow"}>
                <div className={"slide active"}>
                    <img src={"Event%206.png"} alt={"Slide 1"} />
                </div>
                <div className={"slide"}>
                    <img src={"Event%207.png"} alt={"Slide 2"} />
                </div>
                <div className={"slide"}>
                    <img src={"Event%208.png"} alt={"Slide 3"} />
                </div>
                <div className={"slide"}>
                    <img src={"Event%209.png"} alt={"Slide 4"} />
                </div>
                <div className={"slide"}>
                    <img src={"Event%2010.png"} alt={"Slide 5"} />
                </div>
            </div>
        </div>
</div></section>

{/* Mobile Home Section */}


{/* Chatbot */}
<div id={"bot"} className={"parallax custom-cursor"} data-speed={"0.05"}></div>
<div id={"chat-modal"} className={"parallax"} data-speed={"0.05"}>
    <div id={"chat-header"}> <span id={"close-btn"} className={"custom-cursor"}>×</span></div>
    <div id={"chat-body"}></div>
    <div id={"chat-input"}>
        <a id={"user-input"} type={"text"} className={"custom-cursor"}>
            </a><a id={"send-btn"} className={"custom-cursor"}></a>
    </div>
</div>


{/* Blog Section */}
<section id={"blog"} className={"blog-section"}>
    <h2 className={"blog-title"}>What's New in TaruGuardians</h2>
    <div className={"blog-cards"}>
        {/* Card 1 */}
        <div className={"blog-card"}>
            <img src={"post%204.png"} alt={"eid-e-milad"} />
            <div className={"blog-card-content"}>
                <div className={"blog-card-heading"}>TaruGuardians Post On Children's Day
                </div>
                <div className={"blog-card-title"}>(14 November 2025)</div>
                <div className={"blog-card-desc"}>
                    TaruGuardians wish every child a happy children's day
                    <br />

                    Every child has the potential, imagination and courage to do something big in life . It’s about listening to their thoughts, respecting their voices, and encouraging their dreams. Let us promise to support their ambition and encourage their dreams ❤️



                    {/*                    Yoga is the journey of the self, through the self, to the self." — Bhagavad Gita*/}

                    {/*                    Yoga plays a vital role in maintaining physical health, but inner peace and mental clarity is the best one can get from yoga. It deeply connects the soul to the body.*/}

                    {/*                    On 21st June The United Nations had taken an initiative to celebrate international yoga day proposed by our Indian PM.*/}


                </div>
            </div>
            <div className={"blog-card-footer"}>
                <a href={"https://www.instagram.com/p/DRB8UvxkigJ/"} className={"blog-card-link"}>
                    <svg width={"18"} height={"18"} fill={"none"} stroke={"#3b82f6"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} viewBox={"0 0 24 24"}><path d={"M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}></path><polyline points={"15 3 21 3 21 9"}></polyline><line x1={"10"} y1={"14"} x2={"21"} y2={"3"}></line></svg>
                    More
                </a>
            </div>
        </div>
        <div className={"blog-card"}>
            <img src={"post%203.png"} alt={"Engineers Day"} />
            <div className={"blog-card-content"}>
                <div className={"blog-card-heading"}>TaruGuardians Post On Guru Nanak’s Jayanti</div>
                <div className={"blog-card-title"}>(5 November 2025)</div>
                <div className={"blog-card-desc"}>
                    Without a Guru, none can cross over
                    <br />Guru Nanak’s life advice could double as a modern cheat code for a kinder world—compassion, unity, equality, and selfless service, all summed up in “Ik Onkar” (there’s one God), invite us to swap judgment for kindness and celebrate what connects us ❤️
{/*                    We salute the brave men and women of the Indian Air Force, who rise above the call of duty, demonstrating exceptional courage, skill, and professionalism*/}
                    {/*                    🌙 Muharram marks the start of the Islamic New Year, a  month filled with introspection, prayer, and intense feeling. 🖤*/}

                    {/*                    Ashura, the tenth day, brings to mind a historical event that still stirs people's emotions: Imam Hussain's (RA) martyrdom at Karbala. He stood for justice, truth, and what was right, even at the expense of everything, rather than for power. ⚔💔*/}

                    {/*                    His bravery lies not just in fighting but also in speaking out against injustice. We are still affected by the message he gave today. 🕊*/}

                    {/*                    Cheers to new beginnings, Let's script a stellar future together, with the new team leads✨✨*/}
                </div>
            </div>
            <div className={"blog-card-footer"}>
                <a href={"https://www.instagram.com/p/DQqGIjvkgqO/"} className={"blog-card-link"}>
                    <svg width={"18"} height={"18"} fill={"none"} stroke={"#3b82f6"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} viewBox={"0 0 24 24"}><path d={"M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}></path><polyline points={"15 3 21 3 21 9"}></polyline><line x1={"10"} y1={"14"} x2={"21"} y2={"3"}></line></svg>
                    More
                </a>
            </div>
        </div>
        {/* Card 2 */}
        <div className={"blog-card"}>
            <img src={"post%202.png"} alt={"Hindi Diwas"} />
            <div className={"blog-card-content"}>
                <div className={"blog-card-heading"}>TaruGuardians Post On Diwali</div>
                <div className={"blog-card-title"}>(20 October 2025)</div>
                <div className={"blog-card-desc"}>
                    Team TaruGuardians wish everyone a very Happy and Joyous Diwali 🪔💛!
                    <br />
                    The festival of lights is here— time to glow brighter than your diyas and sparkle from inside out ✨
                    <br />Diwali, celebrated on the 15th day of the Karthika month, marks the day when Lord Rama returned to Ayodhya after 14 years of exile
{/*                    डोरी, उस पर कृपा हो त्रिलोकीनाथ की भारी।"🙏🏻&ndash;&gt;हिन्दी को राजभाषा बनाने का निर्णय इसलिए लिया गया क्योंकि यह देश की जनभाषा है।" - राजेंद्र प्रसाद&ndash;&gt;*/}
                    {/*                    <br>*/}

                    {/*                    हिंदी दिवस भारत की समृद्ध सांस्कृतिक विरासत को संरक्षित करने में हिंदी के महत्व पर प्रकाश डालता है। यह नागरिकों को भावी पीढ़ियों के लिए भाषा का सम्मान करने, उपयोग करने और विकसित करने के लिए प्रेरित करता है।🙏🏻.*/}
                    {/*                    आइए हम सब अपनी समृद्ध संस्कृति का जश्न मनाएं और अपनी राजभाषा का सम्मान करें।*/}
                    {/*                    TaruGuardians इस राष्ट्रीय हिंदी दिवस पर सभी को हार्दिक शुभकामनाएं देते हैं।✨🌸*/}
                    {/*                    Rath yatra is also known as Shree Gundicha Yatra or Chariot festival.*/}
                    {/*                    It's often celebrated in the month of Ashadha(June-July) and involves a grand procession where the deities are taken out on ornately decorated chariots.*/}

                    {/*                    &lt;!&ndash;                    Remember the days when you enjoyed your summer vacations at your aunt's home with all your siblings?&ndash;&gt;*/}
                    {/*                    Similarly The Rath Yatra symbolizes Lord Jagannath's journey from his home(Jagannath Temple)*/}


                </div>
            </div>
            <div className={"blog-card-footer"}>
                <a href={"https://www.instagram.com/p/DQBB_1FEpXA/"} className={"blog-card-link"}>
                    <svg width={"18"} height={"18"} fill={"none"} stroke={"#3b82f6"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} viewBox={"0 0 24 24"}><path d={"M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}></path><polyline points={"15 3 21 3 21 9"}></polyline><line x1={"10"} y1={"14"} x2={"21"} y2={"3"}></line></svg>
                    More
                </a>
            </div>
        </div>
        {/* Card 3 */}
        <div className={"blog-card"}>
            <img src={"post%201.png"} alt={"literacy Day"} />
            <div className={"blog-card-content"}>
                <div className={"blog-card-heading"}>TaruGuardians Post On Dhanteras</div>
                <div className={"blog-card-title"}>(18 October 2025)</div>
                <div className={"blog-card-desc"}>
                    The air fills with echoes of joy as our home glows with the light of Diya 🪔
                    <br />Team TaruGuardians wish everyone a bright , blessed and blissful Dhanteras 🙌🏻. Let's welcome abundance with gratitude,spread light with kindness and step into a new year of growth, positivity and prosperity 💛


                    {/*                    "Literacy  bridge from misery to hope." – Kofi Annan 📖<br>TaruGuardians tips its hat 🎩 to every word warrior out there — stay curious, stay clever, and keep turning those pages! 🔍📘.This Literacy Day, we’re cheering you on to grow, shine, and glow like the rockstar*/}
                    {/*                    Yoga is the journey of the self, through the self, to the self." — Bhagavad Gita*/}

                    {/*                    Yoga plays a vital role in maintaining physical health, but inner peace and mental clarity is the best one can get from yoga. It deeply connects the soul to the body.*/}

                    {/*                    On 21st June The United Nations had taken an initiative to celebrate international yoga day proposed by our Indian PM.*/}


                </div>
            </div>
            <div className={"blog-card-footer"}>
                <a href={"https://www.instagram.com/p/DP7-NWwEt3J/"} className={"blog-card-link"}>
                    <svg width={"18"} height={"18"} fill={"none"} stroke={"#3b82f6"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} viewBox={"0 0 24 24"}><path d={"M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}></path><polyline points={"15 3 21 3 21 9"}></polyline><line x1={"10"} y1={"14"} x2={"21"} y2={"3"}></line></svg>
                    More
                </a>
            </div>
        </div>

        {/* Card 4 */}
        {/*        <div class="blog-card">*/}
        {/*            <img src="9.png" alt="Teacher's Day" />*/}
        {/*            <div class="blog-card-content">*/}
        {/*                <div class="blog-card-heading">TaruGuardians Post On Teacher's Day</div>*/}
        {/*                <div class="blog-card-title">(5 September 2025)</div>*/}
        {/*                <div class="blog-card-desc">*/}
        {/*                    "A good teacher can inspire hope, ignite the imagination, and instill a love of learning."💫*/}
        {/*<br>we express our heartfelt gratitude to all our teachers who inspire us to dream bigger, work harder while constantly pushing us through challenges to thrive in an ever changing 🌎 world — not just as a teacher, but also as a mentor who guide us to become better human being.*/}
        {/*                    &lt;!&ndash;                    A father doesn’t tell you how to live; he lives, and lets you watch him do it." — Clarence Budington Kelland .&ndash;&gt;*/}

        {/*&lt;!&ndash;                    If Mother is the creator then Father is the maker.&ndash;&gt;*/}
        {/*&lt;!&ndash;                    The one who dosn't express much,&ndash;&gt;*/}
        {/*&lt;!&ndash;                    but his actions ultimately touch ❤&ndash;&gt;*/}
        {/*&lt;!&ndash;                    Father is the backbone,&ndash;&gt;*/}
        {/*&lt;!&ndash;                    Who will never ever leave you alone.&ndash;&gt;*/}

        {/*                    &lt;!&ndash;if it will never ever heritiate yourself then that's not the valid reason&ndash;&gt;*/}

        {/*                </div>*/}
        {/*            </div>*/}

        {/*            <div class="blog-card-footer">*/}
        {/*                <a href="https://www.instagram.com/p/DONT956kq-S/" class="blog-card-link" >*/}
        {/*                    <svg width="18" height="18" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>*/}
        {/*                    More*/}
        {/*                </a>*/}
        {/*            </div>*/}
        {/*        </div>*/}

    </div>
    <div className={"blog-see-more"}>
        <Link to="/instagram" style={{backgroundColor: "#37B88C"}} className={"blog-see-more-btn"}>See All Post Of TaruGuardians →</Link>
    </div>
</section>

{/*<section id="events" class="overhyped-section">*/}
{/*    <div class="overhyped-title">Events </div>*/}
{/*    <div class="events-title"> Organized By The TaruGuardians</div>*/}
{/*    <div class="events-grid">*/}
{/*        &lt;!&ndash; Event Card 1 - Fixed with proper background sizing &ndash;&gt;*/}
{/*        <div class="event-card" style="background-image:url('Event 2.png'); background-size: cover; background-position: center;">*/}
{/*            <div class="event-date">September 13, 2025</div>*/}
{/*            <div class="event-title">अभिyukti</div>*/}
{/*            <div class="event-desc">an offline non-technical event which is about communication and fun.<br>At Annex Building Room no 205 & 206</div>*/}
{/*        </div>*/}

{/*        &lt;!&ndash; Other event cards with the same fix &ndash;&gt;*/}
{/*        <div class="event-card" style="background-image:url('Event 1.png'); background-size: cover; background-position: center;">*/}
{/*            <div class="event-date">August 17, 2025</div>*/}
{/*            <div class="event-title"></div>*/}
{/*            <div class="event-desc">Python Workshop<br>At CSE department Ground Floor</div>*/}
{/*        </div>*/}

{/*        &lt;!&ndash; Continue with other event cards &ndash;&gt;*/}
{/*    </div>*/}
{/*    <div class="events-viewall">*/}
{/*        <a href="responsive%20event%20page.html" style="background-color: #37B88C;" class="events-viewall-btn">View All Events &rarr;</a>*/}
{/*    </div>*/}
{/*</section>*/}
{/* OVERHYPED EVENTS SECTION */}
<section id={"events"} className={"overhyped-section"}>
    <div className={"overhyped-title"}>Events </div>
    <div className={"events-title"}> Organized By The TaruGuardians</div>
    <div className={"events-grid"}>
        {/* Event Card 1 */}
        <div className={"event-card"} style={{backgroundImage: "url('QUIZ MANIA .png')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className={"event-date"}>November 2, 2025</div>
        <div className={"event-title"}>QUIZ-O-MANIA 3.0</div>
        <div className={"event-desc"}>Quiz-O-Mania 3.0 by TaruGuardians — Successfully completed online quiz on November 2 2025 | Free entry, 5 mar points, & certificates For Everyone! </div>
    </div>
        <div className={"event-card"} style={{backgroundImage: "url('Event 2.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className={"event-date"}>September 13, 2025</div>
            <div className={"event-title"}>अभिyukti</div>
            <div className={"event-desc"}>an offline non-technical event which is about communication and fun.<br />At Annex Building Room no 205 & 206</div>
        </div>
        <div className={"event-card"} style={{backgroundImage: "url('Event 1.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className={"event-date"}>August 17, 2025</div>
        <div className={"event-title"}></div>
        <div className={"event-desc"}>Python Workshop<br />At CSE department Ground Floor</div>
    </div>
    <div className={"event-card"} style={{backgroundImage: "url('tree.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
    <div className={"event-date"}>june 6, 2025</div>
    <div className={"event-title"}>TREE PLANTATION Drive BY TARUGUARDIANS</div>
    <div className={"event-desc"}>Taruguardians planted trees All Over The Hit Haldia Campus</div>
    </div>
    <div className={"event-card"} style={{backgroundImage: "url('Gate.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
    <div className={"event-date"}>March 23, 2025</div>

    <div className={"event-title"}>GATE & PLACEMENT</div>
    <div className={"event-desc"}>Crack GATE & Placements with Chandan Jha (AVP, GFG) | Mar 23, 2 PM | Free Entry!</div>
    </div>
    {/* Event Card 2 */}
    <div className={"event-card"} style={{backgroundImage: "url('FIFMAIMAGE.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
    <div className={"event-date"}>1st & 2nd March, 2025</div>
    <div className={"event-title"}>FIGMA CRAFT 2.0</div>
    <div className={"event-desc"}>Design, Collaborate, Create
        By TaruGuardians</div>
    <div className={"event-desc"}>At ECE DEPT. HIT, Haldia</div>
    </div>
    {/* Event Card 3 */}


    {/* Event Card 4 */}


    {/* Event Card 5 */}

    {/* Event Card 6 */}


    </div>
    <div className={"events-viewall"}>
        <Link to="/events" style={{backgroundColor: "#37B88C"}} className={"events-viewall-btn"}>View All Events →</Link>
    </div>
</section>
<section id={"tech-wheel"} className={"extra-section"}>
    <div className={"scroll-trigger"}></div>
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", position: "relative"}}>
        <div className={"wing-title-big"} id={"wingTitle"}>TARU<br />WINGS</div>
        <div className={"tech-wheel-container"} id={"techWheelContainer"}>
            <div className={"tech-wheel"} id={"techWheel"}>
                <div className={"tech-wheel-inner"}></div>
            </div>
        </div>
        <div className={"content-area"} id={"contentArea"}>
            <div id={"webDevText"} className={"web-dev-text"}>
                <h3>Explore Our Wings</h3>
                <p>Scroll to rotate the wheel and discover the various technical wings of our club.</p>
                <a className={"read-more"} href={"#"}>Get Started →</a>
            </div>
        </div>
        <div className={"scroll-hint"}>
            <div>🔄 Scroll to rotate the wheel</div>
            <div style={{fontSize: "0.8rem", marginTop: "5px"}}>Complete one full rotation to continue And Move On the Next Section</div>
        </div>
        <div className={"progress-indicator"}>
            <span>Rotation Progress:</span>
            <div className={"progress-bar"}>
                <div className={"progress-fill"}></div>
            </div>
            <span id={"progress-text"}>0%</span>
        </div>
        <div className={"wheel"}>
            <h2>TaruGuardians Wing</h2>
            <p>All types of TaruGuardians club posts</p>
            {/* Add your existing wheel/post content here */}
        </div>
    </div>
</section>
<section id={"roadmaps"} className={"roadmaps-section"}>
    <h2 className={"roadmaps-title"}>Roadmaps By TaruGuardians Team</h2>
    <div className={"roadmaps-cards"}>
        <Link to="/roadmap" className={"roadmap-card"}>
            <img src={"webd2.jpg"} alt={"WebDevelopemnt"} />
            <span className={"roadmap-label"}>Web Development</span>
            <span className={"roadmap-label"}>Roadmap</span>
        </Link>
        <Link to="/roadmap-old" className={"roadmap-card"}>
            <img src={"cp2.jpg"} alt={"Competetiitve Programing"} />
            <span className={"roadmap-label"}>Competetive programming</span>
            <span className={"roadmap-label"}>   Roadmap</span>
        </Link>
        <Link to="/roadmap-old" className={"roadmap-card"}>
            <img src={"appd2.jpg"} alt={"App Development"} />
            <span className={"roadmap-label"}>App Development</span>
            <span className={"roadmap-label"}> Roadmap </span>
        </Link>
    </div>
    <div className={"roadmaps-viewall"}>
        <Link to="/roadmap" className={"glow-viewall-btn"}>
            View All Roadmaps
            <span style={{color: "deepskyblue"}}>→</span>
        </Link>
    </div>

</section>
{/* Featured Projects Section */}
<section id={"projects"} className={"projects-section"}>
    {/*        <h2 class="projects-title">On & Off Campus Placement Roadmap  </h2>*/}

    {/*        <div class="events-title">  by TaruGuardians Team</div>*/}
    <h1 style={{marginBottom: "8px"}} className={"projects-title"}>On & Off Campus Placement Roadmap</h1>
    <h2 style={{marginTop: "0", fontSize: "2rem"}} className={"projects-title"}>by TaruGuardians Team</h2>

    <div className={"projects-grid"}>
        {/* Project 1 */}
        <div className={"project-card"} style={{backgroundImage: "url('walmart3.jpg')"}}>
            <div className={"project-overlay"}>
                <div className={"project-card-content"}>
                    <h3 className={"project-name"}>Roadmap To Crack Off Campus Placement</h3>
                    <div className={"project-desc"}>
                        Cracking an off-campus placement requires a strategic blend of preparation, networking, and consistency.
                    </div>
                    <div className={"project-tags"}>
                        <span className={"tag"}>DSA</span>
                        <span className={"tag"}>DEVELOPMENT</span>
                        <span className={"tag"}>QUANT APTITUDE</span>
                    </div>
                    <div className={"project-links"}>
                        {/*                            <a href="#" class="project-link">Code</a>*/}
                        <a href={"#"} className={"project-link"}>Visit To See More</a>
                    </div>
                </div>
            </div>
        </div>
        {/* Project 2 */}
        <div className={"project-card"} style={{backgroundImage: "url('tcs2.jpg')"}}>
            <div className={"project-overlay"}>
                <div className={"project-card-content"}>
                    <h3 className={"project-name"}>On Campus Placement Roadmap</h3>
                    <div className={"project-desc"}>
                        Cracking on-campus placements involves a different strategy from off-campus since it typically includes a predefined process organized by college.
                    </div>
                    <div className={"project-tags"}>
                        <span className={"tag"}>DSA</span>
                        <span className={"tag"}>DEVELOPMENT</span>
                        <span className={"tag"}>QUANT APTITUDE</span>
                    </div>
                    {/*                        <div class="project-links">*/}
                    {/*                            <a href="#" class="project-link">Code</a>*/}
                    <a href={"#"} className={"project-link"}>Visit To See More</a>
                    {/*                        </div>*/}
                </div>
            </div>
        </div>
        <div className={"project-card"} style={{backgroundImage: "url('infosys2.jpg')"}}>
            <div className={"project-overlay"}>
                <div className={"project-card-content"}>
                    <h3 className={"project-name"}>On Campus Placement Roadmap</h3>
                    <div className={"project-desc"}>
                        Cracking on-campus placements involves a different strategy from off-campus since it typically includes a predefined process organized by college.
                    </div>
                    <div className={"project-tags"}>
                        <span className={"tag"}>DSA</span>
                        <span className={"tag"}>DEVELOPMENT</span>
                        <span className={"tag"}>QUANT APTITUDE</span>
                    </div>
                    <div className={"project-links"}>
                        {/*                            <a href="#" class="project-link">Code</a>*/}
                        <a href={"#"} className={"project-link"}>Visit To See More</a>
                    </div>
                </div>
            </div>
        </div>
        <div className={"project-card"} style={{backgroundImage: "url('pwc.jpg')"}}>
            <div className={"project-overlay"}>
                <div className={"project-card-content"}>
                    <h3 className={"project-name"}>On Campus Placement Roadmap</h3>
                    <div className={"project-desc"}>
                        Cracking on-campus placements involves a different strategy from off-campus since it typically includes a predefined process organized by College.
                    </div>
                    <div className={"project-tags"}>
                        <span className={"tag"}>DSA</span>
                        <span className={"tag"}>DEVELOPMENT</span>
                        <span className={"tag"}>QUANT APTITUDE</span>
                    </div>
                    <div className={"project-links"}>
                        {/*                            <a href="#" class="project-link">Code</a>*/}
                        <a href={"#"} className={"project-link"}>Visit To See More</a>
                    </div>
                </div>
            </div>
        </div>
        {/*            </div>*/}
    </div>
    <div className={"projects-viewall"}>
        <Link to="/interview" className={"glow-viewall-btn"}>View All Interview Guide→</Link>
    </div>
</section>

<section id={"team"} className={"team-organizers-section"}>
    {/*        style="color: darkgreen;*/}
    <h2 className={"team-organizers-title"}>TaruGuardians Leadership Team</h2>
    <div className={"team-organizers-container"}>
        <div className={"organizer-card"}>
            <img src={"new1president.png"} alt={"PRAKSH KUMAR"} />
            <div className={"organizer-info"}>
                <div className={"organizer-company"}>President</div>
                <div className={"organizer-name"}>PRAKASH KUMAR</div>
            </div>
        </div>
        <div className={"organizer-card"}>
            <img src={"new2vicepresident.png"} alt={"MUKUL ANAND"} />
            <div className={"organizer-info"}>
                <div className={"organizer-company"}>Vice President</div>
                <div className={"organizer-name"}>MUKUL ANAND</div>
            </div>
        </div>
        <div className={"organizer-card"}>
            <img src={"newjs.png"} alt={"Akshat Thakur"} />
            <div className={"organizer-info"}>
                <div className={"organizer-company"}>Joint Secretary</div>
                <div className={"organizer-name"}>Akshat Thakur</div>
            </div>
        </div>
        <div className={"organizer-card"}>
            <img src={"newjs2.png"} alt={"Kriti DIvyansha"} />
            <div className={"organizer-info"}>
                <div className={"organizer-company"}>Joint Secretary</div>
                <div className={"organizer-name"}>Kriti Divyansha</div>
            </div>
        </div>
        <div className={"organizer-card"}>
            <img src={"treasurer.png"} alt={"Pushkar Aditya"} />
            <div className={"organizer-info"}>
                <div className={"organizer-company"}>Treasurer</div>
                <div className={"organizer-name"}>Pushkar Aditya</div>
            </div>
        </div>
        <div className={"organizer-card"}>
            <img src={"treasurer3.png"} alt={"Santripti"} />
            <div className={"organizer-info"}>
                <div className={"organizer-company"}>Treasurer</div>
                <div className={"organizer-name"}>Santripti</div>
            </div>
        </div>
        <div className={"organizer-card"}>
            <img src={"techhead.png"} alt={"Mulesoft Salesforce"} />
            <div className={"organizer-info"}>
                <div className={"organizer-company"}>Tech Head</div>
                <div className={"organizer-name"}>Aashish Kishore</div>
            </div>
        </div>
        <div className={"organizer-card"}>
            <img src={"adminstrative.png"} alt={"Ritik Kumar"} />
            <div className={"organizer-info"}>
                <div className={"organizer-company"}>Adminstrative Head</div>
                <div className={"organizer-name"}>Ritik Kumar</div>
            </div>
        </div>
        {/*        yhe maanagement Head was one oft he mist*/}
        <div className={"organizer-card"}>
            <img src={"event.png"} alt={"Hrithik Bhadani"} />
            <div className={"organizer-info"}>
                <div className={"organizer-company"}>Event and Management Head</div>
                <div className={"organizer-name"}>Hrithik Bhadani</div>
            </div>
        </div>
        <div className={"organizer-card"}>
            <img src={"event2.png"} alt={"Namya Singh"} />
            <div className={"organizer-info"}>
                <div className={"organizer-company"}>Event and Management Head</div>
                <div className={"organizer-name"}>Namya Singh</div>
            </div>
        </div>
        <div className={"organizer-card"}>
            <img src={"mediahead.png"} alt={"Manyata Manas"} />
            <div className={"organizer-info"}>
                <div className={"organizer-company"}>MEDIA HEAD</div>
                <div className={"organizer-name"}> Manyata Manas</div>
            </div>
        </div>
        <div className={"organizer-card"}>
            <img src={"mediahead2.png"} alt={"Sneh Raj"} />
            <div className={"organizer-info"}>
                <div className={"organizer-company"}>MEDIA HEAD</div>
                <div className={"organizer-name"}>Sneh Raj</div>
            </div>
        </div>
        <div className={"organizer-card"}>
            <img src={"content.png"} alt={"Sarthak Kumar"} />
            <div className={"organizer-info"}>
                <div className={"organizer-company"}>Content Head</div>
                <div className={"organizer-name"}>Sarthak Kumar</div>
            </div>
        </div>
        <div className={"organizer-card"}>
            <img src={"content2.png"} alt={"Keshav Sarkar"} />
            <div className={"organizer-info"}>
                <div className={"organizer-company"}>Content Head</div>
                <div className={"organizer-name"}>Keshav Sarkar</div>
            </div>
        </div>
        <div className={"organizer-card"}>
            <img src={"Pr.png"} alt={"Saikat Bhattacharya"} />
            <div className={"organizer-info"}>
                <div className={"organizer-company"}>PR HEAD</div>
                <div className={"organizer-name"}>Saikat Bhattacharya</div>
            </div>
        </div>

        <div className={"organizer-card"}>
            <img src={"pr2.png"} alt={"Nakshatra Sarkar"} />
            <div className={"organizer-info"}>
                <div className={"organizer-company"}>PR Head</div>
                <div className={"organizer-name"}>Nakshatra Sarkar</div>
            </div>
        </div>
        <div className={"organizer-card"}>
            <img src={"program.png"} alt={"Piyali Nath"} />
            <div className={"organizer-info"}>
                <div className={"organizer-company"}>Program Head</div>
                <div className={"organizer-name"}>Piyali Nath</div>
            </div>
        </div>
        <div className={"organizer-card"}>
            <img src={"memebership.png"} alt={"Pawan Gope"} />
            <div className={"organizer-info"}>
                <div className={"organizer-company"}>Membership Head</div>
                <div className={"organizer-name"}>Pawan Gope</div>
            </div>
        </div>
        <div className={"organizer-card"}>
            <img src={"membership2.png"} alt={"Abhijit Choudhary"} />
            <div className={"organizer-info"}>
                <div className={"organizer-company"}>Membership Head</div>
                <div className={"organizer-name"}>Abhijit Choudhury</div>
            </div>
        </div>


 

    </div>

    {/* Recruitment CTA at Top - Above Main Heading */}
    <div style={{position: "absolute", top: "38%", left: "50%", transform: "translateX(-50%)", textAlign: "center", zIndex: "20"}}>
        <h3 style={{color: "#fff", fontSize: "28px", fontWeight: "700", marginBottom: "12px", textShadow: "0 0 20px rgba(0,240,255,0.5)"}}>Be a part of TaruGuardians</h3>
        <p style={{color: "rgba(255,255,255,0.8)", fontSize: "14px", marginBottom: "18px", maxWidth: "450px"}}>Join TaruGuardians to learn, grow, and lead.</p>
        <Link to="/recruitment" style={{display: "inline-block", textDecoration: "none", background: "linear-gradient(90deg, #00f0ff, #00b4d8)", color: "#000", fontSize: "16px", fontWeight: "700", padding: "14px 40px", borderRadius: "30px", boxShadow: "0 4px 30px rgba(0,240,255,0.4)", transition: "all 0.3s"}}>Apply Now →</Link>
    </div>

        <h2 className={"alumni-title"}>TaruGuardians Alumni</h2>
        <div className={"alumni-row"}>
            <div className={"alumni-card"}>
                <img src={"president.jpg"} alt={"Alumni 1"} />
                <div className={"alumni-info"}>
                    <div className={"alumni-name"}>ROHAN KUMAR SINGH</div>
                    <div className={"alumni-role"}>SDE,BlueStock</div>
                    <div className={"alumni-batch"}>Batch of 2021-2025</div>
                </div>
            </div>
            <div className={"alumni-card"}>
                <img src={"programhead.jpg"} alt={"Alumni 2"} />
                <div className={"alumni-info"}>
                    <div className={"alumni-name"}>ARYAN RAJ</div>
                    <div className={"alumni-role"}></div>
                    <div className={"alumni-batch"}>Batch of 2021-2025</div>
                </div>
            </div>
            <div className={"alumni-card"}>
                <img src={"GateTopper.png"} alt={"Alumni 3"} />
                <div className={"alumni-info"}>
                    <div className={"alumni-name"}>ADI NATH BHAWANI</div>
                    <div className={"alumni-role"}>Country Topper(nptel), Computer Science<br />Gate: AIR: 456</div>
                    <div className={"alumni-batch"}>Batch of 2021-2025</div>
                </div>
            </div>

            <div className={"alumni-card"}>
                <img src={"vicepresident.jpg"} alt={"Alumni 4"} />
                <div className={"alumni-info"}>
                    <div className={"alumni-name"}>ANAND KUMAR JHA</div>
                    <div className={"alumni-role"}>Intern,  Oasis Infobyte</div>
                    <div className={"alumni-batch"}>Batch of 2021-2025</div>
                </div>
            </div>
            <div className={"alumni-card"}>
                <img src={"pr.jpg"} alt={"Alumni 5"} />
                <div className={"alumni-info"}>
                    <div className={"alumni-name"}>UTSAV RAJ</div>
                    <div className={"alumni-role"}>Intern, TDS Advenue</div>
                    <div className={"alumni-batch"}>Batch of 2021-2025</div>
                </div>
            </div>
            <div className={"alumni-card"}>
                <img src={"jsnontech.jpg"} alt={"Alumni 6"} />
                <div className={"alumni-info"}>
                    <div className={"alumni-name"}>ADARSH RANJAN</div>
                    <div className={"alumni-role"}>Campus Ambassdor, GeeksforGeeks</div>
                    <div className={"alumni-batch"}>Batch of 2021-2025</div>
                </div>
            </div>
            <div className={"alumni-card"}>
                <img src={"Treasure.jpg"} alt={"Alumni 7"} />
                <div className={"alumni-info"}>
                    <div className={"alumni-name"}>BISHNU CHATTERJEE</div>
                    <div className={"alumni-role"}>NEC finalist, IIT Bombay</div>
                    <div className={"alumni-batch"}>Batch of 2021-2025</div>
                </div>
            </div>
            <div className={"alumni-card"}>
                <img src={"Adminstrativehead.jpg"} alt={"Alumni 8"} />
                <div className={"alumni-info"}>
                    <div className={"alumni-name"}>MOHIT KUMAR SINGH</div>
                    <div className={"alumni-role"}>NEC finalist, IIT Bombay</div>
                    <div className={"alumni-batch"}>Batch of 2021-2025</div>
                </div>
            </div>


        </div>
    
    
    <Link to="/alumni" target={"_blank"}>
        <button className={"glow-btn"}><span>SEE ALL TaruGuardians ALUMINI→</span></button>
    </Link>
</section>

{/* RECRUITMENT MODAL */}
<div id={"recruitmentModal"} style={{display: "none", position: "fixed", top: "0", left: "0", width: "100%", height: "100%", background: "rgba(0,0,0,0.85)", zIndex: "10000", justifyContent: "center", alignItems: "center", padding: "20px"}}>
    <div style={{background: "linear-gradient(135deg, #1a1a2e, #16213e)", borderRadius: "20px", maxWidth: "600px", width: "100%", maxHeight: "90vh", overflowY: "auto", position: "relative", border: "1px solid rgba(255,255,255,0.1)"}}>
        <button data-legacy-onclick="closeRecruitmentModal()" style={{position: "absolute", top: "15px", right: "15px", background: "none", border: "none", color: "#fff", fontSize: "24px", cursor: "pointer", zIndex: "10"}}>×</button>
        
        {/* Progress Bar */}
        <div style={{height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", margin: "0"}}>
            <div id={"formProgress"} style={{height: "100%", background: "linear-gradient(90deg, #00f0ff, #ff2d75)", width: "33%", transition: "width 0.3s ease", borderRadius: "2px"}}></div>
        </div>
        
        <div style={{padding: "30px"}}>
            {/* Step 1: Basic Info */}
            <div id={"step1"} className={"form-step"}>
                <h2 style={{color: "#fff", fontSize: "1.5rem", marginBottom: "25px", textAlign: "center"}}>
                    <span style={{color: "#00f0ff"}}>Join</span> TaruGuardians
                </h2>
                <div style={{display: "grid", gap: "15px"}}>
                    <input type={"text"} id={"recName"} placeholder={"Full Name *"} style={{width: "100%", padding: "14px 18px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff", fontSize: "1rem", outline: "none"}} />
                    <input type={"email"} id={"recEmail"} placeholder={"Email Address *"} style={{width: "100%", padding: "14px 18px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff", fontSize: "1rem", outline: "none"}} />
                    <input type={"tel"} id={"recPhone"} placeholder={"Phone Number *"} style={{width: "100%", padding: "14px 18px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff", fontSize: "1rem", outline: "none"}} />
                    <input type={"text"} id={"recWhatsapp"} placeholder={"WhatsApp Number *"} style={{width: "100%", padding: "14px 18px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff", fontSize: "1rem", outline: "none"}} />
                    <input type={"text"} id={"recRoll"} placeholder={"Class Roll Number *"} style={{width: "100%", padding: "14px 18px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff", fontSize: "1rem", outline: "none"}} />
                    <select id={"recDepartment"} style={{width: "100%", padding: "14px 18px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "10px", color: "#fff", fontSize: "1rem", outline: "none"}}>
                        <option value={true} style={{color: "#000"}}>Select Department *</option>
                        <option value={"CSE"} style={{color: "#000"}}>Computer Science & Engineering</option>
                        <option value={"IT"} style={{color: "#000"}}>Information Technology</option>
                        <option value={"ECE"} style={{color: "#000"}}>Electronics & Communication</option>
                        <option value={"EE"} style={{color: "#000"}}>Electrical Engineering</option>
                        <option value={"ME"} style={{color: "#000"}}>Mechanical Engineering</option>
                        <option value={"CE"} style={{color: "#000"}}>Civil Engineering</option>
                        <option value={"Other"} style={{color: "#000"}}>Other</option>
                    </select>
                    <select id={"recYear"} style={{width: "100%", padding: "14px 18px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "10px", color: "#fff", fontSize: "1rem", outline: "none"}}>
                        <option value={true} style={{color: "#000"}}>Select Year *</option>
                        <option value={"1st"} style={{color: "#000"}}>1st Year</option>
                        <option value={"2nd"} style={{color: "#000"}}>2nd Year</option>
                        <option value={"3rd"} style={{color: "#000"}}>3rd Year</option>
                        <option value={"4th"} style={{color: "#000"}}>4th Year</option>
                    </select>
                </div>
                <button data-legacy-onclick="nextStep(2)" style={{width: "100%", marginTop: "20px", background: "linear-gradient(135deg, #00f0ff, #00b4d8)", color: "#000", border: "none", padding: "14px", fontSize: "1rem", fontWeight: "600", borderRadius: "10px", cursor: "pointer"}}>Next <i className={"fas fa-arrow-right"}></i></button>
            </div>
            
            {/* Step 2: Role Selection */}
            <div id={"step2"} className={"form-step"} style={{display: "none"}}>
                <h2 style={{color: "#fff", fontSize: "1.5rem", marginBottom: "25px", textAlign: "center"}}>
                    Choose Your <span style={{color: "#ff2d75"}}>Role</span>
                </h2>
                <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px"}}>
                    <label className={"role-option"} style={{background: "rgba(255,255,255,0.05)", border: "2px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "15px", cursor: "pointer", transition: "all 0.3s", textAlign: "center"}}>
                        <input type={"radio"} name={"recPosition"} value={"Public Relation"} style={{display: "none"}} />
                        <i className={"fas fa-bullhorn"} style={{fontSize: "1.5rem", color: "#00f0ff", marginBottom: "8px"}}></i>
                        <div style={{color: "#fff", fontSize: "0.9rem", fontWeight: "500"}}>Public Relation</div>
                    </label>
                    <label className={"role-option"} style={{background: "rgba(255,255,255,0.05)", border: "2px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "15px", cursor: "pointer", transition: "all 0.3s", textAlign: "center"}}>
                        <input type={"radio"} name={"recPosition"} value={"Web/App Developer"} style={{display: "none"}} />
                        <i className={"fas fa-code"} style={{fontSize: "1.5rem", color: "#7b2ff7", marginBottom: "8px"}}></i>
                        <div style={{color: "#fff", fontSize: "0.9rem", fontWeight: "500"}}>Web/App Developer</div>
                    </label>
                    <label className={"role-option"} style={{background: "rgba(255,255,255,0.05)", border: "2px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "15px", cursor: "pointer", transition: "all 0.3s", textAlign: "center"}}>
                        <input type={"radio"} name={"recPosition"} value={"Photographer/Videographer"} style={{display: "none"}} />
                        <i className={"fas fa-camera"} style={{fontSize: "1.5rem", color: "#ff2d75", marginBottom: "8px"}}></i>
                        <div style={{color: "#fff", fontSize: "0.9rem", fontWeight: "500"}}>Photographer</div>
                    </label>
                    <label className={"role-option"} style={{background: "rgba(255,255,255,0.05)", border: "2px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "15px", cursor: "pointer", transition: "all 0.3s", textAlign: "center"}}>
                        <input type={"radio"} name={"recPosition"} value={"Video Editor"} style={{display: "none"}} />
                        <i className={"fas fa-video"} style={{fontSize: "1.5rem", color: "#ffd700", marginBottom: "8px"}}></i>
                        <div style={{color: "#fff", fontSize: "0.9rem", fontWeight: "500"}}>Video Editor</div>
                    </label>
                    <label className={"role-option"} style={{background: "rgba(255,255,255,0.05)", border: "2px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "15px", cursor: "pointer", transition: "all 0.3s", textAlign: "center"}}>
                        <input type={"radio"} name={"recPosition"} value={"Graphics Designer"} style={{display: "none"}} />
                        <i className={"fas fa-paint-brush"} style={{fontSize: "1.5rem", color: "#00ff88", marginBottom: "8px"}}></i>
                        <div style={{color: "#fff", fontSize: "0.9rem", fontWeight: "500"}}>Graphics Designer</div>
                    </label>
                    <label className={"role-option"} style={{background: "rgba(255,255,255,0.05)", border: "2px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "15px", cursor: "pointer", transition: "all 0.3s", textAlign: "center"}}>
                        <input type={"radio"} name={"recPosition"} value={"Content Writer"} style={{display: "none"}} />
                        <i className={"fas fa-pen"} style={{fontSize: "1.5rem", color: "#ffaa00", marginBottom: "8px"}}></i>
                        <div style={{color: "#fff", fontSize: "0.9rem", fontWeight: "500"}}>Content Writer</div>
                    </label>
                </div>
                <div style={{display: "flex", gap: "10px", marginTop: "20px"}}>
                    <button data-legacy-onclick="nextStep(1)" style={{flex: "1", background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", padding: "14px", fontSize: "1rem", borderRadius: "10px", cursor: "pointer"}}><i className={"fas fa-arrow-left"}></i> Back</button>
                    <button data-legacy-onclick="nextStep(3)" style={{flex: "1", background: "linear-gradient(135deg, #00f0ff, #00b4d8)", color: "#000", border: "none", padding: "14px", fontSize: "1rem", fontWeight: "600", borderRadius: "10px", cursor: "pointer"}}>Next <i className={"fas fa-arrow-right"}></i></button>
                </div>
            </div>
            
            {/* Step 3: Role-specific & Why Join */}
            <div id={"step3"} className={"form-step"} style={{display: "none"}}>
                <h2 style={{color: "#fff", fontSize: "1.5rem", marginBottom: "25px", textAlign: "center"}}>
                    Tell Us <span style={{color: "#7b2ff7"}}>More</span>
                </h2>
                <div id={"roleSpecificFields"}></div>
                <div style={{marginTop: "15px"}}>
                    <label style={{color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", marginBottom: "8px", display: "block"}}>Why do you want to join TaruGuardians? *</label>
                    <textarea id={"recWhyJoin"} rows={"4"} placeholder={"Share your motivation..."} style={{width: "100%", padding: "14px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff", fontSize: "1rem", outline: "none", resize: "vertical"}}></textarea>
                </div>
                <div style={{display: "flex", gap: "10px", marginTop: "20px"}}>
                    <button data-legacy-onclick="nextStep(2)" style={{flex: "1", background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", padding: "14px", fontSize: "1rem", borderRadius: "10px", cursor: "pointer"}}><i className={"fas fa-arrow-left"}></i> Back</button>
                    <button data-legacy-onclick="submitRecruitment()" id={"submitBtn"} style={{flex: "1", background: "linear-gradient(135deg, #ff2d75, #7b2ff7)", color: "#fff", border: "none", padding: "14px", fontSize: "1rem", fontWeight: "600", borderRadius: "10px", cursor: "pointer"}}>Submit <i className={"fas fa-paper-plane"}></i></button>
                </div>
            </div>
            
            {/* Success Step */}
            <div id={"stepSuccess"} className={"form-step"} style={{display: "none", textAlign: "center"}}>
                <div style={{fontSize: "4rem", marginBottom: "20px"}}>🎉</div>
                <h2 style={{color: "#00ff88", fontSize: "1.8rem", marginBottom: "15px"}}>Application Submitted!</h2>
                <p style={{color: "rgba(255,255,255,0.8)", marginBottom: "25px"}}>Thank you for applying to TaruGuardians. We'll review your application and get back to you soon.</p>
                <div style={{background: "rgba(0,240,255,0.1)", border: "1px solid rgba(0,240,255,0.3)", borderRadius: "12px", padding: "20px", marginBottom: "20px"}}>
                    <p style={{color: "#00f0ff", fontWeight: "600", marginBottom: "10px"}}>Join our WhatsApp Community</p>
                    <a href={"https://chat.whatsapp.com/IKUt4M5NcHVKYyoTezoJYi"} target={"_blank"} style={{color: "#fff", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", padding: "10px 20px", borderRadius: "25px", fontWeight: "500"}}>
                        <i className={"fab fa-whatsapp"}></i> Join WhatsApp Group
                    </a>
                </div>
                <button data-legacy-onclick="closeRecruitmentModal()" style={{background: "linear-gradient(135deg, #00f0ff, #00b4d8)", color: "#000", border: "none", padding: "12px 30px", fontSize: "1rem", fontWeight: "600", borderRadius: "25px", cursor: "pointer"}}>Done</button>
            </div>
        </div>
    </div>
</div>



<footer id={"footer"} className={"footer"}>
    <div style={{textAlign: "center", margin: "20px 0"}}>
        <img src={"circlelogotaru.png"} alt={"TaruGuardians"} style={{width: "120px", height: "auto", display: "block", margin: "0 auto 10px auto"}} />
        <h3>
        (Turn Passion Into Purpose)
        </h3>
    </div>

    <div className={"footer-content"}>
        <div className={"footer-section about"}>

            <span style={{fontSize: "2.5rem"}}></span>

            <h2>𝐓𝐚𝐫𝐮𝐆𝐮𝐚𝐫𝐝𝐢𝐚𝐧𝐬</h2>
            <p>
                𝔄𝔰 𝔱𝔯𝔢𝔢𝔰 𝔤𝔯𝔬𝔴 𝔴𝔦𝔱𝔥 𝔡𝔢𝔢𝔭 𝔯𝔬𝔬𝔱𝔰, 𝔴𝔢 𝔤𝔯𝔬𝔴 𝔴𝔦𝔱𝔥 𝔡𝔢𝔢𝔭 𝔱𝔢𝔠𝔥. 𝔉𝔯𝔬𝔪 𝔰𝔢𝔢𝔡𝔰 𝔬𝔣 𝔠𝔬𝔡𝔢 𝔱𝔬 𝔠𝔞𝔫𝔬𝔭𝔦𝔢𝔰 𝔬𝔣 𝔠𝔥𝔞𝔫𝔤𝔢 — 𝔟𝔲𝔦𝔩𝔡𝔦𝔫𝔤 𝔞 𝔤𝔯𝔢𝔢𝔫𝔢𝔯, 𝔰𝔪𝔞𝔯𝔱𝔢𝔯 𝔣𝔲𝔱𝔲𝔯𝔢.

            </p>
            <p>
                (𝚁𝙾𝙾𝚃𝙴𝙳 𝙸𝙽 𝙽𝙰𝚃𝚄𝚁𝙴, 𝙳𝚁𝙸𝚅𝙴𝙽 𝙱𝚈 𝚃𝙴𝙲𝙷)
            </p>
        </div>
        <div className={"footer-section contact"}>
            <h3>𝓒𝓸𝓷𝓽𝓪𝓬𝓽</h3>
            <p>𝓣𝓪𝓻𝓾𝓖𝓾𝓪𝓻𝓭𝓲𝓪𝓷𝓼@𝓰𝓶𝓪𝓲𝓵.𝓬𝓸𝓶</p>
            {/*                <p>IIT Delhi, Hauz Khas, New Delhi-110016</p>*/}
        </div>
        <div className={"footer-section follow"}>
            {/*                <h3>Follow Us</h3>*/}
            <div className={"follow-us"}>
                <h3>𝓕𝓸𝓵𝓵𝓸𝔀 𝓤𝓼</h3>
                {/*                    <h3>Follow Us</h3>*/}
                <div className={"social-icons"}>
                    <a href={"https://www.instagram.com/_taruguardians_/"} target={"_blank"} aria-label={"YouTube"}>
{/*                        <i class="fab fa-youtube"></i>*/}
                        <img src={"instag.png"} alt={"TaruGuardians"} style={{width: "30px", height: "auto", display: "block", margin: "0 auto 10px auto"}} />
                    </a>
                    <a href={"https://www.linkedin.com/company/taruguardians/?originalSubdomain=in"} target={"_blank"} aria-label={"Instagram"}>

                        <img src={"linkden.png"} alt={"TaruGuardians"} style={{width: "30px", height: "auto", display: "block", margin: "0 auto 10px auto"}} />
                    </a>
                    <a href={"https://www.facebook.com/TaruGuardians/"} target={"_blank"} aria-label={"Twitter"}>
{/*                        <i class="fab fa-twitter"></i>*/}
                        <img src={"facebook.png"} alt={"TaruGuardians"} style={{width: "30px", height: "auto", display: "block", margin: "0 auto 10px auto"}} />
                    </a>
                    <a href={"https://www.youtube.com/@TaruGuardians"} target={"_blank"} aria-label={"LinkedIn"}>
{/*                        <i class="fab fa-linkedin"></i>*/}
                        <img src={"youtube.webp"} alt={"TaruGuardians"} style={{width: "30px", height: "auto", display: "block", margin: "0 auto 10px auto"}} />
                    </a>



                </div>
                <p>𝓢𝓽𝓪𝔂 𝓾𝓹𝓭𝓪𝓽𝓮𝓭 𝔀𝓲𝓽𝓱 𝓸𝓾𝓻 𝓵𝓪𝓽𝓮𝓼𝓽 𝓹𝓸𝓼𝓽𝓼, 𝓮𝓿𝓮𝓷𝓽𝓼, 𝓪𝓷𝓭 𝓦𝓸𝓻𝓴𝓼𝓱𝓸𝓹𝓼!</p>
            </div>



        </div>
    </div>
    <hr />
    <div className={"footer-bottom"}>
        <p>© 2025 TaruGuardians. All rights reserved.</p>
        {/*            <p>Made with <span style="color: #e25555;">♥</span> by DevClub IITD</p>*/}
    </div>
</footer>





{/* No About Us or other sections below this */}

{/* --- JavaScript --- */}

{/*</script>*/}


{/*</script>*/}




    </div>
  );
}
