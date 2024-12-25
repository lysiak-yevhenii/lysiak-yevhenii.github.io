import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';

export default function Player({ camera }) {
  const playerRef = useRef();
  const targetPosition = useRef(new THREE.Vector3());
  const MOVE_SPEED = 0.1;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!playerRef.current || !camera) return;
      

      // Calculate right vector
      const right = new THREE.Vector3(1, 0, 0);
      const left = new THREE.Vector3(-1, 0, 0);
      const up = new THREE.Vector3(0, 0, 1);
      const down = new THREE.Vector3(0, 0, -1);
    //   right.applyAxisAngle(new THREE.Vector3(0, 1, 0), camera.current.rotation.y);

      switch (event.key) {
        case "ArrowUp":
        case "w":
          playerRef.current.position.addScaledVector(up, MOVE_SPEED);
          break;
        case "ArrowDown":
        case "s":
          playerRef.current.position.addScaledVector(down, MOVE_SPEED);
          break;
        case "ArrowLeft":
        case "a":
          playerRef.current.position.addScaledVector(left, MOVE_SPEED);
          break;
        case "ArrowRight":
        case "d":
          playerRef.current.position.addScaledVector(right, MOVE_SPEED);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [camera]);

  useFrame(() => {
    if (playerRef.current && camera) {
      // Update camera position
    //   console.log('---------------CAMERA-----------------');
    //   console.log(camera.object.position);
      const direction = new THREE.Vector3();
      const offset = new THREE.Vector3(0, 2, 5);
      targetPosition.current.copy(playerRef.current.position).add(offset);
    //   camera.getWorldDirection(direction);
        // console.log('--------------------------------');
    //   camera.position.lerp(targetPosition.current, 0.1);
    //   camera.lookAt(playerRef.current.position);
    }
  });

  return (
    <mesh ref={playerRef} position={[0, 0.5, 0]} castShadow>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}