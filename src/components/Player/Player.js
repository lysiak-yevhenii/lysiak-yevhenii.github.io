import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';

export default function Player({ camera }) {
  const playerRef = useRef();
  const CAMERA_DISTANCE = 6;
  const CAMERA_HEIGHT = 3;
  const MOVE_SPEED = 0.1;
  const LERP_FACTOR = 0.1;

  // Movement system
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!playerRef.current || !camera) return;

      // Get forward direction from camera
      const forward = new THREE.Vector3();
      forward.setFromMatrixColumn(camera.matrixWorld, 2);
      forward.y = 0;
      forward.normalize();

      // Calculate right vector (perpendicular to forward)
      const right = new THREE.Vector3();
      right.setFromMatrixColumn(camera.matrixWorld, 0);
      right.y = 0;
      right.normalize();

      switch (event.key) {
        case "w":
          playerRef.current.position.addScaledVector(forward, -MOVE_SPEED);
          break;
        case "s":
          playerRef.current.position.addScaledVector(forward, MOVE_SPEED);
          break;
        case "a":
          playerRef.current.position.addScaledVector(right, -MOVE_SPEED);
          break;
        case "d":
          playerRef.current.position.addScaledVector(right, MOVE_SPEED);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [camera]);

  // Camera follow system
  useFrame(() => {
    if (playerRef.current && camera) {
      // Get direction vector from camera to player
      const directionToPlayer = new THREE.Vector3();
      directionToPlayer.subVectors(camera.position, playerRef.current.position);
      directionToPlayer.y = 0; // Keep only horizontal direction
      directionToPlayer.normalize();
      
      // Calculate ideal camera position
      const idealPosition = playerRef.current.position.clone();
      idealPosition.add(directionToPlayer.multiplyScalar(CAMERA_DISTANCE));
      idealPosition.y = playerRef.current.position.y + CAMERA_HEIGHT;
      
      // Apply smooth camera movement
      camera.position.lerp(idealPosition, LERP_FACTOR);
      camera.lookAt(playerRef.current.position);
    }
  });

  return (
    <mesh ref={playerRef} position={[0, 0.5, 0]} castShadow>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}