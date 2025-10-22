import React, { useState } from "react";
import certificate1 from "./certificate/certificate1.pdf";
import certificate2 from "./certificate/certificate2.pdf";
import certificate3 from "./certificate/certificate3.pdf";
import certificate4 from "./certificate/certificate4.pdf";
import html_css from "./img/html_css.png";
import js from "./img/js.png";
import reactjs from "./img/reactjs.png";
import python from "./img/python.png";

const educationData = [
  {
    title: "Full Stack Development - Python",
    school: "Academy of Digital Industries",
    date: "02/05/2025",
    img: python,
    pdf: certificate4,
  },
  {
    title: "Frontend Development - React JS",
    school: "Academy of Digital Industries",
    date: "07/02/2025",
    img: html_css,
    pdf: certificate3,
  },
  {
    title: "Frontend Development - JavaScript",
    school: "Academy of Digital Industries",
    date: "12/12/2024",
    img: js,
    pdf: certificate2,
  },
  {
    title: "Frontend Development - HTML & CSS",
    school: "Academy of Digital Industries",
    date: "19/08/2024",
    img: reactjs,
    pdf: certificate1,
  },
  {
    title: "Business Administration",
    school: "Tbilisi State University",
    date: "2019 - 2023",
    img: null,
    pdf: null,
  },
];

const Education = () => {
  const [selectedPdf, setSelectedPdf] = useState(false);

  const openPdf = (pdfUrl) => {
    setSelectedPdf(pdfUrl);
  };

  return (
    <>
      <section className="flex flex-col gap-12">
        <h2 className="text-slate-100 font-bold text-2xl md:text-4xl text-center">
          Education
        </h2>

        {educationData.map((item, index) => (
          <article
            key={index}
            className="flex flex-col md:flex-row items-center justify-center md:justify-between border border-black p-8 rounded-2xl shadow-md hover:shadow-md hover:shadow-slate-100 transition-shadow duration-300 bg-slate-200 text-center md:text-left gap-6"
          >
            <div className="flex flex-col gap-4 text-center  w-full md:w-auto">
              <span className="text-xl font-bold text-gray-800">
                {item.title}
              </span>
              <span className="text-lg text-gray-600">{item.school}</span>
              <span className="text-base text-gray-500">{item.date}</span>
            </div>
            {item.img && (
              <img
                src={item.img}
                alt={item.title}
                onClick={() => openPdf(item.pdf)}
                className="w-[20rem] h-50 bg-gray-300 rounded-xl hover:brightness-90 cursor-pointer flex items-center justify-center text-gray-700 text-lg"
              />
            )}
          </article>
        ))}
      </section>

      {selectedPdf && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPdf(false)}
        >
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl h-[90%] relative">
            <iframe
              src={selectedPdf}
              title="Certificate PDF"
              className="w-full h-full object-contain"
            ></iframe>
            <button
              onClick={() => setSelectedPdf(false)}
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Education;
