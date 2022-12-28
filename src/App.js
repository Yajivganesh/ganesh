import React from 'react'
import"./index.css";
import Home from "./routes/Home";
import {Helmet} from "react-helmet";
// import Img5 from "./Assets/Img5.png"
// import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Helmet className="ico">
                <meta charSet="utf-8" />
                <title>Vijay Ganesh</title>
                <link rel="icon" type="image/png" href="./Assets/Img5.png" sizes="16x16" />
            </Helmet>
      <Home/>
      
    </div>
  )
}

export default App