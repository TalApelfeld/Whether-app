import { FormEvent, useEffect, useState } from "react";
import HomePageLayout, { ISearchedCity } from "../layouts/HomePageLayout";
import useFetch, {
  IDailyWeatherData,
  IHourlyWeatherData,
} from "../hooks/useFetch";
import WeeklyForecast from "../layouts/WeeklyForecast";
interface ICurrentUserPosition {
  latitude: number;
  longitude: number;
}

const apiKey = import.meta.env.VITE_OPEN_WETHER_API_KEY;

export default function HomePage() {
  const [userCurrentPosition, setCurrentUserPosition] =
    useState<ICurrentUserPosition | null>(null);
  const { hourlyWeatherDataFromUrl, CurrentWheatherData, dailyWeatherData } =
    useFetch(userCurrentPosition);
  const [forecast, setForecast] = useState(true);
  const [weekly, setWeekly] = useState(false);
  const [dateData, setDateData] = useState<Date | null>(null);
  const [searchedCityData, setSearchedCityData] =
    useState<ISearchedCity | null>(null);
  const [searchedCityCoords, setSearchedCityCoords] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const [searchedCityHourlyData, setSearchedCityHourlyData] = useState<
    IHourlyWeatherData[] | null
  >(null);
  const [searchedCityDailyData, setSearchedCityDailyData] = useState<
    IDailyWeatherData[] | null
  >(null);

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
  async function getSearchedCityHourlyAndDailyData() {
    const res = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${
        searchedCityCoords?.lat
      }&lon=${
        searchedCityCoords?.lon
      }&exclude=${"current"}&units=${"metric"}&appid=${apiKey}`
    );

    const data = await res.json();
    setSearchedCityHourlyData(data.hourly);
    setSearchedCityDailyData(data.daily);
  }

  useEffect(() => {
    getUserPosition();
    getDateData();
  }, []);

  useEffect(() => {
    if (searchedCityCoords) {
      getSearchedCityHourlyAndDailyData();
    }
  }, [searchedCityCoords]);

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
            searchedCityData={searchedCityData}
            setSearchedCityData={setSearchedCityData}
            setSearchedCityCoords={setSearchedCityCoords}
            searchedCityHourlyData={searchedCityHourlyData}
          />
        ) : (
          <div className="loader-container">
            <span className="loader"></span>
          </div>
        )}
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
          CurrentWheatherData={CurrentWheatherData}
          searchedCityHourlyData={searchedCityHourlyData}
          searchedCityDailyData={searchedCityDailyData}
        />
      </div>
    );
  }
}
