import { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_OPEN_WETHER_API_KEY;

interface useFetchProps {
  latitude: number;
  longitude: number;
}

export interface IHourlyWeatherData {
  dt: number;
  temp: number;
}

export interface IDailyWeatherData {
  dt: number;
  temp: {
    min: number;
    max: number;
  };
  weather: {
    main: string;
  }[];
}

export interface ICurrentWheatherData {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    main: string;
  }[];
}
export default function useFetch(userCurrentPosition: useFetchProps | null): {
  hourlyWeatherDataFromUrl: IHourlyWeatherData[] | null;
  CurrentWheatherData: ICurrentWheatherData | null;
  dailyWeatherData: IDailyWeatherData[] | null;
} {
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
    userCurrentPosition?.latitude
  }&lon=${userCurrentPosition?.longitude}&units=${"metric"}&appid=${apiKey}`;
  const hourlyWeatherUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${
    userCurrentPosition?.latitude
  }&lon=${
    userCurrentPosition?.longitude
  }&exclude=${"current"}&units=${"metric"}&appid=${apiKey}`;
  const [hourlyWeatherDataFromUrl, sethourlyWeatherDataFromUrl] = useState<
    { dt: number; temp: number }[] | null
  >(null);

  const [dailyWeatherData, setDailyWeatherData] = useState<
    IDailyWeatherData[] | null
  >(null);

  const [CurrentWheatherData, setCurrentWheatherData] =
    useState<ICurrentWheatherData | null>(null);

  async function fetchHourlyAndDailyData() {
    const res = await fetch(hourlyWeatherUrl);
    const data = await res.json();
    console.log(data);
    //   setTimeout(() => {
    // }, 1000);

    // This path of url provides both hourly and daily
    sethourlyWeatherDataFromUrl(data.hourly);
    setDailyWeatherData(data.daily);
  }
  async function fetchDataForNameOfCity() {
    const res = await fetch(currentWeatherUrl);
    const data = await res.json();
    //   setTimeout(() => {
    // }, 1000);
    setCurrentWheatherData(data);
  }

  useEffect(() => {
    if (userCurrentPosition != null) {
      fetchHourlyAndDailyData();
      fetchDataForNameOfCity();
    }
  }, [userCurrentPosition]);

  return { hourlyWeatherDataFromUrl, CurrentWheatherData, dailyWeatherData };
}
