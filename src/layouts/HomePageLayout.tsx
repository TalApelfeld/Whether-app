import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { ICurrentWheatherData, IHourlyWeatherData } from "../hooks/useFetch";
import HourlyReportContainer from "../components/HourlyReportContainer";

interface HomePageLayoutProps {
  hourlyWeatherDataFromUrl: IHourlyWeatherData[] | null;
  CurrentWheatherData: ICurrentWheatherData | null;
  setForecast: Dispatch<SetStateAction<boolean>>;
  setWeekly: Dispatch<SetStateAction<boolean>>;
  dateData: Date | null;
}

interface ISearchedCity {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
}

export default function HomePageLayout({
  hourlyWeatherDataFromUrl,
  CurrentWheatherData,
  setForecast,
  setWeekly,
  dateData,
}: HomePageLayoutProps) {
  const [isWeeklyButtonClicked, setWeeklyButtonClicked] =
    useState<boolean>(false);
  const [searchIsClicked, setSearchIsClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchedCityData, setSearchedCityData] =
    useState<ISearchedCity | null>(null);
  const [isError, setIsError] = useState(false);

  //   if (hourlyWeatherDataFromUrl) {
  //     console.log(hourlyWeatherDataFromUrl);
  //   }
  function getMonthName(date: Date) {
    const userLocale = navigator.language;
    return new Intl.DateTimeFormat(userLocale, { month: "long" }).format(date);
  }

  async function getCityWeatherData(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=${"metric"}&appid=2d04d370dc6e8e24a96bc78555180eef`
      );
      if (res.status == 404)
        throw new Error("There's no findings for such city");
      const data = await res.json();
      setSearchedCityData(data);
      setInputValue("");
      setSearchIsClicked(!searchIsClicked);
    } catch (error) {
      setIsError(true);
      setInputValue("");
      setSearchIsClicked(!searchIsClicked);
    } finally {
      setTimeout(() => {
        setIsError(false);
      }, 2500);
    }
  }

  return (
    <>
      <div className={`error ${isError ? "show" : ""}`}>
        <span>Sorry... There's no findings for such city</span>
      </div>
      <div className="homepage-title-container">
        <h1>
          {searchedCityData
            ? searchedCityData.sys.country
            : CurrentWheatherData?.sys.country}
          ,
          {searchedCityData ? searchedCityData.name : CurrentWheatherData?.name}
        </h1>
        <p>
          {dateData ? getMonthName(dateData) : ""} {dateData?.getDate()} ,{" "}
          {dateData?.getFullYear()}
        </p>
      </div>
      <button
        className="search"
        onClick={() => setSearchIsClicked(!searchIsClicked)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={"rgba(92, 92, 131, 0.347)"}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
          width="45px"
          height="45px"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            color="white"
          />
        </svg>
      </button>
      <form onSubmit={getCityWeatherData}>
        <div
          className="search-input"
          style={{ display: `${searchIsClicked ? "flex" : "none"}` }}
        >
          <input
            autoFocus
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
            type="text"
            placeholder="Enter city to look for..."
            value={inputValue}
          />
          <button className="submit-btn" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="transparent"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
              width="25px"
              height="25px"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                color="white"
              />
            </svg>
          </button>
        </div>
      </form>
      <div className="homepage-top-btn-container">
        <button className={isWeeklyButtonClicked ? "" : "clicked"}>
          Forecast
        </button>
        <button
          onClick={() => {
            setWeeklyButtonClicked(!isWeeklyButtonClicked);
            setForecast(false);
            setWeekly(true);
          }}
          className={isWeeklyButtonClicked ? "clicked" : ""}
        >
          Weekly
        </button>
      </div>
      <div className="homepage-info">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100"
          height="100"
          viewBox="6.5 10 50 50"
        >
          <defs>
            <filter id="blur" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="4" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.05" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <style type="text/css"></style>
          </defs>
          <g filter="url(#blur)" id="day">
            <g transform="translate(32,32)">
              <g className="am-weather-sun am-weather-sun-shiny am-weather-easing-ease-in-out">
                <g>
                  <line
                    fill="none"
                    stroke="orange"
                    strokeLinecap="round"
                    strokeWidth="2"
                    transform="translate(0,9)"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="3"
                  />
                </g>
                <g transform="rotate(45)">
                  <line
                    fill="none"
                    stroke="orange"
                    strokeLinecap="round"
                    strokeWidth="2"
                    transform="translate(0,9)"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="3"
                  />
                </g>
                <g transform="rotate(90)">
                  <line
                    fill="none"
                    stroke="orange"
                    strokeLinecap="round"
                    strokeWidth="2"
                    transform="translate(0,9)"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="3"
                  />
                </g>
                <g transform="rotate(135)">
                  <line
                    fill="none"
                    stroke="orange"
                    strokeLinecap="round"
                    strokeWidth="2"
                    transform="translate(0,9)"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="3"
                  />
                </g>
                <g transform="rotate(180)">
                  <line
                    fill="none"
                    stroke="orange"
                    strokeLinecap="round"
                    strokeWidth="2"
                    transform="translate(0,9)"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="3"
                  />
                </g>
                <g transform="rotate(225)">
                  <line
                    fill="none"
                    stroke="orange"
                    strokeLinecap="round"
                    strokeWidth="2"
                    transform="translate(0,9)"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="3"
                  />
                </g>
                <g transform="rotate(270)">
                  <line
                    fill="none"
                    stroke="orange"
                    strokeLinecap="round"
                    strokeWidth="2"
                    transform="translate(0,9)"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="3"
                  />
                </g>
                <g transform="rotate(315)">
                  <line
                    fill="none"
                    stroke="orange"
                    strokeLinecap="round"
                    strokeWidth="2"
                    transform="translate(0,9)"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="3"
                  />
                </g>
              </g>
              <circle
                cx="0"
                cy="0"
                fill="orange"
                r="5"
                stroke="orange"
                strokeWidth="2"
              />
            </g>
          </g>
        </svg>
        <div className="homepage-info-trio">
          <div className="title-with-svg">
            Temp
            <svg
              width="20px"
              height="20px"
              viewBox="15 0 76 76"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              baseProfile="full"
              enableBackground="new 0 0 76.00 76.00"
              xmlSpace="preserve"
            >
              <path
                fill="white"
                fillOpacity="1"
                strokeWidth="0.2"
                strokeLinejoin="round"
                d="M 41.5,49C 41.5,52.0376 39.0376,54.5 36,54.5C 32.9624,54.5 30.5,52.0376 30.5,49C 30.5,46.3039 32.4399,44.0609 35,43.5907L 35,31L 37,31L 37,43.5907C 39.5601,44.061 41.5,46.3039 41.5,49 Z M 45,49C 45,53.9706 40.9705,58 36,58C 31.0294,58 27,53.9706 27,49C 27,45.4663 29.0365,42.4083 32,40.9356L 32,22.0001C 32,19.7909 33.7908,18.0001 36,18.0001C 38.2091,18.0001 40,19.7909 40,22.0001L 40,40.9355C 42.9634,42.4082 45,45.4663 45,49 Z M 34,42.2899C 31.1085,43.1505 29,45.829 29,49C 29,52.866 32.134,56 36,56C 39.866,56 42.9999,52.866 42.9999,49C 42.9999,45.829 40.8914,43.1505 38,42.2899L 38,22.0001C 38,20.8955 37.1045,20.0001 36,20.0001C 34.8954,20.0001 34,20.8955 34,22.0001L 34,42.2899 Z M 31,21L 31,22L 25,22L 25,21L 31,21 Z M 31,24L 31,25L 27,25L 27,24L 31,24 Z M 31,27L 31,28L 25,28L 25,27L 31,27 Z M 31,30L 31,31L 27,31L 27,30L 31,30 Z M 31,33L 31,34L 25,34L 25,33L 31,33 Z M 31,36L 31,37L 27,37L 27,36L 31,36 Z M 31,39L 31,40L 25,40L 25,39L 31,39 Z M 52.8267,37.4983C 51.8836,37.9572 50.6518,38.1867 49.1312,38.1867C 47.146,38.1867 45.5855,37.6004 44.45,36.4279C 43.3144,35.2554 42.7467,33.694 42.7467,31.7438C 42.7467,29.6651 43.3854,27.9793 44.6629,26.6863C 45.9404,25.3932 47.598,24.7467 49.6358,24.7467C 50.8978,24.7467 51.9614,24.91 52.8267,25.2367L 52.8267,28.1067C 51.975,27.6089 51.0047,27.36 49.9158,27.36C 48.72,27.36 47.7551,27.7353 47.021,28.4858C 46.287,29.2364 45.92,30.2533 45.92,31.5367C 45.92,32.7675 46.2661,33.748 46.9583,34.4781C 47.6505,35.2083 48.5829,35.5733 49.7554,35.5733C 50.8735,35.5733 51.8972,35.3245 52.8267,34.8267L 52.8267,37.4983 Z M 57.3008,29.7867C 56.5736,29.7867 55.9572,29.5407 55.4517,29.0488C 54.9461,28.5568 54.6933,27.9579 54.6933,27.2521C 54.6933,26.5482 54.9461,25.9547 55.4517,25.4715C 55.9572,24.9883 56.5736,24.7467 57.3008,24.7467C 58.0242,24.7467 58.6415,24.9883 59.1529,25.4715C 59.6643,25.9547 59.92,26.5482 59.92,27.2521C 59.92,27.9579 59.6643,28.5568 59.1529,29.0488C 58.6415,29.5407 58.0242,29.7867 57.3008,29.7867 Z M 57.3067,26.0533C 56.9936,26.0533 56.7287,26.17 56.5119,26.4033C 56.2951,26.6367 56.1867,26.9215 56.1867,27.2579C 56.1867,27.5943 56.2951,27.8821 56.5119,28.1213C 56.7287,28.3604 56.9936,28.48 57.3067,28.48C 57.6139,28.48 57.8774,28.3604 58.0971,28.1213C 58.3168,27.8821 58.4267,27.5943 58.4267,27.2579C 58.4267,26.9215 58.3183,26.6367 58.1015,26.4033C 57.8846,26.17 57.6197,26.0533 57.3067,26.0533 Z "
              />
            </svg>
          </div>
          <div className="title-with-svg">
            Wind
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7639 7C16.3132 6.38625 17.1115 6 18 6C19.6569 6 21 7.34315 21 9C21 10.6569 19.6569 12 18 12H3M8.50926 4.66667C8.87548 4.2575 9.40767 4 10 4C11.1046 4 12 4.89543 12 6C12 7.10457 11.1046 8 10 8H3M11.5093 19.3333C11.8755 19.7425 12.4077 20 13 20C14.1046 20 15 19.1046 15 18C15 16.8954 14.1046 16 13 16H3"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="title-with-svg">
            Humidity
            <svg
              fill="white"
              stroke="white"
              strokeWidth={7}
              height="20px"
              width="20px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 328.611 328.611"
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M209.306,50.798c-2.452-3.337-7.147-4.055-10.485-1.602c-3.338,2.453-4.055,7.147-1.603,10.485
  c54.576,74.266,66.032,123.541,66.032,151.8c0,27.691-8.272,52.794-23.293,70.685c-17.519,20.866-42.972,31.446-75.651,31.446
  c-73.031,0-98.944-55.018-98.944-102.131c0-52.227,28.103-103.234,51.679-136.829c25.858-36.847,52.11-61.415,52.37-61.657
  c3.035-2.819,3.209-7.565,0.39-10.6c-2.819-3.034-7.565-3.209-10.599-0.39c-1.11,1.031-27.497,25.698-54.254,63.765
  c-24.901,35.428-54.586,89.465-54.586,145.71c0,31.062,9.673,59.599,27.236,80.353c20.361,24.061,50.345,36.779,86.708,36.779
  c36.794,0,66.926-12.726,87.139-36.801c17.286-20.588,26.806-49.117,26.806-80.33C278.25,156.216,240.758,93.597,209.306,50.798z"
                />
                <path
                  d="M198.43,148.146l-95.162,95.162c-2.929,2.929-2.929,7.678,0,10.606c1.465,1.464,3.385,2.197,5.304,2.197
  s3.839-0.732,5.304-2.197l95.162-95.162c2.929-2.929,2.929-7.678,0-10.606C206.107,145.217,201.359,145.217,198.43,148.146z"
                />
                <path
                  d="M191.965,207.899c-13.292,0-24.106,10.814-24.106,24.106s10.814,24.106,24.106,24.106s24.106-10.814,24.106-24.106
  S205.257,207.899,191.965,207.899z M191.965,241.111c-5.021,0-9.106-4.085-9.106-9.106s4.085-9.106,9.106-9.106
  s9.106,4.085,9.106,9.106S196.986,241.111,191.965,241.111z"
                />
                <path
                  d="M125.178,194.162c13.292,0,24.106-10.814,24.106-24.106s-10.814-24.106-24.106-24.106s-24.106,10.814-24.106,24.106
  S111.886,194.162,125.178,194.162z M125.178,160.949c5.021,0,9.106,4.085,9.106,9.106s-4.085,9.106-9.106,9.106
  c-5.021,0-9.106-4.085-9.106-9.106S120.156,160.949,125.178,160.949z"
                />
              </g>
            </svg>
          </div>
          <div>
            {searchedCityData
              ? Math.floor(searchedCityData.main.temp)
              : CurrentWheatherData &&
                Math.floor(CurrentWheatherData.main.temp)}
            <span className="celsius">°C</span>
          </div>
          <div>
            {searchIsClicked
              ? searchedCityData?.wind.speed
              : CurrentWheatherData?.wind.speed}{" "}
            Km/h
          </div>
          <div>
            {searchedCityData
              ? searchedCityData.main.humidity
              : CurrentWheatherData?.main.humidity}
            %
          </div>
        </div>
      </div>
      <HourlyReportContainer
        hourlyWeatherDataFromUrl={hourlyWeatherDataFromUrl}
      />
    </>
  );
}
