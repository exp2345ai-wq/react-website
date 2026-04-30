const Hero = () => {
    React.useEffect(() => {
        const slider = document.querySelector('.events-slider');
        const cards = slider.children;
        const cardCount = cards.length;
        const cardWidth = cards[0].offsetWidth + 12;
        const totalWidth = cardWidth * cardCount;

        for (let i = 0; i < cardCount; i++) {
            const clone = cards[i].cloneNode(true);
            slider.appendChild(clone);
        }

        let scrollPosition = 0;
        const speed = 1;
        let animationId;

        const scroll = () => {
            scrollPosition += speed;
            if (scrollPosition >= totalWidth) {
                scrollPosition = 0;
                slider.style.transition = 'none';
                slider.style.transform = `translateX(0)`;
                slider.offsetHeight;
                slider.style.transition = 'transform 0.1s linear';
            } else {
                slider.style.transform = `translateX(-${scrollPosition}px)`;
            }
            animationId = requestAnimationFrame(scroll);
        };

        slider.style.transition = 'transform 0.1s linear';
        scroll();

        slider.addEventListener('mouseenter', () => {
            cancelAnimationFrame(animationId);
        });
        slider.addEventListener('mouseleave', () => {
            scroll();
        });

        return () => {
            cancelAnimationFrame(animationId);
            slider.removeEventListener('mouseenter', () => {});
            slider.removeEventListener('mouseleave', () => {});
        };
    }, []);

    return (
        <section id="home" className="hero">
            <div id="canvas-container"></div>
            <div>
                <p className="teaser-content">

                    Discover innovation at its core with TaruGuardians.<br />
                    Students can directly register for events through TaruGuardians website.
                    Transform your passion into impactful Journey.
                </p>
                <div className="flex justify-center mb-4">
                    <button className="cta-button">View Details</button>
                    <button className="secondary-button">Register Now</button>
                </div>
                <h1 className="hero-title">TaruGuardians Tech Club</h1>
                <button className="cta-button mt-6">Join Us Now</button>
            </div>
            <div className="events-container">
                <div className="events-slider">
                    <div className="card mx-3">
                        <h3 className="text-2xl font-semibold mb-2">FIGMA Craft 2.0</h3>
                        <p>Advanced design workshop for aspiring UI/UX experts.</p>
                        <button className="cta-button mt-4 text-sm">See Details</button>
                    </div>
                    <div className="card mx-3">
                        <h3 className="text-2xl font-semibold mb-2">GATE & PLACEMENT</h3>
                        <p>Crack GATE & Placements with Chandan Jha (AVP, GFG) | Mar 23, 2 PM</p>
                        <button className="cta-button mt-4 text-sm">See Details</button>
                    </div>
                    <div className="card mx-3">
                        <h3 className="text-2xl font-semibold mb-2">QUIZ-O-MANIA 2.0</h3>
                        <p>Quiz-O-Mania 2.0 by TaruGuardians — Join the ultimate online quiz on Dec 22, 11 AM |</p>
                        <button className="cta-button mt-4 text-sm">See Details</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const App = () => {
    React.useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('canvas-container').appendChild(renderer.domElement);

        const geometry = new THREE.SphereGeometry(5, 32, 32);
        const material = new THREE.MeshBasicMaterial({
            color: 0x10b981,
            wireframe: true,
            transparent: true,
            opacity: 0.7,
            blending: THREE.AdditiveBlending,
        });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        const particleGeometry = new THREE.BufferGeometry();
        const particleCount = 10000;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 2000;
            positions[i + 1] = (Math.random() - 0.5) * 2000;
            positions[i + 2] = (Math.random() - 0.5) * 2000;
            colors[i] = Math.random() > 0.5 ? 0.06 : 0.23;
            colors[i + 1] = Math.random() > 0.5 ? 0.72 : 0.2;
            colors[i + 2] = Math.random() > 0.5 ? 0.96 : 0.56;
        }
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        const particleMaterial = new THREE.PointsMaterial({
            size: 1.5,
            transparent: true,
            opacity: 0.6,
            vertexColors: true,
            blending: THREE.AdditiveBlending,
        });
        const particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);

        camera.position.z = 10;

        const animate = () => {
            requestAnimationFrame(animate);
            sphere.rotation.x += 0.001;
            sphere.rotation.y += 0.002;
            particles.rotation.y += 0.0003;
            particles.rotation.x += 0.0002;
            renderer.render(scene, camera);
        };
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        return () => {
            document.getElementById('canvas-container').removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div>
            <Hero />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));