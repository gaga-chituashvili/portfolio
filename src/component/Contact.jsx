import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  const tell = () => {
    window.open("tel:+995595756175");
  };

  const mail = () => {
    window.open("mailto:gagachituashvili7@gmail.com");
  };

  return (
    <section className="flex flex-col gap-12">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-extrabold text-center text-slate-100"
      >
        Contact Me
      </motion.h2>

      <motion.article
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className="flex flex-col items-center gap-8 p-10 border border-gray-300 rounded-3xl shadow-lg shadow-slate-100 bg-gradient-to-br to-gray-100 hover:shadow-2xl transition-all duration-500"
      >
        <motion.div
          onClick={tell}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 md:gap-4 text-slate-100 hover:text-green-600 cursor-pointer text-2xl font-semibold transition duration-300"
        >
          <Phone className="text-green-200" />
          <span className="text-xl md:text-2xl">(+995) 595-75-61-75</span>
        </motion.div>

        <motion.div
          onClick={mail}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 md:gap-4 text-slate-100 hover:text-green-600 cursor-pointer text-2xl font-semibold transition duration-300"
        >
          <Mail className="text-green-200" />
          <span className="text-xl md:text-2xl">
            gagachituashvili7@gmail.com
          </span>
        </motion.div>
      </motion.article>
    </section>
  );
};

export default Contact;
