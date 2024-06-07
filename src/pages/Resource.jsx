
import React from 'react';
import Footer from "../components/Footer";

const Resource = () => {
  return (
    <div className= ' h-[35rem] sm:h-[12rem] ' >
       {/** boost link */}
      <div className='mt-[25rem] mb-14 sm:mt-5 mx-24 sm:mx-[29rem]'>

        <h1 className='font-bold text-4xl '>Boost your links today</h1>
        <button className='hover:text-white ml-[27%] mt-5 bg-[#5eead4] py-2 font-semibold w-32 mt-3 rounded-2xl  hover:bg-[#77a5d1] '>Get started</button>
      </div>
      {/**footer */}
      <div className='bg-gray-800 h-full mt-[5rem] '>
      <Footer/>
      </div>
    </div>
  )
}

export default Resource;
