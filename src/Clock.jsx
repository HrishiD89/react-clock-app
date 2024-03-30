import { useEffect } from "react";
import { useState } from "react";

import CLockIcon from "./assets/clock.svg";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridian = hours >= 12 ? "pm" : "am";

    hours = hours % 12 || 12;

    return `${paddinZero(hours)}:${paddinZero(minutes)}:${paddinZero(
      seconds
    )} ${meridian}`;
  }

  function paddinZero(number) {
    return (number < 10 ? "0" : "") + number;
  }
  useEffect(() => {
    document.title = formatTime();
    let favicon = document.getElementById("favicon");
    favicon.href = CLockIcon;
  });

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}
