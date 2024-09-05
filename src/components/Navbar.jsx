import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumb from './BreadCrumb';
import { motion } from 'framer-motion';
import Switcher from "../dark-mode/Switcher";

const Navbar = () => {
  const location = useLocation();
  const [showMore, setShowMore] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setShowMore(true);
  };

  const handleMouseLeave = () => {
    setShowMore(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className=" dark:bg-gray-100 p-4  flex justify-center items-center dark:text-gray-800 text-gray-400 w-full">
      <div className="bg-opacity-10 dark:bg-gray-200 border  bg-gray-500 dark:text-gray-900 mx-auto  border-gray-200 rounded-2xl sm:flex justify-between fixed top-2 sm:w-4/5 w-full p-4 items-center">
        <div className='flex m-1 justify-between items-center'>
          <Link to="/" className="mr-2 dark:bg-gray-200 dark:text-gray-900 text-white text-2xl font-semibold">
            Sandeep
          </Link>
          <div className='flex' >
            <Switcher />
            <button
              className="sm:hidden  text-white dark:text-gray-900 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className=" m-2 h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zM4 11h16a1 1 0 110 2H4a1 1 0 110-2zM4 16h16a1 1 0 110 2H4a1 1 0 110-2z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
        <ul className={`sm:flex sm:space-x-3 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <li>
            <Link
              to="/"
              className={`text-white  dark:text-gray-900 ${location.pathname === '/' ? 'font-bold underline' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={`text-white dark:text-gray-900 ${location.pathname === '/skills' ? 'font-bold underline' : ''}`}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/opensource"
              className={`text-white dark:text-gray-900 ${location.pathname === '/opensource' ? 'font-bold underline' : ''}`}
            >
              OpenSource
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`text-white dark:text-gray-900 ${location.pathname === '/projects' ? 'font-bold underline' : ''}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contentwriter"
              className={`text-white dark:text-gray-900 ${location.pathname === '/contentwriter' ? 'font-bold underline' : ''}`}
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
              <motion.div className="dark:bg-gray-100  bg-opacity-10 bg-gray-800 dark:text-gray-700 absolute top-full left-0 rounded-b-lg text-white py-2 space-y-2"
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
