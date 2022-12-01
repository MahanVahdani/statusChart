import React from "react";
import { data } from "../../Data/data";

const Home = () => {
  return (
    <div className="flex max-w-full py-10 px-5">
      {data.map((data, i) => (
        <div
          key={i}
          className="w-1.5 h-8 mx-[2px] rounded-md bg-green-700"
        ></div>
      ))}
    </div>
  );
};

export default Home;
