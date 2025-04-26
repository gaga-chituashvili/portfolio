import React from "react"
import myimg from "./img/myimg.png"
import CV_EN from "../cv/CV_EN.pdf"
import download from "./img/download.svg"
import "../reset.css"

const Home = () => {
  return (
    <section className="main_section flex flex-col p-[50px] gap-y-[50px]">
      <section className="name_photo flex justify-between gap-x-[50px]">
        <article className="name_position flex flex-col text-left">
          <span className="text-[20px]">Full Stack develope</span>
          <article className="flex flex-col text-left">
            <span className="text-[150px]">Gaga</span>
            <span className="text-[150px] ml-[150px]">Chituashvili</span>
          </article>
        </article>
        <article className="flex flex-col gap-y-[30px]">
        <img
          className="myimg h-[300px] object-cover"
          src={myimg}
          alt="My Portrait"
        />
         <a href={CV_EN} download="Gaga_Chituashvili_CV.pdf">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition flex items-center gap-x-[5px]">
              Resume
              <img className="w-6" src={download}/>
            </button>
          </a>
        </article>
      </section>

        <section className="h-[150px] bg-slate-200 flex justify-between items-center px-[30px]">
          <span>Html & Css</span>
          <span>Javascript</span>
          <span>React JS</span>
          <span>Python</span>
          <span>Django</span>
          <span>Tailwind Css</span>
          <span>RESTful APIs</span>
          <span>Git / GitHub</span>
          <span>API Integration</span>
        </section>


      <section className="flex flex-col gap-y-[30px]">
        <h2 className="font-bold text-[30px]">Education</h2>
       <article className="flex flex-col gap-y-[20px] border border-solid border-black p-[30px]">
       <span>Frontend Development-Python</span>
        <span>Academy of Digital Industries</span>
        <span>03/05/2025</span>
       </article>
       <article className="flex flex-col gap-y-[20px] border border-solid border-black p-[30px]">
       <span>Frontend Development-React JS</span>
        <span>Academy of Digital Industries</span>
        <span>07/02/2025</span>
       </article>
       <article className="flex flex-col gap-y-[20px] border border-solid border-black p-[30px]">
       <span>Frontend Development-Javascript</span>
        <span>Academy of Digital Industries</span>
        <span>12/12/2024</span>
       </article>
       <article className="flex flex-col gap-y-[20px] border border-solid border-black p-[30px]">
       <span>Frontend Development-Html & Css</span>
        <span>Academy of Digital Industries</span>
        <span>19/08/2024</span>
       </article>
       <article className="flex flex-col gap-y-[20px] border border-solid border-black p-[30px]">
       <span>Business Administration</span>
        <span>Tbilisi State Uiversity</span>
        <span>2019-2023</span>
       </article>
      </section>

      <section className="project">
        <h2>PROJECT</h2>
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
