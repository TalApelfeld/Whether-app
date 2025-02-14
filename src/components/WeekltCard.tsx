import { useEffect, useState } from "react";
import { IDailyWeatherData } from "../hooks/useFetch";
import {
  ClearDaySVG,
  ClearNightSVG,
  CloudyDaySVG,
  CloudyNightSVG,
  RainyDaySVG,
  RainyNightSVG,
  ThunderSVG,
} from "../components/WeatherComponents";

interface WeeklyCardProps {
  dailyData: IDailyWeatherData | null;
}

export default function WeeklyCard({ dailyData }: WeeklyCardProps) {
  const [dateData, setDateData] = useState<Date | null>(null);

  function getDateData(dt: number | undefined) {
    if (!dt) return;
    const date = new Date(dt * 1000);
    setDateData(date);
  }

  function getDayName(dateData: Date | null) {
    const userLocale = navigator.language;
    return dateData?.toLocaleDateString(userLocale, { weekday: "long" });
  }

  function getMonthName(date: Date | null) {
    if (!date) return;
    const userLocale = navigator.language;
    return new Intl.DateTimeFormat(userLocale, { month: "long" }).format(date);
  }

  useEffect(() => {
    getDateData(dailyData?.dt);
  }, []);

  function showSVG() {
    const date = new Date();
    if (date.getHours() >= 6 && date.getHours() <= 18) {
      if (dailyData?.weather[0].main.includes("Clear")) {
        return <ClearDaySVG isForWeeklyCard={true} />;
      }
      if (dailyData?.weather[0].main.includes("Clouds")) {
        return <CloudyDaySVG isForWeeklyCard={true} />;
      }
      if (dailyData?.weather[0].main.includes("Rain")) {
        return <RainyDaySVG isForWeeklyCard={true} />;
      }
      if (dailyData?.weather[0].main.includes("Thunderstorm")) {
        return <ThunderSVG isForWeeklyCard={true} />;
      }
    } else {
      if (dailyData?.weather[0].main.includes("Clear")) {
        return <ClearNightSVG isForWeeklyCard={true} />;
      }
      if (dailyData?.weather[0].main.includes("Clouds")) {
        return <CloudyNightSVG isForWeeklyCard={true} />;
      }
      if (dailyData?.weather[0].main.includes("Rain")) {
        return <RainyNightSVG isForWeeklyCard={true} />;
      }
      if (dailyData?.weather[0].main.includes("Thunderstorm")) {
        return <ThunderSVG isForWeeklyCard={true} />;
      }
    }
  }

  return (
    <div className="weekly-card">
      <p className="a day">{getDayName(dateData)}</p>
      <p className="b date">
        {getMonthName(dateData)},{dateData?.getDate()}
      </p>
      <p className="d temp-max">
        {dailyData ? Math.floor(dailyData?.temp.max) : ""}
        <span className="celsius">°C</span>
      </p>
      <p className="c temp-min">
        {dailyData ? Math.floor(dailyData?.temp.min) : ""}
        <span className="celsius">°C</span>
      </p>
      {showSVG()}
    </div>
  );
}
