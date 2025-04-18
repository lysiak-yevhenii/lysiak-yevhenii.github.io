import React, { forwardRef, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PLANET_SIZES, ORBITAL_DISTANCES, ORBITAL_SPEEDS } from '../../../utils/PlanetScales';
import { PLANET_COLORS } from '../../../utils/PlanetColors';

const Mars = forwardRef(({ sunRef }, ref) => {
    const marsOrbitRef = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        marsOrbitRef.current.rotation.y = t * ORBITAL_SPEEDS.MARS;
        ref.current.rotation.y = t * 1;
    });

    return (
        <group ref={marsOrbitRef}>
            <mesh ref={ref} position={[ORBITAL_DISTANCES.MARS, 0, 0]} castShadow receiveShadow>
                <sphereGeometry args={[PLANET_SIZES.MARS, 32, 32]} />
                <meshStandardMaterial color={PLANET_COLORS.MARS} />
            </mesh>
        </group>
    );
});

export default Mars;