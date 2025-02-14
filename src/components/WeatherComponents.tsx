interface IWeatherComponentsProps {
  isForWeeklyCard?: boolean;
}

export function CloudyDaySVG({ isForWeeklyCard }: IWeatherComponentsProps) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      className={`${isForWeeklyCard ? "e" : ""}`}
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
      <g filter="url(#blur)" id="cloudy-day-1">
        <g transform="translate(20,10)">
          <g transform="translate(0,16)">
            <g className="am-weather-sun">
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
          <g className="am-weather-cloud-2">
            <path
              d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
              fill="#C6DEFF"
              stroke="white"
              strokeLinejoin="round"
              strokeWidth="1.2"
              transform="translate(-20,-11)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export function CloudyNightSVG({ isForWeeklyCard }: IWeatherComponentsProps) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      className={`${isForWeeklyCard ? "e" : ""}`}
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
      <g filter="url(#blur)" id="cloudy-night-1">
        <g transform="translate(20,10)">
          <g transform="translate(16,4), scale(0.8)">
            <g className="am-weather-moon-star-1">
              <polygon
                fill="orange"
                points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7"
                stroke="none"
                strokeMiterlimit="10"
              />
            </g>
            <g className="am-weather-moon-star-2">
              <polygon
                fill="orange"
                points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7"
                stroke="none"
                strokeMiterlimit="10"
                transform="translate(20,10)"
              />
            </g>
            <g className="am-weather-moon">
              <path
                d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z"
                fill="orange"
                stroke="orange"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </g>
          </g>
          <g className="am-weather-cloud-2">
            <path
              d="M47.7,35.4    c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
              fill="#C6DEFF"
              stroke="white"
              strokeLinejoin="round"
              strokeWidth="1.2"
              transform="translate(-20,-11)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export function ClearDaySVG({ isForWeeklyCard }: IWeatherComponentsProps) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      className={`${isForWeeklyCard ? "e" : ""}`}
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
  );
}

export function ClearNightSVG({ isForWeeklyCard }: IWeatherComponentsProps) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      className={`${isForWeeklyCard ? "e" : ""}`}
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
      <g filter="url(#blur)" id="night">
        <g transform="translate(20,20)">
          <g className="am-weather-moon-star-1">
            <polygon
              fill="orange"
              points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7"
              stroke="none"
              strokeMiterlimit="10"
            />
          </g>
          <g className="am-weather-moon-star-2">
            <polygon
              fill="orange"
              points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7"
              stroke="none"
              strokeMiterlimit="10"
              transform="translate(20,10)"
            />
          </g>
          <g className="am-weather-moon">
            <path
              d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z"
              fill="orange"
              stroke="orange"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export function RainyDaySVG({ isForWeeklyCard }: IWeatherComponentsProps) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="64"
      height="64"
      viewBox="-7 0 64 64"
      className={`${isForWeeklyCard ? "e" : ""}`}
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
      <g filter="url(#blur)" id="rainy-1">
        <g transform="translate(20,10)">
          <g transform="translate(0,16), scale(1.2)">
            <g className="am-weather-sun">
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
              stroke-width="2"
            />
          </g>
          <g>
            <path
              d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
              fill="#57A0EE"
              stroke="white"
              strokeLinejoin="round"
              strokeWidth="1.5"
              transform="translate(-15,-5), scale(0.85)"
            />
          </g>
        </g>
        <g transform="translate(34,46), rotate(10)">
          <line
            className="am-weather-rain-1"
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="4,7"
            strokeLinecap="round"
            strokeWidth="2"
            transform="translate(-6,1)"
            x1="0"
            x2="0"
            y1="0"
            y2="8"
          />
          <line
            className="am-weather-rain-2"
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="4,7"
            strokeLinecap="round"
            strokeWidth="2"
            transform="translate(0,-1)"
            x1="0"
            x2="0"
            y1="0"
            y2="8"
          />
        </g>
      </g>
    </svg>
  );
}

export function RainyNightSVG({ isForWeeklyCard }: IWeatherComponentsProps) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      className={`${isForWeeklyCard ? "e" : ""}`}
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
      <g filter="url(#blur)" id="rainy-4">
        <g transform="translate(20,10)">
          <g>
            <path
              d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
              fill="#57A0EE"
              stroke="white"
              strokeLinejoin="round"
              strokeWidth="1.2"
              transform="translate(-20,-11)"
            />
          </g>
        </g>
        <g transform="translate(37,45), rotate(10)">
          <line
            className="am-weather-rain-1"
            fill="none"
            stroke="#91C0F8"
            strokeDasharray="4,7"
            strokeLinecap="round"
            strokeWidth="2"
            transform="translate(-6,1)"
            x1="0"
            x2="0"
            y1="0"
            y2="8"
          />
        </g>
      </g>
    </svg>
  );
}

export function ThunderSVG({ isForWeeklyCard }: IWeatherComponentsProps) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      className={`${isForWeeklyCard ? "e" : ""}`}
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
      <g filter="url(#blur)" id="thunder">
        <g transform="translate(20,10)">
          <g className="am-weather-cloud-1">
            <path
              d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
              fill="#91C0F8"
              stroke="white"
              strokeLinejoin="round"
              strokeWidth="1.2"
              transform="translate(-10,-6), scale(0.6)"
            />
          </g>
          <g>
            <path
              d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
              fill="#57A0EE"
              stroke="white"
              strokeLinejoin="round"
              strokeWidth="1.2"
              transform="translate(-20,-11)"
            />
          </g>
          <g transform="translate(-9,28), scale(1.2)">
            <polygon
              className="am-weather-stroke"
              fill="orange"
              stroke="white"
              strokeWidth="1"
              points="14.3,-2.9 20.5,-2.9 16.4,4.3 20.3,4.3 11.5,14.6 14.9,6.9 11.1,6.9"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
