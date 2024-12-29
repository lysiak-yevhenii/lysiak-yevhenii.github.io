import React, { forwardRef, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Moon from './Moon';
import { PLANET_SIZES, ORBITAL_DISTANCES, ORBITAL_SPEEDS } from '../../../utils/PlanetScales';
import { PLANET_COLORS } from '../../../utils/PlanetColors';

const Earth = forwardRef(({ sunRef }, ref) => {
    const earthOrbitRef = useRef();
    
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        earthOrbitRef.current.rotation.y = t * ORBITAL_SPEEDS.EARTH;
        ref.current.rotation.y = t * 1;
    });

    return (
        <group ref={earthOrbitRef}>
            <mesh ref={ref} position={[ORBITAL_DISTANCES.EARTH, 0, 0]} castShadow receiveShadow>
                <axesHelper args={[5]} />
                <sphereGeometry args={[PLANET_SIZES.EARTH, 32, 32]} />
                <meshStandardMaterial color={PLANET_COLORS.EARTH} />
            </mesh>
            <Moon earthRef={ref} castShadow receiveShadow/>
            
        </group>
    );
});

export default Earth;