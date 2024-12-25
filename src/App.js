import react, { useEffect, useState , useRef} from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from '@react-three/drei';
import Menu from "./components/Menu/Menu";
import MainPage from "./components/MainPage/MainPage";

import "./index.css";
import './App.css';

const RoatatingCube = () =>{
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current){
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })
  console.log(meshRef);
  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1,1,1]}></cylinderGeometry>
      <meshLambertMaterial color="#468585" emissive="#468585"></meshLambertMaterial>

      <Sparkles count={1000} scale={1} size={6} speed={0.9} noise={0.2} color="orange"></Sparkles>
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
        <OrbitControls enableZoom enablePan enableRotate></OrbitControls>
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
