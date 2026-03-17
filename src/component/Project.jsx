import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/project";

const Project = () => {
  return (
    <section className="flex flex-col gap-12 p-2">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-slate-100 font-bold text-2xl md:text-4xl text-center"
      >
        PROJECT
      </motion.h2>

      <section className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            onClick={() => window.open(project.link, "_blank")}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex flex-col gap-4 p-4 border border-gray-300 rounded-2xl shadow-md hover:shadow-2xl cursor-pointer bg-slate-200 w-full md:w-[40rem]"
          >
            <motion.img
              className="w-full h-[20rem] object-cover rounded-xl"
              src={project.img}
              alt={project.title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

            <span className="text-center font-semibold">{project.title}</span>
          </motion.article>
        ))}
      </section>
    </section>
  );
};

export default Project;
