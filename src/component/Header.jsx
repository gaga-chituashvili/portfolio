import React from "react";
import gch from "./img/gch.jpg";
import CV from "../cv/Gaga Chituashvili_CV.pdf";
import CoverLetter from "../cv/Cover Letter.pdf";
import { ArrowDownToLine } from "lucide-react";

const splitText = (text) =>
  text.split("").map((char, index) => (
    <span
      key={index}
      style={{
        animation: `fadeInLetter 0.5s ease ${index * 0.08}s forwards`,
        display: "inline-block",
        opacity: 0,
      }}
    >
      {char}
    </span>
  ));

const Header = () => {
  return (
    <header className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start gap-y-10 md:gap-y-0 gap-x-8 px-5 md:px-12 py-12 bg-gradient-to-r from-slate-700 to-slate-900 text-white overflow-hidden">
      <article className="flex flex-col text-center md:text-left w-full md:w-2/3 animate-slideInLeft">
        <span className="text-2xl md:text-4xl font-semibold text-gray-300 mb-4 cursor-pointer">
          Full Stack Developer
        </span>

        <article className="flex flex-col items-center md:items-start">
          <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-slate-200 tracking-wide text-shadow-lg hover:text-green-300 transition duration-500 cursor-pointer">
            {splitText("Gaga")}
          </span>
          <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-slate-200 tracking-wide text-shadow-lg hover:text-green-300 transition duration-500 cursor-pointer">
            {splitText("Chituashvili")}
          </span>
        </article>
      </article>

      <article className="flex flex-col items-center w-full md:w-1/3 gap-6 animate-slideInRight">
        <img
          className="max-w-[15rem] h-48 sm:h-60 md:h-72 lg:h-80 object-cover rounded-2xl border-4 md:border-8 border-white shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
          src={gch}
          alt="My Portrait"
        />
        <div className="flex flex-col items-center gap-3">
          <a href={CoverLetter} download="Cover Letter.pdf">
            <button className="bg-slate-400 hover:bg-red-600 text-white font-bold py-2 px-6 sm:px-8 rounded-lg transition-all duration-300 flex items-center gap-2 hover:scale-105 transform">
              Cover Letter
              <ArrowDownToLine className="w-5 text-gray-700" />
            </button>
          </a>
          <a href={CV} download="Gaga Chituashvili_CV.pdf">
            <button className="bg-slate-400 hover:bg-red-600 text-white font-bold py-2 px-6 sm:px-8 rounded-lg transition-all duration-300 flex items-center gap-2 hover:scale-105 transform">
              Resume
              <ArrowDownToLine className="w-5 text-gray-700" />
            </button>
          </a>
        </div>
      </article>
    </header>
  );
};

export default Header;
