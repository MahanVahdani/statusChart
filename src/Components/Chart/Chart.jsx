import React from "react";
import { Tooltip } from "@material-tailwind/react";

const Chart = ({ width = "10px", height = "20px", data }) => {
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
          content={
            <div>
              <p>{date}</p>
              <p>upTime 90%</p>
              <p>{handleStatusMessage(status)}</p>
            </div>
          }
          className="bg-[rgba()] text-white rounded-md px-2 py-0.5 text-xs"
        >
          <div
            className={`w-2 h-10 mx-[2px] rounded-md ${
              status === 1
                ? "bg-[#3bd671]"
                : status === 2
                ? "bg-[#f29030]"
                : status === 3
                ? "bg-[#2f7f55]"
                : "bg-[#df484a]"
            }`}
          />
        </Tooltip>
      ))}
    </div>
  );
};

export default Chart;
