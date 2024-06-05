import React from 'react';
import facebook from "../assets/icon-facebook.svg";
import instagram from "../assets/icon-instagram.svg"
import pinterest from "../assets/icon-pinterest.svg"
import twitter from "../assets/icon-twitter.svg"


const Footer = () => {
  return (
    <footer className='flex sm:flex-row text-white py-5 '>
    <h1 className='text-4xl  ml-[10rem] font-extrabold'>Shortly</h1>
      <div className='ml-[15rem] flex gap-14'>

        
        <div>
          <h2 className='font-bold'>Link Shortening</h2>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>
     

      <div>
        <h2 className='font-bold'>Resources</h2>
        <p>Blog</p>
        <p>Developers</p>
        <p>Support</p>
      </div>

      <div>
        <h2 className='font-bold'>Company</h2>
        <p>About</p>
        <p>Our Team</p>
        <p>Careers</p>
        <p>Contact</p>
      </div>

      </div>

        {/**icons */}
      <div className='flex mx-[15%] gap-5 h-5'>
        <img src={facebook} alt='facebook' width={20} height={2}/>
        <img src={twitter} alt='twitter'  width={20}  height={2}/>
        <img src={pinterest} alt='pinterest'  width={20}  height={2}/>
        <img src={instagram} alt='instagram'  width={20}   height={2}/>
      </div>

    </footer>
  );
};

export default Footer;
