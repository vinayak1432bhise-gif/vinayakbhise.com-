import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeNeuralCanvasProps {
  interactive?: boolean;
}

export const ThreeNeuralCanvas: React.FC<ThreeNeuralCanvasProps> = ({ interactive = true }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 70;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Create Neural Network Nodes (Particles)
    const particleCount = 120;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    const tealColor = new THREE.Color('#00E5FF');
    const goldColor = new THREE.Color('#D4AF37');
    const softWhite = new THREE.Color('#E0F7FA');

    const radius = 55;
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * radius * 2.2;
      const y = (Math.random() - 0.5) * radius * 1.6;
      const z = (Math.random() - 0.5) * radius * 1.5;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      velocities.push({
        x: (Math.random() - 0.5) * 0.04,
        y: (Math.random() - 0.5) * 0.04,
        z: (Math.random() - 0.5) * 0.03,
      });

      // Alternate between Neural Teal, Warm Gold, and Soft White
      const pick = Math.random();
      const c = pick > 0.65 ? goldColor : pick > 0.25 ? tealColor : softWhite;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Material with Soft Glow Point
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(0, 229, 255, 0.8)');
      gradient.addColorStop(0.7, 'rgba(0, 229, 255, 0.2)');
      gradient.addColorStop(1, 'rgba(0, 229, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const pointCloud = new THREE.Points(geometry, particleMaterial);
    scene.add(pointCloud);

    // Dynamic Connecting Lines (Synapses)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    // Max lines possible
    const maxLineSegments = 300;
    const linePositions = new Float32Array(maxLineSegments * 2 * 3);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(linesMesh);

    // Floating Golden Synapse Core Ring
    const torusGeometry = new THREE.TorusGeometry(32, 0.2, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.12,
      wireframe: true,
    });
    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
    torusMesh.rotation.x = Math.PI / 3;
    scene.add(torusMesh);

    // Mouse & Scroll Interactivity
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (event: MouseEvent) => {
      mouse.targetX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = -(event.clientY / window.innerHeight - 0.5) * 2;
    };

    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY || window.pageYOffset;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Parallax rotation & subtle drift
      pointCloud.rotation.y = elapsedTime * 0.03 + mouse.x * 0.4;
      pointCloud.rotation.x = Math.sin(elapsedTime * 0.02) * 0.1 + mouse.y * 0.25;
      torusMesh.rotation.z = elapsedTime * 0.04;
      torusMesh.rotation.x = Math.PI / 3 + mouse.y * 0.2;

      // Scroll camera reaction
      camera.position.y = -scrollY * 0.015;

      // Update particle positions & bounce within box
      const posArray = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3] += velocities[i].x;
        posArray[i * 3 + 1] += velocities[i].y;
        posArray[i * 3 + 2] += velocities[i].z;

        if (Math.abs(posArray[i * 3]) > radius * 1.1) velocities[i].x *= -1;
        if (Math.abs(posArray[i * 3 + 1]) > radius * 0.8) velocities[i].y *= -1;
        if (Math.abs(posArray[i * 3 + 2]) > radius * 0.8) velocities[i].z *= -1;
      }
      geometry.attributes.position.needsUpdate = true;

      // Recompute dynamic synapses between close nodes
      let lineIndex = 0;
      const connectionDist = 18;
      const linePos = lineGeometry.attributes.position.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = posArray[i * 3] - posArray[j * 3];
          const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
          const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectionDist && lineIndex < maxLineSegments * 2 * 3) {
            linePos[lineIndex++] = posArray[i * 3];
            linePos[lineIndex++] = posArray[i * 3 + 1];
            linePos[lineIndex++] = posArray[i * 3 + 2];

            linePos[lineIndex++] = posArray[j * 3];
            linePos[lineIndex++] = posArray[j * 3 + 1];
            linePos[lineIndex++] = posArray[j * 3 + 2];
          }
        }
      }

      // Zero-out remaining line segments
      for (let k = lineIndex; k < maxLineSegments * 2 * 3; k++) {
        linePos[k] = 0;
      }
      lineGeometry.setDrawRange(0, lineIndex / 3);
      lineGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      renderer.dispose();
    };
  }, [interactive]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-75"
      style={{
        background: 'radial-gradient(ellipse at 50% 15%, #101622 0%, #0B0D10 70%)',
      }}
    />
  );
};
