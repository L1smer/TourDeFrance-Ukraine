import { useTranslation } from "react-i18next";

export default function Support() {
  const { t } = useTranslation();

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
          {t('support.title')}
        </h2>
        <p className="text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
          {t('support.text')}
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div className="bg-black/30 flex flex-col justify-between backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10 hover:scale-105 transition">
            <div>
              <h3 className="text-2xl font-bold mb-3">{t('support.cards.support_project.title')}</h3>
              <p className="mb-4">
                {t('support.cards.support_project.text')}
              </p>
            </div>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-fit bg-yellow-400 text-black px-5 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              {t('support.cards.support_project.link')}
            </a>
          </div>
          <div className="bg-black/30 flex flex-col justify-between backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10 hover:scale-105 transition">
            <div>
              <h3 className="text-2xl font-bold mb-3">
                {t('support.cards.support_sergiy.title')}
              </h3>
              <p className="mb-4">
                {t('support.cards.support_sergiy.text')}
              </p>
            </div>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-fit bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {t('support.cards.support_sergiy.link')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
