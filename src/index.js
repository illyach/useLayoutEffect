import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 
import UseWindowSize  from "./App.js";
import UseMousePosition from './UseMousePosition.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <h1 >Your window size is </h1>
  <UseWindowSize/>
  
  </>
);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
