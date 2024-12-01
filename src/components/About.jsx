import React from 'react'
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from '../constants';
import { motion } from 'motion/react';


const About = () => {
  return <div className="border-b border-neutral-900 pb-4">
    <h1 className="my-20 text-center text-5xl">About 
        <span className="text-neutral-400"> Me</span>
    </h1>
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
        <motion.div 
    whileInView={{ opacity: 1, x: 0 }} 
    initial={{ opacity: 0, x: -100 }} 
    transition={{ duration: 0.7 }}
    className="flex items-center justify-center"
>
    <img 
        className="rounded-2xl w-[300px] h-[300px] object-cover" 
        src={aboutImg} 
        alt="about" 
    />
</motion.div>

        </div>
        <motion.div 
            whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.7}}
            className="w-full lg:w-1/2 items-center">
            <div className="flex justify-center lg:justify-start">
                <p className=' my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
            </div>
        </motion.div>
    </div>
  </div>
}

export default About