import { motion } from "framer-motion";

interface LearnMoreAboutProps {
  onLearnMore: () => void;
}

export default function LearnMoreAbout({onLearnMore} : LearnMoreAboutProps) {
  return (
    <div className="z-2 relative grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-15 max-w-[1560px] mx-auto items-center">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-white mb-6">
          Особиста історія Сeргія Краснова
        </h2>
        <p className="text-xl leading-relaxed text-white/90 mb-4">
          Я народився та прожив 35 років у місті Нова Каховка, Херсонської
          області. Був депутатом міської ради, працював, будував життя. 24
          лютого 2022 року, вже о 9 ранку, моє місто опинилося під російською
          окупацією. Протягом кількох днів була захоплена майже вся Херсонська
          область. Тисячі людей втратили дім, бізнес, звичне життя. Багато хто
          змушений був виїхати. Інші — залишилися під окупацією, під постійною
          загрозою обстрілів, безпеки та життя. Останні 23 роки я займаюсь
          велоспортом. Я — Майстер спорту України. І я не можу залишатися
          осторонь. Саме тому я вирішив проїхати весь маршрут легендарної
          велогонки Tour de France — у Франції, за день до офіційного старту.
        </p>
        <p className="text-xl leading-relaxed text-white/90">
          Це не просто виклик. Це — моя ініціатива, щоб зібрати кошти та
          допомогти тим, хто постраждав. Через платформу UNITED24 ми зможемо
          підтримати Херсонщину й дати цим людям шанс на нове життя.
        </p>
      </motion.div>

      <motion.img
        src="/learnMoreAbout_img.jpg"
        alt="Tour de France UA"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="rounded-xl shadow-2xl w-full object-cover max-h-[700px]"
      />

      <button onClick={onLearnMore} className="absolute cursor-pointer bottom-[-12px] left-1/2 transform -translate-x-1/2 text-white hover:text-yellow-400 transition">
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
