import { useState, useEffect } from "react";

const scrollTo = (id: string) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("about ");

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
    } hover:text-yellow-500`;

  return (
    <header className="bg-white min-h-25 text-white p-4 flex justify-between items-center fixed w-full z-3 shadow">
      <div>
        <img src="../../public/logo1.png" alt="" className="max-h-20" />
      </div>
      <nav className="space-x-10 mr-20">
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
      </nav>
    </header>
  );
}
