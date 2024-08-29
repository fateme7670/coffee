import React from "react";
import { IoStatsChart } from "react-icons/io5";
interface Props{
    count:number,
title:string
}
const Box = ({count,title}:Props) => {
  return (
    <div className="mt-5 ">
      <div className="border relative border-2 rounded-md px-3 py-3 border-redprimary-500">
       <div className="flex justify-between items-center">
           <div>
           <span>{count}</span>
        <div className="mt-3 box-bordered">
            <p className="text-base1-semibold font-shabnam pb-3">{title}</p>
        </div>
           </div>
           <div className="text-heading-bold text-redprimary-500 ">
              <IoStatsChart /> 
           </div>
       </div>
      </div>
    </div>
  );
};

export default Box;
