"use client";
import { showSwal } from "@/utils/helper";
import { CardProps } from "@/utils/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import CardCart from "./CardCart";

const TableCartDetail = () => {
  const [cart, setCart] = useState<CardProps[]>([]);
  const [code, setcode] = useState<any>("");
  const [disablebtn, setdisablebtn] = useState(false);
  const [tottalprice, settottalprice] = useState(0);
  const [finalprice, setfinalprice] = useState(0);

  useEffect(() => {
    const basket = JSON.parse(localStorage.getItem("card")) || [];
    setCart(basket);
  }, []);
  useEffect(() => {
    Calculate();
  }, [cart]);
  function Calculate() {
    let price = 0;
    if (cart.length) {
      price = cart.reduce(
        (prev, current): number => prev + current?.price * current?.counter,
        0
      );
    }
    setfinalprice(price + 30000);
    settottalprice(price);
  }

  // const addDiscount = async () => {
  //   const res = await fetch("/api/discount/uses", {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ code }),
  //   });
  //   if (res.status === 200) {
  //     setdisablebtn(true);
  //     const data = await res.json();

  //     const newprice = tottalprice - (tottalprice * data.percent) / 100;
  //     settottalprice(newprice);
  //     setfinalprice(newprice + 30000);

  //     return showSwal("کد تخفیف اعمال شد", "success", "OK");
  //   } else if (res.status === 422) {
  //     return showSwal("محدودت کد تخفیف به اتمام رسیده:((", "error", "TRY");
  //   } else {
  //     return showSwal("کد نامعتبر است", "error", "TRY");
  //   }
  // };


  return (
    <div className="flex max-lg:flex-col  justify-start gap-5">
      <div className="md:basis-2/3 w-full">
        <div className="md:container">
          <div className=" overflow-x-auto px-5 my-5">
            <table className="table-auto text-small-semibold font-shabnam text-center [&_td]:border-t-2 [&_td]:border-b-2 [&_td]:border-gray-6   [&_th]:p-3 [&_td]:p-3 border-collapse w-full ">
              <thead>
                <tr>
                  <th></th>
                  <th>محصول</th>
                  <th>قیمت</th>
                  <th>تعداد</th>
                  <th> جمع جزء</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr>
                    <td>
                      <IoMdClose className="" />
                    </td>
                    <td className="flex max-md:flex-col items-center gap-2">
                      <img
                        src={
                          item.img ||
                          "https://set-coffee.com/wp-content/uploads/2020/12/Red-box-DG--430x430.jpg"
                        }
                        alt=""
                        width="70px"
                        height="70px"
                      />
                      <Link className="max-md:text-subtle-medium " href={"/"}>
                        {item.name}
                      </Link>
                    </td>
                    <td className="text-gray-1">
                      {item.price?.toLocaleString()} تومان
                    </td>
                    <td className="">
                      <div className="flex items-center">
                        <span className="border px-3 py-1">-</span>
                        <p className="border px-3 py-1">{item.counter}</p>
                        <span className="border px-3 py-1">+</span>
                      </div>
                    </td>
                    <td>{tottalprice.toLocaleString()} تومان</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex max-md:flex-col mt-10 items-center justify-between gap-5">
            <div className="">
              {/* <div>
                <input
                  value={code}
                  onChange={(e) => setcode(e.target.value)}
                  placeholder="کد تخفیف"
                  type="text"
                  className="ml-4 text-subtle-medium px-3 w-60 py-2 rounded-md border outline-0"
                />
                <button
                  onClick={addDiscount}
                  className="px-4 py-2 bg-green-3 rounded-md hover:bg-redprimary-500 text-white text-small-medium"
                >
                  اعمال کوپن
                </button>
              </div> */}
            </div>
            <div>
              <button className="px-5 py-2 bg-slate-100 rounded-md   text-small-medium">
                بروزرسانی سبد خرید
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:basis-1/3 w-full">
        <CardCart totalprice={tottalprice} finalprice={finalprice} />
      </div>
    </div>
  );
};

export default TableCartDetail;
