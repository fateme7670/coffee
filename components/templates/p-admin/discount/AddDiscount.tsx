"use client";
import { AddDiscountFromServer } from "@/Redux/features/discount";
import { AllproductFromServer } from "@/Redux/features/product";
import { useAppDispatch } from "@/Redux/hooks";
import { showSwal } from "@/utils/helper";
import { ProductProps } from "@/utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AddDiscount = () => {
  const dispatch=useAppDispatch()
  const router = useRouter();
  const [percent, setpercent] = useState("");
  const [code, setcode] = useState("");
  const [maxUse, setmaxUse] = useState("");
  const [products, setproducts] = useState<ProductProps[]>([]);
  const [productID, setdeproductID] = useState<any>(-1);
  useEffect(() => {
    const getProduct = async () => {
      dispatch(AllproductFromServer()).then(data=>{
        if (data?.payload?.message==='success'){
          setproducts([...data.payload.data]);
        }
      })
      // const res = await fetch("/api/product");
      // const data = await res.json();
      // setproducts([...data]);
    };
    getProduct();
  }, []);
  const addDiscount = async () => {
    if (!code.trim() || !percent.trim() || !maxUse.trim()) {
      showSwal("data not valid", "error", "Try");
    }
    const discount = {
      percent,
      code,
      maxUse,
      product: productID,
    };
    dispatch(AddDiscountFromServer({data:discount})).then(data=>{
      if (data?.payload?.message==='success'){
        swal({
          title: "Discount added successfully:))",
          icon: "success",
          buttons: "OK",
        }).then(() => {
          setpercent("");
          setcode("");
          setmaxUse("");
          router.refresh();
        });
      }
    })
    
    // const res = await fetch("/api/discount", {
    //   method: "POST",
    //   headers: {
    //     "content-Type": "application/json",
    //   },
    //   body: JSON.stringify(discount),
    // });
    // if (res.status == 201) {
    //   swal({
    //     title: "Discount added successfully:))",
    //     icon: "success",
    //     buttons: "OK",
    //   }).then(() => {
    //     setpercent("");
    //     setcode("");
    //     setmaxUse("");
    //     router.refresh();
    //   });
    // }
  };
  return (
    <section className="container mt-10">
      <div className="flex justify-start max-md:flex-col gap-5">
        <div className="md:basis-1/2 w-full">
          <div className="flex flex-col mt-5">
            <label className="font-shabnam mb-3 text-base1-medium">
              شناسه تخفیف
            </label>
            <input
              value={code}
              onChange={(event) => setcode(event.target.value)}
              placeholder="لطفا شناسه تخفیف را وارد کنید"
              type="text"
              className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="font-shabnam mb-3 text-base1-medium">
              حداکثر استفاده
            </label>
            <input
              value={maxUse}
              onChange={(event) => setmaxUse(event.target.value)}
              placeholder=" حداکثر استفاده از کد تخفیف"
              type="text"
              className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
            />
          </div>

          <button
            onClick={addDiscount}
            className="flex gap-2 mt-5 items-center text-white text-tiny-medium font-shabnam bg-redprimary-500 mr-2 px-4 py-2 rounded-md mb-10"
          >
            افزودن
          </button>
        </div>
        <div className="md:basis-1/2 w-full max-md:order-first">
          <div className="flex flex-col mt-5">
            <label className="font-shabnam mb-3 text-base1-medium">
              درصد تخفیف
            </label>
            <input
              value={percent}
              onChange={(event) => setpercent(event.target.value)}
              placeholder="لطفا درصد تخفیف را وارد کنید"
              type="text"
              className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
            />
          </div>
          <div className="mt-5">
            <label className="font-shabnam mb-3 text-base1-medium">محصول</label>
            <select
              onChange={(event) => setdeproductID(event.target.value)}
              name="orderby"
              data-active={false}
              autoFocus={false}
              className="border-2 mt-3 w-full border-redprimary-500 rounded-md py-1 px-3 outline-0 data-[hover]:shadow font-shabnam text-subtle-semibold"
              aria-label="Project status"
            >
              <option value={-1}>لطفا یک مورد را انتخاب نمایید.</option>
              {products.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddDiscount;
