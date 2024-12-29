import React, { forwardRef, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PLANET_SIZES, ORBITAL_DISTANCES, ORBITAL_SPEEDS } from '../../../utils/PlanetScales';
import { PLANET_COLORS } from '../../../utils/PlanetColors';

const Jupiter = forwardRef(({ sunRef }, ref) => {
    const jupiterOrbitRef = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        jupiterOrbitRef.current.rotation.y = t * ORBITAL_SPEEDS.JUPITER;
        ref.current.rotation.y = t * 1;
    });

    return (
        <group ref={jupiterOrbitRef}>
            <mesh ref={ref} position={[ORBITAL_DISTANCES.JUPITER, 0, 0]} castShadow receiveShadow>
                <sphereGeometry args={[5, 32, 32]} />
                <meshStandardMaterial color={PLANET_COLORS.JUPITER} />
            </mesh>
        </group>
    );
});

export default Jupiter;