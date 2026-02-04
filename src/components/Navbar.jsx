import { useEffect, useState } from "react";

function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav className="sticky top-0 z-50 bg-indigo-800 dark:bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold"></h1>

        <ul className="hidden md:flex gap-8 font-medium">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item} className="hover:border-b-2 cursor-pointer">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setDark(!dark)}
          className="text-xl hover:scale-110 transition"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
