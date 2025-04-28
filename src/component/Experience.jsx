import React from "react";

const Experience = () => {
  return (
    <section className="flex flex-col gap-y-[50px] text-center">
      <h2 className="text-slate-100 font-bold text-[30px] text-center ">Work Experience</h2>
      <article className="flex justify-center border border-black p-[30px] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-slate-200">
        <article className="flex flex-col items-center gap-5 text-center">
          <span className="text-xl font-bold text-gray-800">Manager</span>
          <span className="text-lg text-gray-600">Tegeta Motors</span>
          <span className="text-base text-gray-500">2023 - 2024</span>
        </article>
      </article>
    </section>
  );
};

export default Experience;
