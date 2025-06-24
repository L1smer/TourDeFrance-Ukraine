import { motion } from "framer-motion";

interface LearnMoreAboutProps {
  onLearnMore: () => void;
}

export default function LearnMoreAbout({ onLearnMore }: LearnMoreAboutProps) {
  return (
    <div className="relative z-2 flex flex-col xl:flex-row items-center justify-center gap-8 px-6 py-12 max-w-[1560px] min-h-[100vh] mx-auto text-center">
      <motion.img
        src="./united24.png"
        alt="Tour de France UA"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-70 self-center xl:self-start mt-20"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[1000px]"
      >
        <h2 className="text-7xl font-bold text-white drop-shadow-md mb-6">
          Tour de France by UA 25
        </h2>
        <p className="text-2xl leading-relaxed text-white/90 mb-4">
          З 4 по 26 липня 2025 року українська команда здійснить унікальний
          веломарафон — повне проходження маршруту легендарної гонки Tour de
          France за день до офіційних етапів. Ініціатива має
          на меті привернути увагу до України, об’єднати українську та
          міжнародну велоспільноту та зібрати кошти для допомоги постраждалим
          через платформу UNITED24.
        </p>
        <p className="text-2xl leading-relaxed font-bold text-white/90">
          Це не просто спортивна подія — це акт підтримки, солідарності та
          незламності.
        </p>
      </motion.div>

      <motion.img
        src="./logo.png"
        alt="Tour de France UA"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-70 self-center xl:self-end "
      />

      <button
        onClick={onLearnMore}
        className="absolute cursor-pointer bottom-[20px] left-1/2 transform -translate-x-1/2 text-white hover:text-yellow-400 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 animate-pulse"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
  );
}
