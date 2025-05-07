import React from "react";
import guitar from "./img/guitar.jpg";
import restaurant from "./img/restaurant.png";
import kolhs from "./img/kolhs.png";
import restaurant2 from "./img/restaurant2.png";

const Project = () => {
  const guitarClick = () => {
    window.open("https://guitarr.netlify.app", "_blank");
  };
  const grillClick = () => {
    window.open("https://grillirestaurant3.netlify.app", "_blank");
  };
  const kolhsClick = () => {
    window.open("https://kolhs.netlify.app", "_blank");
  };
  const geoRestourantClick = () => {
    window.open("https://georestaurant-mch7f.ondigitalocean.app", "_blank");
  };

  return (
    <section className="flex flex-col gap-y-[50px] p-2">
      <h2 className="text-slate-100 font-bold text-[30px] text-center">
        PROJECT
      </h2>

      <section className="project_section flex  justify-center gap-8">
        <article
          onClick={geoRestourantClick}
          className="flex flex-col gap-y-4 p-4 border border-gray-300 rounded-2xl shadow-w hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer  bg-slate-200 "
        >
          <img
            className="project w-[500px] h-[300px] object-cover rounded-xl hover:brightness-90 transition duration-300"
            src={restaurant2}
            alt="restaurant"
          />
          <span className="text-center font-semibold">Georgian Restaurant</span>
        </article>

        <article
          onClick={kolhsClick}
          className="flex flex-col gap-y-4 p-4 border border-gray-300 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer  bg-slate-200"
        >
          <img
            className="project w-[500px] h-[300px] object-cover rounded-xl hover:brightness-90 transition duration-300"
            src={kolhs}
            alt="kolhs"
          />
          <span className="text-center font-semibold">Kolh's Shop</span>
        </article>

        <article
          onClick={grillClick}
          className="flex flex-col gap-y-4 p-4 border border-gray-300 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer  bg-slate-200"
        >
          <img
            className="project w-[500px] h-[300px] object-cover rounded-xl hover:brightness-90 transition duration-300"
            src={restaurant}
            alt="restaurant"
          />
          <span className="text-center font-semibold">Grilli Restaurant</span>
        </article>

        <article
          onClick={guitarClick}
          className="flex flex-col gap-y-4 p-4 border border-gray-300 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer bg-slate-200"
        >
          <img
            className="project w-[500px] h-[300px] object-cover rounded-xl hover:brightness-90 transition duration-300"
            src={guitar}
            alt="guitar"
          />
          <span className="text-center font-semibold">Guitar Shop</span>
        </article>
      </section>
    </section>
  );
};

export default Project;
