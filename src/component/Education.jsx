import React, { useState } from "react";
import certificate1 from "./certificate/certificate1.pdf";
import certificate2 from "./certificate/certificate2.pdf";
import certificate3 from "./certificate/certificate3.pdf";
import html_css from "./img/html_css.png";
import js from "./img/js.png";
import reactjs from "./img/reactjs.png";

const certificates = [
  { file: certificate1 },
  { file: certificate2 },
  { file: certificate3 },
];

const Education = () => {
  const [selectedPdf, setSelectedPdf] = useState(false);

  const openPdf = (pdfUrl) => {
    setSelectedPdf(pdfUrl);
  };

  return (
    <>
      <section className="flex flex-col gap-[50px] p-8">
        <h2 className="text-slate-100 font-bold text-[30px] text-center ">
          Education
        </h2>

        <article className="ed4 flex items-center justify-between border border-black p-8 rounded-2xl shadow-md hover:shadow-md hover:shadow-slate-100 transition-shadow duration-300 bg-slate-200">
          <div className="flex flex-col gap-4 text-center">
            <span className="text-xl font-bold text-gray-800">
              Frontend Development - Python
            </span>
            <span className="text-lg text-gray-600">
              Academy of Digital Industries
            </span>
            <span className="text-base text-gray-500">---</span>
          </div>
          <button
            onClick={() => openPdf(certificates.file)}
            className="ed_img w-[250px] h-[200px] bg-gray-300 rounded-xl hover:brightness-90 cursor-pointer flex items-center justify-center text-gray-700 text-lg"
          >
            Add Soon
          </button>
        </article>

        <article className="ed3 flex items-center justify-between border border-black p-8 rounded-2xl shadow-md hover:shadow-md hover:shadow-slate-100 transition-shadow duration-300 bg-slate-200">
          <div className="flex flex-col gap-4 text-center">
            <span className="text-xl font-bold text-gray-800">
              Frontend Development - React JS
            </span>
            <span className="text-lg text-gray-600">
              Academy of Digital Industries
            </span>
            <span className="text-base text-gray-500">07/02/2025</span>
          </div>
          <img
            src={html_css}
            alt="react js"
            onClick={() => openPdf(certificates[2].file)}
            className="ed_img w-[250px] h-[200px] bg-gray-300 rounded-xl hover:brightness-90 cursor-pointer flex items-center justify-center text-gray-700 text-lg"
          />
        </article>

        <article className="ed2 flex items-center justify-between border border-black p-8 rounded-2xl shadow-md hover:shadow-md hover:shadow-slate-100 transition-shadow duration-300 bg-slate-200">
          <div className="flex flex-col gap-4 text-center">
            <span className="text-xl font-bold text-gray-800">
              Frontend Development - JavaScript
            </span>
            <span className="text-lg text-gray-600">
              Academy of Digital Industries
            </span>
            <span className="text-base text-gray-500">12/12/2024</span>
          </div>
          <img
            src={js}
            alt="js"
            onClick={() => openPdf(certificates[1].file)}
            className="ed_img w-[250px] h-[200px] bg-gray-300 rounded-xl hover:brightness-90 cursor-pointer flex items-center justify-center text-gray-700 text-lg"
          />
        </article>

        <article className="ed1 flex items-center justify-between border border-black p-8 rounded-2xl shadow-md hover:shadow-md hover:shadow-slate-100 transition-shadow duration-300 bg-slate-200">
          <div className="flex flex-col gap-4 text-center">
            <span className="text-xl font-bold text-gray-800">
              Frontend Development - HTML & CSS
            </span>
            <span className="text-lg text-gray-600">
              Academy of Digital Industries
            </span>
            <span className="text-base text-gray-500">19/08/2024</span>
          </div>
          <img
            src={reactjs}
            alt="html & css"
            onClick={() => openPdf(certificates[0].file)}
            className="ed_img w-[250px] h-[200px] bg-gray-300 rounded-xl hover:brightness-90 cursor-pointer flex items-center justify-center text-gray-700 text-lg"
          />
        </article>

        <article className="flex items-center justify-between border border-black p-8 rounded-2xl shadow-md hover:shadow-md hover:shadow-slate-100 transition-shadow duration-300 bg-slate-200">
          <div className="flex flex-col gap-4 text-center w-full">
            <span className="text-xl font-bold text-gray-800">
              Business Administration
            </span>
            <span className="text-lg text-gray-600">
              Tbilisi State University
            </span>
            <span className="text-base text-gray-500">2019 - 2023</span>
          </div>
        </article>
      </section>

      {selectedPdf && (
        <div
          className="pdf fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPdf(false)}
        >
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl h-[90%] relative">
            <iframe
              src={selectedPdf}
              title="Certificate PDF"
              className="w-full h-full"
            ></iframe>
            <button
              onClick={() => setSelectedPdf(true)}
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
