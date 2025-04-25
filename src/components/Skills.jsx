import React from "react";
import { RiReactjsFill } from "react-icons/ri";
import { FaPython, FaHtml5, FaCss3Alt, FaChartBar } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiMongodb,
  SiFlutter,
  SiSqlite,
  SiTailwindcss,
  SiDjango,
  SiTensorflow,
  SiKeras,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  {
    icon: <FaPython className="text-7xl" style={{ color: "#3776AB" }} />,
    name: "Python",
  },
  { icon: <SiMongodb className="text-7xl text-green-500" />, name: "MongoDB" },
  {
    icon: <SiFlutter className="text-7xl" style={{ color: "#02569B" }} />,
    name: "Flutter",
  },
  { icon: <SiSqlite className="text-7xl text-sky-700" />, name: "SQLite" },
  {
    icon: <SiTailwindcss className="text-7xl text-cyan-400" />,
    name: "TailwindCSS",
  },
  { icon: <SiDjango className="text-7xl text-emerald-700" />, name: "Django" },
  { icon: <FaHtml5 className="text-7xl text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-7xl text-blue-500" />, name: "CSS3" },
  {
    icon: <FaChartBar className="text-7xl text-purple-500" />,
    name: "Matplotlib",
  },
  {
    icon: <FaChartBar className="text-7xl text-cyan-600" />,
    name: "Seaborn",
  },
];

const learningSkills = [
  { icon: <RiReactjsFill className="text-7xl text-cyan-400" />, name: "React" },
  {
    icon: <SiTensorflow className="text-7xl text-orange-500" />,
    name: "TensorFlow",
  },
  {
    icon: <SiKeras className="text-7xl text-rose-500" />,
    name: "Keras",
  },
];

const Skills = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="border-b border-neutral-800 pb-24"
    >
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl"
      >
        My Skills
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="skill-icon-container flex flex-col items-center"
          >
            {skill.icon}
            <div className="skill-name mt-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {skill.name}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Currently Learning Section */}
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="mt-24 mb-10 text-center text-3xl"
      >
        Currently Learning
      </motion.h2>

      <div className="flex flex-wrap items-center justify-center gap-10">
        {learningSkills.map((skill, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="skill-icon-container flex flex-col items-center"
          >
            {skill.icon}
            <div className="skill-name mt-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {skill.name}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
