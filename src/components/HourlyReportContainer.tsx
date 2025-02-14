import { ICurrentWheatherData, IHourlyWeatherData } from "../hooks/useFetch";
import { ISearchedCity } from "../layouts/HomePageLayout";
import HomepageInfoCard from "./HomepageInfoCard";

interface HourlyReportContainerProps {
  hourlyWeatherDataFromUrl: IHourlyWeatherData[] | null;
  CurrentWheatherData: ICurrentWheatherData | null;
  dateData?: Date | null;
  searchedCityHourlyData: IHourlyWeatherData[] | null;
}
export default function HourlyReportContainer({
  hourlyWeatherDataFromUrl,
  dateData,
  CurrentWheatherData,
  searchedCityHourlyData,
}: HourlyReportContainerProps) {
  function getMonthName(date: Date) {
    const userLocale = navigator.language;
    return new Intl.DateTimeFormat(userLocale, { month: "long" }).format(date);
  }
  return (
    <div className="homepage-hourly-container ">
      <div className="homepage-full-report">
        <h1>Today</h1>
        {dateData ? (
          <p>
            {dateData ? getMonthName(dateData) : ""} {dateData?.getDate()} ,{" "}
            {dateData?.getFullYear()}
          </p>
        ) : (
          <a href="#">View full report</a>
        )}
      </div>

      <div className="homepage-hourly-info">
        {searchedCityHourlyData
          ? searchedCityHourlyData
              ?.slice(0, 24)
              .map(
                (hourlyInfo: { dt: number; temp: number }, index: number) => (
                  <HomepageInfoCard
                    timeInMiliSec={hourlyInfo.dt}
                    temp={Math.floor(hourlyInfo.temp)}
                    key={index}
                    CurrentWheatherData={CurrentWheatherData}
                  />
                )
              )
          : hourlyWeatherDataFromUrl
              ?.slice(0, 24)
              .map(
                (hourlyInfo: { dt: number; temp: number }, index: number) => (
                  <HomepageInfoCard
                    timeInMiliSec={hourlyInfo.dt}
                    temp={Math.floor(hourlyInfo.temp)}
                    key={index}
                    CurrentWheatherData={CurrentWheatherData}
                  />
                )
              )}
      </div>
    </div>
  );
}
