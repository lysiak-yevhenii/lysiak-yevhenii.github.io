import React, { Suspense, useEffect, useRef, useState } from "react";
import styles from "./MainPage.module.css";
import instagram_logo from "../../instagram.svg";
import youtube_logo from "../../youtube.svg";
import tiktok_logo from "../../tiktok.svg";
import salesforce_logo from "../../salesforce.svg";
import Scene from "../Scene/Scene";
import { Canvas, useFrame } from "@react-three/fiber";

const content = [
  [
    <Canvas shadows camera={{ position: [1, 1.5, 2.5], fov: 50 }}>
      <Suspense fallback={"<div>Loading...<div/>"}>
        <Scene />
      </Suspense>
    </Canvas>,
  ],
  ["[Demo]"],
  ["[Demo]"],
];

const MainPage = (props) => {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  const app_size = props["app-size"];

  const isMobile = app_size <= 480;

  return (
    <div className={styles.content}>
      <Header />

      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Tab 1
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Tab 2
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Tab 3
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={activeContentIndex}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
