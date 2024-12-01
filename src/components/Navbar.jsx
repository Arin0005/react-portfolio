import React, { useState } from 'react';
import { Link } from 'react-scroll'; 
import { motion } from 'framer-motion'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-between items-center py-6">
      <div className="text-3xl">AT</div>
      <div className="hidden lg:flex flex-1 justify-center space-x-8">
       
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="hero" smooth={true} duration={500} className="text-lg hover:text-cyan-300 cursor-pointer">
            Home
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="about" smooth={true} duration={500} className="text-lg hover:text-cyan-300 cursor-pointer">
            About
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="skills" smooth={true} duration={500} className="text-lg hover:text-cyan-300 cursor-pointer">
            Skills
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="projects" smooth={true} duration={500} className="text-lg hover:text-cyan-300 cursor-pointer">
            Projects
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="contact" smooth={true} duration={500} className="text-lg hover:text-cyan-300 cursor-pointer">
            Contact
          </Link>
        </motion.div>
      </div>
      
      
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-lg">☰</button>
        {isOpen && (
          <div className="absolute top-0 right-0 w-48 bg-black text-white p-4">
            <a href="#hero" className="block py-2" onClick={toggleMenu}>Home</a>
            <a href="#about" className="block py-2" onClick={toggleMenu}>About</a>
            <a href="#skills" className="block py-2" onClick={toggleMenu}>Skills</a>
            <a href="#projects" className="block py-2" onClick={toggleMenu}>Projects</a>
            <a href="#contact" className="block py-2" onClick={toggleMenu}>Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
