import React from "react";
import guitar from "./img/guitar.jpg";
import restaurant from "./img/restaurant.png";
import kolhs from "./img/kolhs.png";
import restaurant2 from "./img/restaurant2.png";
import countries from "./img/countries1.png";
import puzzle from "./img/puzzle.jpg";
import weather from "./img/weather.jpg"

const projects = [
  {
    title: "Weather Forecast",
    img: weather,
    link: "https://weatherforecast333.netlify.app",
  },
  {
    title: "Puzzle Game",
    img: puzzle,
    link: "https://puzzlegame111.netlify.app",
  },
  {
    title: "Rest Countries",
    img: countries,
    link: "https://restcountries3.netlify.app",
  },
  {
    title: "Georgian Restaurant",
    img: restaurant2,
    link: "https://georgianrestaurant.onrender.com",
  },
  {
    title: "Kolh's Shop",
    img: kolhs,
    link: "https://kolhs.netlify.app",
  },
  {
    title: "Grilli Restaurant",
    img: restaurant,
    link: "https://grillirestaurant3.netlify.app",
  },
  {
    title: "Guitar Shop",
    img: guitar,
    link: "https://guitarr.netlify.app",
  },
];

const Project = () => {
  return (
    <section className="flex flex-col gap-12 p-2">
      <h2 className="text-slate-100 font-bold text-2xl md:text-4xl text-center">
        PROJECT
      </h2>

      <section className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <article
            key={index}
            onClick={() => window.open(project.link, "_blank")}
            className="flex flex-col gap-4 p-4 border border-gray-300 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer bg-slate-200 w-full md:w-[40rem]"
          >
            <img
              className="project w-full h-[20rem] object-cover rounded-xl hover:brightness-90 transition duration-300"
              src={project.img}
              alt={project.title}
            />
            <span className="text-center font-semibold">{project.title}</span>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Project;
