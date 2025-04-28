import React from "react";
import linkedin from "./img/linkedin.svg";
import github from "./img/github.svg";
import instagram from "./img/instagram.svg";
import facebook from "./img/facebook.svg";

const linkedinClick = () => {
  window.open(
    "https://www.linkedin.com/in/gaga-chituashvili-222551320/",
    "_blank"
  );
};
const GITHUBClick = () => {
  window.open("https://github.com/gaga-chituashvili", "_blank");
};

const igClick = () => {
  window.open("https://www.instagram.com/gagachituashvilii/", "_blank");
};

const facebookClick = () => {
  window.open(
    "https://www.facebook.com/profile.php?id=100056927246075",
    "_blank"
  );
};

const Social = () => {
  return (
    <section className="flex gap-8 items-center justify-center p-8">
      <img
        className="w-12 cursor-pointer hover:scale-110 transition-transform duration-300 hover:brightness-90"
        onClick={linkedinClick}
        src={linkedin}
        alt="LinkedIn"
      />
      <img
        className="w-12 cursor-pointer hover:scale-110 transition-transform duration-300 hover:brightness-90"
        onClick={GITHUBClick}
        src={github}
        alt="GitHub"
      />
      <img
        className="w-12 cursor-pointer hover:scale-110 transition-transform duration-300 hover:brightness-90"
        onClick={igClick}
        src={instagram}
        alt="Instagram"
      />
      <img
        className="w-12 cursor-pointer hover:scale-110 transition-transform duration-300 hover:brightness-90"
        onClick={facebookClick}
        src={facebook}
        alt="Facebook"
      />
    </section>
  );
};

export default Social;
