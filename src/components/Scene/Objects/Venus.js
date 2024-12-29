import React, { forwardRef, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PLANET_SIZES, ORBITAL_DISTANCES, ORBITAL_SPEEDS } from '../../../utils/PlanetScales';

const Venus = forwardRef(({ sunRef }, ref) => {
    const venusOrbitRef = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        venusOrbitRef.current.rotation.y = t * ORBITAL_SPEEDS.VENUS;
        ref.current.rotation.y = t * 1;
    });

    return (
        <group ref={venusOrbitRef}>
            <mesh ref={ref} position={[ORBITAL_DISTANCES.VENUS, 0, 0]} castShadow receiveShadow>
                <sphereGeometry args={[PLANET_SIZES.VENUS, 32, 32]} />
                <meshStandardMaterial color="#d4a76a" />
            </mesh>
        </group>
    );
});

export default Venus;