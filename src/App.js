import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState, useMemo, useCallback, useLayoutEffect} from "react";



 export default function useWindowSize() {

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const resize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useLayoutEffect (() => {
    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize)
  }, [])

  return [width, "x", height];
  
}


