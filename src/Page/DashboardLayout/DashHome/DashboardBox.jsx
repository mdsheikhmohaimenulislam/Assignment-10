import React from "react";

const DashboardBox = ({ title, value, color }) => (
  <div className={`rounded-lg p-6 text-white w-full md:w-[48%]`} style={{ backgroundColor: color }}>
    <p className="text-md font-medium">{title}</p>
    <p className="text-4xl font-bold leading-tight mt-2">
      {value} <span className="text-lg font-normal">Plants</span>
    </p>
  </div>
);

export default DashboardBox;
