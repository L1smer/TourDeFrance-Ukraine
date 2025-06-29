import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  mobileNavContainerVariant,
  mobileNavListVariant,
  mobileNavExitProps,
} from "../data/animationConfig";
import { useTranslation } from 'react-i18next';

const scrollTo = (id: string) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isOpen, setIsOpen] = useState<boolean>(false);
	const { t } = useTranslation();

  useEffect(() => {
    const sections = ["about", "route", "gallery", "support", "blog"];

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
      activeSection === id
        ? "text-yellow-500 font-bold"
        : (activeSection === "route" || activeSection === "blog")
        ? "text-black"
        : "text-white"
    } hover:text-yellow-500 cursor-pointer`;

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md text-white px-4 py-3 rounded-xl w-[95vw] max-w-[960px] z-50 shadow-lg">
      <nav className="flex items-center justify-between flex-wrap">
        <div
          className={`${
            (activeSection === "route" || activeSection === "blog") ? "text-sky-600" : "text-white"
          } font-bold text-md sm:text-lg italic`}
        >
          Tour de France <span className="text-yellow-400">by UA 25</span>
        </div>

        <div className="lg:flex items-center space-x-8 hidden">
          <button
            onClick={() => scrollTo("about")}
            className={linkClass("about")}
          >
            {t('header.about')}
          </button>
          <button
            onClick={() => scrollTo("route")}
            className={linkClass("route")}
          >
            {t('header.route')}
          </button>
          <button
            onClick={() => scrollTo("gallery")}
            className={linkClass("gallery")}
          >
            {t('header.gallery')}
          </button>
          <button
            onClick={() => scrollTo("support")}
            className={linkClass("support")}
          >
            {t('header.support')}
          </button>
					<button
            onClick={() => scrollTo("blog")}
            className={linkClass("blog")}
          >
            {t('header.blog')}
          </button>
          <button className="ml-4 px-4 py-2 bg-white text-black font-medium rounded-full shadow hover:bg-gray-200 transition cursor-pointer">
            {t('header.donate')}
          </button>
        </div>
        <div className="flex w-[75px] justify-end lg:hidden">
          <button onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? <X color="black" /> : <Menu color="black" />}
          </button>
        </div>
        {isOpen && (
          <AnimatePresence mode="wait">
            <motion.div
              layout="position"
              key="nav-links"
              variants={mobileNavContainerVariant}
              initial="hidden"
              animate="show"
              className="mt-4 flex flex-col gap-3 basis-full items-center lg:hidden"
            >
              <motion.div
                variants={mobileNavListVariant}
                {...mobileNavExitProps}
              >
                <button
                  onClick={() => scrollTo("about")}
                  className={linkClass("about")}
                >
                  {t('header.about')}
                </button>
              </motion.div>
              <motion.div
                variants={mobileNavListVariant}
                {...mobileNavExitProps}
              >
                <button
                  onClick={() => scrollTo("route")}
                  className={linkClass("route")}
                >
                  {t('header.route')}
                </button>
              </motion.div>
              <motion.div
                variants={mobileNavListVariant}
                {...mobileNavExitProps}
              >
                <button
                  onClick={() => scrollTo("gallery")}
                  className={linkClass("gallery")}
                >
                  {t('header.gallery')}
                </button>
              </motion.div>
              <motion.div
                variants={mobileNavListVariant}
                {...mobileNavExitProps}
              >
                <button
                  onClick={() => scrollTo("support")}
                  className={linkClass("support")}
                >
                  {t('header.support')}
                </button>
              </motion.div>
							<motion.div
                variants={mobileNavListVariant}
                {...mobileNavExitProps}
              >
                <button
                  onClick={() => scrollTo("blog")}
                  className={linkClass("blog")}
                >
                  {t('header.blog')}
                </button>
              </motion.div>
              <motion.div
                variants={mobileNavListVariant}
                {...mobileNavExitProps}
              >
                <button className="px-4 py-2 min-w-25 bg-white text-black font-medium rounded-full shadow hover:bg-gray-200 transition cursor-pointer">
                  {t('header.donate')}
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </nav>
    </header>
  );
}
