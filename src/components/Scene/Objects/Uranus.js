import React, { forwardRef, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PLANET_SIZES, ORBITAL_DISTANCES, ORBITAL_SPEEDS } from '../../../utils/PlanetScales';
import { PLANET_COLORS } from '../../../utils/PlanetColors';

const Uranus = forwardRef(({ sunRef }, ref) => {
    const uranusOrbitRef = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        uranusOrbitRef.current.rotation.y = t * ORBITAL_SPEEDS.URANUS;
        ref.current.rotation.y = t * 1;
    });

    return (
        <group ref={uranusOrbitRef}>
            <mesh ref={ref} position={[ORBITAL_DISTANCES.URANUS, 0, 0]} castShadow receiveShadow>
                <sphereGeometry args={[PLANET_SIZES.URANUS, 32, 32]} />
                <meshStandardMaterial color={PLANET_COLORS.URANUS} />
            </mesh>
        </group>
    );
});

export default Uranus;