import React from 'react';
import { motion } from 'framer-motion';
import profile_images from '../assets/sandeepsharmacartoon-d29278df.jpg'

const Homepage = () => {
  const techStack = [
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Redux Toolkit', icon: 'fas fa-redux-toolkit' },
    { name: 'Tailwind', icon: 'fas fa-tailwind ' },
    { name: 'Shadcn', icon: 'fas fa-tailwind' },
    { name: 'Firebase', icon: 'fas fa-firebase' },
    { name: 'Framer Motion', icon: 'fas fa-framer-motion' },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.5, duration: 0.5 } },
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
      className="bg-dark-gray dark:bg-gray-100 dark:text-gray-900 mb-4 flex items-start justify-center"
    >
      <div className="text-center sm:w-1/2 w-4/5 dark:bg-gray-100 dark:text-gray-900  text-white">
        <motion.img
          variants={imageVariants}
          src={profile_images}
          alt="Profile Pic"
          className="w-52 h-52 rounded-full   mx-auto mb-4 border-4 border-white"
        />
        <motion.h1
          variants={techStackVariants}
          className="text-4xl font-extrabold mb-2"
        >
          Hello, This is Sandeep Sharma.
        </motion.h1>
        <motion.p
          variants={techStackVariants}
          className="text-lg mb-4 leading-relaxed border border-gray-700 rounded-xl"
        >
          <div className='m-4' >
            <p>
              I am a passionate and versatile web developer with a keen eye for creating stunning and functional user interfaces. My journey in the world of programming has equipped me with a robust skill set that spans across various technologies.!
            </p>
            <p>
              In the ever-evolving tech landscape, I am committed to staying abreast of the latest trends and technologies. This dedication to continuous learning ensures that I bring the most innovative solutions to the projects I undertake.
            </p>
            <br />
            <p>
              I am also a freelance content writer at GeeksforGeeks.
            </p>
          </div>
        </motion.p>

        <motion.h1
          variants={techStackVariants}
          className='text-2xl font-bold'
        >
          Tech Stack
        </motion.h1>
        <motion.div
          variants={techStackVariants}
          className='flex justify-center items-center'
        >
          <div className="grid grid-cols-2 w-full">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                variants={techItemVariants}
                className={`col-span-2 border m-1 border-gray-700 rounded-lg py-2 px-10 md:col-span-1 `}
              >
                <div className='flex items-center' >
                  <motion.h3 className="text-lg mr-4 text-start">{tech.name}</motion.h3>
                  <i className={tech.icon}></i>
                </div>

              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          variants={techStackVariants}
          className="mt-8 border border-gray-700 rounded-xl"
        >
          <ul className="social-media flex m-2 justify-center items-center text-2xl space-x-4">
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="https://www.linkedin.com/in/sandeep-kumar-sharma-9295151a6/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"></i> </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="https://www.github.com/amrahs02" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github"></i> </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="https://www.twitter.com/amrahs02" target="_blank" rel="noopener noreferrer"> <i className="fab fa-twitter"></i> </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="https://www.medium.com/@amrahs02" target="_blank" rel="noopener noreferrer"> <i className="fab fa-medium"></i> </a>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Homepage;



// import React from 'react';

// const Homepage = () => {

//   const techStack = [
//     { name: 'React', color: 'bg-orange-800', icon: 'fab fa-react' },
//     { name: 'Redux Toolkit', color: 'bg-blue-600', icon: 'fas fa-toolbox' },
//     { name: 'Tailwind', color: 'bg-green-500', icon: 'fas fa-tailwind ' },
//     { name: 'Shadcn', color: 'bg-purple-500', icon: 'fas fa-tailwind' },
//     { name: 'Firebase', color: 'bg-red-500', icon: 'fas fa-fire' },
//     { name: 'Framer Motion', color: 'bg-yellow-500', icon: 'fas fa-video' },
//   ];



//   return (
//     <section className="bg-dark-gray  sm:  flex items-start justify-center">
//       <div className=" bg-dark-gray  text-center sm:w-1/2 w-4/5  text-white">
//         <img
//           src="https://github.com/amrahs02/portfolio_modified/blob/main/SANDEEP_PROFILE_IMAGE-0952b7d6.jpeg?raw=true"
//           alt="Profile Pic"
//           className="w-32 h-32 mt-10 rounded-full mx-auto mb-4 border-4 border-white"
//         />
//         <h1 className="text-4xl font-extrabold mb-2">Hello, I'm Sandeep Sharma.</h1>
//         <p className="text-lg mb-4 leading-relaxed">
//           A Developer Advocate by profession. I help B2D+ companies bridge the gap between developers and the product with code, content, and community. As a community builder and a product of the community myself, I strongly believe that technology is for everyone. I am passionate about learning, sharing, and building with the community.
//         </p>

//         <h1 className='text-2xl'>Tech Stack</h1>
//         <div className='flex justify-center items-center'>
//           <div className="mt-8 grid grid-cols-2 w-fit">
//             {techStack.map((tech, index) => (
//               <div
//                 key={index}
//                 className={`col-span-2 bg-gray-800 rounded-lg py-2 px-10 m-1  md:col-span-1 text-white cursor-pointer overflow-hidden relative group  transition-transform transform`}
//               >
//                 <i className={tech.icon}></i>
//                 <h3 className="text-lg  m-1">{tech.name}</h3>
//                 <div
//                   className={` ${tech.color} text-white rounded-lg absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
//                 >
//                   {tech.name}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>



//         {/* Social Media Links */}
//         <div className="mt-8 ">
//           <ul className="social-media flex justify-center items-center text-2xl space-x-4">
//             <li><a href="https://www.linkedin.com/in/sandeep-kumar-sharma-9295151a6/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"></i> </a></li>
//             <li><a href="https://www.github.com/amrahs02" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github"></i> </a></li>
//             <li><a href="https://www.twitter.com/amrahs02" target="_blank" rel="noopener noreferrer"> <i className="fab fa-twitter"></i> </a></li>
//             <li><a href="https://www.medium.com/@amrahs02" target="_blank" rel="noopener noreferrer"> <i className="fab fa-medium"></i> </a></li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Homepage;
