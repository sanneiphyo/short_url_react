import React, { useState } from 'react';
import bglink from '../assets/linkbg.svg';

const Features = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for URL shortening here
    console.log('URL to be shortened:', url);
  };

  return (
    <div id="Features" className="flex h-52 items-center px-10 md:px-36">
      <div className="relative  md:mx-32 w-full bg-cover bg-center mt-[15rem] md:mt-0" style={{ backgroundImage: `url(${bglink})` }}>
        <form onSubmit={handleSubmit} className="flex flex-row pt-20 bg-black bg-opacity-70 p-4 rounded-md">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-4 py-2 rounded-l-md"
            placeholder="Enter URL"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
          >
            Shorten URL
          </button>
        </form>
      </div>
    </div>
  );
};

export default Features;
