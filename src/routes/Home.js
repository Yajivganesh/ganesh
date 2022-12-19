import React from 'react'
import Navbar from '../Components/Navbar';
import HeroImg from "../Components/HeroImg";
import About from "../Components/About"
import Summary from '../Components/Summary';
import Footer from "../Components/Footer"


const Home = () => {
  return (
    <div id='Home'>
      <Navbar/>
      <HeroImg/>
      <About/>
      <Summary/>
      <Footer/>
     
    </div>
  )
}

export default Home
