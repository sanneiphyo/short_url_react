import React from 'react';

const Footer = () => {
  return (
    <footer className='flex text-white py-5 '>
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

    </footer>
  );
};

export default Footer;
