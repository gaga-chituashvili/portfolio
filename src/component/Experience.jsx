import React from "react";

const experienceData = [
  {
    title: "Full-stack / AI Developer",
    company: "Readya",
    date: "2026 - Present",
  },
  {
    title: "Front-End Developer",
    company: "Kan-guroo",
    date: "2025 - Present",
  },
  {
    title: "Back-End / AI Developer",
    company: "Breneo",
    date: "2025 - Present",
  },
  {
    title: "Freelancer",
    company: "Upwork",
    date: "2025 - Present",
  },
  {
    title: "Manager",
    company: "Tegeta Motors",
    date: "2023 - 2024",
  },
];

const Experience = () => {
  return (
    <section className="flex flex-col gap-y-12 text-center">
      <h2 className="text-slate-100 font-bold text-2xl md:text-4xl text-center">
        Work Experience
      </h2>

      {experienceData.map((exp, index) => (
        <article
          key={index}
          className="flex justify-center border border-black p-7 rounded-2xl hover:shadow-lg shadow-md shadow-slate-200 transition-shadow duration-300 bg-slate-200"
        >
          <article className="flex flex-col items-center gap-5 text-center">
            <span className="text-xl font-bold text-gray-800">{exp.title}</span>
            <span className="text-lg text-gray-600">{exp.company}</span>
            <span className="text-base text-gray-500">{exp.date}</span>
          </article>
        </article>
      ))}
    </section>
  );
};

export default Experience;
