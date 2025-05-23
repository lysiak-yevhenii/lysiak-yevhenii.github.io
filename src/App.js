import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { useAnimations, useGLTF } from "@react-three/drei";
import Scene from "./components/Scene/Scene.js";
import Scene_Menu from "./components/Scene/Scene_Menu.js";
import Scene_Atom from "./components/Scene/Scene_Atom.js";
import Scene_Solar_System from "./components/Scene/Scene_Solar_System.js";
import "./App.css"; // Import the CSS file

export default function App() {
  // statring position for the camera
  // shadows camera={{ position: [1, 1.5, 2.5], fov: 50 }}
  return (
    <div>
      <div>
        <form action="https://go.ly-dev.work/l/1017302/2025-04-17/2vr7dg">
          Email: <br />
          <input type="text" name="email"></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
      <iframe
        title="Pardot"
        src="https://go.ly-dev.work/l/1017302/2025-04-22/2vw5jc"
        width="100%"
        height="500"
        type="text/html"
        frameborder="0"
        allowTransparency="true"
        style={{ border: 0 }}
      ></iframe>
      <div className="canvas-container">
        <Canvas shadows>
          <Suspense fallback={"<div>Loading...<div/>"}>
            <Scene_Solar_System />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
