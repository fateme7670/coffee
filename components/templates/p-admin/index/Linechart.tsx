"use client"
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data=[
  {
      date:"03/01/01",
      currentsale:3800,
      prvsale:4000
  },
  {
      date:"03/02/01",
      currentsale:4200,
      prvsale:3800
  },
  {
      date:"03/03/01",
      currentsale:5000,
      prvsale:4200
  },
  {
      date:"03/04/01",
      currentsale:11000,
      prvsale:5000
  },
  {
      date:"03/05/01",
      currentsale:8000,
      prvsale:11000
  },
]

function Linechart() {


  return (
    <ResponsiveContainer width={'99%'} height={300}>
    <LineChart
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
    <XAxis  dataKey="name"  padding={{ left: 60, right: 30 }} />
    <YAxis />
    <Tooltip  />
    <Legend />
    <Line
      type="monotone"
      dataKey="prvsale"
      stroke="#711D1C"
      activeDot={{ r: 8 }}
    />
    <Line type="monotone" dataKey="currentsale" stroke="#82ca9d" />
  </LineChart>
  </ResponsiveContainer>
  );
}

export default Linechart;

