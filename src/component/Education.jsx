import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { educationData } from "../data/education";

const Education = () => {
  const [selectedPdf, setSelectedPdf] = useState(false);

  const openPdf = (pdfUrl) => {
    setSelectedPdf(pdfUrl);
  };

  return (
    <>
      <section className="flex flex-col gap-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-slate-100 font-bold text-2xl md:text-4xl text-center"
        >
          Education
        </motion.h2>

        {educationData.map((item, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="flex flex-col md:flex-row items-center justify-center md:justify-between border border-black p-8 rounded-2xl shadow-md hover:shadow-slate-100 bg-slate-200 text-center md:text-left gap-6"
          >
            <div className="flex flex-col gap-4 text-center w-full md:w-auto">
              <span className="text-xl font-bold text-gray-800">
                {item.title}
              </span>
              <span className="text-lg text-gray-600">{item.school}</span>
              <span className="text-base text-gray-500">{item.date}</span>
            </div>

            {item.img && (
              <motion.img
                src={item.img}
                alt={item.title}
                onClick={() => openPdf(item.pdf)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-[20rem] h-50 bg-gray-300 rounded-xl cursor-pointer object-cover"
              />
            )}
          </motion.article>
        ))}
      </section>

      <AnimatePresence>
        {selectedPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedPdf(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg overflow-hidden w-full max-w-4xl h-[90%] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={selectedPdf}
                title="Certificate PDF"
                className="w-full h-full"
              />

              <button
                onClick={() => setSelectedPdf(false)}
                className="absolute top-4 right-4 bg-red-500 text-white rounded-full px-3 py-1 hover:bg-red-600"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Education;
