import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { skills } from "../data/skill";

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="h-28 bg-gradient-to-r from-slate-200 to-slate-100 shadow-md rounded-xl flex items-center overflow-hidden relative"
    >
      <Marquee speed={50} pauseOnHover gradient={false}>
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="mx-6 text-2xl font-semibold text-gray-700 hover:text-gray-900 cursor-pointer"
          >
            {skill.text}
          </motion.span>
        ))}
      </Marquee>
    </motion.section>
  );
};

export default Skills;
