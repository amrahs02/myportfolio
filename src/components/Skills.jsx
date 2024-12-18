import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={skillsVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
      className="dark:bg-gray-100 dark:text-gray-900 bg-dark-gray justify-center flex items-start"
    >
      <div id="skills-master" className="dark:bg-gray-100 dark:text-gray-900 skills sm:w-4/5 w-full m-2 bg-dark-gray text-white sm:py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
        >
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <SkillsGrid />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillItem = ({ icon, label }) => {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      transition={{ type: "spring", stiffness: 400, damping: 6 }}
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      className="skills11 p-4 bg-opacity-5 dark:bg-gray-200 bg-gray-100 rounded-2xl text-center"
    >
      <i className={icon + " text-4xl mb-4 text-green-500"}></i>
      <p>{label}</p>
    </motion.div>
  );
};

const SkillsGrid = () => {
  const skillsData = [
    { icon: "fab fa-html5", label: "HTML5" },
    { icon: "fab fa-css3-alt", label: "CSS3" },
    { icon: "fab fa-bootstrap", label: "Bootstrap" },
    { icon: "fab fa-tailwind", label: "Tailwind CSS" },
    { icon: "fab fa-js-square", label: "JavaScript" },
    { icon: "fab fa-react", label: "React" },
    { icon: "fab fa-git-alt", label: "Git" },
    { icon: "fab fa-github", label: "Github" },
    { icon: "fab fa-linux", label: "Linux" },
    { icon: "fab fa-figma", label: "Figma" },
    { icon: "fab fa-react", label: "Material UI" },
    { icon: "fab fa-adobe", label: "Adobe XD" },
    { icon: "fas fa-database", label: "Data Structure" },
    { icon: "fas fa-network-wired", label: "Computer Networks" },
    { icon: "fas fa-laptop-code", label: "Operating System" },
    { icon: "fab fa-node", label: "Node.js" },
    { icon: "fab fa-react", label: "Next.js" },
    { icon: "fab fa-react", label: "Redux" },
    { icon: "fab fa-toolbox", label: "Redux Toolkit" },
    { icon: "fas fa-server", label: "Express.js" },
    { icon: "fas fa-database", label: "MongoDB" },
    { icon: "fab fa-golang", label: "Golang" },
    { icon: "fas fa-code", label: "RESTful API" },
  ];

  return (
    <div className="dark:bg-gray-100 dark:text-gray-900 bg-dark-gray grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {skillsData.map((skill, index) => (
        <SkillItem key={index} {...skill} />
      ))}
    </div>
  );
};

export default Skills;
