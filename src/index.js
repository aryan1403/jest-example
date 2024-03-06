import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/login';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/* 
function volume(l,b,h){
  return l*b*h;
}

let volume=(l)=>{
  return function(b){
    return function(h){
      return l*b*h;
    }
  }
}

console.log(volume(5)(6)(7));

const btn=document.getElementById("btn");
btn.addEventListener(e=>{
  e.preventDefault();
  console.log("im clickeds")
}) */