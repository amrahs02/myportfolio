import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/sandeepsharmacartoon-d29278df.jpg";

const Homepage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className="bg-dark-black homepage  bg-opacity-100 dark:bg-gray-100 mx-1  sm:m-0  dark:text-gray-600 text-gray-300 flex flex-col items-center justify-center"
    >
      <div className="text-center dark:bg-gray-200  p-8  rounded-2xl sm:w-4/5 w-full px-4">
        <motion.img
          src={profileImage}
          alt="Sandeep Sharma Avatar"
          className="w-36 h-36 rounded-full mx-auto mb-6 border-4 border-white dark:border-black"
        />
        <motion.div className="text-3xl sm:text-4xl font-extrabold mb-6">
          <p>Heyy! I'm a 22-year-old software developer.</p>
        </motion.div>
        <motion.div className="mb-6">
          <p>I specialize in creating high-performance web applications.</p>
        </motion.div>
        <motion.h2 className="text-2xl font-bold mb-4">Tech Stack</motion.h2>
        <div className="flex items-center justify-center gap-6 text-left">
          <div>
            <p>
              <strong>Languages:</strong> C++, JavaScript, Go
            </p>
            <p>
              <strong>Frameworks:</strong> React, Node.js, Express.js
            </p>
            <p>
              <strong>Libraries:</strong> Redux Toolkit
            </p>
          </div>
          <div>
            <p>
              <strong>Tools:</strong> Git, GitHub, Postman
            </p>
            <p>
              <strong>Database:</strong> MongoDB, SQL
            </p>
            <p>
              <strong>APIs:</strong> REST API, GraphQL
            </p>
          </div>
        </div>
        <motion.div className="mt-8">
          <a
            href="https://drive.google.com/file/d/1NMhJ7-TWD_YevI2vLjNT6KhBDelF-qi1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-bold underline hover:text-blue-700"
          >
            Here's my CV 〉
          </a>
        </motion.div>
        {/* Social Media Links */}
        <motion.div
          variants={sectionVariants}
          className="mt-4"
        >
          <ul className="social-media flex m-2 justify-center items-center text-2xl space-x-4">
            <motion.li whileHover={{ scale: 1.1 }}>
              <a
                href="https://www.linkedin.com/in/sandeepsharma2183"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a
                href="https://www.github.com/amrahs02"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Homepage;
