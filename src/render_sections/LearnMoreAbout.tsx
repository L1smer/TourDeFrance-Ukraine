import { motion } from "framer-motion";

interface LearnMoreAboutProps {
  onLearnMore: () => void;
}

export default function LearnMoreAbout({ onLearnMore }: LearnMoreAboutProps) {
  return (
    <div className="z-2 relative flex text-center justify-around py-14 max-w-[1560px] mx-auto items-center">
      <motion.img
        src="./public/united24.png"
        alt="Tour de France UA"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-50 self-start mt-5"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[650px]"
      >
        <h2 className="text-4xl font-bold text-white mb-6">
          Tour de France by UA 25
        </h2>
        <p className="text-xl leading-relaxed text-white/90 mb-4">
          З 4 по 26 липня 2025 року українська команда здійснить унікальний
          веломарафон — повне проходження маршруту легендарної гонки Tour de
          France за день до офіційних етапів. Ініціатива має
          на меті привернути увагу до України, об’єднати українську та
          міжнародну велоспільноту та зібрати кошти для допомоги постраждалим
          через платформу UNITED24.
        </p>
        <p className="text-xl leading-relaxed text-white/90">
          Це не просто спортивна подія — це акт підтримки, солідарності та
          незламності.
        </p>
      </motion.div>

      <motion.img
        src="./public/logo.png"
        alt="Tour de France UA"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-50 self-end"
      />

      <button
        onClick={onLearnMore}
        className="absolute cursor-pointer bottom-[-12px] left-1/2 transform -translate-x-1/2 text-white hover:text-yellow-400 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 animate-bounce"
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
