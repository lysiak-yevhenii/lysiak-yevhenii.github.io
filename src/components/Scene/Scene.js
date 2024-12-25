import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from 'three';
import Player from "../Player/Player";
import { Canvas, useThree } from "@react-three/fiber";

export default function Scene() {
  const { camera } = useThree();
  const cameraRef = useRef(camera);

  // Function to generate random positions for buildings
  const generateBuildings = (count) => {
    const buildings = [];
    const roadPositions = new Set();

    // Create a grid of roads
    for (let i = -10; i <= 10; i += 4) {
      roadPositions.add(`${i},0`);
      roadPositions.add(`0,${i}`);
    }

    while (buildings.length < count) {
      const x = Math.floor(Math.random() * 20) - 10;
      const z = Math.floor(Math.random() * 20) - 10;
      const height = Math.random() * 3 + 1;

      // Ensure buildings are not placed on roads
      if (!roadPositions.has(`${x},${z}`)) {
        buildings.push({ x, z, height });
      }
    }

    return buildings;
  };

  const buildings = generateBuildings(30);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[5, 5, 5]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Ground */}
      <mesh receiveShadow position={[0, -0.5, 0]}>
        <boxGeometry args={[20, 1, 20]} />
        <meshStandardMaterial color="green" />
      </mesh>

      {/* Roads */}
      {Array.from({ length: 6 }, (_, i) => i - 2.5).map((i) => (
        <React.Fragment key={i}>
          <mesh receiveShadow position={[i * 4, 0.01, 0]}>
            <boxGeometry args={[1, 0.1, 20]} />
            <meshStandardMaterial color="grey" />
          </mesh>
          <mesh receiveShadow position={[0, 0.01, i * 4]}>
            <boxGeometry args={[20, 0.1, 1]} />
            <meshStandardMaterial color="grey" />
          </mesh>
        </React.Fragment>
      ))}

      {/* Buildings */}
      {buildings.map((building, index) => (
        <mesh key={index} castShadow position={[building.x, building.height / 2, building.z]}>
          <boxGeometry args={[1, building.height, 1]} />
          <meshStandardMaterial color="brown" />
          {/* Windows */}
          {Array.from({ length: Math.floor(building.height * 2) }, (_, i) => (
            <mesh key={i} position={[0, i * 0.5 - building.height / 2 + 0.25, 0.51]}>
              <boxGeometry args={[0.2, 0.2, 0.1]} />
              <meshStandardMaterial color="lightblue" />
            </mesh>
          ))}
        </mesh>
      ))}

      {/* Player */}
      <Player camera={cameraRef.current} />

      {/* Controls */}
      <OrbitControls
        ref={cameraRef}
        mouseButtons={{
          LEFT: THREE.MOUSE.RIGHT, // Swap left button to right button functionality
          RIGHT: THREE.MOUSE.LEFT, // Swap right button to left button functionality
        }}
      />
    </>
  );
}