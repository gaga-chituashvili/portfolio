import Marquee from "react-fast-marquee";
import { skills } from "../data/skill";

const Skills = () => {
  return (
    <section className="h-28 bg-gradient-to-r from-slate-200 to-slate-100 shadow-md rounded-xl flex items-center overflow-hidden relative animate-skillFadeIn">
      <Marquee speed={50} pauseOnHover={true} gradient={false}>
        {skills.map((skill, index) => (
          <span
            key={index}
            className="mx-6 text-2xl font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-300 cursor-pointer"
          >
            {skill.text}
          </span>
        ))}
      </Marquee>
    </section>
  );
};

export default Skills;
