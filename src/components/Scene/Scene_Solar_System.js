import React, { useEffect, useRef, forwardRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from 'three';
import Sun from './Objects/Sun';
import Earth from './Objects/Earth';
import Mercury from "./Objects/Mercury";
import Venus from "./Objects/Venus";
import Mars from "./Objects/Mars";
import Jupiter from "./Objects/Jupiter";
import Saturn from "./Objects/Saturn";
import Neptune from "./Objects/Neptune";
import Uranus from "./Objects/Uranus";

const LightDirection = ({ position, target }) => {
    const light = useRef();
    // Create a line to show the light path const 
    const lightPath = new THREE.BufferGeometry().setFromPoints([ position, target ]);
    
    return (
        <>
            <line geometry={lightPath}> 
                <lineBasicMaterial attach="material" color="yellow" /> 
            </line> 
            <pointLight ref={light} position={[0, 0, 0]} intensity={1} color="white" />
        </>
    );
}

const SolarSystem = () => { 
    const sunRef = useRef(); 
    const earthRef = useRef(); 
    return (
        <> 
            <Sun ref={sunRef} /> 
            <Mercury ref={sunRef} />
            <Venus ref={sunRef} />
            <Earth sunRef={sunRef} ref={earthRef} /> 
            <Mars ref={sunRef} />
            <Jupiter ref={sunRef} />
            <Saturn ref={sunRef} />
            <Uranus ref={sunRef} />
            <Neptune ref={sunRef} />
        </> 
    );
}


// Root node - Scene contain the backgroud color and fog
export default function Scene_Solar_System() {
    const { camera } = useThree();
    const lightRef = useRef();

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

    });

  return (
    <>
        <PerspectiveCamera
            makeDefault
            fov={60}
            aspect={2}
            near={0.1}
            far={1000}
            up={[0, 0, 0]}
        />

        <SolarSystem />
        

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