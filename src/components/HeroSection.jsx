import React from 'react';
import picture from "../assets/picture.svg";

const HeroSection = () => {
  return (
    <div
      id="HeroSection"
      className="flex flex-col md:flex-row h-[28rem]"
    >
      {/* Text section */}
      <div className='flex flex-col mx-[11%] mt-[8rem]'>
        <h1 className='text-6xl font-extrabold'>More than just shorter links</h1>
        <p className='text-gray-700 font-mono mt-5'>
          Build your own brand's recognition and get detailed<br />
          insights on how your links are performing.
        </p>
        {/* Get Started button */}
        <a
          href="#features"
          className='text-black bg-[#5eead4] hover:bg-[#10b981] hover:text-white py-2 font-semibold w-32 mt-3 rounded-2xl text-center cursor-pointer'
        >
          Get Started
        </a>
      </div>

      {/* Illustration */}
      <div className='flex flex-col w-1/2 mx-[10rem] sm:mx-3 items-end justify-center'>
        <img src={picture} alt="Illustration" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default HeroSection;
