// AUTO-GENERATED — DO NOT EDIT BY HAND
// Generated from legacy-source/responsive instagram highlight.html
// by scripts/convert-html-to-react.mjs
//
// This file is the React port of the original HTML page. Every
// element, attribute, inline style, and child node from the source
// document has been mechanically translated to JSX. Inline <script>
// blocks live in ./InstagramHighlight.scripts.js and run in a useEffect after
// mount; <style> blocks live in ./InstagramHighlight.css and are imported
// at the top of this module.

import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './InstagramHighlight.css';
import { runScripts, cleanupScripts } from './InstagramHighlight.scripts';
import { mapHrefToRoute } from '../../utils/routeMap.js';

const PAGE_ID = "InstagramHighlight";

export default function InstagramHighlight() {
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
    <div ref={rootRef} className="legacy-page legacy-InstagramHighlight bg-gray-50 text-gray-900 font-sans">

{/* Modern Navbar */}
<header className={"modern-navbar"}>
    <div className={"navbar-container"}>
        <div className={"navbar-logo"}>
            <span className={"logo-arrow left"}>&lt;</span>
            <img src={"circlelogotaru.png"} alt={"TaruGuardians Logo"} />
            <span>TaruGuardians</span>
            <span className={"logo-arrow right"}>&gt;</span>
        </div>
        <div className={"navbar-center"}>
            <div className={"navbar-links"}>
                <Link to="/home" className={"active"}>Home</Link>
                <Link to="/home">Event</Link>
                <Link to="/home">TARU WINGS</Link>
                <Link to="/home">Roadmap</Link>
                <Link to="/home">Placement Guide</Link>
                <Link to="/home">Team</Link>
            </div>
        </div>
        <Link to="/auth" className={"navbar-blog-btn auth-login-btn"}>Login</Link>
        <div className={"auth-user-menu"} style={{display: "none"}}>
            <Link to="/dashboard" className={"navbar-blog-btn"}>Dashboard</Link>
        </div>
        <div className={"hamburger"}>≡</div>
    </div>
    {/* Mobile Menu */}
    <div className={"mobile-menu"}>
        <Link to="/home" className={"active"}>Home</Link>
        <Link to="/home">Event</Link>
        <Link to="/home">TARU WINGS</Link>
        <Link to="/home">Roadmap</Link>
        <Link to="/home">Placement Guide</Link>
        <Link to="/home">Team</Link>
        <Link to="/auth" className={"auth-login-btn"} style={{color: "#D4AF37", fontWeight: "700"}}>Login</Link>
        <Link to="/dashboard" className={"auth-user-menu"} style={{display: "none", color: "#D4AF37", fontWeight: "700"}}>Dashboard</Link>
    </div>
</header>

{/* Main SPA Content Area */}
<div id={"spa-content"} className={"mt-16"}>
    {/* Home/Main Page */}
    <div id={"page-home"}>
        {/* Shorts Section */}
        <div className={"bg-white rounded-lg shadow p-6 mt-8 mx-4"}>
            <h3 className={"font-bold text-xl mb-4 text-center"}>All Instagram Posts Of TaruGuardians</h3>
            <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"}>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"post%204.png"} className={"w-full rounded-lg mb-2"} alt={"freshers Welcome GD"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>14 November 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>TaruGuardians wish every child a happy children's day
                        <br />Children's Day is a reminder of joy, purity and hope that every child brings into this world. Their laughter and nuisance can light up even the dullest moments
                    </div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"post%203.png"} className={"w-full rounded-lg mb-2"} alt={"freshers Welcome GD"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>5 November 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>Without a Guru, none can cross over
                        <br />Guru Nanak’s life advice could double as a modern cheat code for a kinder world—compassion, unity, equality, and selfless service, all summed up in “Ik Onkar” (there’s one God)
                    </div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"post%202.png"} className={"w-full rounded-lg mb-2"} alt={"freshers Welcome GD"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>20 October 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>Team TaruGuardians wish everyone a very Happy and Joyous Diwali 🪔💛!
                        <br />Diwali, celebrated on the 15th day of the Karthika month, marks the day when Lord Rama returned to Ayodhya after 14 years of exile.
                    </div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"post%201.png"} className={"w-full rounded-lg mb-2"} alt={"freshers Welcome GD"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>18 October 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>Team TaruGuardians wish everyone a bright , blessed and blissful Dhanteras 🙌🏻
                        <br />⭐ Happy Dhanteras !⭐ to everyone. Dhanteras marks the start of the glorious Diwali festivities. This day is dedicated to Goddess Lakshmi, the goddess of wealth
                    </div>
                </div>

                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"r7.png"} className={"w-full rounded-lg mb-2"} alt={"freshers Welcome GD"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>15 October 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>"Freshers, let’s debug the planet... and have fun doing it! 💻🌱"
                        <br />Welcome to a club where code meets care, and logic meets leaves! 🌍 Join TaruGuardians and start your journey of coding, creating, and conserving - all at once.
                    </div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"r6.png"} className={"w-full rounded-lg mb-2"} alt={"Indian airforce day GD"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>8 October 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>"Touching Skies with Unwavering Glory" ✈️
                        <br />
                        On the occasion of Indian Air Force Day, October 8th, we pay tribute to the fearless air warriors who safeguard our nation's skies with unparalleled valour, discipline, and dedication.Team TaruGuardians extends its heartfelt gratitude and respect to the heroes of the Indian Air Force
                    </div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"r5.png"} className={"w-full rounded-lg mb-2"} alt={"Dusshers GD"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>2 October 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>धर्मो जयति नाधर्मः ✨
                        सत्यं जयति नानृतम् 🕉️
                        <br />Dussehra is the universe’s reminder that good does win—cue dramatic battles ⚔️, epic fireworks 🎆, and villains with unforgettable mustaches!
                    </div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"r4.png"} className={"w-full rounded-lg mb-2"} alt={"Gandhi jayanti GD"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>2 October 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>“Gandhi Jayanti reminds us that truth and non-violence are timeless strengths, not weaknesses"🙏🏻
                        <br />Team TaruGuardians wish everyone a Happy Gandhi jayanti and requests everyone to follow the path of truth and non-violence ✨
                    </div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"r8.png"} className={"w-full rounded-lg mb-2"} alt={"Maha navmi GD"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>1 October 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>"या देवी सर्वभूतेषु माँ सिद्धिदात्री रूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः। 🙏
                        <br />Team TaruGuardians wishes you a Happy Maha Navami! 🎉 Shubh Maha Navami! 🙏 May Maa Siddhidatri empower you with natural powers and strength 💪.

                    </div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"r3.png"} className={"w-full rounded-lg mb-2"} alt={"Eight day GD"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>30 September 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>या देवी सर्वभूतेषु शक्ति-रूपेण संस्थिता।
                        नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥
                        <br />On the eighth day of Navratri, Mahagauri is worshipped 🌼. She is depicted with four arms—her upper right hand in abhaya mudra (blessing pose) , the lower right holding trishul 🔱, the upper left with a damaru (drum) 🥁, and the lower left hand bestowing blessings and boons 🌟.
                    </div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"r2.png"} className={"w-full rounded-lg mb-2"} alt={"Seventh Day GD"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>29 September 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>✨"ॐ देवी कालरात्र्यै नमः।
                        शत्रुनाशं करोतु मां रक्षतु च सर्वदा॥"✨
                        <br />May Maa Kaalratri give you the strength to overcome all obstacles and achieve your goals✨.

                        TaruGuardians wish everyone a blessed Mahasaptami!🌸✨

                    </div>
                </div>

                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"r1.png"} className={"w-full rounded-lg mb-2"} alt={"SIxth day GD"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>28 September 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>कात्यायनि महामाये महायोगिन्यधीश्वरी ।नन्दगोपालसिंहसि पतिं मे कुरु ते नमः ||
                        ✨ “On this sacred Shashti, let Maa Katyayani light your heart with bravery, love, and boundless energy".

                        <br />We offer Maa yellow flowers and , honey and chant her mantras and keep fasts to take her blessings for a sweet and successful life 🌼.

                        TaruGuardians wish everyone a happy Sasthi and may Maa Katyayani remove negativity, and fill your life with love and strength ❤️🙏🏻.
                    </div>
                </div>

                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"durga7.png"} className={"w-full rounded-lg mb-2"} alt={"Durga puja Day 5"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>26 September 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>"তুমিই সর্বমঙ্গলময়ী, সর্বার্থসাধিকা ও শরণাগতপালিনী নারায়ণী, তোমায় প্রণাম।"🙏🏻
                        <br />As Goddess of Purity, worshipping her is believed to lead to contentment, peace of mind, and a departure from life's sorrows.🌼🔱
                    </div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"durga6.png"} className={"w-full rounded-lg mb-2"} alt={"abhiyukti"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>25 September 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>TaruGuardians congratulate the winners and wish them a successful career ahead ❤️
                        <br />Poem/shayari - Gopesh Anupam(24/CSE-AIML/053)<br />Content Writing - Shubham Kumar (24/IT/179)<br />Debate - Rudra Prasad Bera(24/ME/076)<br />Quiz competition - Arunava Biswas(24/ME/022)
                    </div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"durga5.png"} className={"w-full rounded-lg mb-2"} alt={"Durga puja Day 4"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>25 September 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>On the fourth day of Navratri, devotees worship Goddess Kushmanda, the radiant fourth form of Shakti, whose brilliance is said to rival the sun itself ☀
                        <br />TaruGuardians wishes you happy Navratri 🙏
                    </div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"durga4.png"} className={"w-full rounded-lg mb-2"} alt={"Durga puja Day 3"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>24 September 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>✨"या देवी सर्वभू‍तेषु माँ चंद्रघंटा रूपेण संस्थिता।
                        नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नम:।।"✨
                        <br />On this auspicious day, as you pray to Maa Chandraghanta, may your life be filled with joy, hope and positive change.🙏🏾✨
<br />
                        TaruGuardians wish you a Happy Tritiya.🌸
                    </div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"durga3.png"} className={"w-full rounded-lg mb-2"} alt={"Durga puja Day 2"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>23 September 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>On Dwitiya, may Maa Brahmacharini bless you with strength, devotion, and the power of perseverance."

                        <br />Dwitiya is all about welcoming Maa into our hearts and home with devotion, lighting diyas,offering prayers and celebrating the win of good over evil 🌼.
<br />
                    </div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"durga2.png"} className={"w-full rounded-lg mb-2"} alt={" Durga puja Day 1"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>22 September 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>“ঢাকের আওয়াজে, আলোর রঙে — শুরু হোক মায়ের আগমন।” 🐚🪔
                        <br />Team TaruGuardians wish you all a very happy Navaratri.May these nine days of Navratri bring love and prosperity to everyone.✨🌸🪔
                    </div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"durga1.png"} className={"w-full rounded-lg mb-2"} alt={"Mahalya Durga puja"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>21 September 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>Mahalaya is the celestial alarm clock that wakes up an entire region before dawn — not with coffee ☕, but with chants 📿and conch shells 📯.

                        <br />TaruGuardians wishes everyone a power-packed Mahalaya! 💫
                    </div>
                </div>

                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"vishwakarma.jpg"} className={"w-full rounded-lg mb-2"} alt={"Vishwakarma puja"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>17 September 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>✨“From tools to technology, from crafts to creations – all begin with the grace of Vishwakarma.”✨
                        <br />🌸 Team TaruGuardians wishes every creator and builder a Happy Vishwakarma Puja!🌸
                    </div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"13.png"} className={"w-full rounded-lg mb-2"} alt={"engineers day"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>15 September 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>"The engineer has been, and is, a maker of history." — James Kip Finch<br />Whether it's developing software that evolves with time 💻, designing buildings and bridges 🏗️, or creating high-performance supercars 🚗 — they’re experts in everything they do.</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"12.png"} className={"w-full rounded-lg mb-2"} alt={"Hindi Diwas"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>14 September 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>हिन्दी को राजभाषा बनाने का निर्णय इसलिए लिया गया क्योंकि यह देश की जनभाषा है।" - राजेंद्र प्रसाद<br />इए हम सब अपनी समृद्ध संस्कृति का जश्न मनाएं और अपनी राजभाषा का सम्मान करें। TaruGuardians इस राष्ट्रीय हिंदी दिवस पर सभी को हार्दिक शुभकामनाएं देते हैं।✨🌸</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"11.png"} className={"w-full rounded-lg mb-2"} alt={"Literacy Day"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>8 September 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>"Literacy is a bridge from misery to hope." – Kofi Annan 📖<br />TaruGuardians tips its hat 🎩 to every word warrior out there — stay curious, stay clever, and keep turning those pages! 🔍📘</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"10.png"} className={"w-full rounded-lg mb-2"} alt={"Muslims Festival"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>5 September 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>"Twinkling lights, joyous hearts: Celebrating the birth of the Prophet! ✨<br />Muslims around the world rejoice, share happiness, and exchange gifts with family and friends to celebrate this auspicious occasion ❤️</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"9.png"} className={"w-full rounded-lg mb-2"} alt={"Teachers Day"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>5 September 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>"A good teacher can inspire hope, ignite the imagination, and instill a love of learning."💫<br />Teachers day serves to recognise the invaluable contribution and efforts of teachers, whose guidance shapes us who we are</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"8.png"} className={"w-full rounded-lg mb-2"} alt={"National Sports Day"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>29 August 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>"Champions are not born, they are made in the field through sweat, discipline, and resilience."<br />National Sports Day is celebrated on August 29, to commemorate the birthday of Major Dhyan Chand's to honor his sporting spirit, dedication and his remarkable contribution to Indian hockey. This year's theme "Sport to Promote Peaceful Societies," emphasizes sports' role in fostering unity and teamwork</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"7.png"} className={"w-full rounded-lg mb-2"} alt={"ganesh chaturathi"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>27 August 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>ॐ एकदन्ताय विद्महे वक्रतुंडाय धीमहि तन्नो बुदि्ध प्रचोदयात।।<br />Ganesh Chaturthi, or Vinayaka Chaturthi, is a popular Indian festival celebrating the birth of Lord Ganesha , usually observed in August or September. The festival begins with the installation of clay idols in homes and public pandals 🎪, followed by daily pujas, bhajans 🎶, and offerings of sweets like modaks 🍬.</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"6.png"} className={"w-full rounded-lg mb-2"} alt={"Krishan Janamashtmi"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>16 August 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>"The flute of Krishna calls to the soul — follow it to find your true self."<br />let us all celebrate Janmashtami — a festival that brings out the child within each of us, whether young or old . On this joyous occasion, TaruGuardians extends warm wishes to everyone 🙏🏼. Happy Janmashtami! Jai Shri Krishna! 🦚</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"6.png"} className={"w-full rounded-lg mb-2"} alt={"Independence day"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>15 August 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>Our freedom is our pride and also our responsibility. On the 15th of August 1947, we got our independence from the long rule of the British. It wouldn't have been possible without the sacrifices of our freedom fighters<br />HAPPY INDEPENDENCE DAY</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"5.png"} className={"w-full rounded-lg mb-2"} alt={"Raksha bandhan"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>9 August 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>"A brother is a best friend given by Nature." Team TaruGuardians wish everyone a happy and blissful Raksha Bandhan. On this Rakhi let's take a vow to make our world a better place for our daughters and sisters ❤️.</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"4.png"} className={"w-full rounded-lg mb-2"} alt={"World enviornments Day"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>28 July 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>"The Earth provides enough to satisfy every man's need, but not every man's greed." — Mahatma Gandhi<br />Nature nurtures us but it doesn't mean that we should exploit it. It should be conserved for future generations. Water , electricity and natural resources shouldn't be wasted.</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"3.png"} className={"w-full rounded-lg mb-2"} alt={"Kargil War"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>26 July 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>"Some goals are pious, some are glorious, but to defend the nation is the most sacred."<br />The Kargil War was a test to India's strength and resilience. Our heroes faced disastarous terrain, freezing temperatures, and a formidable enemy, but their spirit remained unbroken</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"2.png"} className={"w-full rounded-lg mb-2"} alt={"Guru Purnima"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>10 July 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>"A teacher affects eternity; no one can tell where his influence stops."<br /> On this sacred day, let us express our gratitude to the ones who illuminate our path with wisdom and knowledge.May we acknowledge their profound impact on our lives.<br /> Team TaruGuardians wishes you a very happy guru purnima.🪔🙏🏻</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"muharam.png"} className={"w-full rounded-lg mb-2"} alt={"Muharram"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>6 July 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>🌙 Muharram marks the start of the Islamic New Year, a month filled with introspection, prayer, and intense feeling. 🖤 Ashura, the tenth day, brings to mind a historical event that still stirs people's emotions: Imam Hussain's (RA) martyrdom at Karbala.</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"1.png"} className={"w-full rounded-lg mb-2"} alt={"Rath yatra"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>27 June 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>जय जगन्नाथ! जो खींचे रथ की डोरी, उस पर कृपा हो त्रिलोकीनाथ की भारी। <br />The Rath Yatra symbolizes Lord Jagannath's journey from his home(Jagannath Temple) to his aunt's home(Gundicha Temple) along with his brother Balabhadra and sister Shubhadra❤️🙏🏻.</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"web1.jpg"} className={"w-full rounded-lg mb-2"} alt={"Yoga"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>21 June 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>Yoga is the journey of the self, through the self, to the self." — Bhagavad Gita<br /> yoga should be done everyday by everyone for their well being. Let's take a little step by celebrating international yoga day. TaruGuardians respects and encourages everyone to be a part of it</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"web1.jpg"} className={"w-full rounded-lg mb-2"} alt={"Fathers Day"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>16 June 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>"A father doesn’t tell you how to live; he lives, and lets you watch him do it." — Clarence Budington Kelland .<br />Even though fathers deserve to be celebrated every day, let's make a start with this simple gesture.TaruGuardians admires and respects each and every beautiful creature of god who's supple enough and wishes them A Happy Father's Day 💐.</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"web1.jpg"} className={"w-full rounded-lg mb-2"} alt={"kabira jayanti"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>15 June 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>बुरा जो देखन मैं चला, बुरा न मिलिया कोय। जो मन खोजा आपना, मुझसे बुरा न कोय।"<br /> ne of India's most revered spiritual figures, Kabir Das is known for his revolutionary ideas and poems. Disciple of Ramananda, his teachings blended Hindu Bhakti and Islamic Sufi traditions.</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"web1.jpg"} className={"w-full rounded-lg mb-2"} alt={"Eid-al-Adha"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>11 June 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>Eid-Al-Adha also known as the festival of sacrifice is a celebration of generosity and unwavering faith<br />Team TaruGuardians wishes you a blessed Eid al-Adha. May your beliefs and faith be showered with divine love and peace. Eid mubarak!🌙✨</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"web1.jpg"} className={"w-full rounded-lg mb-2"} alt={"Tree Planting Drive"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>7 June 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>Trees are the lungs of the earth, purifying the air and soothing the soul.<br /> This initiative embodies our club's pledge to nurture a sustainable future, fostering eco-awareness and community involvement.</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"web2.jpg"} className={"w-full rounded-lg mb-2"} alt={"World Environment Day"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>5 June 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>"What we are doing to the forests of the world is a mirror reflection of what we are doing to ourselves and to one another." — Mahatma Gandhi<br /> TaruGuardians encourages and respects every citizen who is determined for the betterment of our environment.</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"web3.jpg"} className={"w-full rounded-lg mb-2"} alt={"Tobacco Day"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>31 May 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>You might think Cigarettes make you Cool! But It's Killing you Foo.<br /> TaruGuardians values every citizen who's conscious of this topic and is trying to make an impact.</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"web6.jpg"} className={"w-full rounded-lg mb-2"} alt={"Buddha Purnima"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>12 May 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>Under the shade of the Bodhi tree, a soul awakened 🌳.<br /> Team TaruGuardians extends heartfelt wishes for a peaceful, enlightened, and meaningful Buddha Purnima.</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"web7.jpg"} className={"w-full rounded-lg mb-2"} alt={"Mother's Day"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>11 May 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>Existence, Confidence, Reliance all come from one. She is none other than your MOTHER❤.<br /> Team TaruGuardians wish each and every MOTHER, A HAPPY MOTHER’S DAY❤.</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"web8.jpg"} className={"w-full rounded-lg mb-2"} alt={"Maharana Pratap Jayanti"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>9 May 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>"I prefer to sleep on the ground with my people than live in palaces as a traitor." – Maharana Pratap<br /> Team TaruGuardians wishes everyone a proud and inspiring Maharana Pratap Jayanti!!</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"web9.jpg"} className={"w-full rounded-lg mb-2"} alt={"Rabindranath Tagore Jayanti"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>9 May 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>"You can't cross the sea merely by standing and staring at the water." — Rabindranath Tagore<br /> On this day, may we celebrate the spirit of knowledge, freedom, and unity.</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"web11.jpg"} className={"w-full rounded-lg mb-2"} alt={"Labour Day"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>1 May 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>"All labor that uplifts humanity has dignity and importance." - Martin Luther King Jr.<br /> Team TaruGuardians wishes everyone a meaningful Labour Day.</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"web10.jpg"} className={"w-full rounded-lg mb-2"} alt={"Orientation Session"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>23 April 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>The TaruGuardians Orientation Session 2025.🎉<br /> The session marked the beginning of an exciting journey for all the fresh faces of the team.</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"web12.jpg"} className={"w-full rounded-lg mb-2"} alt={"Bengali New Year"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>15 April 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>A new year, a new light that opens doors to happiness, kindness, and positivity.✨<br /> Team TaruGuardians wishes you all a very happy Bengali New Year.</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"web13.jpg"} className={"w-full rounded-lg mb-2"} alt={"Ram Navami"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>6 April 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>रामो विग्रहवान् धर्मः सत्यसन्धो जितेन्द्रियः।<br /> Team TaruGuardians wishes you a very happy Ram Navami.</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"web14.jpg"} className={"w-full rounded-lg mb-2"} alt={"Eid Mubarak"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>31 March 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>TaruGuardians Wishes You Eid Mubarak✨<br /> May your days be blessed and hearts be full.🌼</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"web15.jpg"} className={"w-full rounded-lg mb-2"} alt={"Holi"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>14 March 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>Splash into the Colors of Joy! ✨<br /> Team TaruGuardians wish you all a very happy and vibrant Holi!🌈</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"web16.jpg"} className={"w-full rounded-lg mb-2"} alt={"International Women's Day"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>8 March 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>On this International Women's Day, we celebrate the relentless hard work and dedication of women across the globe. 🌍✨</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"web17.jpg"} className={"w-full rounded-lg mb-2"} alt={"Ramadan"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>1 March 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>As the crescent moon appears, signaling the start of the holy month of Ramadan, Muslims worldwide embark on a spiritual journey.</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"web18.jpg"} className={"w-full rounded-lg mb-2"} alt={"Mahashivratri"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>26 February 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।<br /> Team TaruGuardians wishes you all a very auspicious Mahashivratri. ||ॐ नमः शिवाय ||🔱🔥</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"web19.jpg"} className={"w-full rounded-lg mb-2"} alt={"Pulwama Attack Commemoration"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>14 February 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>We may not redeem the lives lost, but we will always bear them in our heart.🫡<br /> On this day, we commemorate the tragic events of the Pulwama attack.</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"web20.jpg"} className={"w-full rounded-lg mb-2"} alt={"Saraswati Puja"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>2 February 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>वन्दे भक्तया वन्दिता च। ऊं ऐं सरस्वत्यै ऐं नमः।<br /> Team TaruGuardians wish everyone a Happy Saraswati Puja.</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"web21.jpg"} className={"w-full rounded-lg mb-2"} alt={"Republic Day"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>26 January 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>"At the dawn of history, India started on her unending quest..." ~Jawaharlal Nehru</div>
                </div>
                <div className={"w-full flex-shrink-0 cursor-pointer news-card"}>
                    <img src={"web22.jpg"} className={"w-full rounded-lg mb-2"} alt={"Netaji Jayanti"} />
                    <span className={"uppercase text-xs text-red-700 font-bold mb-1"}>23 January 2025</span>
                    <div className={"font-semibold text-sm news-card-text"}>"Give me blood, and I shall give you freedom." ~ Netaji Subhas Chandra Bose<br /> Team TaruGuardians wish everyone a HAPPY 128th NETAJI JAYANTI 🙏</div>
                </div>
            </div>
        </div>
        {/* New Section with Rows */}
        <div className={"container mx-auto mt-8 px-4"}>
            <div className={"space-y-4"}>
                {/* Row 1 */}
                <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"}>
                    <div className={"bg-white border rounded-lg overflow-hidden shadow p-3 news-card"}>
                        <img src={"web23.jpg"} className={"w-full rounded-lg mb-2"} alt={"Army Day"} />
                        <span className={"text-xs uppercase text-red-700 font-bold mb-1"}>15 January 2025</span>
                        <h3 className={"font-semibold text-sm mt-1 news-card-text"}>Our flag does not fly because the wind moves it; it flies with the last breath of each soldier who died protecting it.</h3>
                    </div>
                    <div className={"bg-white border rounded-lg overflow-hidden shadow p-3 news-card"}>
                        <img src={"web24.jpg"} className={"w-full rounded-lg mb-2"} alt={"Makar Sankranti"} />
                        <span className={"text-xs uppercase text-red-700 font-bold mb-1"}>14 January 2025</span>
                        <h3 className={"font-semibold text-sm mt-1 news-card-text"}>Celebrate the harvest, cherish the sun, and fly the kites of hope and ambition.🪁</h3>
                    </div>
                    <div className={"bg-white border rounded-lg overflow-hidden shadow p-3 news-card"}>
                        <img src={"web25.jpg"} className={"w-full rounded-lg mb-2"} alt={"Swami Vivekananda Jayanti"} />
                        <span className={"text-xs uppercase text-red-700 font-bold mb-1"}>12 January 2025</span>
                        <h3 className={"font-semibold text-sm mt-1 news-card-text"}>"Arise, awake, and stop not until the goal is reached 🎯." ~Swami Vivekananda</h3>
                    </div>
                </div>
                {/* Row 2 */}
                <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"}>
                    <div className={"bg-white border rounded-lg overflow-hidden shadow p-3 news-card"}>
                        <img src={"web26.jpg"} className={"w-full rounded-lg mb-2"} alt={"Hindi Diwas"} />
                        <span className={"text-xs uppercase text-red-700 font-bold mb-1"}>10 January 2025</span>
                        <h3 className={"font-semibold text-sm mt-1 news-card-text"}>हिंदी हमारी पहचान है, हमारी संस्कृति की जान है। 🌟</h3>
                    </div>
                    <div className={"bg-white border rounded-lg overflow-hidden shadow p-3 news-card"}>
                        <img src={"web27.jpg"} className={"w-full rounded-lg mb-2"} alt={"Guru Gobind Singh Jayanti"} />
                        <span className={"text-xs uppercase text-red-700 font-bold mb-1"}>6 January 2025</span>
                        <h3 className={"font-semibold text-sm mt-1 news-card-text"}>"The greatest comfort and lasting peace are obtained when one eradicates selfishness from within." ~Guru Gobind Singh Ji 🙏</h3>
                    </div>
                </div>
                <div className={"flex items-center justify-center mt-4"}>
                    <a href={"https://www.instagram.com/_taruguardians_/"} className={"text-blue-700 font-semibold hover:underline clickable"} data-legacy-onclick="navigate('more')">SEE MORE →</a>
                </div>
            </div>
        </div>
    </div>
</div>
{/* Footer */}
<footer className={"footer"}>
    <div className={"footer-logo-container"}>
        <img src={"circlelogotaru.png"} alt={"TaruGuardians Logo"} />
        <h3></h3>
    </div>
    <div className={"footer-columns"}>
        <div className={"footer-column"}>
            <h2>𝐓𝐚𝐫𝐮𝐆𝐮𝐚𝐫𝐝𝐢𝐚𝐧𝐬</h2>
            <p> 𝔄𝔰 𝔱𝔯𝔢𝔢𝔰 𝔤𝔯𝔬𝔴 𝔴𝔦𝔱𝔥 𝔡𝔢𝔢𝔭 𝔯𝔬𝔬𝔱𝔰, 𝔴𝔢 𝔤𝔯𝔬𝔴 𝔴𝔦𝔱𝔥 𝔡𝔢𝔢𝔭 𝔱𝔢𝔠𝔥. 𝔉𝔯𝔬𝔪 𝔰𝔢𝔢𝔡𝔰 𝔬𝔣 𝔠𝔬𝔡𝔢 𝔱𝔬 𝔠𝔞𝔫𝔬𝔭𝔦𝔢𝔰 𝔬𝔣 𝔠𝔥𝔞𝔫𝔤𝔢 — 𝔟𝔲𝔦𝔩𝔡𝔦𝔫𝔤 𝔞 𝔤𝔯𝔢𝔢𝔫𝔢𝔯, 𝔰𝔪𝔞𝔯𝔱𝔢𝔯 𝔣𝔲𝔱𝔲𝔯𝔢.</p>
            <p>(𝚁𝙾𝙾𝚃𝙴𝙳 𝙸𝙽 𝙽𝙰𝚃𝚄𝚁𝙴, 𝙳𝚁𝙸𝚅𝙴𝙽 𝙱𝚈 𝚃𝙴𝙲𝙷)</p>
        </div>
        <div className={"footer-column"}>
            <a href={"https://medium.com/@TARUGUARDIANS_HIT-HALDIA/about"} className={"blog-button"}> 𝓞𝓾𝓻 𝓑𝓵𝓸𝓰</a>
        </div>
        <div className={"footer-column"}>
            <h3>𝓒𝓸𝓷𝓽𝓪𝓬𝓽</h3>
            <p>𝓣𝓪𝓻𝓾𝓖𝓾𝓪𝓻𝓭𝓲𝓪𝓷𝓼@𝓰𝓶𝓪𝓲𝓵.𝓬𝓸𝓶</p>
        </div>
        <div className={"footer-column"}>
            <h3>𝓕𝓸𝓵𝓵𝓸𝔀 𝓤𝓼</h3>
            <div className={"social-icons"}>
                <a href={"https://www.instagram.com/_taruguardians_/"}><img src={"instag.png"} alt={"Instagram"} /></a>
                <a href={"https://www.linkedin.com/company/taruguardians/?originalSubdomain=in"}><img src={"linkden.png"} alt={"LinkedIn"} /></a>
                <a href={"https://www.facebook.com/TaruGuardians/"}><img src={"facebook.png"} alt={"Facebook"} /></a>
                <a href={"https://www.youtube.com/@TaruGuardians"}><img src={"youtube.webp"} alt={"YouTube"} /></a>
            </div>
            <em>𝓢𝓽𝓪𝔂 𝓾𝓹𝓭𝓪𝓽𝓮𝓭 𝔀𝓲𝓽𝓱 𝓸𝓾𝓻 𝓵𝓪𝓽𝓮𝓼𝓽 𝓹𝓸𝓼𝓽𝓼, 𝓮𝓿𝓮𝓷𝓽𝓼, 𝓪𝓷𝓭 𝓦𝓸𝓻𝓴𝓼𝓱𝓸𝓹𝓼!</em>
        </div>
    </div>
    <small>© 2025 TaruGuardians. All rights reserved.</small>
</footer>



    </div>
  );
}
