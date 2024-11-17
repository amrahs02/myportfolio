import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="dark:bg-gray-100 dark:text-gray-900 w-full bg-dark-gray flex justify-center items-start"
    >
      <div id="project-master" className="dark:bg-gray-100 dark:text-gray-900 sm:w-4/5 w-full m-2 text-gray-300 bg-dark-gray flex flex-col justify-center">
        
        <ProjectSection
          title="JobBoard - Job Portal"
          imageSrc="./jobboard.png" // Add the correct image path for your JobBoard app
          description="A full-stack job portal where users can search for jobs, apply, and create their profiles. Built with MERN stack."
          projectLink="Coming soon" // Replace with the actual link
        />
        
        <ProjectSection
          title="BlogSphere - Modern Blog Application"
          imageSrc="./blogsphere.png" // Add the correct image path for your BlogSphere app
          description="A full-stack blog platform built with the MERN stack, Vite, and Tailwind CSS, featuring user authentication, CRUD operations, search functionality, and tag filtering."
          projectLink="https://blogsphere.onrender.com"
        />
        
        <ProjectSection
          title="General Store - An Ecommerce Site"
          imageSrc="./general-store.png"
          description="An Ecommerce web app built with React, Tailwind CSS, and Material-UI."
          projectLink="https://general-store.onrender.com/"
        />
        
        <ProjectSection
          title="Quick Commerce App (In Construction)"
          imageSrc="./quick-commerce.png"
          description="A full-stack e-commerce platform under construction. Built with React, Node.js, and MongoDB."
          projectLink="Coming soon" // Replace with the actual link
        />
        
        <ProjectSection
          title="Minimaltab - Chrome Extension"
          imageSrc="./minimaltab.png" // Add the correct image path for your Minimaltab app
          description="A Chrome extension to help manage browser tabs and improve productivity."
          projectLink="https://minimaltab.vercel.app/"
        />
        
        <ProjectSection
          title="MemoryExt (In Construction)"
          imageSrc="./memoryext.png" // Add the correct image path for your MemoryExt app
          description="A Chrome extension under development to track memory usage and optimize browser performance."
          projectLink="Coming Soon" // Replace with the actual link
        />
        
        <ProjectSection
          title="Simple Notes App"
          imageSrc="./simple-notes.png"
          description="A Simple Notes App built with React and Material-UI."
          projectLink="https://notesimple.vercel.app/"
        />
        
       
        
        <ProjectSection
          title="To-Do List in React"
          imageSrc="./todo.png"
          description="A todo list app for daily activities."
          projectLink="https://amrahs02.github.io/todo_react/"
        />
        
      </div>
    </motion.div>
  );
};

const ProjectSection = ({ title, imageSrc, description, projectLink }) => {
  const copyLink = () => {
    const textarea = document.createElement('textarea');
    textarea.value = projectLink;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  return (
    <div className="dark:bg-gray-100 dark:text-gray-900 text-gray-300 bg-dark-gray">
      <div className="p-4 pt-8 rounded-2xl mb-4 bg-opacity-10 bg-gray-400">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <img className="rounded-2xl mb-4" src={imageSrc} alt="" />
        <p className="text-gray-500 mb-4">{description}</p>
        <div className="flex items-center space-x-4">
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="dark:text-gray-800 bg-opacity-5 bg-gray-950 text-white px-6 py-2 rounded-2xl"
              whileHover={{ scale: 1.1 }}
            >
              View Project
            </motion.button>
          </a>
          <motion.button
            className="dark:text-gray-800 bg-opacity-5 bg-gray-950 text-white px-6 py-2 rounded-2xl"
            onClick={copyLink}
            whileHover={{ scale: 1.1 }}
          >
            Copy Link
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
