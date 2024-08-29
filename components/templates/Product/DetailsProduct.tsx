"use client";
import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaRegStar,
  FaStar,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import AddToWishlist from "./AddToWishlist";
import { TbSwitch3 } from "react-icons/tb";
import Link from "next/link";
import { CardProps, ProductProps } from "@/utils/types";
import { showSwal } from "@/utils/helper";
interface Cards{
  id:string,
  name:string,
  price:number,
  counter:number,
  img:string,
  tottalprice:number
}
const DetailsProduct = ({
  id,
  name,
  price,
  shortDescription,
  score,
  comments,
  tags,
  category,
  img,
}: ProductProps) => {
  const [counter, setcounter] = useState(0);
  let totalprice = 0;
  const increasecounter = () => {
    setcounter((counter) => counter + 1);
  };
  const decreasecounter = () => {
    if (counter > 0) {
      setcounter((counter) => counter - 1);
    } else {
      setcounter(0);
    }
  };
  const addToBasket = () => {
    const basket = JSON.parse(localStorage.getItem("card")) || [];
    if (basket.length) {
      const iscard = basket.some((item: Cards) => item.id == id);
      if (iscard) {
        basket.forEach((item: Cards) => {
          if (item.id === id) {
            item.counter = item.counter + counter;
            item.tottalprice = item.price * item.counter;
          }
          localStorage.setItem("card", JSON.stringify(basket));
          showSwal("محصول با موفقیت به سبد خرید اضافه شد", "success", "فهمیدم");
        });
      } else {
        addCard();
      }
    } else {
      addCard();
    }
  };
  const addCard = () => {
    const basket = JSON.parse(localStorage.getItem("card")) || [];
    totalprice = price * counter;
    const card = {
      id,
      name,
      price,
      counter,
      img,
      tottalprice: totalprice,
    };
    basket.push(card);
    localStorage.setItem("card", JSON.stringify(basket));
    showSwal("محصول با موفقیت به سبد خرید اضافه شد", "success", "فهمیدم");
  };

  return (
    <section className="mt-10">
      <Breadcrumb />
      <div>
        <h2 className="text-heading4-bold mt-3">{name}</h2>
        <div className="flex items-center gap-2">
          <div className="star flex items-center  my-4 ">
            {new Array(score).fill(0).map((item, index) => (
              <FaStar key={index} />
            ))}
            {new Array(5 - score).fill(0).map((item, index) => (
              <FaRegStar key={index} />
            ))}
          </div>
          <p>(دیدگاه {comments.length} کاربر)</p>
        </div>
        <p className="text-heading4-medium">{price?.toLocaleString()} تومان</p>
        <p className="text-gray-1 text-justify my-3">{shortDescription} </p>
        <hr className="border-gray-1 " />
        <div className="flex items-center gap-2 mt-3 text-body-medium">
          <IoCheckmark />
          <p>موجود در انبار</p>
        </div>
        <div className="flex mt-10 items-center gap-3">
          <div className="">
            <span
              onClick={decreasecounter}
              className="cursor-pointer border border-black py-1 px-3"
            >
              -
            </span>
            <span className="border border-black py-1 px-3">{counter}</span>
            <span
              onClick={increasecounter}
              className="cursor-pointer border border-black py-1 px-3"
            >
              +
            </span>
          </div>
          <button
            onClick={addToBasket}
            className="bg-green-3 text-white px-4 py-3 hover:bg-redprimary-500 rounded-md text-subtle-semibold"
          >
            افزودن به سبد خرید
          </button>
        </div>
        <div className="flex items-center gap-4 my-5">
          <AddToWishlist id={id} />
          <div className="flex items-center gap-2  hover:opacity-50">
            <TbSwitch3 />
            <Link href="/">مقایسه</Link>
          </div>
        </div>
        <hr className="border-gray-1 " />
        <div className="mt-5">
          <p className="text-base-semibold mb-5">
            <span>شناسه محصول:</span>
            {id}
          </p>
          <p>
            <span>
              <strong>دسته:</strong>
            </span>
            {category}
          </p>
          <p className="mt-5">
            <strong>برچسب: </strong>
            {tags}{" "}
          </p>
          <div className="flex items-center gap-2 my-5">
            <p>به اشتراک گذاری: </p>
            <a href="/">
              <FaTelegram />
            </a>
            <a href="/">
              <FaLinkedinIn />
            </a>
            <a href="/">
              <FaPinterest />
            </a>
            <a href="/">
              <FaTwitter />
            </a>
            <a href="/">
              <FaFacebookF />
            </a>
          </div>
          <hr className="border-gray-1 " />
        </div>
      </div>
    </section>
  );
};

export default DetailsProduct;
