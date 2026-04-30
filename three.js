<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Night City Skyline Scene</title>
<style>
    body { margin: 0; }
    canvas { display: block; }
</style>
</head>
<body>
<script type="importmap">
    {
        "imports": {
        "three": "https://unpkg.com/three@0.156.1/build/three.module.js?module",
        "three/addons/": "https://unpkg.com/three@0.156.1/examples/jsm/"
    }
    }
</script>
<script type="module">
    import * as THREE from 'three';
    import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
    import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
    import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
    import { FilmPass } from 'three/addons/postprocessing/FilmPass.js';
    import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
    import { VignetteShader } from 'three/addons/shaders/VignetteShader.js';
    import { RGBShiftShader } from 'three/addons/shaders/RGBShiftShader.js';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, 1920 / 1080, 0.1, 200);
    camera.position.set(0, 18, 85);
    camera.lookAt(0, 18, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0; // Adjusted for night scene targeting middle gray ~0.14
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    scene.fog = new THREE.FogExp2(0x0B1118, 0.035);

    const ambient = new THREE.AmbientLight(0x0D1A24, 0.5);
    scene.add(ambient);

    // Horizon area lights
    const horizonLightCenter = new THREE.RectAreaLight(0xFF7A29, 0.2, 80, 10);
    horizonLightCenter.position.set(0, 5, -40);
    horizonLightCenter.lookAt(0, 5, 0);
    scene.add(horizonLightCenter);

    const horizonLightLeft = new THREE.RectAreaLight(0xFFC16E, 0.15, 40, 10);
    horizonLightLeft.position.set(-20, 5, -35);
    horizonLightLeft.lookAt(-20, 5, 0);
    scene.add(horizonLightLeft);

    const horizonLightRight = new THREE.RectAreaLight(0x6C1E2A, 0.15, 40, 10);
    horizonLightRight.position.set(20, 5, -35);
    horizonLightRight.lookAt(20, 5, 0);
    scene.add(horizonLightRight);

    // Central tower spotlight for spire
    const spireSpot = new THREE.SpotLight(0x00E4FF, 1.0, 20, Math.PI / 6, 0.5);
    spireSpot.position.set(0, 80, 0);
    spireSpot.target.position.set(0, 90, 0);
    scene.add(spireSpot);
    scene.add(spireSpot.target);

    // Crown point light
    const crownPoint = new THREE.PointLight(0xFF9A45, 1.0, 50);
    crownPoint.position.set(0, 75, 0);
    scene.add(crownPoint);

    // Create central tower
    function createCentralTower() {
    const group = new THREE.Group();

    // Body
    const bodyGeo = new THREE.BoxGeometry(18, 72, 18);
    const bodyMat = new THREE.MeshStandardMaterial({
    color: 0x07090C,
    roughness: 0.8,
    metalness: 0.2
});
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 36;
    group.add(body);

    // Tiers
    const tierMat = new THREE.MeshStandardMaterial({
    color: 0x07090C,
    roughness: 0.6,
    metalness: 0.3,
    emissive: 0xFF7A29,
    emissiveIntensity: 0.8
});

    const tier1Geo = new THREE.BoxGeometry(14, 4, 14);
    const tier1 = new THREE.Mesh(tier1Geo, tierMat);
    tier1.position.y = 72;
    group.add(tier1);

    const tier2Geo = new THREE.BoxGeometry(10, 4, 10);
    const tier2 = new THREE.Mesh(tier2Geo, tierMat);
    tier2.position.y = 76;
    group.add(tier2);

    const tier3Geo = new THREE.BoxGeometry(6, 4, 6);
    const tier3 = new THREE.Mesh(tier3Geo, tierMat);
    tier3.position.y = 80;
    group.add(tier3);

    // Spire
    const spireGeo = new THREE.CylinderGeometry(0.5, 1, 8, 32);
    const spireMat = new THREE.MeshStandardMaterial({
    color: 0x00E4FF,
    emissive: 0x00E4FF,
    emissiveIntensity: 1.0,
    roughness: 0.5,
    metalness: 0.5
});
    const spire = new THREE.Mesh(spireGeo, spireMat);
    spire.position.y = 84;
    group.add(spire);

    // Volumetric glow for spire
    const volSpireGeo = new THREE.CylinderGeometry(3, 5, 10, 32, 1, true);
    const volSpireMat = new THREE.MeshBasicMaterial({
    color: 0x7AF0FF,
    transparent: true,
    opacity: 0.1,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide
});
    const volSpire = new THREE.Mesh(volSpireGeo, volSpireMat);
    volSpire.position.y = 84;
    group.add(volSpire);

    // Volumetric for crown
    const volCrownGeo = new THREE.BoxGeometry(20, 15, 20);
    const volCrownMat = new THREE.MeshBasicMaterial({
    color: 0xFF9A45,
    transparent: true,
    opacity: 0.05,
    blending: THREE.AdditiveBlending
});
    const volCrown = new THREE.Mesh(volCrownGeo, volCrownMat);
    volCrown.position.y = 75;
    group.add(volCrown);

    // Simple windows using instanced mesh
    const windowGeo = new THREE.PlaneGeometry(0.5, 0.5);
    const windowMat = new THREE.MeshBasicMaterial({ color: 0x000000, emissive: 0xFF7A29, side: THREE.DoubleSide });
    const instancedWindows = new THREE.InstancedMesh(windowGeo, windowMat, 1000);
    let count = 0;
    for (let side = 0; side < 4; side++) {
    for (let row = 0; row < 50; row++) {
    for (let col = 0; col < 20; col++) {
    if (Math.random() > 0.3 && count < 1000) { // Random lit
    const matrix = new THREE.Matrix4();
    const angle = side * Math.PI / 2;
    const x = Math.cos(angle) * 9;
    const z = Math.sin(angle) * 9;
    const y = row * 1.2 + 1;
    matrix.setPosition(x, y, z);
    matrix.lookAt(0, y, 0, 0, 1, 0);
    instancedWindows.setMatrixAt(count, matrix);
    instancedWindows.setColorAt(count, new THREE.Color(Math.random() > 0.5 ? 0xFF7A29 : 0xFFC16E));
    count++;
}
}
}
}
    instancedWindows.instanceMatrix.needsUpdate = true;
    group.add(instancedWindows);

    return { group, spire };
}

    const { group: centralGroup, spire: spireMesh } = createCentralTower();
    scene.add(centralGroup);

    // Right under-construction tower
    function createRightTower() {
    const group = new THREE.Group();

    // Body
    const bodyGeo = new THREE.BoxGeometry(15, 65, 15);
    const bodyMat = new THREE.MeshStandardMaterial({
    color: 0x0F1116,
    roughness: 0.8,
    metalness: 0.2
});
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 32.5;
    group.add(body);

    // Construction frames (simple boxes)
    const frameGeo = new THREE.BoxGeometry(16, 66, 16);
    const frameMat = new THREE.MeshBasicMaterial({ color: 0x07090C, wireframe: true });
    const frame = new THREE.Mesh(frameGeo, frameMat);
    frame.position.y = 32.5;
    group.add(frame);

    // Cranes
    const craneMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const crane1Geo = new THREE.BoxGeometry(1, 1, 40);
    const crane1 = new THREE.Mesh(crane1Geo, craneMat);
    crane1.position.set(0, 66, 0);
    crane1.rotation.y = Math.PI / 6; // 30 deg
    group.add(crane1);

    const crane2Geo = new THREE.BoxGeometry(1, 1, 30);
    const crane2 = new THREE.Mesh(crane2Geo, craneMat);
    crane2.position.set(5, 66, 5);
    crane2.rotation.y = -Math.PI / 4;
    group.add(crane2);

    // Cyan windows
    const windowGeo = new THREE.PlaneGeometry(0.5, 0.5);
    const windowMat = new THREE.MeshBasicMaterial({ color: 0x000000, emissive: 0x5CC9E8, side: THREE.DoubleSide });
    const instancedWindows = new THREE.InstancedMesh(windowGeo, windowMat, 500);
    let count = 0;
    for (let side = 0; side < 4; side++) {
    for (let row = 0; row < 40; row++) {
    for (let col = 0; col < 10; col++) {
    if (Math.random() > 0.6 && count < 500) { // Sparse
    const matrix = new THREE.Matrix4();
    const angle = side * Math.PI / 2;
    const x = Math.cos(angle) * 7.5;
    const z = Math.sin(angle) * 7.5;
    const y = row * 1.5 + 1;
    matrix.setPosition(x, y, z);
    matrix.lookAt(0, y, 0, 0, 1, 0);
    instancedWindows.setMatrixAt(count, matrix);
    count++;
}
}
}
}
    instancedWindows.instanceMatrix.needsUpdate = true;
    group.add(instancedWindows);

    group.position.set(26, 0, -6);
    return group;
}

    scene.add(createRightTower());

    // Surrounding skyline
    for (let i = 0; i < 100; i++) {
    const width = Math.random() * 10 + 5;
    const height = Math.random() * 27 + 8;
    const depth = Math.random() * 10 + 5;
    const geo = new THREE.BoxGeometry(width, height, depth);
    const isLeft = Math.random() < 0.3;
    const mat = new THREE.MeshStandardMaterial({
    color: 0x07090C,
    emissive: isLeft ? 0x5CC9E8 : 0xFF7A29,
    emissiveIntensity: Math.random() * 0.4 + 0.6,
    roughness: 0.8,
    metalness: 0.2
});
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.x = Math.random() * 80 - 40;
    mesh.position.z = Math.random() * 25 - 30;
    mesh.position.y = height / 2;
    if (Math.abs(mesh.position.x) < 10 && Math.abs(mesh.position.z) < 5) continue; // Avoid overlap with central
    scene.add(mesh);
}

    // Left slim tower
    const leftSlimGeo = new THREE.BoxGeometry(5, 40, 5);
    const leftSlimMat = new THREE.MeshStandardMaterial({
    color: 0x07090C,
    emissive: 0xFF9A45,
    emissiveIntensity: 0.8,
    roughness: 0.8
});
    const leftSlim = new THREE.Mesh(leftSlimGeo, leftSlimMat);
    leftSlim.position.set(-30, 20, -10);
    scene.add(leftSlim);

    // Thin cyan antenna
    const antennaGeo = new THREE.BoxGeometry(1, 20, 1);
    const antennaMat = new THREE.MeshStandardMaterial({
    color: 0x00E4FF,
    emissive: 0x00E4FF,
    emissiveIntensity: 1.0
});
    const antenna = new THREE.Mesh(antennaGeo, antennaMat);
    antenna.position.set(-20, 30, -20);
    scene.add(antenna);

    // Procedural skybox with gradient and simple cloud noise
    const skyGeo = new THREE.SphereGeometry(150, 32, 32);
    const skyShader = {
    uniforms: {
    time: { value: 0.0 }
},
    vertexShader: `
                varying vec3 vWorldPosition;
                void main() {
                    vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
    fragmentShader: `
                varying vec3 vWorldPosition;
                uniform float time;

                float noise(vec3 p) {
                    return sin(p.x * 5.0 + time * 0.1) * sin(p.y * 3.0 + time * 0.05) * sin(p.z * 4.0) * 0.05 + 0.5;
                }

                void main() {
                    float mixFactor = (vWorldPosition.x / 150.0 + 0.5); // 0 left, 1 right
                    vec3 teal = vec3(0.047, 0.188, 0.259); // #0C3042
                    vec3 dark = vec3(0.027, 0.078, 0.118); // #07141E
                    vec3 maroon = vec3(0.267, 0.071, 0.118); // #44121E
                    vec3 lightMaroon = vec3(0.423, 0.118, 0.165); // #6C1E2A

                    vec3 leftColor = mix(teal, dark, vWorldPosition.y / 150.0 + 0.5);
                    vec3 rightColor = mix(maroon, lightMaroon, vWorldPosition.y / 150.0 + 0.5);
                    vec3 color = mix(leftColor, rightColor, mixFactor);

                    float cloud = noise(vWorldPosition * 0.05 + vec3(time * 0.01, 0.0, 0.0)); // Slow L->R movement
                    color += vec3(cloud) * 0.1;

                    gl_FragColor = vec4(color, 1.0);
                }
            `,
    side: THREE.BackSide,
    depthWrite: false
};
    const skyMat = new THREE.ShaderMaterial(skyShader);
    const sky = new THREE.Mesh(skyGeo, skyMat);
    scene.add(sky);

    // Post-processing
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(1920, 1080), 1.2, 0.8, 0.72);
    composer.addPass(bloomPass);

    const filmPass = new FilmPass(0.05, 0, 0, false);
    composer.addPass(filmPass);

    const vignettePass = new ShaderPass(VignetteShader);
    vignettePass.uniforms.offset.value = 1.0;
    vignettePass.uniforms.darkness.value = 0.75; // Subtle 0.25 strength equivalent
    composer.addPass(vignettePass);

    const caPass = new ShaderPass(RGBShiftShader);
    caPass.uniforms.amount.value = 0.002;
    composer.addPass(caPass);

    // Animation
    const clock = new THREE.Clock();
    let time = 0;

    function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();
    time += delta;

    // Spire pulse
    spireMesh.material.emissiveIntensity = 1.0 + 0.4 * Math.sin(time * 2 * Math.PI / 1.2);

    // Cloud movement
    skyMat.uniforms.time.value = time;

    // Subtle window flicker (on random buildings, but for simplicity, skip per-frame update or add if needed)

    composer.render();
}

    animate();

    // Resize handler
    window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    composer.setSize(width, height);
});
</script>
</body>
</html>