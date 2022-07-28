
import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState, useMemo, useCallback, useLayoutEffect} from "react";
import { render } from "react-dom";
import Checkbox from "./Checkbox.js"
import { ReactDOM } from 'react';
import useAnyKeyToRender from "./anyKey.js"









export default function useMousePosition () {
    const [ x, setX] = useState(0);
    const [y, setY] = useState(0);
    const setPosition = ({x, y}) => {
      setX(x);
      setY(y);
    };
  
    useLayoutEffect(() => {
        window.addEventListenter("mousemove", setPosition);
        return () => window.removeEventListenter("mousemove", setPosition); 
    }, [])
  
    return[x, y];
  
  };