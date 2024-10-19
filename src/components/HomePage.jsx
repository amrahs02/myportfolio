import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/sandeepsharmacartoon-d29278df.jpg";

const Homepage = () => {
  const techStack = [
    { name: "React", icon: "fab fa-react" },
    { name: "Redux Toolkit", icon: "fas fa-toolbox" },
    { name: "MongoDB", icon: "fas fa-database" },
    { name: "ExpressJS", icon: "fas fa-server" },
    { name: "NodeJS", icon: "fab fa-node-js" },
    { name: "Tailwind CSS", icon: "fab fa-css3-alt" },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.5, duration: 0.5 },
    },
  };

  const techStackVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const techItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
      className="bg-dark-gray bg-opacity-100 dark:bg-gray-100 dark:text-gray-900 mb-4 flex items-start justify-center"
    >
      <div className="text-center sm:w-4/5 w-full m-2 dark:bg-gray-100 dark:text-gray-900 text-white">
        <motion.img
          variants={imageVariants}
          src={profileImage}
          alt="Profile Pic"
          className="w-52 h-52 dark:border-black rounded-full mx-auto mb-4 border-4 border-white"
        />
        <motion.h1
          variants={techStackVariants}
          className="text-4xl font-extrabold mb-2"
        >
          Hello, This is
          <span className="text-blue-500"> Sandeep Sharma.</span>
        </motion.h1>
        <motion.p
          variants={techStackVariants}
          className="text-lg mb-4 leading-relaxed border-gray-700 rounded-2xl"
        >
          <div className="p-4 bg-opacity-10 bg-gray-500 rounded-2xl">
            <p>
              I am a web developer focused on building clean and functional user
              interfaces. My skills cover a range of technologies, and I always
              keep learning to bring new solutions to my projects.
            </p>
          </div>
        </motion.p>

        {/* Email Section */}
        <motion.p
          variants={techStackVariants}
          className="text-lg mb-4 leading-relaxed border-gray-700 rounded-2xl"
        >
          <div className="p-4 bg-opacity-10 bg-gray-500 rounded-2xl">
            <p>Email: <a href="mailto:sandeepsharma2183@gmail.com" className="text-blue-500">sandeepsharma2183@gmail.com</a></p>
          </div>
        </motion.p>

        <motion.h1 variants={techStackVariants} className="text-2xl font-bold">
          Tech Stack
        </motion.h1>
        <motion.div
          variants={techStackVariants}
          className="flex justify-center items-center"
        >
          <div className="grid grid-cols-2 w-full">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                variants={techItemVariants}
                className="col-span-2 mt-2 bg-opacity-10 bg-gray-500 rounded-2xl py-2 px-10 md:col-span-1"
              >
                <div className="flex items-center">
                  <motion.h3 className="text-lg mr-4 text-start">
                    {tech.name}
                  </motion.h3>
                  <i className={tech.icon}></i>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          variants={techStackVariants}
          className="mt-8 p-1 rounded-2xl bg-opacity-10 bg-gray-500"
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
            <motion.li whileHover={{ scale: 1.1 }}>
              <a
                href="https://www.twitter.com/amrahs02"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a
                href="https://www.medium.com/@amrahs02"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-medium"></i>
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a
                href="https://auth.geeksforgeeks.org/user/isandeep2183/articles#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-book"></i>
              </a>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Homepage;
