"use client";
import { AddarticleFromServer } from "@/Redux/features/article";
import { useAppDispatch } from "@/Redux/hooks";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddArticle = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [shortdesc, setShortdesc] = useState("");
  const [authername, setAuthername] = useState("");
  const [longdesc, setLongdesc] = useState("");
  const [img, setImg] = useState<any>({});
  const dispatch = useAppDispatch();
  const addartticle = async () => {
    // Validation (You) ✅👇

    const formData = new FormData();
    formData.append("title", title);
    formData.append("shortdesc", shortdesc);
    formData.append("authername", authername);
    formData.append("longdesc", longdesc);

    formData.append("img", img);
    dispatch(AddarticleFromServer({ formData })).then((data) => {
      if (data?.payload?.message === "success") {
        setTitle("");
        setShortdesc("");
        setAuthername("");
        setLongdesc("");
        setImg("");
        swal({
          title: "مقاله مورد نظر با موفقیت ایجاد شد",
          icon: "success",
          buttons: "فهمیدم",
        }).then(() => {
          router.refresh();
        });
      }
    });
    // const res = await fetch("/api/article", {
    //   method: "POST",
    //   body: formData,
    // });

    // console.log("Res ->", res);

    // if (res.status === 201) {
    //   setTitle("");
    //   setShortdesc("");
    //   setAuthername("");
    //   setLongdesc("");
    //   setImg("");
    //   swal({
    //     title: "مقاله مورد نظر با موفقیت ایجاد شد",
    //     icon: "success",
    //     buttons: "فهمیدم",
    //   }).then(() => {
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
              عنوان مقاله
            </label>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="لطفا عنوان مقاله را وارد کنید"
              type="text"
              className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="font-shabnam mb-3 text-base1-medium">
              توضیحات کوتاه
            </label>
            <input
              value={shortdesc}
              onChange={(event) => setShortdesc(event.target.value)}
              placeholder="توضیحات کوتاه"
              type="text"
              className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
            />
          </div>

          <div className="flex flex-col mt-5">
            <label className="font-shabnam mb-3 text-base1-medium">
              تصویر مقاله
            </label>
            <input
              onChange={(event: any) => setImg(event.target.files[0])}
              type="file"
              className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
            />
          </div>
          <button
            onClick={addartticle}
            className="flex gap-2 mt-5 items-center text-white text-tiny-medium font-shabnam bg-redprimary-500 mr-2 px-4 py-2 rounded-md mb-10"
          >
            افزودن
          </button>
        </div>
        <div className="md:basis-1/2 w-full max-md:order-first">
          <div className="flex flex-col mt-5">
            <label className="font-shabnam mb-3 text-base1-medium">
              نام نویسنده
            </label>
            <input
              placeholder="لطفا نام نویسنده را وارد کنید"
              value={authername}
              onChange={(event) => setAuthername(event.target.value)}
              type="text"
              className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="font-shabnam mb-3 text-base1-medium">
              توضیحات بلند
            </label>
            <input
              placeholder="توضیحات بلند"
              value={longdesc}
              onChange={(event) => setLongdesc(event.target.value)}
              type="text"
              className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddArticle;
