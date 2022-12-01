import React from "react";
import { data } from "../../Data/data";

const Home = () => {
  return (
    <div className="flex max-w-full py-10 px-5">
      {data.map(
        (
          { time, withOutProblem, qualityLoss, ProblemUpdating, outOfService },
          i
        ) => (
          <div
            key={i}
            className={`w-1.5 h-8 mx-[2px] rounded-md  ${
              withOutProblem
                ? "bg-green-700"
                : qualityLoss
                ? "bg-yellow-500"
                : ProblemUpdating
                ? "bg-blue-600"
                : "bg-red-600"
            }`}
          ></div>
        )
      )}
    </div>
  );
};

export default Home;
