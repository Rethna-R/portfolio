import { useState } from "react";

function Home() {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-4xl font-bold mb-4">
        Hi, I’m Rethna 👋
      </h1>

      <p className="max-w-xl mb-6 text-gray-600">
        I am a passionate MERN Stack Intern with strong interest in frontend
        development using React. I enjoy building responsive, user-friendly
        web applications with smooth UI interactions.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        {/* Resume */}
        <a
          href="/resume.pdf"
          download
          className="px-6 py-2 bg-black text-white rounded-lg"
        >
          Download Resume
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Rethna-R"
          target="_blank"
          className="px-6 py-2 border rounded-lg"
        >
          GitHub
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/rethna"
          target="_blank"
          className="px-6 py-2 border rounded-lg"
        >
          LinkedIn
        </a>

        {/* Phone */}
        <button
          onClick={() => setShowPhone(true)}
          className="px-6 py-2 border rounded-lg"
        >
          {showPhone ? (
            <a href="tel:8667829226">📞 8667829226</a>
          ) : (
            "Phone No"
          )}
        </button>

        {/* Email */}
        <button
          onClick={() => setShowEmail(true)}
          className="px-6 py-2 border rounded-lg"
        >
          {showEmail ? (
            <a href="mailto:rethna8667@gmail.com">
              ✉️ rethna8667@gmail.com
            </a>
          ) : (
            "Email"
          )}
        </button>
      </div>
    </section>
  );
}

export default Home;
