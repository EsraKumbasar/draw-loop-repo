import React from 'react';
import S1 from './Components/S1.js';
import S2 from './Components/S2.js';
import S3 from './Components/S3.js';
import S4 from './Components/S4.js';
import ArrowTest from './Components/ArrowTest';
import LeftArrow from './Components/LeftArrow';
import RightArrow from './Components/RightArrow';
import UpArrow from './Components/UpArrow';
import './App.css'; 



function App() {
  return (
    <div className="App">
      <S1/>
      <S2/>
      <S3/>
      <S4/>
      <ArrowTest></ArrowTest>
      <LeftArrow></LeftArrow>
      <RightArrow></RightArrow>
      <UpArrow></UpArrow>
      <br></br>
      <br></br>
      <h1>client</h1>
    </div>
  );
}


export default App;
