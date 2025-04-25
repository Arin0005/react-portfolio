import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "motion/react";

const ACHIEVEMENTS = [
  {
    title: "HACK-IT-OUT",
    date: "15-16 Jan, 2025",
    description:
      'Secured 1st place at the "Hack it Out" Hackathon organized by Thakur College of Science and Commerce based on "Algorithm Development" it was a 2 day based Hackathon.',
    github: "Sudheesh-07/TCET-Hackathon",
  },
  {
    title: "Game-A-thon",
    date: "26 Jan 2025",
    description:
      "Achieved 3rd place at the Vivek College of Commerce Game Hackathon, crafting a compelling space-themed game with the Godot engine.",
    github: "Harish-tig/Vivek_Hackathon/tree/main/vivek-hackathon",
  },
  {
    title: "TechJam 3.0",
    date: "11 Feb 2025",
    description:
      "Secured 3rd place in “Clash of Codes” DSA problem solving competion in Patkar Varde College. Secured 2nd place in “Hack the Metrics” ML model Building Competion at Patkar Varde College.",
  },
  {
    title: "HackX 3.0",
    date: "22 Feb – 23 Feb 2025",
    description:
      "Ranked among the Top 14 teams out of numerous participants at NMIMS College (Kharghar) Hackathon, successfully tackling one of the seven diverse problem statement which was API-Driven Event Invitation System and showcasing innovative problem-solving and teamwork skills.",
    github: "Arin0005/Code_Harmonics",
  },
];

const Projects = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-400">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-5xl"
        >
          My Projects
        </motion.h1>
        <div className="">
          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <img
                  src={project.image}
                  width={350}
                  height={300}
                  alt={project.title}
                  className="mb-10 rounded"
                />
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-300">{project.description}</p>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-b border-neutral-900 pb-400">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-5xl"
        >
          My Achievements
        </motion.h1>
        <div className="">
          {ACHIEVEMENTS.map((achievement, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <p className="mb-10 text-neutral-300">{achievement.date}</p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">{achievement.title}</h6>
                <p className="mb-4 text-neutral-300">
                  {achievement.description}
                </p>
                {achievement.github && (
                  <a
                    href={`https://github.com/${achievement.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    Github: {achievement.github}
                  </a>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
