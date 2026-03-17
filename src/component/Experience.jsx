import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "../data/experience";

const Experience = () => {
  return (
    <section className="flex flex-col gap-y-12 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-slate-100 font-bold text-2xl md:text-4xl text-center"
      >
        Work Experience
      </motion.h2>

      {experienceData.map((exp, index) => (
        <motion.article
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="flex justify-center border border-black p-7 rounded-2xl shadow-md shadow-slate-200 bg-slate-200"
        >
          <article className="flex flex-col items-center gap-5 text-center">
            <span className="text-xl font-bold text-gray-800">{exp.title}</span>
            <span className="text-lg text-gray-600">{exp.company}</span>
            <span className="text-base text-gray-500">{exp.date}</span>
          </article>
        </motion.article>
      ))}
    </section>
  );
};

export default Experience;
