// OpenSource.jsx
import React from 'react';
import { motion } from 'framer-motion';

const OpenSource = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="dark:bg-gray-00  dark:text-gray-900  flex items-center justify-center  "
    >
      <div className='sm:w-4/5 w-full m-2 bg-opacity-5 bg-gray-100 dark:bg-gray-200  p-8 my-8  text-white  rounded-xl shadow-md ' >

        <h2 className="text-3xl font-bold dark:text-gray-600 mb-4">My 
          <span className='text-yellow-500'> Open Source </span>
           Journey</h2>

        <p className="text-gray-300  dark:text-gray-900 mb-6">
          Hey there! 👋 I'm Sandeep, a passionate developer who recently embarked on the exciting journey
          into the world of open source contributions. In 2023, I participated in Hacktoberfest, an event
          that ignited my interest in contributing to open source projects.
        </p>

        <p className="text-gray-300 dark:text-gray-900 mb-6">
          During Hacktoberfest, I successfully merged 4 pull requests, and the experience was incredible!
          It allowed me to collaborate with other developers, learn new technologies, and make meaningful
          contributions to various projects.
        </p>

        <p className="text-gray-300 dark:text-gray-900 mb-6">
          The sense of community and the satisfaction of seeing my contributions in action have motivated
          me to continue my journey in open source. I am actively exploring new projects, identifying
          issues, and contributing my skills to make a positive impact on the developer community.
        </p>

        <p className="text-gray-300 dark:text-gray-900">
          I believe in the power of collaboration and am excited about the endless possibilities that
          open source offers. Let's build, learn, and grow together!
        </p>
      </div>
    </motion.div>
  );
};

export default OpenSource;
