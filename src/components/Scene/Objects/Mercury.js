import React, { forwardRef, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PLANET_SIZES, ORBITAL_DISTANCES, ORBITAL_SPEEDS } from '../../../utils/PlanetScales';
import { PLANET_COLORS } from '../../../utils/PlanetColors';

const Mercury = forwardRef(({ sunRef }, ref) => {
    const mercuryOrbitRef = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        mercuryOrbitRef.current.rotation.y = t * ORBITAL_SPEEDS.MERCURY;
        ref.current.rotation.y = t * 1;
    });

    return (
        <group ref={mercuryOrbitRef}>
            <mesh ref={ref} position={[ORBITAL_DISTANCES.MERCURY, 0, 0]} castShadow receiveShadow>
                <axesHelper args={[5]} />
                <sphereGeometry args={[PLANET_SIZES.MERCURY, 32, 32]} />
                <meshStandardMaterial color={PLANET_COLORS.MERCURY} />
            </mesh>
        </group>
    );
});

export default Mercury;