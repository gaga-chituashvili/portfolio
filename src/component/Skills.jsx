import Marquee from "react-fast-marquee";

const skills = [
  // Frontend
  { text: "HTML & CSS" },
  { text: "JavaScript" },
  { text: "TypeScript" },
  { text: "React.js" },
  { text: "Vite" },
  { text: "Tailwind CSS" },
  { text: "Responsive Design / Mobile" },
  { text: "State Management" },
  { text: "React Hooks" },

  // Backend
  { text: "Node.js" },
  { text: "Express.js" },
  { text: "Python" },
  { text: "Django" },
  { text: "Django REST Framework (DRF)" },
  { text: "RESTful APIs" },
  { text: "Authentication & Authorization (JWT)" },

  // Database
  { text: "SQL" },
  { text: "PostgreSQL" },
  { text: "Database Design" },
  { text: "DataGrip" },

  // API & Testing
  { text: "Postman" },
  { text: "Axios / Fetch" },
  { text: "API Integration" },

  // DevOps & Deployment
  { text: "Git / GitHub" },
  { text: "Environment Variables" },
  { text: "Netlify / Vercel / Render" },
  { text: "CI/CD" },
  { text: "Docker" },

  // UI / UX & Extras
  { text: "Figma to Code" },
  { text: "Accessibility" },
  { text: "SEO" },
  { text: "Performance Optimization" },
  { text: "AI API Integration" },
];

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
