import { TiketProps, UserProps } from "@/utils/types";
import Image from "next/image";
import React from "react";
interface Props {
  type: string;
  title:string
   body:string
   createdAt:string
    user :UserProps,
    img:string
}
const Awnser = ({ type,title, body, createdAt, user ,img }: Props) => {
  return (
    <section className="container mt-1">
      <div className='rounded-md font-shabnam p-4 flex max-lg:flex-col justify-between items-center'>
        <div className={`${
              type === "user" ? "bg-redprimary-500" : 'border border-[3px] order-last  border-redprimary-500'
            }  md:basis-1/2 w-full p-4 rounded-md `}>
          <div className="flex   gap-4 items-center justify-between">
            <div className="flex gap-4 items-center">
              <div className="relative w-12 h-12 rounded-full">
                <img
                  src={img || "/images/download.jpeg"}
                  alt="logo"
           
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <div>
                <p className={ type === "user" ? 'text-white':'text-black'}>{user.name}</p>
                <span className="text-gray-1 font-shabnam">{type === "user" ? "کاربر" : "مدیر"}</span>
              </div>
            </div>
            <div>
              <p className={ type === "user" ? 'text-white':'text-black'}>{new Date(createdAt).toLocaleDateString("fa-IR")}</p>
            </div>
          </div>
          <div
            className={` ${
              type === "user" ? "bg-white" : "bg-redprimary-500"
            } px-4 py-2 rounded-md  mt-5`}
          >
            <p className={ type === "user" ? 'text-black':'text-white'}>{body}</p>
          </div>
        </div>
        <div className="md:basis-1/2">

        </div>
      </div>
    </section>
  );
};

export default Awnser;
