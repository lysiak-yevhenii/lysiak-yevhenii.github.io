import { Suspense, useEffect, useState, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useAnimations, useGLTF } from "@react-three/drei"
import Scene from "./components/Scene/Scene.js"
import './App.css'; // Import the CSS file

export default function App() {
  return (
    <div className="canvas-container">
      <Canvas shadows camera={{ position: [1, 1.5, 2.5], fov: 50 }}>
        <Suspense fallback={"<div>Loading...<div/>"}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}