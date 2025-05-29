interface HeroAboutProps {
  onLearnMore: () => void;
}

export default function HeroAbout({ onLearnMore }: HeroAboutProps) {
  return (
    <div className="fade-in-down relative z-2 text-white container w-200 mx-auto h-full text-center flex flex-col justify-center items-center ">
      <h1 className="text-6xl font-bold mb-4 text-white text-center">
        Ми не просто їдемо Tour de France — ми робимо це заради України.
      </h1>
      <p className="max-w-xl text-xl text-white/90 text-center">
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
