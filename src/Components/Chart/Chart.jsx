import React, { useState } from "react";
import { Tooltip } from "@material-tailwind/react";

const Chart = ({
  data,
  width = 1.5,
  height = 8,
  firstColor = "#3bd671",
  secondColor = "#f29030",
  thirdColor = "#2f7f55",
  fourthColor = "#df484a",
}) => {
  const handleStatusMessage = (status) => {
    return status === 1
      ? "بدون اختلال"
      : status === 2
      ? "افت کیفیت"
      : status === 3
      ? "اختلال به علت بروز رسانی"
      : "خارج از دسترس";
  };

  return (
    <div className="w-full flex justify-center">
      {data.map(({ date = "0/0/0", upTime = 100, status = 1 }, i) => (
        <Tooltip
          key={i}
          className={`bg-[rgba(0,0,0,0.5)] text-white rounded-md px-2 py-0.5 text-xs`}
          content={
            <div className="flex flex-col justify-center items-center">
              <p className="py-1">{"تاریخ: " + date}</p>
              <p className="py-1">{"upTime: " + upTime + "%"}</p>
              <p className="py-1">{handleStatusMessage(status)}</p>
            </div>
          }
        >
          <div
            className={`mx-[2px] rounded-md hover:brightness-50 transition-all duration-100 
            ${"w-" + width}  ${"h-" + height}
            ${
              status === 1
                ? "bg-[" + firstColor + "]"
                : status === 2
                ? "bg-[" + secondColor + "]"
                : status === 3
                ? "bg-[" + thirdColor + "]"
                : "bg-[" + fourthColor + "]"
            }`}
          />
        </Tooltip>
      ))}
    </div>
  );
};

export default Chart;
