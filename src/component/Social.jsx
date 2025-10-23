import React from "react";
import { Linkedin, Github, Instagram, Facebook } from "lucide-react";

const socials = [
  {
    name: "LinkedIn",
    icon: <Linkedin className="text-blue-500 w-10 h-10" />,
    url: "https://www.linkedin.com/in/gaga-chituashvili-222551320/",
  },
  {
    name: "GitHub",
    icon: <Github className="text-gray-300 w-10 h-10" />,
    url: "https://github.com/gaga-chituashvili",
  },
  {
    name: "Instagram",
    icon: <Instagram className="text-pink-800 w-10 h-10" />,
    url: "https://www.instagram.com/gagachituashvilii/",
  },
  {
    name: "Facebook",
    icon: <Facebook className="text-blue-600 w-10 h-10" />,
    url: "https://www.facebook.com/profile.php?id=100056927246075",
  },
];

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
