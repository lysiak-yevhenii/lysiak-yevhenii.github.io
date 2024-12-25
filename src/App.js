import react, { useEffect, useState } from 'react';
import {Canvas, useFrame} from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import Menu from "./components/Menu/Menu";
import MainPage from "./components/MainPage/MainPage";

import "./index.css";
import './App.css';
import { OrbitControls } from '@react-three/drei';

const RoatatingCube = () =>{
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current){
      meshRef.current.roation.y += 0.01
      meshRef.current.roation.x += 0.01
    }
  })
  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1,1,1]}></cylinderGeometry>
      <meshLambertMaterial color="#468585" emissive="#468585"></meshLambertMaterial>
    </mesh>
  )
}

function App () {

  console.log(window.matchMedia('(max-width: 480px)'));

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange () {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return (
    <div>
      <Canvas style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <OrbitControls enableZoom={true} enablePan></OrbitControls>
        <directionalLight position={[1,1,1]} intensity={10} color={0x9CDBA6}></directionalLight>
        <color attach="background" args={['#F0F0F0']}></color>
        <RoatatingCube></RoatatingCube>
      </Canvas>
      <Menu app-size={width} />
      <MainPage app-size={width} />
    </div>
  );
}


export default App;
