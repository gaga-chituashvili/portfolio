import React from "react";
import { motion } from "framer-motion";
import gch from "./img/gch.jpg";
import CV from "../cv/Gaga Chituashvili_CV.pdf";
import CoverLetter from "../cv/Cover Letter.pdf";
import { ArrowDownToLine } from "lucide-react";

const splitText = (text) =>
  text.split("").map((char, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      style={{ display: "inline-block" }}
    >
      {char}
    </motion.span>
  ));

const Header = () => {
  return (
    <header className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start gap-y-10 md:gap-y-0 gap-x-8 px-5 md:px-12 py-12 bg-gradient-to-r from-slate-700 to-slate-900 text-white overflow-hidden">
      <motion.article
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col text-center md:text-left w-full md:w-2/3"
      >
        <span className="text-2xl md:text-4xl font-semibold text-gray-300 mb-4 cursor-pointer">
          Full Stack Developer
        </span>

        <article className="flex flex-col items-center md:items-start">
          <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-slate-200 tracking-wide hover:text-green-300 transition duration-500 cursor-pointer">
            {splitText("Gaga")}
          </span>
          <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-slate-200 tracking-wide hover:text-green-300 transition duration-500 cursor-pointer">
            {splitText("Chituashvili")}
          </span>
        </article>
      </motion.article>

      <motion.article
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col items-center w-full md:w-1/3 gap-6"
      >
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-[15rem] h-48 sm:h-60 md:h-72 lg:h-80 object-cover rounded-2xl border-4 md:border-8 border-white shadow-xl hover:shadow-2xl transition duration-300"
          src={gch}
          alt="My Portrait"
        />

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center gap-3"
        >
          <a href={CoverLetter} download="Cover Letter.pdf">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-400 hover:bg-red-600 text-white font-bold py-2 px-6 sm:px-8 rounded-lg flex items-center gap-2 transition"
            >
              Cover Letter
              <ArrowDownToLine className="w-5 text-gray-700" />
            </motion.button>
          </a>

          <a href={CV} download="Gaga Chituashvili_CV.pdf">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-400 hover:bg-red-600 text-white font-bold py-2 px-6 sm:px-8 rounded-lg flex items-center gap-2 transition"
            >
              Resume
              <ArrowDownToLine className="w-5 text-gray-700" />
            </motion.button>
          </a>
        </motion.div>
      </motion.article>
    </header>
  );
};

export default Header;
