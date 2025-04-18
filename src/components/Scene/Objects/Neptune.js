import React, { forwardRef, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PLANET_SIZES, ORBITAL_DISTANCES, ORBITAL_SPEEDS } from '../../../utils/PlanetScales';
import { PLANET_COLORS } from '../../../utils/PlanetColors';

const Neptune = forwardRef(({ sunRef }, ref) => {
    const neptuneOrbitRef = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        neptuneOrbitRef.current.rotation.y = t * ORBITAL_SPEEDS.NEPTUNE;
        ref.current.rotation.y = t * 1;
    });

    return (
        <group ref={neptuneOrbitRef}>
            <mesh ref={ref} position={[ORBITAL_DISTANCES.NEPTUNE, 0, 0]} castShadow receiveShadow>
                <sphereGeometry args={[PLANET_SIZES.NEPTUNE, 32, 32]} />
                <meshStandardMaterial color={PLANET_COLORS.NEPTUNE} />
            </mesh>
        </group>
    );
});

export default Neptune;