'use client'
import { DepartmentProps, SubDepartmentProps } from "@/utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";

const SendTikets = () => {
  const [optiondep, setoptiondep] = useState<DepartmentProps[]>([]);
  const [optionsubdep, setoptiosubndep] = useState<SubDepartmentProps[]>([]);
  const [departmentID, setdepartmentID] = useState<string | number>(-1);
  const [subdepartmentID, setsubdepartmentID] = useState<string | number>(-1);
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [priority, setpriority] = useState<number | string>(1);
  const router=useRouter()

  useEffect(() => {
    const dep = async () => {
        const res = await fetch('/api/department')
        const data = await res.json()
        setoptiondep([...data])
    }
    dep()
}, []);
useEffect(() => {
    const dep = async () => {
        const res = await fetch(`/api/department/subDepartment/${departmentID}`)
        if (res.status == 200) {
            const data = await res.json()
            setoptiosubndep([...data])
        }

    }
    dep()
}, [departmentID]);
const sendtiket = async () => {
  const tiket = {
      department: departmentID,
      subDepartment: subdepartmentID,
      title,
      body,
      priority,

  }
  const res = await fetch('/api/tiket', {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(tiket)
  })
  // console.log(res);
  if (res.status == 201) {
      swal({
          title:"send tiket successfuly",
          icon:'success',
          buttons:"OK"
      }).then(()=>{
          router.replace('/p-user/tickets')
      })
  }

}
  return (
    <section className="container mt-10">
      <div className="flex justify-start max-md:flex-col gap-5">
        <div className="md:basis-1/2 w-full">
          <div className="">
          <label>دپارتمان را انتخاب کنید:</label>

            <select
            onChange={(event) => setdepartmentID(event.target.value)}
              name="orderby"
              data-active={false}
              autoFocus={false}
              className="border-2 mt-3 w-full border-redprimary-500 rounded-md py-1 px-3 outline-0 data-[hover]:shadow font-shabnam text-subtle-semibold"
              aria-label="Project status"
            >
              <option value={-1}>لطفا یک مورد را انتخاب نمایید.</option>
              {optiondep.map(item => <option key={item._id} value={item._id}>{item.title}</option>
                        )}
            </select>
          </div>
          <div className="flex flex-col mt-5">
            <label className="font-shabnam mb-3 text-base1-medium">
              عنوان تیکت را وارد کنید:
            </label>
            <input
             value={title}
             onChange={e => settitle(e.target.value)}
              placeholder="عنوان..."
              type="text"
              className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
            />
          </div>
        </div>
        <div className="md:basis-1/2 w-full">
          <div className="">
            <label className="font-shabnam mb-3 text-base1-medium">
              عنوان تیکت را وارد کنید:
            </label>
            <select
            onChange={(event) => setsubdepartmentID(event.target.value)}
              name="orderby"
              data-active={false}
              autoFocus={false}
              className="border-2 w-full mt-3 border-redprimary-500 rounded-md py-1 px-3 outline-0 data-[hover]:shadow font-shabnam text-subtle-semibold"
              aria-label="Project status"
            >
              <option value={-1}>لطفا یک مورد را انتخاب نمایید.</option>
              {optionsubdep.map(item => <option key={item._id} value={item._id}>{item.title}</option>
                        )}

            </select>
          </div>
          <div className="flex flex-col mt-5">
            <label className="font-shabnam mb-3 text-base1-medium">
              سطح اولویت تیکت را انتخاب کنید:
            </label>
            <select
            onChange={e => setpriority(e.target.value)}
              name="orderby"
              data-active={false}
              autoFocus={false}
              className="border-2 w-full border-redprimary-500 rounded-md py-1 px-3 outline-0 data-[hover]:shadow font-shabnam text-subtle-semibold"
              aria-label="Project status"
            >
              <option value={-1}>لطفا یک مورد را انتخاب نمایید.</option>
              <option value={3}>کم</option>
              <option value={2}>متوسط</option>
              <option value={1}>بالا</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-full">
      <div className="flex flex-col mt-5">
            <label className="font-shabnam mb-3 text-base1-medium">
            محتوای تیکت را وارد نمایید:
            </label>
            <textarea
            value={body}
            onChange={e => setbody(e.target.value)}

            rows={10}
              className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
            ></textarea>
          </div>
      </div>
      <div className="bg-red-4 p-4 flex flex-col items-center gap-3 justify-center my-5  rounded-md">
<p className="font-shabnam mb-3 text-base1-medium">حداکثر اندازه: 6 مگابایت</p>
<p className="font-shabnam mb-3 text-base1-medium">فرمت‌های مجاز: jpg, png.jpeg, rar, zip</p>
<div className="relative w-full">
                    <button className="bg-redprimary-500 text-white flex w-full rounded-md p-2 gap-2 items-center justify-center">
                      انتخاب فایل
                   
                    </button>
                    <input className="absolute top-0 right-0 w-full  left-0 mx-auto opacity-0" type="file" name="" id="" />
                  </div>
      </div>
      <button onClick={sendtiket} className="flex gap-2 items-center text-white text-tiny-medium font-shabnam bg-redprimary-500 mr-2 px-4 py-2 rounded-md mb-10">   <IoIosSend />ارسال تیکت</button>

    </section>
  );
};

export default SendTikets;
