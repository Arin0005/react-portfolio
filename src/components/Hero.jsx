import React from "react";
import HERO_CONTENT from "../constants/index.js";
import profilePic from "../assets/arin-thamke-profile.jpg";
import { motion } from "motion/react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Arin Thamke
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              AI & ML Engineering Student
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.a
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              href="/arin-thamke-cv.pdf"
              download="Arin_Thamke_CV.pdf"
              className="mt-4 px-6 py-3 border border-neutral-700 rounded-2xl text-neutral-200 font-bold hover:text-cyan-400 hover:border-cyan-400 transition duration-300"
            >
              Download CV
            </motion.a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center"
          >
            <img
              className="rounded-2xl w-[500px] h-[500px] object-cover"
              src={profilePic}
              alt="about"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
