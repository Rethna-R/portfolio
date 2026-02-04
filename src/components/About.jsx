import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center
                 bg-blue-100 dark:bg-gray-900
                 text-black dark:text-white
                 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-5xl font-bold mb-14 text-indigo-900 dark:text-[#831DC6]">
          About Me
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-lg leading-relaxed
                     text-black dark:text-gray-200"
        >
I am a B.Tech Information Technology graduate with a strong interest in web development and modern frontend technologies. I enjoy building responsive and user-friendly web applications using React, JavaScript, and Tailwind CSS.          <br /><br />
          I have completed my internships at Scode Software Solutions and Eagle-HiTech Softclou Private Limited, where I gained hands-on experience working on real-world projects and improving my MERN stack skills. I am eager to continue learning and grow as a professional software developer.
        </motion.p>
      </div>
    </section>
  );
}
