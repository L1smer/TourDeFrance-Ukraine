import { useState } from "react";

export default function Gallery() {
  const [isViewMode, setIsViewMode] = useState(false);

  return (
    <section
      className={`relative w-full ${
        isViewMode ? "bg-gradient-to-b from-yellow-400 to-blue-600 min-h-700 xl:min-h-screen" : "2xl:min-h-screen min-h-385"
      } bg-black text-white`}
    >
      {/* Стартовий екран з історією */}
      <div
        className={`absolute inset-0 z-20 transition-opacity duration-1000 ease-in-out ${
          isViewMode ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <img
          src="./sergiy-photos/tourdefrancepr.jpg"
          alt="Мій маршрут Tour de France"
          className="w-full h-full object-cover object-[70%_center] opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r md:via-black/70 from-black lg:via-black/90 to-transparent" />
        <div className="absolute inset-0 flex flex-col gap-10 2xl:flex-row-reverse justify-center 2xl:justify-between items-center px-6 md:px-10 lg:px-16 overflow-y-auto">
          <h1 className="text-3xl m-10 md:text-4xl lg:text-5xl font-bold mb-8 lg:mb-0 text-center lg:text-left">
            Мене звати Сергій Краснов
          </h1>
          <div className="max-w-4xl text-base md:text-lg lg:text-xl font-semibold space-y-6 bg-black/40 p-4 md:p-6 rounded-xl">
            <p>
              Я народився та прожив 35 років у місті Нова Каховка, Херсонської
              області. Працював депутатом міської ради. 24 лютого 2022 року моє
              рідне місто було окуповане російськими військами вже о 9-й ранку.
              Згодом під окупацією опинилась майже вся Херсонщина — разом із
              моїми рідними, друзями, сусідами.
            </p>
            <p>
              Частина людей була змушена залишити домівки, бізнеси, життя. Дехто
              не зміг виїхати — через стан здоров’я або обставини — і досі живе
              в умовах небезпеки, обстрілів та постійного страху.
            </p>
            <p>
              Вже 23 роки моє життя пов’язане з велосипедним спортом. Я —
              Майстер спорту України. І я вирішив використати свою силу,
              витривалість та досвід, щоб допомогти тим, хто цього потребує. У
              2025 році я планую пройти весь маршрут всесвітньо відомої
              велогонки Tour de France — за день до основних етапів. Це 21 етап,
              3320 км та 51 550 м вертикального набору.
            </p>
            <p>
              Ця акція має на меті зібрати кошти через платформу UNITED24, щоб
              допомогти українцям, які постраждали від війни та окупації.
            </p>
            <p>
              У 2024 році я вже подолав маршрут "Tour de France Україна",
              повторивши всі етапи на території нашої держави. Тепер — Франція.
              11 регіонів, 34 департаменти, перевал Коль-де-ла-Лоз (2304 м) —
              найвища точка Туру 2025 року.
            </p>
            <p>
              Під час заїзду мене супроводжуватиме автомобіль підтримки — з
              водою, харчуванням та технічною допомогою.
            </p>
            <p>
              Цей проєкт — не просто спортивний виклик. Це мій спосіб нагадати
              світу про незламність українців. І ще один крок до нашої перемоги.
            </p>

            {/* остальной текст как есть */}
            <div className="pt-4 text-center lg:text-left">
              <button
                onClick={() => setIsViewMode(true)}
                className="px-6 py-3 md:px-8 md:py-4 bg-yellow-500 text-black rounded-lg text-lg md:text-xl font-semibold shadow-lg hover:bg-yellow-600 transition"
              >
                Переглянути галерею
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Галерея */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out w-full h-full ${
          isViewMode ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col flex-1 gap-5 xl:grid xl:gap-0 xl:grid-cols-4 xl:auto-rows-fr max-w-[80vw] m-auto xl:max-w-full h-full">
          <GalleryImages />
        </div>
      </div>
    </section>
  );
}

function GalleryImages() {
  const images = [
    {
      src: "./sergiy-photos/sergiyAndEquipment.jpg",
      label: "Спорядження перед стартом",
      className: "md:row-span-2",
    },
    {
      src: "./sergiy-photos/tourdefranceINUkraine.jpg",
      label: "Tour de France Україна",
      className: "md:col-span-2 md:row-span-1",
    },
    {
      src: "./sergiy-photos/gran-priOdessa.png",
      label: "Гран-прі Одеса",
    },
    {
      src: "./sergiy-photos/tourdefranceCherson.jpg",
      label: "Етап у Херсоні",
    },
    {
      src: "./sergiy-photos/tourdefrancepr.jpg",
      label: "Мій маршрут Tour de France",
      className: "md:col-span-2 md:row-span-2",
    },
    {
      src: "./sergiy-photos/peaceRace.jpg",
      label: "Peace Race",
    },
    {
      src: "./sergiy-photos/italy.jpg",
      label: "Велозмагання в Італії",
    },
  ];

  return (
    <>
      {images.map(({ src, label, className = "" }, idx) => (
        <GalleryImage key={idx} src={src} label={label} className={className} />
      ))}
    </>
  );
}

type GalleryImageProps = {
  src: string;
  label: string;
  className?: string;
};

function GalleryImage({ src, label, className = "" }: GalleryImageProps) {
  return (
    <div
      className={`relative w-full h-full overflow-hidden group ${className} transition-all duration-500 rounded-xl xl:rounded-none`}
    >
      <img src={src} alt={label} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 text-white text-sm md:text-base lg:text-lg font-semibold text-center px-4">
        {label}
      </div>
    </div>
  );
}
