// src/components/Education.jsx
import React from 'react';
import Breadcrumb from './BreadCrumb';

const Education = () => {
  return (
    <div className="w-full bg-dark-gray text-white py-12">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-semibold mb-6">Education</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">High School</h3>
          <p className="text-gray-400">Imperial Public School, Hathwa, Gopalganj (Bihar)</p>
          <p className="text-gray-400">Year of Passing: 2017</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Intermediate</h3>
          <p className="text-gray-400">R.A.S.N.S College Kishanpura, Madarpur, Siwan (Bihar)</p>
          <p className="text-gray-400">Year of Passing: 2019</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Bachelor's Degree</h3>
          <p className="text-gray-400">G.L Bajaj Institute of Technology and Management, Greater Noida (UP)</p>
          <p className="text-gray-400">Year of Passing: 2024</p>
        </div>

        {/* Add more education entries as needed */}
      </div>
    </div>
  );
};

export default Education;
