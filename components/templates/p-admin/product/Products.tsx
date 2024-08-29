"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";

const Products = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [weight, setWeight] = useState("");
  const [suitableFor, setSuitableFor] = useState("");
  const [smell, setSmell] = useState("");
  const [tags, setTags] = useState<any>("");
  const [category, setCategory] = useState<any>("");
  const [Asyab, setAsyab] = useState<any>("");
  const [img, setImg] = useState<any>({});
  const addProduct = async () => {
    // Validation (You) ✅👇

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("shortDescription", shortDescription);
    formData.append("longDescription", longDescription);
    formData.append("weight", weight);
    formData.append("suitableFor", suitableFor);
    formData.append("smell", smell);
    formData.append("tags", tags.split(","));
    formData.append("category", category.split(","));
    formData.append("Asyab", Asyab.split(","));
    formData.append("img", img);

    const res = await fetch("/api/product", {
      method: "POST",
      body: formData,
    });

    // console.log("Res ->", res);

    if (res.status === 201) {
      swal({
        title: "محصول مورد نظر با موفقیت ایجاد شد",
        icon: "success",
        buttons: "فهمیدم",
      }).then(() => {
        router.refresh();
      });
    }
  };
  return (
    <section className="container mt-10">
      <div className="flex justify-start max-md:flex-col gap-5">
        <div className="md:basis-1/2 w-full">
          <div className="flex flex-col mt-5">
            <label className="font-shabnam mb-3 text-base1-medium">
              نام محصول
            </label>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="لطفا نام محصول را وارد کنید"
              type="text"
              className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="font-shabnam mb-3 text-base1-medium">
              توضیحات کوتاه
            </label>
            <input
              value={shortDescription}
              onChange={(event) => setShortDescription(event.target.value)}
              placeholder="توضیحات کوتاه"
              type="text"
              className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="font-shabnam mb-3 text-base1-medium">وزن</label>
            <input
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
              placeholder="وزن"
              type="text"
              className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="font-shabnam mb-3 text-base1-medium">
              میزان بو
            </label>
            <input
              value={smell}
              onChange={(event) => setSmell(event.target.value)}
              placeholder="میزان بو"
              type="text"
              className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="font-shabnam mb-3 text-base1-medium">
              انتخاب اسیاب
            </label>
            <input
              placeholder="مثال:ائروپرس/ وی شصت (ریز تا متوسط) , اسپرسو ساز خانگی (ریز) , جذوه (بسیار ریز) , قهوه ساز خانگی (متوسط) , کلد برو (خیلی درشت)            "
              value={Asyab}
              onChange={(event) => setAsyab(event.target.value)}
              type="text"
              className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="font-shabnam mb-3 text-base1-medium">
              تصویر محصول
            </label>
            <input
              onChange={(event: any) => setImg(event.target.files[0])}
              type="file"
              className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
            />
          </div>
          <button
            onClick={addProduct}
            className="flex gap-2 mt-5 items-center text-white text-tiny-medium font-shabnam bg-redprimary-500 mr-2 px-4 py-2 rounded-md mb-10"
          >
            افزودن
          </button>
        </div>
        <div className="md:basis-1/2 w-full max-md:order-first">
          <div className="flex flex-col mt-5">
            <label className="font-shabnam mb-3 text-base1-medium">
              مبلغ محصول
            </label>
            <input
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              placeholder="لطفا مبلغ محصول را وارد کنید"
              type="text"
              className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="font-shabnam mb-3 text-base1-medium">
              توضیحات بلند
            </label>
            <input
              value={longDescription}
              onChange={(event) => setLongDescription(event.target.value)}
              placeholder="توضیحات بلند"
              type="text"
              className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="font-shabnam mb-3 text-base1-medium">
              مناسب برای:
            </label>
            <input
              placeholder=" ... مناسب برای"
              value={suitableFor}
              onChange={(event) => setSuitableFor(event.target.value)}
              type="text"
              className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="font-shabnam mb-3 text-base1-medium">
              تگ های محصول
            </label>
            <input
              value={tags}
              onChange={(event) => setTags(event.target.value)}
              placeholder="مثال: قهوه،قهوه ترک، قهوه اسپرسو"
              type="text"
              className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="font-shabnam mb-3 text-base1-medium">
              دسته بندی های محصول
            </label>
            <input
              placeholder="مثال: قهوه،قهوه ترک، قهوه اسپرسو"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              type="text"
              className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
