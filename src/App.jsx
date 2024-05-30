import React from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/HeroSection";
import Features from "./pages/Features";
import Pricing from "./pages/pricing"

const App = () => {
  return (
    <>
      <Navbar />
      <div>
      <Hero />
      </div>
      <div>
        <Features />
        <Pricing />
      </div>
    </>
  )
}

export default App