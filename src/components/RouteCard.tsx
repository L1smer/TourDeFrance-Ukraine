import { useTranslation } from "react-i18next";

export interface RouteCardStageProps {
  stage: number;
  date: string;
  distance_km: number;
  start: string;
  finish: string;
  type: string;
}

export interface RouteCardRestStageProps {
  rest_day: number;
  date: string;
  location: string;
}

type RouteCardProps = { route: RouteCardStageProps | RouteCardRestStageProps };

function isRestDay(route: any): route is RouteCardRestStageProps {
  return "rest_day" in route;
}

export default function RouteCard({ route }: RouteCardProps) {
  const { t } = useTranslation();

  function isToday(date: string) {
    const today: string = new Date().toISOString().split("T")[0];
    return date === today;
  }

  if (isRestDay(route)) {
    return (
      <div className="rounded-2xl shadow-md border border-yellow-200 bg-yellow-50 p-5 text-center">
        <h3 className="text-xl font-bold text-yellow-700 mb-2">
          Rest Day {route.rest_day}
        </h3>
        <p className="text-sm text-yellow-600">{route.date}</p>
        <p className="text-md font-medium mt-2">{route.location}</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl shadow-md border border-blue-100 bg-blue-50 p-5">
      <h3 className="text-xl font-bold text-blue-800 mb-2">
        Stage {route.stage}
        {isToday(route.date) && (
          <span className="ml-2 px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 font-semibold">
            📍 {t("route.today")}
          </span>
        )}
      </h3>
      <p className="text-sm text-blue-600">{route.date}</p>
      <p className="text-md mt-2 font-medium">
        {route.start} → {route.finish}
      </p>
      <p className="text-sm mt-1">📏 {route.distance_km} km</p>
      <span className="inline-block mt-3 px-3 py-1 text-xs font-semibold rounded-full bg-blue-700 text-white">
        {route.type}
      </span>
    </div>
  );
}
