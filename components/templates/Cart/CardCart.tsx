"use client";
import React, { useState } from "react";
import Select from "react-select";
import stateData from "@/utils/stateData";
import Link from "next/link";
const stateOptions = stateData();
interface Props {
  totalprice: number;
  finalprice: number;

}
const CardCart = ({ totalprice, finalprice }:Props) => {
  const [adress, setadress] = useState(false);
  const [stateSelectedOption, setStateSelectedOption] = useState<any>(null);
  const addPrice = () => {

  
    localStorage.setItem("price", JSON.stringify(finalprice));
    // showSwal("محصول با موفقیت به سبد خرید اضافه شد", "success", "فهمیدم");
  };

  return (
    <div className="border border-2 p-5">
      <h2 className="text-heading4-medium">جمع کل سبد خرید</h2>
      <div className="flex my-5 items-center justify-between gap-5">
        <p>جمع جزء</p>
        <p>{totalprice.toLocaleString()} تومان</p>
      </div>
      <hr />
      <p className="text-end mt-5">پیک موتوری30,000</p>
      <div className="flex my-5 items-center justify-between gap-5">
        <div className="basis-1/2">
          <p>حمل و نقل</p>
        </div>
        <div className="basis-1/2">
          <p className="text-gray-1 text-end">
            حمل و نقل به تهران (فقط شهر تهران).
          </p>
        </div>
      </div>
{/* 
      <div className="mt-5 flex flex-col">
        <div>
          <button
            onClick={() => setadress(true)}
            className="text-end float-left  border rounded-md px-5 py-2"
          >
            تغییر آدرس
          </button>
        </div>
        {adress && (
          <div className="flex flex-col mt-5">
            <Select
              defaultValue={stateSelectedOption}
              onChange={setStateSelectedOption}
              isClearable={true}
              placeholder={"استان"}
              isRtl={true}
              isSearchable={true}
              options={stateOptions}
            />
            <input
              className="ml-4 text-subtle-medium px-3 w-full my-5 py-3 rounded-md border outline-0"
              type="text"
              placeholder="شهر"
            />
            <input
              className="ml-4 text-subtle-medium px-3 w-full py-3 rounded-md border outline-0"
              type="number"
              placeholder="کد پستی"
            />
            <button
              className="bg-slate-100 my-5 py-2 rounded-md"
              onClick={() => {
    
                setadress(false)}
              }
            >
              بروزرسانی
            </button>
            <hr />
          </div>
        )}
      </div> */}
      <div className="flex my-5 items-center justify-between gap-5">
        <p>مجموع</p>
        <p>{finalprice.toLocaleString()} تومان</p>
      </div>
      <Link href={"/checkout"}>
        <button onClick={addPrice} className="px-4 py-2 bg-green-3 w-full rounded-md hover:bg-redprimary-500 text-white text-small-medium">
          ادامه جهت تصویه حساب
        </button>
      </Link>
    </div>
  );
};

export default CardCart;
