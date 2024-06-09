import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuItems, setMenuItems] = useState(false);

  const menuBarHandle = () => {
    setMenuItems(!menuItems);
  };

  return (
    <nav className='flex flex-col font-normal w-full h-30 mt-3'>
      {/* logo and list */}
      <div className='flex justify-between items-center px-12 py-3'>
        <h1 className='text-4xl font-extrabold ml-[1%] sm:ml-[8%]'>Shortly</h1>

        <div className='gap-5 font-semibold text-gray-600 hidden sm:flex'>
          <a href="#features" className='cursor-pointer hover:text-black'>Link_shorten</a>
          <a href="#pricing" className='cursor-pointer hover:text-black'>Pricing</a>
          <a href="#resources" className='cursor-pointer hover:text-black'>Resources</a>
        </div>

        {/* Login Form */}
        <div className='flex gap-5 items-center font-semibold'>
          <Link
            to="/login"
            className='text-black hover:bg-[#8a8d8c] hover:text-white rounded-2xl px-3 py-1 cursor-pointer'
          >
            Login
          </Link>
          <Link
            to="/signup"
            className='text-black hover:bg-[#10b981] bg-gray-100 hover:text-white rounded-2xl px-3 py-1 cursor-pointer'
          >
            Sign Up
          </Link>
          <p className='flex sm:hidden cursor-pointer' onClick={menuBarHandle}>
            <FaBars size={24} />
          </p>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {menuItems && (
        <div className='absolute bg-[#1e1b4b] flex-end justify-center z-3 text-gray-50 sm:hidden px-12 py-3 mx-[20%] mt-[5rem] h-96 rounded-xl font-bold text-2xl w-[70%] gap-10'>
          <div className='flex flex-col ml-[30%] gap-[1.5rem] mt-5 mb-5'>
            <a href="#features" className='cursor-pointer mx-3 hover:text-black'>Link_shorten</a>
            <a href="#pricing" className='cursor-pointer mx-5 hover:text-black'>Pricing</a>
            <a href="#resources" className='cursor-pointer mx-2 hover:text-black'>Resources</a>
          </div>
          <div className='flex flex-col gap-5 items-center font-semibold border-t border-gray-50'>
            <Link to="/login" className='cursor-pointer hover:text-black'>Login</Link>
            <Link
              to="/signup"
              className='text-white hover:text-gray-700 w-[80%] pl-[27%] rounded-2xl px-3 py-1 cursor-pointer bg-[#5eead4]'
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
