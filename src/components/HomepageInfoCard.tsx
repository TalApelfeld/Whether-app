import { useEffect, useState } from "react";
import { ICurrentWheatherData, IHourlyWeatherData } from "../hooks/useFetch";
import {
  ClearDaySVG,
  ClearNightSVG,
  CloudyDaySVG,
  CloudyNightSVG,
  RainyDaySVG,
  RainyNightSVG,
  ThunderSVG,
} from "./WeatherComponents";

interface HomepageInfoCardPorps {
  timeInMiliSec: number;
  temp: number;
  CurrentWheatherData: ICurrentWheatherData | null | undefined;
}

export default function HomepageInfoCard({
  timeInMiliSec,
  temp,
  CurrentWheatherData,
}: HomepageInfoCardPorps) {
  const [timeString, setTimeString] = useState<string>("");

  function convertMiliSecToTime() {
    const convertedDateFromMiliSec = new Date(timeInMiliSec * 1000);
    const hours = convertedDateFromMiliSec.getHours();
    const minutes = convertedDateFromMiliSec.getMinutes();

    // Format the time string to HH:MM
    // Pad the minutes with leading zero if necessary
    setTimeString(`${hours}:${minutes < 10 ? "0" + minutes : minutes}`);
  }

  useEffect(() => {
    convertMiliSecToTime();
  }, []);

  function showSVG() {
    const date = new Date(timeInMiliSec * 1000);
    if (date.getHours() >= 6 && date.getHours() <= 18) {
      if (CurrentWheatherData?.weather[0].main.includes("Clear")) {
        return <ClearDaySVG />;
      }
      if (CurrentWheatherData?.weather[0].main.includes("Clouds")) {
        return <CloudyDaySVG />;
      }
      if (CurrentWheatherData?.weather[0].main.includes("Rain")) {
        return <RainyDaySVG />;
      }
      if (CurrentWheatherData?.weather[0].main.includes("Thunderstorm")) {
        return <ThunderSVG />;
      }
    } else {
      if (CurrentWheatherData?.weather[0].main.includes("Clear")) {
        return <ClearNightSVG />;
      }
      if (CurrentWheatherData?.weather[0].main.includes("Clouds")) {
        return <CloudyNightSVG />;
      }
      if (CurrentWheatherData?.weather[0].main.includes("Rain")) {
        return <RainyNightSVG />;
      }
      if (CurrentWheatherData?.weather[0].main.includes("Thunderstorm")) {
        return <ThunderSVG />;
      }
    }
  }

  return (
    <div className="homepage-info-card">
      {showSVG()}
      <small>{timeString}</small>
      <p>
        {temp}
        <span className="celsius">°C</span>
      </p>
    </div>
  );
}
