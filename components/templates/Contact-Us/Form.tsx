'use client'
import { AddContactFromServer } from "@/Redux/features/contact";
import { useAppDispatch } from "@/Redux/hooks";
import { verifyemail, verifyphone } from "@/utils/auth";
import { showSwal } from "@/utils/helper";
import React, { useState } from "react";

const Form = () => {
  const dispatch=useAppDispatch()

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [company, setcompany] = useState("");
  const [message, setmessage] = useState("");
  const addcontact = async () => {
 
    const contact = {
      name,
      email,
      phone,
      company,
      message,
    }
    if (!email.trim() || !name.trim() || !company.trim() || !phone.trim() || !message.trim()) {
      return showSwal("should not empty", "error", "TRY")

    }
    const correctemail = verifyemail(email)
    if (!correctemail) {

      return showSwal("email should be like format", "error", "TRY")

    }
    const correctpphone = verifyphone(phone)
    if (!correctpphone) {
      return showSwal("phone should be like format", "error", "TRY")

    }
    dispatch(AddContactFromServer({data:contact})).then(data=>{
      if (data?.payload?.message==='success'){
        setname("")
      setemail("")
      setphone("")
      setcompany("")
      setmessage("")
      return showSwal("send successfuly", "success", "OK")
      }
    })
    // const res = await fetch('/api/contact', {
    //   method: "POST",
    //   headers: { 'content-Type': 'application/json' },
    //   body: JSON.stringify(contact)
    // })
    // // console.log("response->",res);
    // if (res.status == 201) {
    //   setname("")
    //   setemail("")
    //   setphone("")
    //   setcompany("")
    //   setmessage("")
    //   return showSwal("send successfuly", "success", "OK")
    // }
  }
  return (
    <div className="font-shabnam mt-10">
      <h4 className=" text-base-medium text-gray-1">فرم تماس با ما</h4>
      <h3 className="text-heading4-medium mt-3 mb-10">
        برای تماس با ما می توانید فرم زیر را تکمیل کنید
      </h3>

      <div className="flex gap-5 max-sm:flex-col">
        <div className="flex flex-col basis-1/2">
          <label className="text-base-medium">آدرس ایمیل</label>
          <input
              value={email}
              onChange={event => setemail(event.target.value)}
            type="text"
            className="outline-0 px-3 border border-1 border-slate-300  h-12 mt-3 rounded-md"
          />
        </div>
        <div className="flex flex-col basis-1/2">
          <label className="text-base-medium">نام و نام خانوادگی</label>
          <input
           value={name}
           onChange={event => setname(event.target.value)} 
            type="text"
            className="outline-0 px-3 border border-1 border-slate-300  h-12 mt-3 rounded-md"
          />
        </div>
        <div></div>
      </div>
      <div className="flex gap-5 max-sm:flex-col mt-5">
        <div className="flex flex-col basis-1/2">
          <label className="text-base-medium">نام شرکت</label>
          <input
             value={company}
             onChange={event => setcompany(event.target.value)} 
            type="text"
            className="outline-0 px-3 border border-1 border-slate-300  h-12 mt-3 rounded-md"
          />
        </div>
        <div className="flex flex-col basis-1/2">
          <label className="text-base-medium">شماره تماس</label>
          <input
                value={phone}
                onChange={event => setphone(event.target.value)}
            type="text"
            className="outline-0 px-3 border border-1 border-slate-300  h-12 mt-3 rounded-md"
          />
        </div>
        <div></div>
      </div>
      <div className="my-5 "> 
      <div className="flex flex-col pl-4">
      <label className="text-base-medium">درخواست شما</label>
          <textarea
            value={message}
            onChange={event => setmessage(event.target.value)}
            rows={3}
            className="outline-0 p-3 border border-1 border-slate-300  h-12 mt-3 rounded-md"
          ></textarea>
          </div>
      </div>
<div className=" pl-4">
    <button onClick={addcontact} className="bg-reddark-3 rounded-md text-white w-full py-3 font-shabnam hover:bg-green-2"> ارسال</button>
</div>

    </div>
  );
};

export default Form;
