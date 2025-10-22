import Marquee from "react-fast-marquee";

const skills = [
  { text: "Html & Css" },
  { text: "Javascript" },
  { text: "Typescript" },
  { text: "React JS" },
  { text: "Python" },
  { text: "Django" },
  { text: "Tailwind Css" },
  { text: "Responsive Design / Mobile" },
  { text: "RESTful APIs" },
  { text: "Axios / Fetch" },
  { text: "DRF" },
  { text: "Git / GitHub" },
  { text: "Netlify / Vercel / Render" },
  { text: "SQL" },
  { text: "API Integration" },
  { text: "SEO" },
];

const Skills = () => {
  return (
    <section className="h-28 bg-gradient-to-r from-slate-200 to-slate-100 shadow-md rounded-xl flex items-center overflow-hidden relative">
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
