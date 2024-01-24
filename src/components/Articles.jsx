// src/components/Articles.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './BreadCrumb';

const Articles = () => {
  return (
    <>
     <div className='w-full bg-dark-gray flex justify-center items-start'>
        <div className="container text-gray-300 bg-dark-gray sm:w-1/2 flex flex-col justify-center items-center ">
          {/* Example Boxes */}
          <div className="   p-4 border border-gray-700 rounded-xl mb-4">
            <h2 className="text-2xl font-semibold mb-2">Article 1: Title</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link to="/article1" className="text-blue-500">Read more</Link>
          </div>
          <div className="   p-4 border border-gray-700 rounded-xl mb-4">
            <h2 className="text-2xl font-semibold mb-2">Article 1: Title</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link to="/article1" className="text-blue-500">Read more</Link>
          </div>
          <div className="   p-4 border border-gray-700 rounded-xl mb-4">
            <h2 className="text-2xl font-semibold mb-2">Article 1: Title</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link to="/article1" className="text-blue-500">Read more</Link>
          </div>

        
          {/* Add more boxes as needed */}
        </div>
      </div>
    </>
  );
};

export default Articles;
