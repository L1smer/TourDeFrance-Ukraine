import { useState } from "react";
import HeroAbout from "../render_sections/HeroAbout";
import LearnMoreAbout from "../render_sections/LearnMoreAbout";
import { AnimatePresence, motion } from "framer-motion";

export default function About() {
  const [learnMore, setLearnMore] = useState(false);

  function onLearnMore() {
    setLearnMore((prev) => !prev);
  }

  return (
    <div className="w-screen min-h-screen relative">
      <div className="absolute inset-0 bg-[url('/Flag_of_Ukraine.png')] bg-cover bg-center bg-no-repeat z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-1" />

      <div className="relative z-2">
        <AnimatePresence mode="wait">
          {!learnMore ? (
            <motion.div
              key="hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <HeroAbout onLearnMore={onLearnMore} />
            </motion.div>
          ) : (
            <motion.div
              key="learnMore"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <LearnMoreAbout onLearnMore={onLearnMore} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
