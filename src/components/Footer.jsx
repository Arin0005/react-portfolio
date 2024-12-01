import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-8 mt-12 border-b border-neutral-900 pb-400 justify-center items-center">
      <div className="h-1 w-full bg-white mb-8"></div>
      <div className="container mx-auto px-4 justify-center items-center">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col lg:flex-row items-center space-x-6 mb-6 lg:mb-0">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="hero" smooth={true} duration={500} className="text-lg hover:text-cyan-300">
                Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="about" smooth={true} duration={500} className="text-lg hover:text-cyan-300">
                About
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="skills" smooth={true} duration={500} className="text-lg hover:text-cyan-300">
            Skills
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="projects" smooth={true} duration={500} className="text-lg hover:text-cyan-300">
                Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="contact" smooth={true} duration={500} className="text-lg hover:text-cyan-300">
                Contact
              </Link>
            </motion.div>
          </div>

          <div className="flex space-x-6">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <i className="fab fa-linkedin text-3xl hover:text-cyan-300"></i>
              </motion.div>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <i className="fab fa-instagram text-3xl hover:text-cyan-300"></i>
              </motion.div>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <i className="fab fa-github text-3xl hover:text-cyan-300"></i>
              </motion.div>
            </a>
            <a href="https://www.hackerrank.com" target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <i className="fab fa-hackerrank text-3xl hover:text-cyan-300"></i>
              </motion.div>
            </a>
          </div>
        </div>

        <div className="text-center text-sm mt-8">
          <p>&copy; 2024 Arin Thamke. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
