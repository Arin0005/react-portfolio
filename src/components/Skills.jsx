import React from 'react';
import { RiReactjsFill } from 'react-icons/ri';
import { FaPython } from "react-icons/fa";
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb, SiFlutter, SiSqlite } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { motion } from 'motion/react';

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

const Skills = () => {
  return (
    <motion.div 
      whileInView={{opacity:1,y:0}} initial={{opacity:0, y:-100}} transition={{duration: 1.5}}
      className="border-b border-neutral-800 pb-24">
      <motion.h1  whileInView={{opacity:1,x:0}} initial={{opacity:0, x:-100}} transition={{duration: 1.5}} className="my-20 text-center text-4xl  ">My Skills</motion.h1>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: [0, 4,0] }} 
        transition={{
          duration: 5, 
          repeat: Infinity, 
          ease: 'easeInOut', 
        }}
        className="flex flex-wrap items-center justify-center gap-10">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: [0, 4,0] }} 
          transition={{
            duration: 5, 
            repeat: Infinity, 
            ease: 'easeInOut', 
          }} className="skill-icon-container flex flex-col items-center">
          <RiReactjsFill className="text-7xl text-cyan-400" />
          <div className="skill-name   mt-2 opacity-0 hover:opacity-100">React</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: [0, 4,0] }} 
          transition={{
            duration: 5, 
            repeat: Infinity, 
            ease: 'easeInOut', 
          }} className="skill-icon-container flex flex-col items-center">
          <TbBrandNextjs className="text-7xl  " />
          <div className="skill-name   mt-2 opacity-0 hover:opacity-100">Next.js</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: [0, 4,0] }} 
          transition={{
            duration: 5, 
            repeat: Infinity, 
            ease: 'easeInOut', 
          }}  className="skill-icon-container flex flex-col items-center">
          <FaPython style={{ color: '#3776AB' }} className="text-7xl" />
          <div className="skill-name   mt-2 opacity-0 hover:opacity-100">Python</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: [0, 4,0] }} 
          transition={{
            duration: 5, 
            repeat: Infinity, 
            ease: 'easeInOut', 
          }}  className="skill-icon-container flex flex-col items-center">
          <SiMongodb className="text-7xl text-green-500" />
          <div className="skill-name   mt-2 opacity-0 hover:opacity-100">MongoDB</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: [0, 4,0] }} 
          transition={{
            duration: 5, 
            repeat: Infinity, 
            ease: 'easeInOut', 
          }}  className="skill-icon-container flex flex-col items-center">
          <SiFlutter style={{ color: '#02569B' }} className="text-7xl" />
          <div className="skill-name   mt-2 opacity-0 hover:opacity-100">Flutter</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: [0, 4,0] }} 
          transition={{
            duration: 5, 
            repeat: Infinity, 
            ease: 'easeInOut', 
          }}  className="skill-icon-container flex flex-col items-center">
          <SiSqlite className="text-7xl text-sky-700" />
          <div className="skill-name   mt-2 opacity-0 hover:opacity-100">SQLite</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: [0, 4,0] }} 
          transition={{
            duration: 5, 
            repeat: Infinity, 
            ease: 'easeInOut', 
          }}  className="skill-icon-container flex flex-col items-center">
          <SiTailwindcss className="text-7xl text-cyan-400" />
          <div className="skill-name   mt-2 opacity-0 hover:opacity-100">TailwindCSS</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: [0, 4,0] }} 
          transition={{
            duration: 5, 
            repeat: Infinity, 
            ease: 'easeInOut', 
          }}  className="skill-icon-container flex flex-col items-center">
          <SiDjango className="text-7xl  " />
          <div className="skill-name   mt-2 opacity-0 hover:opacity-100">Django</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
