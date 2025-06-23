import { useState } from "react";

export default function Gallery() {
  const [isViewMode, setIsViewMode] = useState(false);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Стартовий екран з історією */}
      <div
        className={`absolute inset-0 z-20 transition-opacity duration-1000 ease-in-out ${
          isViewMode ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <img
          src="./sergiy-photos/tourdefrancepr.jpg"
          alt="Мій маршрут Tour de France"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-row-reverse justify-between items-center px-10 py-10 overflow-y-auto">
          <h1 className="text-5xl font-bold">
            Мене звати Сергій Краснов
          </h1>
          <div className="max-w-4xl text-xl font-semibold space-y-6 bg-black/40 p-6 rounded-xl">
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
              велогонки Tour de France — за день до основних етапів, які
              подолають найсильніші велогонщики світу. Це 21 етап, 3320 км
              горизонтального маршруту та 51 550 м вертикального набору — за 56
              років це стане моїм найбільшим викликом.
            </p>
            <p>
              Ця акція має на меті зібрати кошти через платформу UNITED24, щоб
              допомогти українцям, які постраждали від війни та окупації.
            </p>
            <p>
              Я не перший рік їду заради України: у 2024 році я вже подолав
              маршрут "Tour de France Україна", повторивши всі етапи на
              території нашої держави. Тепер — Франція. 11 регіонів, 34
              департаменти, перевал Коль-де-ла-Лоз (2304 м) — найвища точка Туру
              2025 року.
            </p>
            <p>
              Під час заїзду мене супроводжуватиме автомобіль підтримки — з
              водою, харчуванням та технічною допомогою.
            </p>
            <p>
              Цей проєкт — не просто спортивний виклик. Це мій спосіб нагадати
              світу про незламність українців. І ще один крок до нашої перемоги.
            </p>
            <div className="pt-4">
              <button
                onClick={() => setIsViewMode(true)}
                className="px-8 py-4 bg-yellow-500 text-black rounded-lg text-xl font-semibold shadow-lg hover:bg-yellow-600 transition"
              >
                Переглянути галерею
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Галерея */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out grid grid-cols-4 grid-rows-3 w-full h-full ${
          isViewMode ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <GalleryImages />
      </div>
    </section>
  );
}

function GalleryImages() {
  const images = [
    {
      src: "./sergiy-photos/sergiyAndEquipment.jpg",
      label: "Спорядження перед стартом",
      className: "row-span-2",
    },
    {
      src: "./sergiy-photos/tourdefranceINUkraine.jpg",
      label: "Tour de France Україна",
      className: "col-span-2 row-span-1",
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
      className: "col-span-2 row-span-2",
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
      className={`relative w-full h-full overflow-hidden group ${className} transition-all duration-500`}
    >
      <img src={src} alt={label} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 text-white text-lg font-semibold text-center px-4">
        {label}
      </div>
    </div>
  );
}
