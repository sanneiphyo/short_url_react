import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Resource from './pages/Resource';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignupForm';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div className='bg-gray-200'>
                <Features />
                <Pricing />
                <Resource />
              </div>
            </>
          } />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
