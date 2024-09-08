import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import './index.css'; // Make sure you have the CSS in place

const Model = () => {
  const rendererRef = useRef(null);

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Enable alpha for transparency
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    
    // Set the size of the renderer to a smaller window, e.g., 800x600
    renderer.setSize(800, 600);
    
    renderer.setClearColor(0x000000, 0); // Set the background color to transparent (0 for the alpha channel)
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    if (rendererRef.current) {
      rendererRef.current.appendChild(renderer.domElement);
    }

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, 800 / 600, 1, 1000); // Adjust the aspect ratio based on the new size
    camera.position.set(0, 0, 10); // Adjust camera position if needed

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 5;
    controls.maxDistance = 20;
    controls.minPolarAngle = 0.5;
    controls.maxPolarAngle = 1.5;
    controls.autoRotate = false;
    controls.target = new THREE.Vector3(0, 1, 0);
    controls.update();

    // Ground
    const groundGeometry = new THREE.PlaneGeometry(0, 0, 0, 0);
    groundGeometry.rotateX(-Math.PI / 2);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x555555,
      side: THREE.DoubleSide
    });
    
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.castShadow = false;
    groundMesh.receiveShadow = true;
    scene.add(groundMesh);

    // Light
    const spotLight = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
    spotLight.position.set(25, 25, 25);
    spotLight.castShadow = true;
    spotLight.shadow.bias = -0.0000;
    scene.add(spotLight);

    // Load GLTF model
    const loader = new GLTFLoader().setPath('/millennium_falcon/');
    loader.load('scene.gltf', (gltf) => {
      console.log('Loading model');
      const mesh = gltf.scene;

      mesh.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      mesh.scale.set(15, 15, 15);
      mesh.position.set(0, 0.05, -1);
      scene.add(mesh);

      document.getElementById('progress-container').style.display = 'none';
    }, (xhr) => {
      console.log(`Loading ${xhr.loaded / xhr.total * 100}%`);
    }, (error) => {
      console.error(error);
    });

    // Handle window resize
    const handleResize = () => {
      camera.aspect = 800 / 600; // Keep the aspect ratio consistent
      camera.updateProjectionMatrix();
      renderer.setSize(800, 600); // Adjust size based on new dimensions
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      rendererRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className='con'>
      <div id="heading">
        
     
      </div>
      <div id="progress-container">
        <div id="progress">Engaging Hyperdrive...</div>
      </div>
      <div ref={rendererRef}></div>
    </div>
  );
};

export default Model;
