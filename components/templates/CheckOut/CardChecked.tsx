"use client";
import { showSwal } from "@/utils/helper";
import { CardProps } from "@/utils/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
interface Props {
  addcart: () => void;
}
const CardChecked = ({ addcart }: Props) => {
  const [showZarinPallAlert, setShowZarinPallAlert] = useState(false);
  const [showDiscountForm, setShowDiscountForm] = useState(false);

  const [cart, setCart] = useState<CardProps[]>([]);
  const [code, setcode] = useState<any>("");
  const [disablebtn, setdisablebtn] = useState(false);
  const [tottalprice, settottalprice] = useState(0);
  const [finalprice, setfinalprice] = useState(0);
const [acceptinfo, setAcceptinfo] = useState<boolean>(true);
  useEffect(() => {
    const basket = JSON.parse(localStorage.getItem("card")) || [];
    const totalPrices = JSON.parse(localStorage.getItem("price")) || '';
    setfinalprice(totalPrices)
    settottalprice(totalPrices-30000)
    setCart(basket);
  }, []);

 

  const addDiscount = async () => {
    const res = await fetch("/api/discount/uses", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });
    if (res.status === 200) {
      setdisablebtn(true);
      const data = await res.json();

      const newprice = tottalprice - (tottalprice * data.percent) / 100;
      settottalprice(newprice);
      setfinalprice(newprice + 30000+16927);
localStorage.setItem('price',JSON.stringify(newprice+ 30000+16927))
      return showSwal("کد تخفیف اعمال شد", "success", "OK");
    } else if (res.status === 422) {
      return showSwal("محدودت کد تخفیف به اتمام رسیده:((", "error", "TRY");
    } else {
      return showSwal("کد نامعتبر است", "error", "TRY");
    }
  };
  return (
    <section className="relative">
      <div className="py-5 px-8  order_order bg-gray-7 decoration-wavy">
        <h2 className="text-heading4-bold text-center my-5">سفارش شما</h2>
        <div className="bg-white mb-5 shadow-lg p-5">
          <div className="flex my-5 items-center justify-between gap-5">
            <p>محصول</p>
            <p>جمع جزء</p>
          </div>
          <hr />
          {cart.map(item=>(
          <div className="flex border-b pb-3 my-5 items-center justify-between gap-5">
           
<>
<div className="basis-1/2">
              <p className="text-gray-1">
               {item.name}
              </p>
            </div>
            <div className="basis-1/2">
              <p className="text-gray-1 text-end">{item.price?.toLocaleString()} تومان</p>
            </div>
</>
        
        
          </div>
              ))}
       
          <div className="flex my-5 items-center justify-between gap-5">
            <p>جمع جزء</p>
            <p>{tottalprice.toLocaleString()}تومان</p>
          </div>
          <hr />

          <div className="flex my-5 items-center justify-between gap-5">
            <div className="basis-1/2">
              <p>حمل و نقل</p>
            </div>
            <div className="basis-1/2">
              <p className="text-end mt-5">پیک موتوری30,000</p>
            </div>
          </div>
          <hr />
          <div className="mt-5 flex flex-col"></div>
          <div className="flex my-5 items-center justify-between gap-5">
            <div className="basis-1/2">
              <p className="text-heading4-bold">مجموع</p>
            </div>
            <div className="basis-1/2 text-end">
              <p className="text-heading4-bold">{finalprice.toLocaleString()} تومان</p>
              <p> (شامل 16,927 تومان ارزش افزوده)</p>
            </div>
          </div>
        </div>
        <section className="">
          <div className="flex gap-2">
            <p>کد تخفیف دارید؟</p>
            <span
              className="underline "
              onClick={() => setShowDiscountForm(true)}
            >
              برای نوشتن کد اینجا کلیک کنید
            </span>
          </div>
          {showDiscountForm && (
            <div className="my-5 border w-xl p-5">
              <p>اگر کد تخفیف دارید لطفا در باکس زیر بنویسید</p>
              <div className="mt-5 flex gap-5">
                <input
                  value={code}
                  onChange={(e) => setcode(e.target.value)}
                  type="text"
                  placeholder="کد تخفیف"
                  className="outline-0 border rounded-md py-2 px-4 text-subtle-medium"
                />
                <button
                  className="py-2 bg-green-3 px-4 rounded-md hover:bg-redprimary-500 text-white"
                  disabled={disablebtn}
                  onClick={addDiscount}
                >
                  اعمال کوپن
                </button>
              </div>
            </div>
          )}
        </section>
        <div className="">
          <div className="flex gap-4 items-center">
            <input
              className="accent-black"
              onClick={() => setShowZarinPallAlert(false)}
              type="radio"
              name="payment_method"
              value="melli"
            />
            <label> بانک ملی</label>
            <img
              width={24}
              height={40}
              src="https://set-coffee.com/wp-content/plugins/WooCommerce-melli/images/logo.png"
              alt="بانک ملی"
            ></img>
          </div>
          <div className="flex gap-4 mb-5 items-center">
            <input
              className="accent-black"
              onClick={() => setShowZarinPallAlert(true)}
              type="radio"
              name="payment_method"
              value="zarinpal"
            />
            <label>پرداخت امن زرین پال </label>
            <img
              width={40}
              height={40}
              src="https://set-coffee.com/wp-content/plugins/zarinpal-woocommerce-payment-gateway/assets/images/logo.png"
              alt="زرین پال"
            ></img>
          </div>

          {showZarinPallAlert && (
            <div className="bg-white text-gray-1 py-2 px-3 my-5">
              <p>
                پرداخت امن به وسیله کلیه کارت های عضو شتاب از طریق درگاه زرین
                پال
              </p>
            </div>
          )}
          <hr className="mt-5" />
          <div className="my-5">
            <p>
              اطلاعات شخصی شما برای پردازش سفارش و پشتیبانی از تجربه شما در این
              وبسایت و برای اهداف دیگری که در{" "}
              <strong>سیاست حفظ حریم خصوصی</strong> توضیح داده شده است استفاده
              می‌شود.
            </p>
          </div>
          <hr />
          <div className="flex gap-4 my-5">
            <input    
           
        onChange={(e)=>setAcceptinfo((prev:boolean)=>!prev)}
         className="accent-black" type="checkbox" name="" id="" />
            <p>
              {" "}
              من<strong> شرایط و مقررات</strong> سایت را خوانده ام و آن را می
              پذیرم. <span>*</span>
            </p>
          </div>
        </div>
      
          <button
            onClick={addcart}
            disabled={acceptinfo}
            className="px-4 my-5 py-3 bg-green-3 w-full rounded-md hover:bg-redprimary-500 text-white text-small-medium"
          >
            ثبت سفارش
          </button>

      </div>
    </section>
  );
};

export default CardChecked;
