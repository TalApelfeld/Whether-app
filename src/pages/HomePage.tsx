import { useEffect, useState } from "react";
import HomePageLayout from "../layouts/HomePageLayout";
import useFetch from "../hooks/useFetch";
import WeeklyForecast from "../layouts/WeeklyForecast";
interface ICurrentUserPosition {
  latitude: number;
  longitude: number;
}

export default function HomePage() {
  const [userCurrentPosition, setCurrentUserPosition] =
    useState<ICurrentUserPosition | null>(null);

  const { hourlyWeatherDataFromUrl, CurrentWheatherData, dailyWeatherData } =
    useFetch(userCurrentPosition);
  const [forecast, setForecast] = useState(true);
  const [weekly, setWeekly] = useState(false);
  const [dateData, setDateData] = useState<Date | null>(null);

  function getUserPosition() {
    const options = {
      enableHighAccuracy: true,
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        handleGetPostionSuccess(position);
      },
      (error) => {
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
  function getDateData() {
    const date = new Date();
    setDateData(date);
  }

  useEffect(() => {
    getUserPosition();
    getDateData();
  }, []);

  if (forecast) {
    return (
      <div className="layout-homepage">
        {CurrentWheatherData ? (
          <HomePageLayout
            hourlyWeatherDataFromUrl={hourlyWeatherDataFromUrl}
            CurrentWheatherData={CurrentWheatherData}
            setForecast={setForecast}
            setWeekly={setWeekly}
            dateData={dateData}
          />
        ) : (
          <div className="loader-container">
            <span className="loader"></span>
          </div>
        )}{" "}
      </div>
    );
  }
  if (weekly) {
    return (
      <div className="layout-homepage">
        <WeeklyForecast
          setForecast={setForecast}
          setWeekly={setWeekly}
          hourlyWeatherDataFromUrl={hourlyWeatherDataFromUrl}
          dateData={dateData}
          dailyWeatherData={dailyWeatherData}
        />
      </div>
    );
  }
}
