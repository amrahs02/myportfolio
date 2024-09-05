// GitHubRepos.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Fetch repositories from GitHub API
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/amrahs02/repos');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
      }
    };

    fetchData();
  }, []);

  const repoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <motion.div
      className="bg-dark-gray flex dark:bg-gray-100 justify-center items-center flex-col text-white py-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <ul className="grid sm:grid-cols-2 md:grid-cols-2 grid-cols-2  sm:w-1/2">
        {repos.map(repo => (
          <motion.li
            key={repo.id}
            className="m-2  border border-gray-700 overflow-hidden p-8 hover:scale-105 duration-300 rounded-2xl"
            variants={repoVariants}
            whileHover={{ scale: 1.05 }}
          > 
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 dark:text-gray-700 capitalize hover:underline"
            >
              {repo.name}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default GitHubRepos;
