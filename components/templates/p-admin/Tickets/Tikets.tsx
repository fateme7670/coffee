"use client";
import { CardTiket } from "@/components/modules";
import { TiketProps } from "@/utils/types";
import { Select } from "@nextui-org/react";
import React from "react";
interface Props{
  tickets:TiketProps[]
}
const Tikets = ({tickets}:Props) => {
  return (
    <section className="container   my-10">
    <div className="w-full">
    <div className="flex max-md:flex-col justify-between items-center gap-3">
        <div className="grid md:grid-cols-3 max-md:grid-cols-2  gap-8 ">
          <select
            name="orderby"
            data-active={false}
            autoFocus={false}
            className="border-b-2 border-redprimary-500 rounded-md py-1 px-3 outline-0 data-[hover]:shadow font-shabnam text-subtle-semibold"
            aria-label="Project status"
          >
            <option value="default"> همه</option>
            <option value="send">فرستاده شده</option>
            <option value="resive">دریافتی</option>
          </select>
          <select
            name="orderby"
            data-active={false}
            autoFocus={false}
            className="border-b-2 border-redprimary-500 rounded-md py-1 px-3 outline-0 data-[hover]:shadow font-shabnam text-subtle-semibold"
            aria-label="Project status"
          >
            <option>همه</option>
            <option>باز</option>
            <option>بسته</option>
            <option>پاسخ داده شده</option>
            <option>پایان یافته</option>
          </select>
          <select
            name="orderby"
            data-active={false}
            autoFocus={false}
            className="border-b-2 border-redprimary-500 rounded-md py-1 px-3 outline-0 data-[hover]:shadow font-shabnam text-subtle-semibold"
            aria-label="Project status"
          >
            <option>تاریخ پاسخ</option>
            <option>تاریخ ایجاد</option>
          </select>
        </div>
        <div>
          {" "}
          <button 
          className="bg-redprimary-500 max-md:mt-5 text-subtle-semibold rounded-md px-5 py-3 text-white font-shabnam"
          type="submit">اعمال</button>
        </div>
      </div>

      <div>
      {tickets.map((ticket) => (
         <CardTiket key={ticket._id}
         id={ticket._id}
         title={ticket.title}
         createdAt={ticket.createdAt}
         department={ticket.department}
         hasAnswer={ticket.hasAnswer}
         />
        ))}
    
      </div>
      {tickets.length === 0 && (
      <div className="flex mx-auto text-center justify-center" >
          <p className="text-heading4-bold">تیکتی وجود ندارد</p>
        </div>
           )}
    </div>
    </section>
  );
};

export default Tikets;
