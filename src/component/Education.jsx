import React, { useState } from "react";
import certificate1 from "./certificate/certificate1.pdf";
import certificate2 from "./certificate/certificate2.pdf";
import certificate3 from "./certificate/certificate3.pdf";

const certificates = [
  { image: certificate1 },
  { image: certificate2 },
  { image: certificate3 },
];

const Education = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
   <section className="flex flex-col gap-8 p-8">
  <h2 className="text-[30px] font-bold text-center text-gray-800">Education</h2>

  <article className="flex items-center justify-between border border-black p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-slate-200">
    <div className="flex flex-col gap-4 text-center">
      <span className="text-xl font-bold text-gray-800">Frontend Development - Python</span>
      <span className="text-lg text-gray-600">Academy of Digital Industries</span>
      <span className="text-base text-gray-500">03/05/2025</span>
    </div>
    <img 
      className="w-[250px] h-[200px] object-cover rounded-xl hover:brightness-90 cursor-pointer transition duration-300" 
      src="" 
      alt="Python Certificate" 
    />
  </article>

  <article className="flex items-center justify-between border border-black p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-slate-200">
    <div className="flex flex-col gap-4 text-center">
      <span className="text-xl font-bold text-gray-800">Frontend Development - React JS</span>
      <span className="text-lg text-gray-600">Academy of Digital Industries</span>
      <span className="text-base text-gray-500">07/02/2025</span>
    </div>
    <img 
      className="w-[250px] h-[200px] object-cover rounded-xl hover:brightness-90 cursor-pointer transition duration-300" 
      src={certificates[2]} 
      alt="React JS Certificate" 
    />
  </article>


  <article className="flex items-center justify-between border border-black p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-slate-200">
    <div className="flex flex-col gap-4 text-center">
      <span className="text-xl font-bold text-gray-800">Frontend Development - JavaScript</span>
      <span className="text-lg text-gray-600">Academy of Digital Industries</span>
      <span className="text-base text-gray-500">12/12/2024</span>
    </div>
    <img 
      className="w-[250px] h-[200px] object-cover rounded-xl hover:brightness-90 cursor-pointer transition duration-300" 
      src={certificates[1]} 
      alt="JavaScript Certificate" 
    />
  </article>

  
  <article className="flex items-center justify-between border border-black p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-slate-200">
    <div className="flex flex-col gap-4 text-center">
      <span className="text-xl font-bold text-gray-800">Frontend Development - HTML & CSS</span>
      <span className="text-lg text-gray-600">Academy of Digital Industries</span>
      <span className="text-base text-gray-500">19/08/2024</span>
    </div>
    <img 
      className="w-[250px] h-[200px] object-cover rounded-xl hover:brightness-90 cursor-pointer transition duration-300" 
      src={certificates[0]} 
      alt="HTML & CSS Certificate" 
    />
  </article>

  <article className="flex items-center justify-between border border-black p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-slate-200">
    <div className="flex flex-col gap-4 text-center w-full">
      <span className="text-xl font-bold text-gray-800">Business Administration</span>
      <span className="text-lg text-gray-600">Tbilisi State University</span>
      <span className="text-base text-gray-500">2019 - 2023</span>
    </div>
  </article>
</section>


{selectedImage && (
  <div
    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    onClick={() => setSelectedImage(null)}
  >
    <img
      src={selectedImage}
      alt="Selected Certificate"
      className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
    />
  </div>
)}

    </>
  );
};

export default Education;

