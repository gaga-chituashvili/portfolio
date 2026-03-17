import React, { useState, useEffect } from "react";
import { CircleFadingArrowUp } from "lucide-react";

const ScrollUp = () => {
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);

      if (scrollTop > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {showButton && (
        <div
          onClick={scrollUp}
          className="fixed bottom-5 right-5 w-14 h-14 cursor-pointer group"
        >
          <svg className="absolute top-0 left-0 w-full h-full -rotate-90">
            <circle
              cx="28"
              cy="28"
              r={radius}
              stroke="#e5e7eb"
              strokeWidth="4"
              fill="none"
            />

            <circle
              cx="28"
              cy="28"
              r={radius}
              stroke="url(#gradient)"
              strokeWidth="4"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-200"
            />

            <defs>
              <linearGradient id="gradient">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>

          <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
            <CircleFadingArrowUp className="w-6 h-6 text-white" />
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollUp;
