import { UserProps } from "@/utils/types";
import Image from "next/image";
import React from "react";
import { IoIosNotifications, IoIosSearch } from "react-icons/io";
interface Props{
  user:UserProps
}
const TopBar = ({user}:Props) => {
  return (
    <div className="topbar text-white border-b-4 py-3 border-redprimary-500 bg-dark-1">
      <div>
        <div className="flex items-center pt-2 gap-5 ">
          <div className="relative w-12 h-12 rounded-full">
            <img
              src={user.img || "/images/download.jpeg"}
              alt="logo"
          
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <div>
            <p>{user.name}</p>
            <span>{user.role==="Admin"? "ادمین":'کاربر'}</span>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-4">
          <div  className="flex relative items-center">
            <div>
              <input type="text" className="outline-0 text-black py-3 rounded-full px-5 text-subtle-semibold md:w-64 font-shabnam" placeholder="جستجو کنید" />
            </div>
            <div className="absolute left-1 rounded-full
             bg-redprimary-500 p-2">
              <IoIosSearch />
            </div>
          </div>

          <div  className="flex bg-redprimary-500 p-2  items-center justify-center relative rounded-md ">
         <div >
         <IoIosNotifications className="text-heading3-bold" />
            <span className="absolute -top-3 right-0 bg-white rounded-full p-1 text-x-small-semibold  text-black">0</span>
         </div>
          </div>
        </div>
    </div>
  </div>
  );
}

export default TopBar;
