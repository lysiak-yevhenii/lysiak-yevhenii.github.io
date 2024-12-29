import React, { forwardRef, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PLANET_SIZES, ORBITAL_DISTANCES, ORBITAL_SPEEDS } from '../../../utils/PlanetScales';
import { PLANET_COLORS } from '../../../utils/PlanetColors';

const Saturn = forwardRef(({ sunRef }, ref) => {
    const saturnOrbitRef = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        saturnOrbitRef.current.rotation.y = t * ORBITAL_SPEEDS.SATURN;
        ref.current.rotation.y = t * 1;
    });

    return (
        <group ref={saturnOrbitRef}>
            <mesh ref={ref} position={[ORBITAL_DISTANCES.SATURN, 0, 0]} castShadow receiveShadow>
                <sphereGeometry args={[PLANET_SIZES.SATURN, 32, 32]} />
                <meshStandardMaterial color={PLANET_COLORS.SATURN} />
            </mesh>
        </group>
    );
});

export default Saturn;