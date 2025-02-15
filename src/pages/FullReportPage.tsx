import { useEffect, useState } from "react";
import { ICurrentUserPosition } from "./HomePage";
import { ICurrentWheatherData } from "../hooks/useFetch";
import {
  ClearDaySVG,
  ClearNightSVG,
  CloudyDaySVG,
  CloudyNightSVG,
  RainyDaySVG,
  RainyNightSVG,
  ThunderSVG,
} from "../components/WeatherComponents";

const apiKey = import.meta.env.VITE_OPEN_WETHER_API_KEY;

export default function FullReport() {
  const [userCurrentPosition, setCurrentUserPosition] =
    useState<ICurrentUserPosition | null>(null);
  const [currentWeatherData, setCurrentWeatherData] =
    useState<ICurrentWheatherData | null>(null);

  function getUserPosition() {
    const options = {
      enableHighAccuracy: true,
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        handleGetPostionSuccess(position);
      },
      (error) => {
        console.log(error);
        alert(
          "Please enable location services on your device and reload the page."
        );
        location.reload();
      },
      options
    );
  }
  function handleGetPostionSuccess(position: GeolocationPosition) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setCurrentUserPosition({ latitude, longitude });
  }
  async function getCurrentWeather() {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          userCurrentPosition?.latitude
        }&lon=${
          userCurrentPosition?.longitude
        }&units=${"metric"}&appid=${apiKey}`
      );
      if (!res.ok) throw new Error("There was A problem with getting the data");
      const data = await res.json();
      setCurrentWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  }

  function showSVG() {
    const date = new Date();
    if (date.getHours() >= 6 && date.getHours() <= 18) {
      if (currentWeatherData?.weather[0].main.includes("Clear")) {
        return <ClearDaySVG />;
      }
      if (currentWeatherData?.weather[0].main.includes("Clouds")) {
        return <CloudyDaySVG />;
      }
      if (currentWeatherData?.weather[0].main.includes("Rain")) {
        return <RainyDaySVG />;
      }
      if (currentWeatherData?.weather[0].main.includes("Thunderstorm")) {
        return <ThunderSVG />;
      }
    } else {
      if (currentWeatherData?.weather[0].main.includes("Clear")) {
        return <ClearNightSVG />;
      }
      if (currentWeatherData?.weather[0].main.includes("Clouds")) {
        return <CloudyNightSVG />;
      }
      if (currentWeatherData?.weather[0].main.includes("Rain")) {
        return <RainyNightSVG />;
      }
      if (currentWeatherData?.weather[0].main.includes("Thunderstorm")) {
        return <ThunderSVG />;
      }
    }
  }

  useEffect(() => {
    getUserPosition();
  }, []);

  useEffect(() => {
    if (userCurrentPosition) {
      getCurrentWeather();
    }
  }, [userCurrentPosition]);

  if (currentWeatherData) {
    console.log(currentWeatherData);
  }
  return (
    <div className="layout-fullReportPage">
      <h1>Full report</h1>
      {showSVG()}
      <div className="report-container">
        <div className="report-properties-container">
          <h2>
            <span>description:</span>
            {currentWeatherData?.weather[0].description}
          </h2>
        </div>
        <div className="report-properties-container">
          <h2>
            <span>Feels like:</span>
            {currentWeatherData?.main.feels_like}
          </h2>
        </div>
        <div className="report-properties-container">3</div>
        <div className="report-properties-container">4</div>
        <div className="report-properties-container">5</div>
        <div className="report-properties-container">6</div>
        <div className="report-properties-container">7</div>
        <div className="report-properties-container">8</div>
        <div className="report-properties-container">9</div>
        <div className="report-properties-container">10</div>
      </div>
      <a href="/">Home</a>
    </div>
  );
}
