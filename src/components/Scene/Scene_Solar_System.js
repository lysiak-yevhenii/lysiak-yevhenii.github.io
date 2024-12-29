import React, { useEffect, useRef, forwardRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import PropTypes from 'prop-types';
import * as THREE from 'three';

const Sun = forwardRef((props, ref) => {
    // Negative X direction light comes from left side
    // Positive X direction light comes from right side
    const directLightTarget = new THREE.Vector3(-1, 0, 0);
    const directLightPostition = new THREE.Vector3(-10, 0, 0);


    return ( 
        <>  
            {/* <LightDirection position={directLightPostition} target={directLightTarget} />
            <mesh position={directLightPostition} castShadow>
                <boxGeometry args={[1, 5, 5]} />
                <directionalLight castShadow color={0xFFFFFF} intensity={5} position={directLightTarget} shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-near={0.5}
                    shadow-camera-far={500}/>
                <axesHelper args={[10]} />
            </mesh> */}
            <pointLight 
                        position={[0, 0, 0]} 
                        intensity={1000} 
                        color="white" 
                        castShadow 
            /> 
            
            <ambientLight intensity={0.2} />

            {/* Red - X, Green - Y, Blue - Z */}
            <mesh ref={ref} position={[0, 0, 0]}> 
                <axesHelper args={[10]} />
                <sphereGeometry args={[5, 32, 32]} />
                <meshStandardMaterial 
                    color="yellow"
                    emissive="orange"
                    emissiveIntensity={2}
                    toneMapped={false}
                /> 
            </mesh>
        </>
    );
});

const Moon = ({ earthRef }) => {
    const moonRef = useRef();
    const moonOrbitRef = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        if (earthRef.current) {
            moonOrbitRef.current.position.copy(earthRef.current.position);
        }
        moonOrbitRef.current.rotation.y = t * 0.5;
    });

    return (
        <group ref={moonOrbitRef}>
            <mesh ref={moonRef} position={[5, 0, 0]} castShadow receiveShadow>
                <axesHelper args={[2]} />
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="grey" />
            </mesh>
        </group>
    );
};

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

const Earth = forwardRef(({ sunRef }, ref) => {
    const earthOrbitRef = useRef();
    
    
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        earthOrbitRef.current.rotation.y = t * 0.2;
        ref.current.rotation.y = t * 1;
    });

    return (
        <group ref={earthOrbitRef}>
            <mesh ref={ref} position={[20, 0, 0]} castShadow receiveShadow>
                <axesHelper args={[5]} />
                <sphereGeometry args={[2, 32, 32]} />
                <meshStandardMaterial color="blue" />
            </mesh>
            <Moon earthRef={ref} castShadow receiveShadow/>
            
        </group>
    );
});

Moon.propTypes = {
    earthRef: PropTypes.object.isRequired
};

Earth.propTypes = {
    sunRef: PropTypes.object.isRequired
};

Sun.displayName = 'Sun';
Earth.displayName = 'Earth';

const SolarSystem = () => { 
    const sunRef = useRef(); 
    const earthRef = useRef(); 
    return (
        <> 
            <Sun ref={sunRef} /> 
            <Earth sunRef={sunRef} ref={earthRef} /> 
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