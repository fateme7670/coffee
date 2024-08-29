'use client'
import { ProductProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaRegStar, FaStar } from "react-icons/fa";
interface Props {
  name: string;
  price: string;
  score: number | undefined;
  productID: string;
  img:string
}
const WhishList = ({img, name, price, score, productID }: Props) => {
  const removeProduct = () => {
    swal({
      title: "آیا از حذف محصول اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async(result) => {
      if (result) {
        const res=await fetch(`/api/wishlist/${productID}`,{
          method:"DELETE"
        })
        // console.log( "result==>",res);
        if (res.status==200) {
          swal({
            title: "deleted successfuly",
            icon: "success",
            buttons: "OK",
          }).then(()=>{
     location.reload()
          })
        }
      }
    });
  };

  return (
    <section className=" flex my-5 flex-row items-center justify-center content-center">
      <div className="relative">
        <div className="">
          <img
            src={img}
            alt="coffee"
            className="object-contain mx-auto"
            width={300}
            height={312}
          />
        </div>

        <p className="text-base-medium font-shabnam">
         {name}
        </p>
        <div className="flex items-center justify-between">
          <div className="star flex items-center  my-4  justify-center">
          {new Array(score).fill(0).map((item,index)=> <FaStar key={index} />)}
            {new Array(5-score).fill(0).map((item,index)=> <FaRegStar key={index} />)}
         
       
          </div>
          <p className="text-base-medium font-shabnam  text-center">
           {price} تومان
          </p>
        </div>
        <div className="w-full mt-5">
          <button onClick={()=>removeProduct()} className="bg-redprimary-500 px-5 py-1 w-full text-white hover:bg-redprimary-500/50">
            حذف محصول
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhishList;
