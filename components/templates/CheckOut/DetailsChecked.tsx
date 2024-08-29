"use client";
import { verifyemail, verifyphone } from "@/utils/auth";
import { showSwal } from "@/utils/helper";
import stateData from "@/utils/stateData";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import CardChecked from "./CardChecked";
import { authUser } from "@/utils/userhelper";
const stateOptions = stateData();
const DetailsChecked = () => {
  const router = useRouter();
  const [stateSelectedOption, setStateSelectedOption] = useState<any>(null);
  const [citySelectedOption, setCitySelectedOption] = useState<any>(null);
  const [citySelectorDisabel, setCitySelectorDisabel] = useState(true);
  const [cityOption, setCityOption] = useState([]);
  const [family, setfamily] = useState("");
  const [name, setname] = useState("");
  const [company, setcompany] = useState("");
  // const [state, setstate] = useState("")
  // const [city, setcity] = useState("")
  const [street, setstreet] = useState("");
  const [zipcode, setzipcode] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [body, setbody] = useState("");
  const [email, setemail] = useState("");
  const [product, setproduct] = useState<string[]>([]);
  const localCart = JSON.parse(localStorage.getItem("card")) || [];
  const localPrice = JSON.parse(localStorage.getItem("price")) || "";
  console.log(localPrice);

  useEffect(() => {
    setCitySelectedOption(null);
    if (stateSelectedOption?.value) {
      const city = stateSelectedOption?.value.map((data: any) => {
        return {
          value: data,
          label: data,
        };
      });
      setCityOption(city);
      setCitySelectorDisabel(false);
    }
  }, [stateSelectedOption]);
  const addcart = async () => {
 
    const emailcorrect = verifyemail(email);
    if (!emailcorrect) {
      return showSwal("email format is not correct", "error", "OK");
    }
    // const passcorrect= verifypassword(password)
    // if (!passcorrect) {
    //     return showSwal("password format is not correct","error","OK")
    // }
    const phonecorrect = verifyphone(phone);
    if (!phonecorrect) {
      return showSwal("phone format is not correct", "error", "OK");
    }
    const proId = localCart.map((item: any) => {
      return item.id;
    });

    const cart = {
      name,
      family,
      company,
      state: stateSelectedOption.label,
      city: citySelectedOption.label,
      street,
      zipcode,
      phone,
      password,
      body,
      email,
      proId,
      totalPrice: localPrice,
      
    };
    const res = await fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    });
    if (res.status == 201) {
      swal({
        title: "your info saved successfully",
        icon: "success",
        buttons: "OK",
      }).then(() => {
        router.replace("/complate-order");
      });
    }
    if (res.status == 419) {
      swal({
        title: "you should login",
        icon: "error",
        buttons: "OK",
      }).then(() => {
        router.replace("/login-register");
      });
    }
    // console.log('res cart',res);
  };
  return (
    <div className="flex max-lg:flex-col justify-start  gap-5">
      <div className="md:basis-1/2 w-full">
        <div>
          <h4 className="text-heading4-bold  my-5">جزئیات صورتحساب</h4>

          <form className="">
            <div className="flex max-md:flex-col items-center gap-5 ">
              <div className="md:basis-1/2 w-full">
                <label>
                  نام خانوادگی <span className="text-red-500 mr-1">*</span>
                </label>
                <input
                  className="outline-0 border rounded-md py-2 px-3 w-full my-5"
                  value={family}
                  onChange={(e) => setfamily(e.target.value)}
                  type="text"
                />
              </div>
              <div className="md:basis-1/2 w-full">
                <label>
                  نام <span className="text-red-500 mr-1">*</span>
                </label>
                <input
                  className="outline-0 border rounded-md py-2 px-3 w-full my-5"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  type="text"
                />
              </div>
            </div>
            <div className="">
              <label>نام شرکت (اختیاری)</label>
              <input
                className="outline-0 border rounded-md py-2 px-3 w-full my-5"
                value={company}
                onChange={(e) => setcompany(e.target.value)}
                type="text"
              />
            </div>
            <div className="">
              <label className="mb-5 ">
                استان<span className="text-red-500 mr-1">*</span>
              </label>
              <Select
                defaultValue={stateSelectedOption}
                onChange={setStateSelectedOption}
                isClearable={true}
                placeholder={""}
                isRtl={true}
                isSearchable={true}
                options={stateOptions}
                className="my-5"
              />
            </div>
            <div className="">
              <label>
                شهر<span className="text-red-500 mr-1">*</span>
              </label>
              <Select
                defaultValue={citySelectedOption}
                onChange={setCitySelectedOption}
                isDisabled={citySelectorDisabel}
                isClearable={true}
                isRtl={true}
                isSearchable={true}
                options={cityOption}
                placeholder={""}
                className="my-5"
              />
            </div>
            <div className="">
              <label>
                آدرس خیابان<span className="text-red-500 mr-1">*</span>
              </label>
              <input
                className="outline-0 border rounded-md py-2 px-3 w-full my-5"
                value={street}
                onChange={(e) => setstreet(e.target.value)}
                type="text"
              />
            </div>
            <div className="">
              <label>
                کدپستی (بدون فاصله)<span className="text-red-500 mr-1">*</span>
              </label>
              <input
                className="outline-0 border rounded-md py-2 px-3 w-full my-5"
                value={zipcode}
                onChange={(e) => setzipcode(e.target.value)}
                type="text"
              />
            </div>
            <div className="">
              <label>
                شماره موبایل <span className="text-red-500 mr-1">*</span>
              </label>
              <input
                className="outline-0 border rounded-md py-2 px-3 w-full my-5"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                type="text"
              />
            </div>

            <div className="">
              <label>
                ایمیل <span className="text-red-500 mr-1">*</span>
              </label>
              <input
                className="outline-0 border rounded-md py-2 px-3 w-full my-5"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                type="text"
              />
            </div>
            <div className="">
              <h5>ایجاد حساب کاربری</h5>
              <section className="border p-4 rounded-md my-5">
                <div className="">
                  <label>رمزعبور (اختیاری)</label>
                  <input
                    className="outline-0 text-subtle-medium border rounded-md py-2 px-3 w-full my-5"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    placeholder="رمز عبور"
                    type="text"
                  />
                </div>
                <button className="w-full bg-slate-100 rounded-md py-2">
                  شماره موبایل را تایید کنید
                </button>
              </section>
            </div>
            <div className="">
              <label>توضیحات سفارش (اختیاری) </label>
              <textarea
                value={body}
                onChange={(e) => setbody(e.target.value)}
                rows={8}
                placeholder="اگر توضیحی در مورد سفارش خود دارید در اینجا ثبت کنید"
                className="outline-0 text-subtle-medium border rounded-md py-2 px-3 w-full my-5"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
      <div className="md:basis-1/2 w-full">
        <CardChecked addcart={addcart} />
      </div>
    </div>
  );
};

export default DetailsChecked;
