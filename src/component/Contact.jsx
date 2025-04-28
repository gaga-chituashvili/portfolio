import React from "react";

const Contact = () => {
  const tell = () => {
    window.open("tel:+995595756175", "_blank");
  };
  const mail = () => {
    window.open("mailto:gagachituashvili7@gmail.com", "_blank");
  };
  return (
    <section className="flex flex-col gap-[50px] p-8">
      <h2 className="text-[36px] font-extrabold text-center text-slate-100">
        Contact Me
      </h2>

      <article className="flex flex-col items-center gap-8 p-10 border border-gray-300 rounded-3xl shadow-lg shadow-slate-100 bg-gradient-to-br  to-gray-100 hover:shadow-2xl transition-all duration-500">
        <div
          onClick={tell}
          className="flex items-center gap-4 text-slate-100 hover:text-green-600 cursor-pointer text-2xl font-semibold transition duration-300"
        >
          <span className="text-3xl">📞</span>
          <span>(+995) 595-75-61-75</span>
        </div>

        <div
          onClick={mail}
          className="flex items-center gap-4 text-slate-100 hover:text-green-600 cursor-pointer text-2xl font-semibold transition duration-300"
        >
          <span className="text-3xl">✉️</span>
          <span>gagachituashvili7@gmail.com</span>
        </div>
      </article>
    </section>
  );
};

export default Contact;
