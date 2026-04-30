import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './EntryLoader.css';

/**
 * EntryLoader — React port of the original `legacy-source/index.html`.
 *
 * This page is the user's first stop. It runs the same 3D Three.js
 * scene (rotating dodecahedron core, 4000-particle nebula, dual point
 * lights, progress ring, multi-phase progress text, optional Web Audio
 * cue, mouse / touch reactivity, fallback for non-WebGL devices) the
 * original site shipped with — every uniform, every shader line, every
 * animation curve is preserved — and at the end of the loading
 * sequence it navigates the SPA to `/home` (desktop, > 600px) or
 * `/m/home` (mobile, ≤ 600px).
 *
 * The only behavioural change versus the original is the final
 * navigation: instead of `window.location.href = "TARUGUARDIANS FIRST PAGE.html"`
 * (which would do a full page reload) we call React Router's
 * `navigate(...)`, so the transition into the home page happens
 * instantly and reuses the React app shell.
 */
export default function EntryLoader() {
  const navigate = useNavigate();
  const sceneContainerRef = useRef(null);
  const progressRingRef = useRef(null);
  const progressTextRef = useRef(null);
  const loaderTextRef = useRef(null);
  const loaderContainerRef = useRef(null);
  const fallbackLoaderRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    let rafId = null;
    let progressInterval = null;
    let fallbackTimeout = null;
    let fallbackInterval = null;
    let renderer = null;
    let resizeHandler = null;
    let mouseHandler = null;
    let touchHandler = null;
    let audioInitHandler = null;
    let audioCtx = null;

    // Device Detection — exactly mirrors the original logic.
    const isMobile = window.innerWidth <= 600;
    const redirectPath = isMobile ? '/m/home' : '/home';

    const navigateAtEnd = () => {
      if (cancelled) return;
      navigate(redirectPath);
    };

    // WebGL Compatibility Check
    const isWebGLSupported = () => {
      const canvas = document.createElement('canvas');
      return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    };

    // Fallback Loader — used when WebGL is unavailable or the main
    // animation loop throws. Original 50ms tick / 2% step preserved.
    const showFallbackLoader = () => {
      if (cancelled) return;
      // eslint-disable-next-line no-console
      console.warn('Switching to fallback loader');
      if (sceneContainerRef.current) sceneContainerRef.current.style.display = 'none';
      const progressHolo = document.querySelector('.entry-loader-page .progress-holo');
      if (progressHolo) progressHolo.style.display = 'none';
      if (progressTextRef.current) progressTextRef.current.style.display = 'none';
      if (loaderTextRef.current) loaderTextRef.current.style.display = 'none';
      if (fallbackLoaderRef.current) fallbackLoaderRef.current.classList.add('active');
      let fallbackProgress = 0;
      fallbackInterval = setInterval(() => {
        fallbackProgress += 2;
        if (fallbackLoaderRef.current) {
          fallbackLoaderRef.current.textContent = `Loading... ${Math.round(fallbackProgress)}%`;
        }
        if (fallbackProgress >= 100) {
          clearInterval(fallbackInterval);
          fallbackInterval = null;
          setTimeout(() => {
            if (loaderContainerRef.current) loaderContainerRef.current.classList.add('hidden');
            navigateAtEnd();
          }, 1000);
        }
      }, 50);
    };

    if (!isWebGLSupported() || typeof window.THREE === 'undefined') {
      // eslint-disable-next-line no-console
      console.warn('WebGL not supported (or three.js not loaded), using fallback');
      showFallbackLoader();
      return () => {
        cancelled = true;
        if (fallbackInterval) clearInterval(fallbackInterval);
      };
    }

    const THREE = window.THREE;

    try {
      // Three.js Scene Setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(window.innerWidth, window.innerHeight);
      sceneContainerRef.current.appendChild(renderer.domElement);

      // Holographic Prism Core
      const coreGeometry = new THREE.DodecahedronGeometry(1.3, 1);
      const coreMaterial = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uGlow: { value: 0.8 },
          uColor1: { value: new THREE.Color(0xFFD700) },
          uColor2: { value: new THREE.Color(0x00FFFF) },
        },
        vertexShader: `
            varying vec3 vPosition;
            uniform float uTime;
            void main() {
              vPosition = position;
              vec3 pos = position;
              pos += sin(uTime + position.x * 2.0) * 0.08;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
          `,
        fragmentShader: `
            uniform float uTime;
            uniform float uGlow;
            uniform vec3 uColor1;
            uniform vec3 uColor2;
            varying vec3 vPosition;
            void main() {
              float pulse = sin(uTime * 2.5 + vPosition.y) * 0.5 + 0.5;
              vec3 color = mix(uColor1, uColor2, pulse);
              float rim = 1.0 - abs(dot(normalize(vPosition), vec3(0, 0, 1)));
              gl_FragColor = vec4(color * rim, uGlow * (0.6 + 0.4 * pulse));
            }
          `,
        transparent: true,
        side: THREE.DoubleSide,
        wireframe: true,
      });
      const core = new THREE.Mesh(coreGeometry, coreMaterial);
      scene.add(core);

      // Cosmic Nebula Particle System — 4000 particles, three colour bands
      const particleCount = 4000;
      const particlesGeometry = new THREE.BufferGeometry();
      const posArray = new Float32Array(particleCount * 3);
      const velocities = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        const theta = Math.random() * Math.PI * 2;
        const r = Math.random() * 10 + 5;
        posArray[i] = r * Math.cos(theta);
        posArray[i + 1] = (Math.random() - 0.5) * 5;
        posArray[i + 2] = r * Math.sin(theta);
        velocities[i] = (Math.random() - 0.5) * 0.012;
        velocities[i + 1] = (Math.random() - 0.5) * 0.012;
        velocities[i + 2] = (Math.random() - 0.5) * 0.012;
        const hue = Math.random() > 0.33 ? [1, 0.84, 0.4] : Math.random() > 0.66 ? [0, 1, 1] : [1, 0, 0.47];
        colors[i] = hue[0];
        colors[i + 1] = hue[1];
        colors[i + 2] = hue[2];
      }
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      const particleMaterial = new THREE.PointsMaterial({
        size: 0.09,
        vertexColors: true,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
      });
      const particles = new THREE.Points(particlesGeometry, particleMaterial);
      scene.add(particles);

      // Dynamic Lighting
      const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
      scene.add(ambientLight);
      const pointLight = new THREE.PointLight(0x00FFFF, 2, 12);
      pointLight.position.set(6, 6, 6);
      scene.add(pointLight);
      const pointLight2 = new THREE.PointLight(0xFF1E56, 1.5, 10);
      pointLight2.position.set(-6, -6, -6);
      scene.add(pointLight2);
      camera.position.set(0, 2, 7);
      camera.lookAt(0, 0, 0);

      // Mouse / Touch Interaction
      let mouseX = 0;
      let mouseY = 0;
      mouseHandler = (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      };
      touchHandler = (e) => {
        const touch = e.touches[0];
        if (!touch) return;
        mouseX = (touch.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(touch.clientY / window.innerHeight) * 2 + 1;
      };
      document.addEventListener('mousemove', mouseHandler);
      document.addEventListener('touchmove', touchHandler);

      // Optional Web Audio
      const initAudio = () => {
        if (!audioCtx) {
          const Ctx = window.AudioContext || window.webkitAudioContext;
          if (!Ctx) return Promise.resolve();
          audioCtx = new Ctx();
        }
        return audioCtx.state === 'running' ? Promise.resolve() : audioCtx.resume();
      };
      const playSound = (freq, type = 'sine', duration = 0.3, volume = 0.2) => {
        initAudio().then(() => {
          if (!audioCtx) return;
          const oscillator = audioCtx.createOscillator();
          const gainNode = audioCtx.createGain();
          oscillator.type = type;
          oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
          gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
          oscillator.connect(gainNode);
          gainNode.connect(audioCtx.destination);
          oscillator.start();
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
          oscillator.stop(audioCtx.currentTime + duration);
        }).catch((err) => {
          // eslint-disable-next-line no-console
          console.warn('AudioContext error:', err);
        });
      };

      // Particle Animation
      const animateParticles = () => {
        const time = performance.now() * 0.001;
        const positions = particlesGeometry.attributes.position.array;
        for (let i = 0; i < particleCount * 3; i += 3) {
          positions[i] += velocities[i];
          positions[i + 1] += velocities[i + 1];
          positions[i + 2] += velocities[i + 2];
          const theta = Math.atan2(positions[i + 2], positions[i]) + 0.01;
          const r = Math.sqrt(positions[i] * positions[i] + positions[i + 2] * positions[i + 2]);
          positions[i] = r * Math.cos(theta);
          positions[i + 2] = r * Math.sin(theta);
          const dx = core.position.x - positions[i];
          const dy = core.position.y - positions[i + 1];
          const dz = core.position.z - positions[i + 2];
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (distance < 4) {
            velocities[i] += dx * 0.001;
            velocities[i + 1] += dy * 0.001;
            velocities[i + 2] += dz * 0.001;
          }
          const mx = mouseX * 10 - positions[i];
          const my = mouseY * 10 - positions[i + 1];
          const mDistance = Math.sqrt(mx * mx + my * my);
          if (mDistance < 5) {
            velocities[i] += mx * 0.006;
            velocities[i + 1] += my * 0.006;
          }
          if (r > 15) {
            const scale = 5 / r;
            positions[i] *= scale;
            positions[i + 2] *= scale;
            velocities[i] *= -0.7;
            velocities[i + 2] *= -0.7;
          }
        }
        particlesGeometry.attributes.position.needsUpdate = true;
        core.rotation.x += 0.008;
        core.rotation.y += 0.012;
        coreMaterial.uniforms.uTime.value = time;
        coreMaterial.uniforms.uGlow.value = 0.7 + Math.sin(time * 2) * 0.3;
      };

      // Progress Holographic Ring
      const circle = progressRingRef.current;
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = circumference;
      const setProgress = (percent) => {
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
        if (progressTextRef.current) {
          progressTextRef.current.textContent = `${Math.round(percent)}%`;
        }
      };

      // Multi-Phase Loading — same phases / speeds / texts as original.
      let progress = 0;
      const phases = [
        { max: 20,  speed: 1.5, text: 'Loading TaruGuardians...' },
        { max: 40,  speed: 1.2, text: 'Just Wait...' },
        { max: 60,  speed: 1,   text: 'Loading Website...' },
        { max: 80,  speed: 0.8, text: 'Loaded...' },
        { max: 100, speed: 0.6, text: 'get ready...' },
      ];
      let currentPhase = 0;
      progressInterval = setInterval(() => {
        try {
          progress += phases[currentPhase].speed;
          setProgress(progress);
          if (loaderTextRef.current) {
            loaderTextRef.current.textContent = phases[currentPhase].text;
          }
          if (progress >= phases[currentPhase].max) {
            currentPhase++;
            if (currentPhase < phases.length) {
              playSound(200 + currentPhase * 100, 'sine', 0.4, 0.2);
            }
            if (currentPhase >= phases.length) {
              clearInterval(progressInterval);
              progressInterval = null;
              setTimeout(() => {
                playSound(150, 'sine', 0.8, 0.3);
                if (loaderContainerRef.current) loaderContainerRef.current.classList.add('hidden');
                navigateAtEnd();
              }, 2000);
            }
          }
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error('Progress interval error:', err);
          clearInterval(progressInterval);
          progressInterval = null;
          showFallbackLoader();
        }
      }, 50);

      // Fallback Timeout — same 3s threshold as original.
      fallbackTimeout = setTimeout(() => {
        if (progress === 0) {
          // eslint-disable-next-line no-console
          console.warn('Progress stuck at 0%, switching to fallback');
          if (progressInterval) clearInterval(progressInterval);
          progressInterval = null;
          showFallbackLoader();
        }
      }, 3000);

      // Animation Loop
      const animate = () => {
        try {
          rafId = requestAnimationFrame(animate);
          animateParticles();
          renderer.render(scene, camera);
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error('Animation loop error:', err);
          if (rafId) cancelAnimationFrame(rafId);
          rafId = null;
          showFallbackLoader();
        }
      };
      animate();

      // Resize Handler
      resizeHandler = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', resizeHandler);

      // Initialize Audio on first user interaction (one-shot).
      audioInitHandler = () => {
        initAudio().then(() => {
          playSound(100, 'sine', 0.5, 0.2);
        });
      };
      document.addEventListener('click', audioInitHandler, { once: true });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Initialization error:', err);
      showFallbackLoader();
    }

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      if (progressInterval) clearInterval(progressInterval);
      if (fallbackInterval) clearInterval(fallbackInterval);
      if (fallbackTimeout) clearTimeout(fallbackTimeout);
      if (resizeHandler) window.removeEventListener('resize', resizeHandler);
      if (mouseHandler) document.removeEventListener('mousemove', mouseHandler);
      if (touchHandler) document.removeEventListener('touchmove', touchHandler);
      if (audioInitHandler) document.removeEventListener('click', audioInitHandler);
      if (renderer) {
        try {
          renderer.dispose();
          if (renderer.domElement && renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement);
          }
        } catch { /* ignore */ }
      }
      if (audioCtx && audioCtx.state !== 'closed') {
        try { audioCtx.close(); } catch { /* ignore */ }
      }
    };
  }, [navigate]);

  return (
    <div className="entry-loader-page">
      <div className="loader-container" id="loader" ref={loaderContainerRef} aria-busy="true">
        <div id="scene-container" ref={sceneContainerRef}></div>
        <svg className="filters">
          <defs>
            <filter id="glow">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 22 -9"
                result="glow"
              />
              <feBlend in="SourceGraphic" in2="glow" mode="normal" />
            </filter>
          </defs>
        </svg>
        <svg className="progress-holo" viewBox="0 0 260 260">
          <defs>
            <linearGradient id="etherealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
              <stop offset="20%" style={{ stopColor: '#00FFFF', stopOpacity: 1 }} />
              <stop offset="40%" style={{ stopColor: '#FF1E56', stopOpacity: 1 }} />
              <stop offset="60%" style={{ stopColor: '#00FFFF', stopOpacity: 1 }} />
              <stop offset="80%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#FF1E56', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle
            ref={progressRingRef}
            className="progress-holo__ring"
            strokeWidth="10"
            fill="transparent"
            r="120"
            cx="130"
            cy="130"
          />
        </svg>
        <div className="progress-text" id="progress-text" ref={progressTextRef}>0%</div>
        <div className="loader-text" id="loader-text" ref={loaderTextRef}>
          Initializing Ethereal Nexus...
        </div>
        <div className="fallback-loader" id="fallback-loader" ref={fallbackLoaderRef}>
          Loading...
        </div>
      </div>
      <div className="content" id="content">
        <h1>Ethereal Infinity Unleashed</h1>
        <p>Journey into a realm of boundless elegance and innovation.</p>
      </div>
    </div>
  );
}
