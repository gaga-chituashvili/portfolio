import React, { useState, useEffect } from "react";
import scrollup from "./img/scrollup.svg";

const ScrollUp = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showButton && (
        <img
          onClick={scrollUp}
          className="w-12 h-12 rounded-full bg-slate-400 fixed bottom-5 right-5 m-5 cursor-pointer opacity-90 transition-all duration-300 ease-in-out flex justify-center items-center hover:bg-slate-800 hover:transform hover:translate-y-[-5px] hover:opacity-100"
          src={scrollup}
          alt="scroll up"
        />
      )}
    </>
  );
};

export default ScrollUp;
