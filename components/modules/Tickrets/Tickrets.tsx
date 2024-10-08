import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Card from "../Card/Card";
import { BillProps, TiketProps } from "@/utils/types";
interface Props {
  title: string;
  box: TiketProps[];
}
const Tickrets = ({ title, box }: Props) => {
  return (
    <div className=" bg-pink-2 w-full mb-10 h-[350px] overflow-y-auto mt-10 rounded-md p-5">
      <div className="sticky top-0  rounded-md bg-white p-5 flex mb-5 items-center justify-between">
    
        <div className="">
          <p className="text-small-semibold font-shabnam">{title} های اخیر</p>
        </div>
        <div>
          <Link
            className="flex text-small-semibold font-shabnam items-center gap-2 [&_svg]:text-redprimary-500"
            href={"/p-user/tickets"}
          >
            همه {title} ها <FaArrowLeft />
          </Link>
        </div>
  
      </div>
      <hr className="border-redprimary-500" />
      {/* <p className="text-heading4-bold mt-20 font-shabnam text-center">{title} ثبت نشده</p> */}
      {box.map((item) => (
        <Card
          key={item._id}
          title={item.title}
          createdAt={item.createdAt}
          hasAnswer={item.hasAnswer}
          id={item._id}
          department={item.department?.title}
        />
      ))}
   
    </div>
  );
};

export default Tickrets;
