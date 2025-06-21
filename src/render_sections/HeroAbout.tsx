interface HeroAboutProps {
  onLearnMore: () => void;
}

export default function HeroAbout({ onLearnMore }: HeroAboutProps) {
  return (
    <div className="relative z-2 text-white container lg:w-200 md:w-150 mx-auto h-full text-center flex flex-col min-h-[100vh] justify-center items-center ">
      <h1 className="md:text-5xl text-4xl lg:text-6xl font-bold mb-4 text-white text-center">
        Ми не просто їдемо Tour de France — ми робимо це заради України.
      </h1>
      <p className="max-w-2xl text-2xl text-white/90 text-center">
        Проєкт “Tour de France від українців” — це благодійний веломарафон, мета
        якого зібрати кошти через UNITED24.
      </p>
      <button
        onClick={onLearnMore}
        className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full shadow-lg transition"
      >
        Дізнатися більше
      </button>
    </div>
  );
}
