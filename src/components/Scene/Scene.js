import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from 'three';
import Player from "../Player/Player";
import { Canvas, useThree } from "@react-three/fiber";

export default function Scene() {
  const { camera } = useThree();
  const cameraRef = useRef(camera);

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

      {/* Player */}
      <Player camera={camera} />

      {/* Controls */}
      <OrbitControls
        ref={camera}
        mouseButtons={{
          LEFT: THREE.MOUSE.RIGHT, // Swap left button to right button functionality
          RIGHT: THREE.MOUSE.LEFT, // Swap right button to left button functionality
        }}
      />
    </>
  );
}