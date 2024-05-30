import React from 'react';
import picture from "../assets/picture.svg"

const HeroSection = () => {
  return (
    <div
    id= "Hero Section "
    className ="flex flex-col md:flex-row h-[29rem]  "
    >
          {/**text section */}  
        <div className='flex flex-col mx-[11%] mt-[8rem]'>
            <h1 className='text-6xl font-extrabold '>More than just 
            shorter links</h1>

            <p className='text-gray-700 font-mono mt-5'>build your own brand's recgonition and get detailed <br/>
            insights on how your links are performing.
            </p>
            {/**started button */}
            <button className='hover:text-white bg-[#5eead4] py-2 font-semibold w-32 mt-3 rounded-2xl'>Get started</button>
        </div>

        {/**illustration */}
        <div className='flex flex-col  w-1/2 mx-[10rem] sm:mx-3   items-end justify-center'>
        <img src={picture} alt="Illustration" className="w-full h-auto " />
        </div>
    </div>
  )
}

export default HeroSection