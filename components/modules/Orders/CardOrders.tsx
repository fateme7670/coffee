import { ProductProps } from "@/utils/types";
import Link from "next/link";
import React from "react";
interface Props {
 
  date: string;
  product: ProductProps[];
  id: string;
}
const CardOrders = ({ id,  date, product }: Props) => {
  return (
    <>
    {product.map((item:ProductProps)=>(
    <div  className="container  bg-redprimary-500 mt-5  text-white py-3  rounded-md px-3 ">
     <div className="flex gap-4 justify-between items-center">
     <div className="">
 
          <div className="flex  items-center gap-2">
          {/* <div className="relative rounded-full w-20 h-20"> */}

          <img
            src={
              item.img ||
              "https://set-coffee.com/wp-content/uploads/2022/03/ethiopia-430x430.png"
            }
            alt=""
            className="object-contain w-12 h-12 rounded-full"
          />
          {/* </div> */}
        <Link  href={`/product/${id}`}>
        <p>{item.name}</p>
        </Link> 

        </div>
  
        
      </div>
      <div className=" ">
        <p className="">{new Date(date).toLocaleDateString('fa-IR')}</p>
        <p className=" text-small-medium">{item.price?.toLocaleString()} هزار تومان</p>

      </div>
     </div>
      <div className="bg-white text-center text-redprimary-500 w-full px-4 py-2 rounded-lg mt-3 font-shabnam">

<p >تکمیل شده</p>
</div>
    </div>
       ))}
       </>
  );
};

export default CardOrders;
