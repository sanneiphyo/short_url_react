import React from 'react';
import facebook from "../assets/icon-facebook.svg";
import instagram from "../assets/icon-instagram.svg";
import pinterest from "../assets/icon-pinterest.svg";
import twitter from "../assets/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className='flex text-white py-5 justify-between'>
      <div className=' mx-24 sm:flex gap-24'>
        <h1 className='text-4xl font-extrabold mb-8'>Shortly</h1>
      </div>

      {/** icons */}
      <div className='flex gap-5 h-5 mt-8 mr-24'>
        <img src={facebook} alt='Facebook' width={20} height={20} aria-label='Facebook'/>
        <img src={twitter} alt='Twitter' width={20} height={20} aria-label='Twitter'/>
        <img src={pinterest} alt='Pinterest' width={20} height={20} aria-label='Pinterest'/>
        <img src={instagram} alt='Instagram' width={20} height={20} aria-label='Instagram'/>
      </div>
    </footer>
  );
};

export default Footer;
