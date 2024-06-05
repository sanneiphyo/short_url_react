import React, { useState } from 'react';
import bgImage from '../assets/linkbg.svg';

const Features = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('URL to be shortened:', url);
  };

  return (
    <div id="Features" className="flex h-52 mt-14 items-center px-10 md:px-36">
      <div
        className="relative md:mx-15 w-full bg-cover bg-center mt-[15rem] md:mt-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      >{/**Form and url input */}
        <div className="flex bg-black bg-opacity-70 p-4 rounded-md w-full">
          <form onSubmit={handleSubmit} className="flex flex-row w-full">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full mx-5 my-6 px-2 py-2 rounded-md "
              placeholder="Enter URL"
            />
            <button
              type="submit"
              className=" bg-[#5eead4] hover:bg-[#77a5d1]  text-white px-5 w-[10rem] sm:w-[9rem]  h-11 sm:h-10 mt-6 mx-5 rounded-md hover:text-black"
            >
              Shorten it!!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Features;
