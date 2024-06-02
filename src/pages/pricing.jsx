import React from 'react'

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
      <div className='relative bg-white mb-5 sm:ml-[9rem] px-5 pb-5 mx-5 w-[35rem] rounded-md'>
        <h1  className='text-xl font-bold justify-center  mt-[9%]'>Brand Recongnition</h1>
         <p className='mt-[5%] text-gray-700'>
           Boost your brand Recognition with
           each click.Generic links don't mean a
           thing.Branded links help instil
           confidence in your content.</p>
      </div>  

      {/** Detailed Records*/}
      <div className='relative mt-5 bg-white mb-2  px-5 pb-5 mx-5 w-[35rem] rounded-md  '>
        <h1  className='text-xl font-bold justify-center  mt-[9%]'>Details Records</h1>
        <p  className='mt-[5%] text-gray-700'        
        >Gain insights into who is clicking your links.Knowing when and where people engage with your content helps inform better decisions.</p>
      </div>

      {/** Fully Customiazble*/}
      <div className='bg-white mt-12 px-5 pb-5 mx-5 w-[35rem] rounded-md'>
      <h1   className='text-xl font-bold justify-center  mt-[9%]'>Fully Customizable</h1>
      <p  className='mt-[5%] text-gray-700' >
        Improve brand awareness and content discoverability through customiazble links.supercharging audience engagement</p>
      </div>
        </div>
       </div>


   
  )
}

export default Pricing