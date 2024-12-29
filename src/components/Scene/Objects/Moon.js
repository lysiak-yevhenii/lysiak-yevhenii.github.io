import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PLANET_SIZES, ORBITAL_DISTANCES, ORBITAL_SPEEDS } from '../../../utils/PlanetScales';
import { PLANET_COLORS } from '../../../utils/PlanetColors';

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
            <mesh ref={moonRef} position={[ORBITAL_DISTANCES.MOON, 0, 0]} castShadow receiveShadow>
                <axesHelper args={[2]} />
                <sphereGeometry args={[PLANET_SIZES.MOON, 32, 32]} />
                <meshStandardMaterial color={PLANET_COLORS.MOON}/>
            </mesh>
        </group>
    );
};

export default Moon;