"use client";
import { AddcommentFromServer } from "@/Redux/features/comment";
import { useAppDispatch } from "@/Redux/hooks";
import { verifyemail } from "@/utils/auth";
import { showSwal } from "@/utils/helper";
import { CommentProps } from "@/utils/types";
import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
interface Props {
  id: string | undefined;
}
const CommentForm = ({ id }: Props) => {
  const [body, setbody] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [score, setscore] = useState(5);
  const [savedinfo, setsavedinfo] = useState<boolean | any>(false);
  const dispatch=useAppDispatch()
  useEffect(() => {
  const info= JSON.parse(localStorage.getItem('info'))
   setemail(info?.email)
   setusername(info?.username)
  }, []);
  const addcomment = async () => {
    if (!username.trim() || !email.trim() || !body.trim()) {
      return showSwal(
        "body or email or username should not empty",
        "error",
        "TRY"
      );
    }
    const emailverify = verifyemail(email);
    if (!emailverify) {
      return showSwal("emailshould  like format", "error", "TRY");
    }
    if (savedinfo) {
      const info={
        email,
        username
      }
      localStorage.setItem('info',JSON.stringify(info))
    }
    const comment = { username, email, body, score, product: id };
dispatch(AddcommentFromServer(comment))
    // const res = await fetch("/api/comment", {
    //   method: "POST",
    //   headers: { "content-Type": "application/json" },
    //   body: JSON.stringify(comment),
    // });
    // if (res.status == 201) {
    //   setbody("");
    //   setusername("");
    //   setemail("");
    //   return showSwal("added comment successfuly", "success", "OK");
    // }
  };
const addScore=(num:number)=>{
setscore(num)
return  showSwal("your star record successfuly","success","OK")

}
  return (
    <div>
      <p>دیدگاه خود را بنویسید</p>
      <div className="mt-5 ">
        <p>
          نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند
          <span className="text-red-500 mr-2">*</span>
        </p>
        <div className="[&_svg]:hover:text-orange flex items-center  gap-1 mt-5 ">
          <p>امتیاز شما :</p>
          <IoMdStar onClick={() => addScore(5)} />
          <IoMdStar onClick={() => addScore(4)} />
          <IoMdStar onClick={() => addScore(3)} />
          <IoMdStar onClick={() => addScore(2)} />
          <IoMdStar onClick={() => addScore(1)} />
        </div>
      </div>
      <div className="mt-5 flex flex-col">
        <label className="mb-3">
          دیدگاه شما <span className="text-red-500 mr-2">*</span>
        </label>
        <textarea
        value={body}
        onChange={event => setbody(event.target.value)}

          rows={5}
          className="outline-0 p-3 border border-slate-300 rounded-md"
        ></textarea>
      </div>
      <div className="flex max-md:flex-col items-center gap-3">
        <div className="md:basis-1/2 w-full">
          <div className="mt-5 flex flex-col">
            <label className="mb-3">
              نام <span className="text-red-500  mr-2">*</span>
            </label>
            <input
                       value={username}
                       onChange={event => setusername(event.target.value)} 
              type="text"
              className="outline-0 border border-slate-300 py-1 px-2 rounded-md"
            />
          </div>
        </div>
        <div className="md:basis-1/2 w-full">
          <div className="mt-5 flex flex-col">
            <label className="mb-3">
              ایمیل <span className="text-red-500  mr-2">*</span>
            </label>
            <input
              value={email}
              onChange={event => setemail(event.target.value)}
              type="text"
              className="outline-0 border border-slate-300 py-1 px-2 rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-10">
        <input
          value={savedinfo}
        onChange={(e)=>setsavedinfo((prev:any)=>!prev)}  type="checkbox" name="" id="" className="accent-black" />
        <label className="text-small-medium">
          ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی
          می‌نویسم.
        </label>
      </div>
      <div className="mt-5">
        <button
          onClick={addcomment}
          className="hover:bg-reddark-3  rounded-md text-white w-full py-3 font-shabnam bg-green-2"
        >
          {" "}
          ثبت
        </button>
      </div>
    </div>
  );
};

export default CommentForm;
