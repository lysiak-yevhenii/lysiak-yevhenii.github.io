import * as THREE from 'three';
import React, { forwardRef } from 'react';

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

export default Sun;