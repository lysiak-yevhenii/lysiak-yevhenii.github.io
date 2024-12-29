import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

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

export default Moon;