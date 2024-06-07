import React from 'react';
import facebook from "../assets/icon-facebook.svg";
import instagram from "../assets/icon-instagram.svg"
import pinterest from "../assets/icon-pinterest.svg"
import twitter from "../assets/icon-twitter.svg"


const Footer = () => {
  return (
    <footer className='flex  text-white py-5 '>
   
      <div className= 'ml-[14rem]   sm:ml-[10rem] sm:flex gap-24'>

      <h1 className='text-4xl  font-extrabold mb-8'>Shortly</h1>
        <div className='mb-8'>
          <h2 className='font-bold'>Link Shortening</h2>
          <p className='mx-3'>Branded Links</p>
          <p className='mx-3'>Analytics</p>
        </div>
     

      <div className='mx-4 mb-5'>
        <h2 className='font-bold '>Resources</h2>
        <p className='mx-4'>Blog</p>
        <p>Developers</p>
        <p className='mx-3'>Support</p>
      </div>

      <div className=' mx-3'>
        <h2 className='font-bold mx-2'>Company</h2>
        <p className='mx-5'>About</p>
        <p className='mx-4'>Our Team</p>
        <p className='mx-5'>Careers</p>
        <p className='mx-5'>Contact</p>
      </div>

         {/**icons */}


      <div className='flex  gap-5 h-5 mt-8'>
        <img src={facebook} alt='facebook' width={20} height={2}/>
        <img src={twitter} alt='twitter'  width={20}  height={2}/>
        <img src={pinterest} alt='pinterest'  width={20}  height={2}/>
        <img src={instagram} alt='instagram'  width={20}   height={2}/>
      </div>
      </div>

     
    </footer>
  );
};

export default Footer;
