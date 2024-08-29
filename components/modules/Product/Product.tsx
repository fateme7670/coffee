'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaRegStar, FaStar } from "react-icons/fa";
interface Props {
  id: string;
  name: string;
  score: number | undefined ;
  price: number;
  img: string;
}
const Product = ({ id, name, score, price, img }: Props) => {
  const [menu, setmenu] = useState(false);
  return (
    <section className="container flex flex-row items-center justify-center content-center">
      <div className="relative ">
        <div onMouseLeave={()=>setmenu(!menu)} onMouseEnter={()=>setmenu(!menu)} className="details-card hover:bg-black/60 hover:[&_img]:scale-110 ">
          <img
            src={`${img}` || "https://set-coffee.com/wp-content/uploads/2021/10/041-430x430.png"}
            alt="coffee"
            className="object-contain mx-auto"
            width={300}
            height={312}
          />
          {menu &&( <>
          
            <div className="absolute top-0 left-0 [&_svg]:text-heading3-bold">
        <div className="search-product hover:[&_p]:opacity-100 pl-3 mt-3 w-full">
            <Link className="search-product_Link  [&_svg]:text-white flex  flex-row-reverse items-center" href={`/product/${id}`}>
              <CiSearch />
              <p className="search-product_txt opacity-0  text-tiny-medium  bg-black text-white px-3 py-2 rounded-md">
                مشاهده سریع
              </p>
            </Link>
          </div>

          <div className="heart-product my-4  hover:[&_p]:opacity-100 pl-3 flex">
            <Link href={"/wishlist"} className="search-product_Link [&_svg]:text-white flex flex-row-reverse items-center ">
              <CiHeart />
              <p className="heart-product_txt text-tiny-medium   opacity-0 bg-black text-white px-3 py-2 rounded-md">
                افزودن به علاقه مندی ها{" "}
              </p>
            </Link>
          </div>

        </div>
        <div className="absolute top-28 right-16 mx-auto  ">
        <button className="border   border-white text-small-medium text-white rounded-md px-3 py-1 ">افزودن به سبد خرید</button>

        </div>
          </>) }
      
        </div>

       <Link href={`/product/${id}`}>
       <p className="text-base-medium font-shabnam">{name}</p>
       </Link> 
        <div className="star flex items-center  my-4  justify-center">
          {new Array(score).fill(0).map((item, index) => (
            <FaStar key={index} />
          ))}
          {new Array(5-score).fill(0).map((item, index) => (
            <FaRegStar key={index} />
          ))}
        </div>
        <p className="text-base-medium font-shabnam  text-center">
          {price?.toLocaleString()}
        </p>
      </div>
    </section>
  );
};

export default Product;
