import React from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/HeroSection";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";

const App = () => {
  return (
    <div >
      <Navbar />
      <div>
      <Hero />
      </div>
      <div className='bg-gray-200'>
        <Features />
        <Pricing />
      </div>
    </div>
  )
}

export default App