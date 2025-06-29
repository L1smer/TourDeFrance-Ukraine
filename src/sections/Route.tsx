import { useEffect, useState } from "react";
import RouteCard from "../components/RouteCard";
import type {
  RouteCardRestStageProps,
  RouteCardStageProps,
} from "../components/RouteCard";
import { useTranslation } from "react-i18next";

type RouteItem = RouteCardRestStageProps | RouteCardStageProps;

export default function Route() {
  const [route, setRoute] = useState<RouteItem[]>([]);
  const [isShowingMore, setShowingMore] = useState<boolean>(false);
  const { t } = useTranslation();
  useEffect(() => {
    fetch("/route.JSON")
      .then((response) => response.json())
      .then((data) => {
        setRoute(data.route);
      });
  }, []);

  return (
    <section className="bg-white md:px-10">
      <div className="max-w-screen mx-auto flex flex-col justify-center align-center py-30 px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">
          {t('route.title')}
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(isShowingMore ? route : route.slice(0, 9)).map((item, idx) => (
            <RouteCard key={idx} route={item} />
          ))}
        </div>
        <button
          className="mt-8 self-center px-6 py-2 rounded-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold shadow-md transition-colors duration-200"
          onClick={() => setShowingMore((prev) => !prev)}
        >
          {isShowingMore ? t('route.showLess') : t('route.showMore')}
        </button>
      </div>
    </section>
  );
}
