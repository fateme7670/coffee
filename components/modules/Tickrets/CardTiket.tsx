import { DepartmentProps } from "@/utils/types";
import Link from "next/link";
import React from "react";
interface Props{
  id:string
title:string
createdAt:string
department:DepartmentProps
hasAnswer:boolean
}
const CardTiket = ({ id, title, createdAt, department, hasAnswer }: Props) => {
  return (
      <div className="contsiner w-full bg-red-4 py-5 px-3 mt-10 rounded-md border-r-[3px] border-redprimary-500">
    <Link href={`/p-user/tickets/answer/${id}`}>
        <div className="flex justify-between items-center gap-4">
          <div>
            <p className="font-shabnam">{title}</p>
            <p className="bg-white px-4 py-2 rounded-lg mt-3 font-shabnam">
              {department.title}
            </p>
          </div>
          <div className="text-center">
            <p className="font-shabnam">{new Date(createdAt).toLocaleDateString("fa-IR")}</p>
            <p className="font-shabnam bg-redprimary-500 mt-3 text-white rounded-md py-2 px-4">
            {hasAnswer ? "پاسخ داده شده" : "پاسخ داده نشده"}
            </p>
          </div>
        </div>
    </Link>
      </div>
  );
};

export default CardTiket;
