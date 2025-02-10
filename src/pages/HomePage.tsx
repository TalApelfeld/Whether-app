import HomepageInfoCard from "../components/HomepageInfoCard";
import useFetch from "../hooks/useFetch";
const apiKey = import.meta.env.VITE_OPEN_WETHER_API_KEY;
console.log(apiKey);
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${32.013651}&lon=${34.750922}&units=${"metric"}&appid=${apiKey}`;

export default function HomePage() {
  const data = useFetch(url);
  return (
    <>
      {data ? (
        <>
          <div className="homepage-title-container">
            <h1>San Fransisco</h1>
            <p>May 28, 2021</p>
          </div>
          <div className="homepage-top-btn-container">
            <button>Forecast</button>
            <button>Weekly</button>
          </div>
          <div className="homepage-info">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="100"
              height="100"
              viewBox="0 0 64 64"
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
              <div>Temp</div>
              <div>Wind</div>
              <div>Humidity</div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
          </div>
          <div className="homepage-hourly-container ">
            <div className="homepage-full-report">
              <h1>Today</h1>
              <p>View full report</p>
            </div>

            <div className="homepage-hourly-info">
              <HomepageInfoCard />
              <HomepageInfoCard />
              <HomepageInfoCard />
              <HomepageInfoCard />
            </div>
          </div>
        </>
      ) : (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      )}
    </>
  );
}
