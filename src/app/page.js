'use client'

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const Home = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#f0f0f0");

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Dodecahedron setup
    const geometry = new THREE.DodecahedronGeometry();
    const material = new THREE.MeshLambertMaterial({
      color: "#468585",
      emissive: "#468585",
    });
    const dodecahedron = new THREE.Mesh(geometry, material);
    scene.add(dodecahedron);

    // Box setup
    const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
    const boxMaterial = new THREE.MeshStandardMaterial ({
      color: "#b4b4b3",
      emissive: "#b4b4b3",
    });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.y = -1.5;
    scene.add(box);
 
    // Light setup
    const light = new THREE.DirectionalLight(0x006769, 100);
    light.position.set(1, 1, 1);
    scene.add(light);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append renderer to the DOM
    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    // OrbitControls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Smooth damping effect
    controls.dampingFactor = 0.05; // Controls the damping speed
    controls.enablePan = true;
    controls.enableZoom = true;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate objects
      dodecahedron.rotation.x += 0.01;
      dodecahedron.rotation.y += 0.01;

      box.rotation.y += 0.01;

      // Update controls
      controls.update();

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100vh" }}>
      {/* The Three.js scene will be rendered here */}
    </div>
  );
};

export default Home;
