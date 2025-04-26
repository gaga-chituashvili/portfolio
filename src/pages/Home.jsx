import React from "react"
import myimg from "./img/myimg.png"
import CV_EN from "../cv/CV_EN.pdf"
import "../reset.css"

const Home = () => {
  return (
    <section className="main_section flex flex-col p-[50px] gap-y-[50px]">
      <section className="name_photo flex justify-between gap-x-[50px]">
        <article className="name_position flex flex-col text-left">
          <span className="text-[20px]">Front-End Developer</span>
          <article className="flex flex-col text-left">
            <span className="text-[150px]">Gaga</span>
            <span className="text-[150px] ml-[150px]">Chituashvili</span>
          </article>
        </article>
        <img
          className="myimg h-[300px] object-cover"
          src={myimg}
          alt="My Portrait"
        />
      </section>

      <section className="cv_myskills">
        <div className="flex flex-col items-center gap-4 p-6 bg-white shadow-md rounded-2xl max-w-md mx-auto">
          <span className="text-xl font-semibold text-gray-800">Resume</span>
          <a href={CV_EN} download="Gaga_Chituashvili_CV.pdf">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition">
              Download CV
            </button>
          </a>
        </div>
        <article>
          <span>skills</span>
          <span>skills</span>
          <span>skills</span>
          <span>skills</span>
        </article>
      </section>

      <section className="education">
        <span>education</span>
        <span>education</span>
        <span>education</span>
        <span>education</span>
        <span>education</span>
      </section>

      <section className="project">
        <span>project1</span>
        <span>project2</span>
        <span>project3</span>
      </section>

      <section className="work experience">
        <span>work experience</span>
        <span>work experience</span>
        <span>work experience</span>
        <span>work experience</span>
      </section>

      <section className="contact">
        <span>phone</span>
        <span>email</span>
      </section>

      <section className="soc qselebi">
        <span>socqselebi</span>
        <span>socqselebi</span>
        <span>socqselebi</span>
        <span>socqselebi</span>
      </section>
    </section>
  )
}

export default Home
