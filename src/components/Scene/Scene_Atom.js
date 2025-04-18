import React, { useEffect, useRef } from "react";
import * as THREE from 'three';
import { useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
// import { Physics, RigidBody } from '@react-three/rapier';

const Sun = () => {
    const sunRef = useRef();
    return ( 
        <mesh ref={sunRef} position={[0, 0, 0]}> 
            <sphereGeometry args={[5, 32, 32]} />
            <meshBasicMaterial color="yellow" /> 
        </mesh> 
    ); 
}; 

const Earth = ({ sunRef }) => {
    const earthRef = useRef();
    const earthOrbitRef = useRef(); 
    useFrame(({ clock }) => 
        { 
            const t = clock.getElapsedTime(); 
            earthOrbitRef.current.rotation.y = t * 0.5; // Earth's orbit around the Sun 
            earthRef.current.rotation.y = t * 1; // Earth's rotation 
        }
    ); 
    
    return ( 
        <group ref={earthOrbitRef}> 
            <mesh ref={earthRef} position={[20, 0, 0]}> 
                <sphereGeometry args={[2, 32, 32]} /> 
                <meshStandardMaterial color="blue" /> 
            </mesh> 
        </group> 
    ); 
}; 

const Moon = ({ earthRef }) => { 
    const moonRef = useRef(); 
    const moonOrbitRef = useRef(); 
    useFrame(({ clock }) => { 
        const t = clock.getElapsedTime(); 
        moonOrbitRef.current.rotation.y = t * 2; // Moon's orbit around the Earth 
        moonRef.current.rotation.y = t * 0.1; // Moon's rotation 
    }); 
    return ( 
        <group ref={moonOrbitRef} position={[20, 0, 0]}> 
            <mesh ref={moonRef} position={[5, 0, 0]}> 
                <sphereGeometry args={[0.5, 32, 32]} /> 
                <meshStandardMaterial color="grey" /> 
            </mesh> 
        </group> 
    ); 
}; 

const SolarSystem = () => { 
    const sunRef = useRef(); 
    const earthRef = useRef(); 
    return (<> 
            <Sun ref={sunRef} /> 
            <Earth sunRef={sunRef} ref={earthRef} /> 
            <Moon earthRef={earthRef} /> 
            </> 
    );
}


// Root node - Scene contain the backgroud color and fog
export default function Scene_Atom() {
    const { camera } = useThree();
    const cameraRef = useRef(camera);
    const lightRef = useRef();
    const radius = 1;
    const widthSegments = 24;
    const heightSegments = 24;

    const lightPosition = new THREE.Vector3(0, 0, 0);

    const atom = useRef();
    const electron_one = useRef();
    const electron_two = useRef();
    const electron_three = useRef();

    useEffect(() => {
        if (camera) {
            camera.position.set(0, 50, 0);
            camera.up.set(0, 0, 1);
            camera.lookAt(0, 0, 0);
            camera.updateProjectionMatrix();
        }
    }, [camera]);

    useFrame(() => {
        if (lightRef.current && camera) {
            lightRef.current.position.copy(camera.position);
        }

        if (electron_one.current) {
            electron_one.current.position.x = Math.sin(Date.now() * 0.002) * 10;
            electron_one.current.position.y = Math.cos(Date.now() * 0.002) * 10;
            electron_one.current.position.z = Math.sin(Date.now() * 0.002) * 10;
        }

        if (electron_two.current) {
            electron_two.current.position.x = -Math.sin(Date.now() * 0.001) * 10;
            electron_two.current.position.y = Math.cos(Date.now() * 0.001) * 10;
            electron_two.current.position.z = Math.sin(Date.now() * 0.001) * 10;
        }

        if (electron_three.current) {
            electron_three.current.position.x = Math.sin(Date.now() * 0.0008) * 15;
            electron_three.current.position.y = Math.cos(Date.now() * 0.0008) * 10;
            electron_three.current.position.z = 0;
        }
    });

  return (
    <>
     <PerspectiveCamera
        makeDefault
        fov={40}
        aspect={2}
        near={0.1}
        far={1000}
        up={[0, 0, 0]}
      />
        {/* Add lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={lightPosition} intensity={1} />

        <SolarSystem />
        <spotLight
                ref={lightRef}
                position={[0, 50, 0]}
                angle={0.5}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
        {/* Method 3: Dynamic position with useFrame */}
        <mesh ref={atom}>
            <sphereGeometry args={[radius, widthSegments, heightSegments]} />
            <meshStandardMaterial color="#61dafb" />
        </mesh>

        <mesh ref={electron_one} castShadow>
            <sphereGeometry args={[radius, widthSegments, heightSegments]} />
            <meshStandardMaterial color="#61dafb" />
        </mesh>

        <mesh ref={electron_two} castShadow>
            <sphereGeometry args={[radius, widthSegments, heightSegments]} />
            <meshStandardMaterial color="#61dafb" />
        </mesh>

        <mesh ref={electron_three} castShadow>
            <sphereGeometry args={[radius, widthSegments, heightSegments]} />
            <meshStandardMaterial color="#61dafb" />
        </mesh>

      {/* Add orbit controls for interaction */}
      <OrbitControls 
        camera={camera}
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={5}
        maxDistance={100}
      />
    </>
  );
}