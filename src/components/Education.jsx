// Education.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    { id: 1, title: 'High School', institution: 'Your High School Name', year: '2010 - 2012' },
    { id: 2, title: 'Intermediate', institution: 'Your Intermediate College Name', year: '2012 - 2014' },
    { id: 3, title: 'Bachelor\'s Degree', institution: 'Your University Name', year: '2014 - 2018' },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const educationItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: 20, transition: { duration: 0.5 } }}
      className="text-white px-4 py-8 flex flex-col items-center"
    >
      <motion.ul
        className="list-none sm:w-1/2"
        variants={educationItemVariants}
        initial="hidden"
        animate="visible"
      >
        {educationData.map(edu => (
          <motion.li key={edu.id} className="mb-8 p-4  border border-gray-700 rounded-md">
            <h3 className="text-xl font-semibold mb-1">{edu.title}</h3>
            <p className="text-lg">{edu.institution}</p>
            <p className="text-md">{edu.year}</p>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Education;
