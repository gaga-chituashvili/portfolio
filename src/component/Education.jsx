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
    <section className="flex flex-col gap-y-[30px] p-8">
  <h2 className="font-bold text-[30px] text-center">Education</h2>

  <article className="flex justify-between border border-solid border-black p-[30px] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
    <article className="flex flex-col gap-y-[20px]">
      <span className="font-semibold">Frontend Development-Python</span>
      <span>Academy of Digital Industries</span>
      <span>03/05/2025</span>
    </article>
    <img className="w-[250px] h-[200px] object-cover rounded-xl hover:brightness-90 cursor-pointer transition duration-300" src="" alt="" />
  </article>

  <article className="flex justify-between gap-y-[20px] border border-solid border-black p-[30px] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
    <article className="flex flex-col gap-y-[20px]">
      <span className="font-semibold">Frontend Development-React JS</span>
      <span>Academy of Digital Industries</span>
      <span>07/02/2025</span>
    </article>
    <img className="w-[250px] h-[200px] object-cover rounded-xl hover:brightness-90 cursor-pointer transition duration-300" src={certificates[2]} alt="" />
  </article>

  <article className="flex justify-between gap-y-[20px] border border-solid border-black p-[30px] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
    <article className="flex flex-col gap-y-[20px]">
      <span className="font-semibold">Frontend Development-Javascript</span>
      <span>Academy of Digital Industries</span>
      <span>12/12/2024</span>
    </article>
    <img className="w-[250px] h-[200px] object-cover rounded-xl hover:brightness-90 cursor-pointer transition duration-300" src={certificates[1]} alt="" />
  </article>

  <article className="flex justify-between gap-y-[20px] border border-solid border-black p-[30px] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
    <article className="flex flex-col gap-y-[20px]">
      <span className="font-semibold">Frontend Development-Html & Css</span>
      <span>Academy of Digital Industries</span>
      <span>19/08/2024</span>
    </article>
    <img className="w-[250px] h-[200px] object-cover rounded-xl hover:brightness-90 cursor-pointer transition duration-300" src={certificates[0]} alt="" />
  </article>

  <article className="flex justify-between gap-y-[20px] border border-solid border-black p-[30px] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
    <article className="flex flex-col gap-y-[20px]">
      <span className="font-semibold">Business Administration</span>
      <span>Tbilisi State University</span>
      <span>2019-2023</span>
    </article>
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

