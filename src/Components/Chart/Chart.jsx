import React, { useState } from "react";
import { Tooltip } from "@material-tailwind/react";

const Chart = ({
  data,
  width = 1.5,
  height = 8,
  colorOne = "#3bd671",
  colorTwo = "#f29030",
  colorThree = "#2f7f55",
  colorFour = "#df484a",
  colorUnknown = "#fff",
  messageOne = "بدون اختلال",
  messageTwo = "افت کیفیت",
  messageThree = "اختلال به علت بروز رسانی",
  messageFour = "خارج از دسترس",
  messageUnknown = "تعریف نشده",
}) => {
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
            className={`mx-[2px] rounded-md hover:brightness-50 transition-all duration-100 
            ${"w-" + width}  ${"h-" + height}
            ${
              upTime === 100
                ? "bg-[" + colorOne + "]"
                : upTime <= 99 && upTime >= 90
                ? "bg-[" + colorTwo + "]"
                : upTime <= 89 && upTime >= 70
                ? "bg-[" + colorThree + "]"
                : upTime <= 69 && upTime >= 0
                ? "bg-[" + colorFour + "]"
                : "bg-[" + colorUnknown + "]"
            }`}
          />
        </Tooltip>
      ))}
    </div>
  );
};

export default Chart;
