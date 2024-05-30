import React from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/HeroSection";
import Features from "./pages/Features";

const App = () => {
  return (
    <>
      <Navbar />
      <div>
      <Hero />
      </div>
      <div>
        <Features />
      </div>
    </>
  )
}

export default App