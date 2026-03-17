import React from "react";
import { socials } from "../data/social";

const Social = () => {
  return (
    <section className="flex gap-8 items-center justify-center p-8">
      {socials.map((social, index) => (
        <div
          key={index}
          onClick={() => window.open(social.url, "_blank")}
          className="cursor-pointer hover:scale-110 transition-transform duration-300 hover:brightness-110"
        >
          {social.icon}
        </div>
      ))}
    </section>
  );
};

export default Social;
