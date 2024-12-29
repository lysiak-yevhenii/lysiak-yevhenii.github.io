import React, { forwardRef, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Moon from './Moon';

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

export default Earth;