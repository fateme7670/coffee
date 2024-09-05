"use client";
import Link from "next/link";
import React, { useState } from "react";
import Sms from "./Sms";
import { useAppDispatch } from "@/Redux/hooks";
import { showSwal } from "@/utils/helper";
import { verifyemail, verifypassword } from "@/utils/auth";
import { LoginUserFromServer } from "@/Redux/features/auth";
import { useRouter } from "next/navigation";
interface Props {
  showRegisterForm: () => void;
}
const Login = ({ showRegisterForm }: Props) => {
  const [isLogin, setisLogin] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const cancelForm = () => setisLogin(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const signin = async () => {
    if (!email) {
      showSwal("email should not empty", "error", "try");
    }
    if (!password) {
      showSwal("phone  should not empty", "error", "try");
    }
    const isemailverify = verifyemail(email);
    if (!isemailverify) {
      showSwal("email or phone should be like format", "error", "try");
    }
    const ispasswordverify = verifypassword(password);
    if (!ispasswordverify) {
      showSwal(" password should be like format", "error", "try");
    }
    const user = { email, password };
    dispatch(LoginUserFromServer({ data: user })).then((data) => {
      if (data?.payload?.message === "success") {
        swal({
          title: "login successfuly",
          icon: "success",
          buttons: "login",
        }).then(() => {
          if (data.payload?.data.role === "Admin") {
            router.replace("/p-admin");
          } else {
            router.replace("/p-user");
          }
        });
      }
      else  if (data?.payload?.message==='email not valid' || data?.payload?.message==='password not valid'){
        return showSwal(
          "email or password should be like format",
          "error",
          "try"
        );
      }
      else  if (data?.payload?.message==='user not exist'){
            return showSwal("user not exist", "error", "try");

      }
      else  if (data?.payload?.message==='pass or email wrong'){
     return showSwal("pass or email wrong", "error", "try");

      }
    });

    // const res = await fetch("/api/auth/signin", {
    //   method: "POST",
    //   headers: { "content-Type": "application/json" },
    //   body: JSON.stringify(user),
    // });

    // const data = await res.json();
    // if (res.status == 200) {
    //   swal({
    //     title: "login successfuly",
    //     icon: "success",
    //     buttons: "login",
    //   }).then(() => {
    //     if (data.data.role === "Admin") {
    //       router.replace("/p-admin");
    //     } else {
    //       router.replace("/p-user");
    //     }
    //   });
    // } else if (res.status == 422) {
      // return showSwal(
      //   "email or password should be like format",
      //   "error",
      //   "try"
      // );
    // } else if (res.status == 419) {
    //   return showSwal("user not exist", "error", "try");
    // } else if (res.status == 402) {
    //   return showSwal("pass or email wrong", "error", "try");
    // }
  };
  return (
    <>
      {!isLogin ? (
        <section className="w-[380px]  max-md:my-5   mx-auto">
          <div className=" bg-white p-5 pt-8 flex font-shabnam flex-col justify-center">
            <input
              value={email}
              onChange={(event) => setemail(event.target.value)}
              className="outline-0 border  border-slate-800 rounded-md p-3 text-subtle-medium mb-5"
              placeholder="ایمیل/شماره تلفن"
            />
            <input
              value={password}
              onChange={(event) => setpassword(event.target.value)}
              className="outline-0 border  border-slate-800 rounded-md p-3 text-subtle-medium mb-5"
              placeholder="رمز عبور"
            />
            <div className="flex gap-4 mb-5">
              <input type="checkbox" className="accent-black" />
              <label className="text-small-medium">مرا به یاد داشته باش </label>
            </div>
            <button
              onClick={signin}
              className="bg-reddark-3 text-white py-3 rounded-md text-subtle-medium"
            >
              ورود
            </button>
            <Link
              href={"/forget-password"}
              className="text-center mt-5 text-subtle-medium"
            >
              رمز عبور را فراموش کرده اید؟
            </Link>
            <button
              onClick={() => setisLogin(true)}
              className="bg-reddark-3 text-white py-3 rounded-md text-subtle-medium my-5"
            >
              ورود با کد یکبار مصرف
            </button>
            <Link href={"/"} className="text-subtle-medium">
              ایا حساب کاربری ندارید؟
            </Link>

            <button
              className="bg-gray-5 border border-slate-300 text-gray-1 mt-5 mb-8 py-3 rounded-md text-subtle-medium"
              onClick={showRegisterForm}
            >
              ثبت نام
            </button>
          </div>
          <div className="mx-auto text-center mt-8">
            <Link href={"/"}>لغو</Link>
          </div>
        </section>
      ) : (
        <Sms cancelForm={cancelForm} />
      )}
    </>
  );
};

export default Login;
