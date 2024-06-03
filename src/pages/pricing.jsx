import React from 'react';
import recognition from "../assets/recognition.svg";
import record from "../assets/records.svg";
import customize from "../assets/icon-fully-customizable.svg"

const Pricing = () => {
  return (
   
<div className='flex flex-col h-[34rem] mt-[8rem]  sm:mt-[1rem]' >
        {/**Advanced Statistics */}
        <div className = " flex flex-col sm:ml-[30%] ">
        
             <h1 className='text-2xl font-bold justify-center mx-[16%] '> Advanced Statistics</h1> 
             <p className='text-gray-700 mx-12 font-roboto'>Track how your links are performing across the web with <br/>
             <span className='mx-[5rem]' >our advanced statstics dashboard</span></p>
        </div>
    

       {/**Advertizing the brand */}
        <div className='flex flex-col sm:flex-row gap-5 md:gap-2 mt-[5rem]'>
  
      {/**Brand Recognition  */}
      <div className='relative bg-white sm:mb-14 sm:ml-[9rem] px-5 pb-5 mx-5 w-[35rem] rounded-md'>
        <div className='absolute z-2  top-[-15%] bg-gray-700 w-[4rem] h-[4rem] px-4 py-3 rounded-full overflow-y'>
        <img src = {recognition} alt='brand reconginition' width={30} height={20} />
        </div>
    
        <h1  className='text-xl font-bold justify-center  mt-[15%]'>Brand Recongnition</h1>
         <p className='mt-[5%] text-gray-700'>
           Boost your brand Recognition with
           each click.Generic links don't mean a
           thing.Branded links help instil
           confidence in your content.</p>
      </div>  

      {/** Detailed Records*/}
      <div className='relative mt-10 bg-white sm:mb-5  px-5 pb-5 mx-5 w-[35rem] rounded-md  '>
      <div className='absolute z-2  top-[-15%] bg-gray-700 w-[4rem] h-[4rem] px-4 py-4 rounded-full overflow-y'>
        <img src = {record} alt='Detailed Records' width={30} height={20} />
        </div>
        <h1  className='text-xl font-bold justify-center  mt-[15%]'>Details Records</h1>
        <p  className='mt-[5%] text-gray-700'        
        >Gain insights into who is clicking your links.Knowing when and where people engage with your content helps inform better decisions.</p>
      </div><br/>

      {/** Fully Customiazble*/}
      <div className='bg-white sm:mt-20 px-5 pb-5 mx-5 w-[35rem] rounded-md'>
      <div className='absolute z-2  top-[-15%] bg-gray-700 w-[4rem] h-[4rem] px-4 py-3 rounded-full overflow-y'>

        <img src = {customize} alt='brand reconginition' width={30} height={20} />
        </div>

      <h1   className='text-xl font-bold justify-center  mt-[9%]'>Fully Customizable</h1>
      <p  className='mt-[5%] text-gray-700' >
        Improve brand awareness and content discoverability through customiazble links.supercharging audience engagement</p>
      </div>
        </div>
       </div>


   
  )
}

export default Pricing