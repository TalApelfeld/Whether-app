import { useEffect, useState } from "react";
import { IDailyWeatherData } from "../hooks/useFetch";

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
  return (
    <div className="weekly-card">
      <p className="a day">{getDayName(dateData)}</p>
      <p className="b date">
        {getMonthName(dateData)},{dateData?.getDate()}
      </p>
      <p className="c temp-min">
        {dailyData ? Math.floor(dailyData?.temp.min) : ""}
        <span className="celsius">°C</span>
      </p>
      <p className="d temp-max">
        {dailyData ? Math.floor(dailyData?.temp.max) : ""}
        <span className="celsius">°C</span>
      </p>

      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="70"
        height="70"
        viewBox="15 15 40 40"
        className="e"
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
    </div>
  );
}
