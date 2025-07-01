import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Gallery() {
  const [isViewMode, setIsViewMode] = useState(false);
  const { t } = useTranslation();

  return (
    <section
      className={`relative w-full overflow-y-hidden${
        isViewMode
          ? "bg-gradient-to-b from-yellow-400 to-blue-600 min-h-700 xl:min-h-screen"
          : "2xl:min-h-screen sm:min-h-300 min-h-530"
      } text-white`}
    >
      <div
        className={`absolute inset-0 z-20 transition-opacity duration-1000 ease-in-out ${
          isViewMode ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <img
          src="./sergiy-photos/tourdefrancepr.jpg"
          alt="Мій маршрут Tour de France"
          className="w-full h-full object-cover object-[70%_center] opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r md:via-black/70 from-black lg:via-black/90 to-transparent" />
        <div className="absolute inset-0 flex flex-col gap-10 2xl:flex-row-reverse justify-center 2xl:justify-between items-center px-6 md:px-10 lg:px-16 overflow-y-auto">
          <h1 className="2xl:mt-20 mt-5 text-3xl md:text-4xl lg:text-5xl font-bold lg:mb-0 self-center 2xl:self-start text-center lg:text-left">
            {t("gallery.title")}
          </h1>
          <div className="max-w-4xl text-base md:text-lg lg:text-xl font-semibold space-y-6 bg-black/40 p-4 md:p-6 rounded-xl">
            {(Array.isArray(t("gallery.paragraphs", { returnObjects: true }))
              ? (t("gallery.paragraphs", { returnObjects: true }) as string[])
              : []
            ).map((p: string, idx: number) => (
              <p key={idx}>{p}</p>
            ))}

            <div className="pt-4 text-center lg:text-left">
              <button
                onClick={() => setIsViewMode(true)}
                className="px-6 py-3 md:px-8 md:py-4 bg-yellow-500 text-black rounded-lg text-lg md:text-xl font-semibold shadow-lg hover:bg-yellow-600 transition"
              >
                {t("gallery.gallery_button")}
              </button>
            </div>
          </div>
        </div>
      </div>

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
  const { t } = useTranslation();

  const images = [
    {
      src: "./sergiy-photos/sergiyAndEquipment.jpg",
      label: t("gallery.gallery_labels.sergiyAndEquipment"),
      className: "md:row-span-2",
    },
    {
      src: "./sergiy-photos/tourdefranceINUkraine.jpg",
      label: t("gallery.gallery_labels.tourInUkraine"),
      className: "md:col-span-2 md:row-span-1",
    },
    {
      src: "./sergiy-photos/gran-priOdessa.png",
      label: t("gallery.gallery_labels.granPriOdessa"),
    },
    {
      src: "./sergiy-photos/tourdefranceCherson.jpg",
      label: t("gallery.gallery_labels.chersonStage"),
    },
    {
      src: "./sergiy-photos/tourdefrancepr.jpg",
      label: t("gallery.gallery_labels.pressConf"),
      className: "md:col-span-2 md:row-span-2",
    },
    {
      src: "./sergiy-photos/peaceRace.jpg",
      label: t("gallery.gallery_labels.peaceRace"),
    },
    {
      src: "./sergiy-photos/italy.jpg",
      label: t("gallery.gallery_labels.italyRace"),
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
  const [showLabel, setShowLabel] = useState(false);

  return (
    <div
      className={`relative w-full h-full overflow-hidden group ${className} transition-all duration-500 rounded-xl xl:rounded-none`}
      onClick={() => setShowLabel((prev) => !prev)}
    >
      <img src={src} alt={label} className="w-full h-full object-cover" />
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 z-10 ${
          showLabel ? "opacity-100" : "group-hover:opacity-100 opacity-0"
        }`}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 z-20 text-white text-sm md:text-base lg:text-lg font-semibold text-center px-4 ${
          showLabel ? "opacity-100" : "group-hover:opacity-100 opacity-0"
        }`}
      >
        {label}
      </div>
    </div>
  );
}
