import { useTranslation } from "react-i18next";

interface HeroAboutProps {
  onLearnMore: () => void;
}

export default function HeroAbout({ onLearnMore }: HeroAboutProps) {
  const { t } = useTranslation();

  return (
    <div className="relative z-2 text-white container lg:max-w-200 max-w-130 mx-auto h-full text-center flex flex-col min-h-[100vh] justify-center items-center px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl  lg:text-6xl font-bold mb-4 text-white text-center">
        {t('about.title')}
      </h1>
      <p className="max-w-2xl text-lg md:text-2xl text-white/90 text-center">
        {t('about.description')}
      </p>
      <button
        onClick={onLearnMore}
        className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full shadow-lg transition"
      >
        {t("about.learnMore")}
      </button>
    </div>
  );
}
