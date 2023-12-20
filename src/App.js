import react, { useEffect, useState } from 'react';
import Menu from "./components/Menu/Menu";
import MainPage from "./components/MainPage/MainPage";

import "./index.css";
import './App.css';

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
      <Menu app-size={width} />
      <MainPage app-size={width} />
    </div>
  );
}


export default App;
