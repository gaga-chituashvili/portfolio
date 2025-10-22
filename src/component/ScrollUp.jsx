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
        <button
          onClick={scrollUp}
          className="fixed bottom-5 right-5 w-14 h-14 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full shadow-lg hover:shadow-2xl flex justify-center items-center transition-all duration-300 transform hover:-translate-y-2 hover:scale-110"
          aria-label="Scroll to top"
        >
          <img src={scrollup} alt="scroll up" className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default ScrollUp;
