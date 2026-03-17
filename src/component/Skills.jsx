import React from "react";
import { motion } from "framer-motion";
import { socials } from "../data/social";


const Social = () => {
  return (
    <section className="flex gap-8 items-center justify-center p-8">
      {socials.map((social, index) => (
        <motion.div
          key={index}
          onClick={() =>
            window.open(social.url, "_blank", "noopener,noreferrer")
          }
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer"
        >
          {social.icon}
        </motion.div>
      ))}
    </section>
  );
};

export default Social;
