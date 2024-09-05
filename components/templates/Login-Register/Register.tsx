"use client";
import Link from "next/link";
import React, { useState } from "react";
import Sms from "./Sms";
import { useAppDispatch } from "@/Redux/hooks";
import { register } from "module";
import { verifyemail, verifypassword, verifyphone } from "@/utils/auth";
import { showSwal } from "@/utils/helper";
import { RegisterUserFromServer } from "@/Redux/features/auth";
import { useRouter } from "next/navigation";
interface Props {
  showLoginForm: () => void;
}
const Register = ({ showLoginForm }: Props) => {
  const [isLogin, setisLogin] = useState(false);
  const [ispass, setisPass] = useState(false);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const cancelForm = () => setisLogin(false);
  const dispatch=useAppDispatch()
  const router=useRouter()
  const register=async()=>{
    if (!name.trim()) {
      return  showSwal(
        "name should not empty",
      "error",
   [   "Try"]
      )
      }
      const verifyphones=verifyphone(phone)
      if (!verifyphones) {
        return  showSwal("format phone was not correct","error","Try")
  
      }
   
      const verifyemails=verifyemail(email)
      if (!verifyemails) {
        return  showSwal("format email was not correct","error","Try")
  
      }
   
      const verifypass=verifypassword(password)
      if (!verifypass) {
        return  showSwal("format password was not correct","error","Try")
  
      }
      const user = {
        name,
        phone,
        email,
        password
      }

  dispatch(RegisterUserFromServer({data:user})).then(data=>{
    if (data?.payload?.message==='success'){
      setEmail("");
      setPhone("");
      setPassword("");
      setName("");
      showSwal("register successfully","success","SignIn")
router.push('/p-user')
    }else {
      return  showSwal("user exist already","error","Try")
    }
  })
 
//     const res = await fetch('/api/auth/signup', {
//       method: "POST",
//       headers: {
//         "content-Type": "application/json"
//       },
//       body: JSON.stringify(user)
//     })
//     console.log(res);

    
//     if (res.status == 201) {
//       setEmail("");
//       setPhone("");
//       setPassword("");
//       setName("");
//       showSwal("register successfully","success","SignIn")
// router.push('/p-user')
     
//     }
//     if (res.status==404) {
//       showSwal("user exist already","error","Try")

//     }
  
  }
  return (
    <>
      {!isLogin ? (
        <section className="w-[380px]  max-md:my-5   mx-auto">
          <div className=" bg-white p-5 pt-8 flex font-shabnam flex-col justify-center">
            <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
              className="outline-0 border  border-slate-800 rounded-md p-3 text-subtle-medium mb-5"
              placeholder="نام"
            />
            <input
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
              className="outline-0 border  border-slate-800 rounded-md p-3 text-subtle-medium mb-5"
              placeholder="شماره تلفن"
            />
            <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
              className="outline-0 border  border-slate-800 rounded-md p-3 text-subtle-medium mb-5"
              placeholder="ایمیل"
            />
            {ispass && (
              <input
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
                className="outline-0 border  border-slate-800 rounded-md p-3 text-subtle-medium mb-5"
                placeholder="رمز عبور"
              />
            )}
            {!ispass && (
              <button
                onClick={() => setisLogin(true)}
                className="bg-reddark-3 text-white py-3 rounded-md text-subtle-medium"
              >
                ثبت نام با کد تایید
              </button>
            )}

            <button
              onClick={() => 
                {
                  if (ispass) {
                    register()
                  }else{

                    setisPass(true)
                  }
               
                }}
              className="bg-reddark-3 text-white py-3 rounded-md text-subtle-medium my-5"
            >
              ثبت نام با رمزعبور
            </button>
            <button
              className="text-subtle-medium text-center mb-5"
              onClick={showLoginForm}
            >
              برگشت به ورود
            </button>
          </div>
          <div className="mx-auto text-center mt-8">
            <Link href={"/login-register"}>لغو</Link>
          </div>
        </section>
      ) : (
        <Sms cancelForm={cancelForm} />
      )}
    </>
  );
};

export default Register;
