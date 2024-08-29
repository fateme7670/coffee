import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDropLeftLine, RiArrowLeftDoubleLine } from "react-icons/ri";
interface Props{
  id:string
title:string
shortdesc:string
img:string
}
const DetailArticles = ({id,
  title,
  shortdesc,
  img}:Props) => {
  return (
    <section className="mt-10">
   
    
 
    <img
        src={img}
        alt="cofee"
        width={480}
        height={10}
        max-height={20}
        className="object-cover h-7"
        sizes='100vw'
      />
     <div className="mt-5">
     <Link className="text-heading4-medium font-shabnam " href={`/article/${id}`}>
    {title}
      </Link>
<p className="text-gray-1 font-shabnam mt-3">{shortdesc}</p>
   <Link href={`/article/${id}`} className="flex items-center gap-3 text-subtle-medium font-shabnam mt-3">ادامه مطلب
   <RiArrowLeftDoubleLine  className="text-heading4-medium"/>
   </Link>

     </div>
 
    </section>
  );
};

export default DetailArticles;
