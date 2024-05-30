import React, { useState } from 'react';
import bgImage from '../assets/linkbg.svg';

const Features = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for URL shortening here
    console.log('URL to be shortened:', url);
  };

  return (
    <div id="Features" className="flex h-52 items-center px-10 md:px-36">
      <div
        className="relative md:mx-15 w-full bg-cover bg-center mt-[15rem] md:mt-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="flex bg-black bg-opacity-70 p-4 rounded-md w-full">
          <form onSubmit={handleSubmit} className="flex flex-row w-full">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full mx-5 my-6 px-2 py-2 rounded-md"
              placeholder="Enter URL"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-5 w-[9rem]  h-10 mt-6 mx-5 rounded-md hover:bg-blue-600"
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
