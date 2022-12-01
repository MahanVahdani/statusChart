import React from "react";
import Chart from "../Chart/Chart";
import { data } from "../../Data/data";

const Home = () => {
  return (
    <div className="bg-gray-700 flex justify-center py-52 px-10">
      <Chart data={data} />
    </div>
  );
};

export default Home;
