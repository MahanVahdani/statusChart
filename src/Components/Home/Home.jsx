import React from "react";
import Chart from "../Chart/Chart";
import { data } from "../../Data/data";

const Home = () => {
  return (
    <div className="bg-gray-700 flex justify-center py-52 px-10">
      <Chart
        data={data}
        width={"0.3"}
        height={"1.5"}
        messageOne="بدون اختلال"
        messageTwo="افت کیفیت"
        messageThree="اختلال به علت بروز رسانی"
        messageFour="خارج از دسترس"
        messageUnknown="تعریف نشده"
      />
    </div>
  );
};

export default Home;
