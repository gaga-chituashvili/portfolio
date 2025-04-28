import React from "react";
import myimg from "./img/myimg.png";
import CV_EN from "../cv/CV_EN.pdf";
import download from "./img/download.svg";

const Header = () => {
  return (
    <section className="name_photo flex justify-between gap-x-[50px] px-[30px] py-[50px] bg-gradient-to-r text-white">
      <article className="name_position flex flex-col text-left">
        <span className="text-[30px] font-semibold text-gray-300">
          Full Stack Developer
        </span>
        <article className="flex flex-col text-left">
          <span className="text-[150px] font-bold text-slate-200 tracking-wide text-shadow-lg hover:text-green-600 transition duration-500">
            Gaga
          </span>
          <span className="text-[150px] font-bold text-slate-200 ml-[150px] tracking-wide text-shadow-lg hover:text-green-600 transition duration-500">
            Chituashvili
          </span>
        </article>
      </article>
      <article className="flex flex-col gap-y-[30px] items-center">
        <img
          className="h-[300px] object-cover rounded-2xl border-8 border-white shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
          src={myimg}
          alt="My Portrait"
        />
        <a href={CV_EN} download="Gaga_Chituashvili_CV.pdf">
          <button className="bg-slate-400 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-x-[5px] hover:scale-105 transform">
            Resume
            <img className="w-6" src={download} alt="Download Icon" />
          </button>
        </a>
      </article>
    </section>
  );
};

export default Header;
