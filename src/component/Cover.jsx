import React from "react";
import { motion } from "framer-motion";

const Cover = () => {
  return (
    <section className="flex justify-center items-center p-8">
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        className="text-2xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-green-300 drop-shadow-lg cursor-pointer"
      >
        What Are You Waiting For?
      </motion.span>
    </section>
  );
};

export default Cover;
