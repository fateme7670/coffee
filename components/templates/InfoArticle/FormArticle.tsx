'use client'
import { verifyemail } from "@/utils/auth";
import { showSwal } from "@/utils/helper";
import { Checkbox } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
interface Props {
  id: string;
}
const FormArticle = ({ id }: Props) => {
  const router = useRouter();
  // console.log('id', id);
  const [content, setcontent] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [website, setwebsite] = useState("");
  const [savedinfo, setsavedinfo] = useState(false);
  useEffect(() => {
    const userinfo = JSON.parse(localStorage.getItem("info-article"));
    setname(userinfo?.name);
    setemail(userinfo?.email);
  }, []);
  const addedcomment = async () => {
    const emailverify = verifyemail(email);
    if (!emailverify) {
      return showSwal("emailshould  like format", "error", "TRY");
    }
    if (savedinfo) {
      const userinfo = {
        name,
        email,
      };
      localStorage.setItem("info-article", JSON.stringify(userinfo));
    }
    const article = {
      content,
      name,
      email,
      website,
    };
    const res = await fetch(`/api/article/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    });
    if (res.status === 404) {
      showSwal("email is not verify", "error", "ok");
    } else if (res.status === 201) {
      swal({
        title: "your comment added successfully",
        icon: "success",
        buttons: "OK",
      }).then(() => {
        setcontent("");
        setname("");
        setemail("");
        setwebsite("");
        router.refresh();
      });
    }
  };
  return (
    <section className="container mx-5 mt-10">
      <div className="font-shabnam">
        <h2 className="text-heading4-bold">دیدگاهتان را بنویسید</h2>
        <p className="mt-5 text-base-medium">
          نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند{" "}
          <span className="text-red-500 text-base-medium">*</span>
        </p>
        <div className="flex flex-col w-full pl-10 mt-5">
          <label className="text-base-medium ">
            دیدگاه <span className="text-red-500">*</span>
          </label>
          <textarea
            value={content}
            onChange={(e) => setcontent(e.target.value)}
            name=""
            id=""
            cols={30}
            rows={10}
            className="outline-0 border px-3 border-1 border-slate-300  h-12 mt-3 rounded-md"
          ></textarea>
        </div>
        <div className="flex max-md:flex-col gap-5 mt-5 pl-10">
          <div className="basis-1/3 flex flex-col">
            {" "}
            <label className="text-base-medium">
              نام<span className="text-red-500">*</span>
            </label>
            <input
              value={name}
              onChange={(e) => setname(e.target.value)}
              type="text"
              className="outline-0 px-3 border border-1 border-slate-300  h-12 mt-3 rounded-md"
            />
          </div>
          <div className="basis-1/3 flex flex-col">
            {" "}
            <label className="text-base-medium">
              ایمیل<span className="text-red-500">*</span>
            </label>
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="text"
              className="outline-0 px-3 border border-1 border-slate-300  h-12 mt-3 rounded-md"
            />
          </div>
          <div className="basis-1/3 flex flex-col">
            {" "}
            <label className="text-base-medium">وب‌سایت</label>
            <input
              value={website}
              onChange={(e) => setwebsite(e.target.value)}
              type="text"
              className="outline-0 px-3 border border-1 border-slate-300  h-12 mt-3 rounded-md"
            />
          </div>
        </div>
        <div className="flex gap-4 mt-10">
          <input
            onChange={(e) => setsavedinfo((prev) => !prev)}
            type="checkbox"
            className="accent-black"
          />
          <label className="text-base-medium">
            ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی
            می‌نویسم.
          </label>
        </div>
        <div className="mt-5">
          <button
            onClick={addedcomment}
            className="bg-reddark-3 rounded-md text-white px-3 py-3 font-shabnam hover:bg-green-2"
          >
            {" "}
            ارسال دیدگاه
          </button>
        </div>
      </div>
    </section>
  );
};

export default FormArticle;
