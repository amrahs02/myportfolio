// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumb from './BreadCrumb';
import { motion } from 'framer-motion';
import Switcher from "../dark-mode/Switcher"

const Navbar = () => {
  const location = useLocation();
  const [showMore, setShowMore] = useState(false);

  const handleMouseEnter = () => {
    setShowMore(true);
  };

  const handleMouseLeave = () => {
    setShowMore(false);
  };

  return (
    <nav className=" bg-dark-gray dark:bg-gray-100 p-4 dark:text-gray-800 text-gray-400 w-full">
      <div className=" dark:bg-gray-100 bg-dark-gray dark:text-gray-900  mx-auto border border-gray-700 rounded-xl sm:flex justify-between fixed top-5 right-1 left-1 sm:w-1/2 p-4  items-center">
        <div className='flex m-1 justify-between items-center  ' >
          <Link to="/" className="mr-2 dark:bg-gray-100 dark:text-gray-900 text-white text-2xl font-semibold">
            Sandeep
          </Link>
          <Switcher />
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className={`text-white dark:text-gray-900 ${location.pathname === '/' ? 'font-bold underline' : ''
                }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={`text-white dark:text-gray-900 ${location.pathname === '/skills' ? 'font-bold underline' : ''
                }`}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/opensource"
              className={`text-white dark:text-gray-900 ${location.pathname === '/opensource' ? 'font-bold underline' : ''
                }`}
            >
              OpenSource
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`text-white dark:text-gray-900 ${location.pathname === '/projects' ? 'font-bold underline' : ''
                }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contentwriter"
              className={`text-white dark:text-gray-900 ${location.pathname === '/articles' ? 'font-bold underline' : ''
                }`}
            >
              Articles
            </Link>
          </li>
          <li
            className="relative inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-white dark:text-gray-900 focus:outline-none hover:underline">
              More
            </button>
            {showMore && (
              <motion.div className="dark:bg-gray-100 dark:text-gray-900 absolute top-full left-0 border-gray-700 border rounded-b-lg text-white py-2 space-y-2"
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                whileHover={{ scale: 1.08 }}
              >
                <Link
                  to="/contact"
                  className="block px-4 py-2 hover:underline"
                >
                  Contact
                </Link>
                <Link
                  to="/education"
                  className="block px-4 py-2 hover:underline"
                >
                  Education
                </Link>
                <Link
                  to="/githubrepos"
                  className="block px-4 py-2 hover:underline"
                >
                  Github Repos
                </Link>
                {/* Add more routes as needed */}
              </motion.div>
            )}
          </li>
        </ul>
      </div>
      <div>
        <Breadcrumb />
      </div>
    </nav>
  );
};

export default Navbar;
