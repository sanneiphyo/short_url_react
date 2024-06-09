import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const LoginForm = () => {
  const handleEmailLogin = (e) => {
    e.preventDefault();
   
  };

  const handleFacebookLogin = () => {
   
    window.location.href = '';
  };

  const handleGoogleLogin = () => {
  
    window.location.href = '';
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
        <form onSubmit={handleEmailLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          <button type="submit" className="w-full  bg-[#5eead4] hover:bg-[#77a5d1] hover:text-white py-2 rounded-lg ">Login</button>
        </form>
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handleFacebookLogin}
            className="flex items-center bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800"
          >
            <FaFacebook className="mr-2" />
            Login with Facebook
          </button>
          <button
            onClick={handleGoogleLogin}
            className="flex items-center bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
          >
            <FaGoogle className="mr-2" />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
