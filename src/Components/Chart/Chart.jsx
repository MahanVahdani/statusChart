import React, { useState, useEffect } from "react";
import { Tooltip } from "@material-tailwind/react";

const Chart = ({
  data,
  width = "0.3",
  height = "1.5",
  colorOne = "#3bd671",
  colorTwo = "#f29030",
  colorThree = "#2f7f55",
  colorFour = "#df484a",
  colorUnknown = "#fff",
  messageOne = "without any problem",
  messageTwo = "quality loss",
  messageThree = "problem due update",
  messageFour = "out of service",
  messageUnknown = "unknown",
}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [optimizedData, setOptimizedData] = useState([]);

  useEffect(() => {
    screenWidth < 768
      ? setOptimizedData(data.slice(data.length - 30, data.length))
      : screenWidth < 1024
      ? setOptimizedData(data.slice(data.length - 60, data.length))
      : setOptimizedData(data);
  }, []);

  const handleStatusMessage = (upTime) => {
    return upTime === 100
      ? messageOne
      : upTime <= 99 && upTime >= 90
      ? messageTwo
      : upTime <= 89 && upTime >= 70
      ? messageThree
      : upTime <= 69 && upTime >= 0
      ? messageFour
      : messageUnknown;
  };

  const handleBarColor = (upTime) => {
    return upTime === 100
      ? colorOne
      : upTime <= 99 && upTime >= 90
      ? colorTwo
      : upTime <= 89 && upTime >= 70
      ? colorThree
      : upTime <= 69 && upTime >= 0
      ? colorFour
      : colorUnknown;
  };

  const handlePeriodText = (days) => {
    return days === 30
      ? "past month"
      : days === 60
      ? "past 2 month"
      : "past 3 month";
  };

  return (
    <div className="w-full flex justify-center">
      {data.map(({ date = "0/0/0", upTime = 100 }, i) => (
        <Tooltip
          key={i}
          className={`bg-[rgba(0,0,0,0.5)] text-white rounded-md px-2 py-0.5 text-xs`}
          content={
            <div className="flex flex-col justify-center items-center">
              <p className="py-1">{"تاریخ: " + date}</p>
              <p className="py-1">
                {upTime <= 100 && upTime >= 0
                  ? "upTime: " + upTime + "%"
                  : "upTime: خطا"}
              </p>
              <p className="py-1">{handleStatusMessage(upTime)}</p>
            </div>
          }
        >
          <div
            className={`mx-[2px] rounded-md hover:brightness-50 transition-all duration-100`}
            style={{
              width: width + "rem",
              height: height + "rem",
              backgroundColor: handleBarColor(upTime),
            }}
          />
        </Tooltip>
      ))}
      <p className="text-white"> {handlePeriodText(optimizedData.length)}</p>
    </div>
  );
};

export default Chart;
