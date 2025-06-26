export default function Support() {
  return (
    <div className="min-h-screen relative py-20 px-6 md:px-12 lg:px-24 text-white bg-gradient-to-b from-yellow-400 via-yellow-300 to-blue-600 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="./united24-bg.jpg"
          alt="United24 Support Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Долучайся до UNITED24 разом з нами
        </h2>
        <p className="text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
          UNITED24 — це офіційна платформа збору пожертв, створена Президентом
          України для консолідації міжнародної підтримки. Наш проєкт Tour de
          France by UA 25 — частина цієї ініціативи. Зібрані кошти підуть на
          гуманітарну допомогу, розмінування та відновлення постраждалих
          регіонів.
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div className="bg-black/30 flex flex-col justify-between backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10 hover:scale-105 transition">
            <div>
              <h3 className="text-2xl font-bold mb-3">Підтримати проєкт</h3>
              <p className="mb-4">
                Твій внесок допоможе зібрати кошти для українців, які
                постраждали від війни. Це — конкретна дія, яка наближає нашу
                перемогу.
              </p>
            </div>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-fit bg-yellow-400 text-black px-5 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Перейти на UNITED24
            </a>
          </div>
          <div className="bg-black/30 flex flex-col justify-between backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10 hover:scale-105 transition">
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Підтримати поїздку Сергія
              </h3>
              <p className="mb-4">
                Допоможи Сергію Краснову та його команді здійснити благодійну
                велоподорож маршрутом Tour de France. Кожен внесок — це крок
                ближче до мети: зібрати кошти для UNITED24 та розповісти світу
                про незламність України.
              </p>
            </div>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-fit bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Підтримати Сергія
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
