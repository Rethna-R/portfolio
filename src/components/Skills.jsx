const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Java",
  "Python"
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20 px-6
                 bg-blue-100 dark:bg-gray-900
                 text-black dark:text-white
                 border-2 border-blue-400 dark:border-gray-700
                 transition-colors duration-500"
    >
      <div className="w-full text-center">
        <h2 className="text-5xl font-bold mb-20 text-indigo-900 dark:text-[#831DC6]">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                bg-white dark:bg-black
                text-indigo-900 dark:text-white
                py-4 px-16 rounded-lg text-center font-bold
                border-2 border-indigo-900 dark:border-[#831DC6]
                transition transform
                hover:-translate-y-2
                hover:shadow-[0_0_20px_rgba(49,46,129,0.6)]
                dark:hover:shadow-[0_0_25px_rgba(131,29,198,0.6)]
              "
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
