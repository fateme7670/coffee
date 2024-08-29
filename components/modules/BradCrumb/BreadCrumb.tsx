import Link from "next/link";
import React from "react";
interface Props {
  route: string;
}
const BreadCrumb = ({ route }: Props) => {
  return (
    <section className='bg-[url("/images/back1.jpg")] text-white text-center bg-cover w-full h-auto bg-center pt-60 pb-16 font-shabnam'>
      <h1 className="text-headingbreadcrumb-bold  ">
        {route}
      </h1>
      <div className="flex justify-center gap-3 mt-3">
      <Link href={"/"}>خانه</Link>
      <span>/</span>
        <p>{route}</p>
      </div>
    </section>
  );
};

export default BreadCrumb;
