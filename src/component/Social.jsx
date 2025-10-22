import React from "react";
import linkedin from "./img/linkedin.svg";
import github from "./img/github.svg";
import instagram from "./img/instagram.svg";
import facebook from "./img/facebook.svg";

const socials = [
  {
    name: "LinkedIn",
    img: linkedin,
    url: "https://www.linkedin.com/in/gaga-chituashvili-222551320/",
  },
  {
    name: "GitHub",
    img: github,
    url: "https://github.com/gaga-chituashvili",
  },
  {
    name: "Instagram",
    img: instagram,
    url: "https://www.instagram.com/gagachituashvilii/",
  },
  {
    name: "Facebook",
    img: facebook,
    url: "https://www.facebook.com/profile.php?id=100056927246075",
  },
];

const Social = () => {
  return (
    <section className="flex gap-8 items-center justify-center p-8">
      {socials.map((social, index) => (
        <img
          key={index}
          src={social.img}
          alt={social.name}
          onClick={() => window.open(social.url, "_blank")}
          className="w-10 cursor-pointer hover:scale-112 transition-transform duration-300 hover:brightness-90"
        />
      ))}
    </section>
  );
};

export default Social;
