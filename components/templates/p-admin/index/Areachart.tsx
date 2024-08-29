"use client"
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data=[
  {
      date:"03/01/01",
      sale:4000
  },
  {
      date:"03/02/01",
      sale:4500
  },
  {
      date:"03/03/01",
      sale:10000
  },
  {
      date:"03/04/01",
      sale:4200
  },
  {
      date:"03/05/01",
      sale:6000
  },
]
function Areachart() {


  return (
    <ResponsiveContainer width={'99%'} height={300}>
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis  dataKey="date" />
      <YAxis  />
      <Tooltip />
      <Area type="monotone" dataKey="sale" stroke="#000" fill="#711D1C" />
    </AreaChart>
    </ResponsiveContainer>
  );
}

export default Areachart;

