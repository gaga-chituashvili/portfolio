import React from "react";
import myimg from "./img/myimg1.jpeg";
import CV from "../cv/Gaga_Chituashvili_CV.pdf";
import CoverLetter from "./certificate/CoverLetter.pdf";
import download from "./img/download.svg";

const splitText = (text) =>
  text.split("").map((char, index) => (
    <span
      key={index}
      style={{
        animation: `fadeIn 3s ${index * 0.1}s infinite`,
        animationFillMode: "both",
      }}
    >
      {char}
    </span>
  ));

const Header = () => {
  return (
    <header className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start gap-y-10 md:gap-y-0 gap-x-8 px-5 md:px-12 py-12 bg-gradient-to-r from-slate-700 to-slate-900 text-white">
      <article className="flex flex-col text-center md:text-left w-full md:w-2/3">
        <span className="text-2xl md:text-4xl font-semibold text-gray-300 animate-wave mb-4 cursor-pointer">
          Full Stack Developer
        </span>

        <article className="flex flex-col items-center md:items-start">
          <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-slate-200 tracking-wide text-shadow-lg hover:text-green-600 transition duration-500 cursor-pointer">
            {splitText("Gaga")}
          </span>
          <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-slate-200 tracking-wide text-shadow-lg hover:text-green-600 transition duration-500 cursor-pointer">
            {splitText("Chituashvili")}
          </span>
        </article>
      </article>

      <article className="flex flex-col items-center w-full md:w-1/3 gap-6">
        <img
          className="h-48 sm:h-60 md:h-72 lg:h-80 object-cover rounded-2xl border-4 md:border-8 border-white shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
          src={myimg}
          alt="My Portrait"
        />
        <div className="flex flex-col items-center gap-3">
          <a href={CoverLetter} download="Cover Letter.pdf">
            <button className="bg-slate-400 hover:bg-green-600 text-white font-bold py-2 px-6 sm:px-8 rounded-lg transition-all duration-300 flex items-center gap-2 hover:scale-105 transform">
              Cover Letter
              <img className="w-5" src={download} alt="Download Icon" />
            </button>
          </a>
          <a href={CV} download="Gaga_Chituashvili_CV.pdf">
            <button className="bg-slate-400 hover:bg-green-600 text-white font-bold py-2 px-6 sm:px-8 rounded-lg transition-all duration-300 flex items-center gap-2 hover:scale-105 transform">
              Resume
              <img className="w-5" src={download} alt="Download Icon" />
            </button>
          </a>
        </div>
      </article>
    </header>
  );
};

export default Header;
