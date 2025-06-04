import { useState, useEffect } from "react";

const scrollTo = (id: string) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const sections = ["about", "route", "gallery", "support", "contact"];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id: string) =>
    `transition ${
      activeSection === id ? "text-yellow-500 font-bold" : "text-black"
    } hover:text-yellow-500 cursor-pointer`;

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-6 py-3 flex items-center justify-between rounded-full max-w-[960px] w-full z-50 shadow-lg">
      <div className="text-white font-bold text-lg italic">
        Tour de France <span className="text-yellow-400">by UA 25</span>
      </div>

      <nav className="flex items-center space-x-8">
        <button
          onClick={() => scrollTo("about")}
          className={linkClass("about")}
        >
          About
        </button>
        <button
          onClick={() => scrollTo("route")}
          className={linkClass("route")}
        >
          Route
        </button>
        <button
          onClick={() => scrollTo("gallery")}
          className={linkClass("gallery")}
        >
          Gallery
        </button>
        <button
          onClick={() => scrollTo("support")}
          className={linkClass("support")}
        >
          Support
        </button>
        <button
          onClick={() => scrollTo("contact")}
          className={linkClass("contact")}
        >
          Contact
        </button>

        <button className="ml-4 px-4 py-2 bg-white text-black font-medium rounded-full shadow hover:bg-gray-200 transition cursor-pointer">
          Donate
        </button>
      </nav>
    </header>
  );
}
