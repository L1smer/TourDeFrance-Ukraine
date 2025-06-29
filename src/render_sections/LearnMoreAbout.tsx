import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface LearnMoreAboutProps {
  onLearnMore: () => void;
}

export default function LearnMoreAbout({ onLearnMore }: LearnMoreAboutProps) {
  const { t } = useTranslation();
	
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-md mb-6">
          {t('learnMore.title')}
        </h2>
        <p className="text-lg lg:text-2xl leading-relaxed text-white/90 mb-4">
          {t('learnMore.paragraph1')}
        </p>
        <p className="text-lg lg:text-2xl leading-relaxed font-bold text-white/90">
          {t('learnMore.paragraph2')}
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
