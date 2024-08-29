import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { Product } from "../../modules";
import { ProductProps } from "@/utils/types";
interface Props {
  product: ProductProps[];
}
const Latest = ({ product }: Props) => {
  return (
    <section className="container">
      <div className="flex max-md:flex-col justify-between items-center mx-8 my-5">
        <div className="text-center">
          <h1 className="text-green-1 text-heading1-bold font-shabnam">
            آخرین محصولات
          </h1>
          <span className="text-gray-1 text-body-medium max-md:mt-5">
            Latest products
          </span>
        </div>
        <Link
          href="/category"
          className="flex flex-row items-center gap-4 text-body-medium font-shabnam max-md:mt-5"
        >
          مشاهده همه
          <FaChevronLeft />
        </Link>
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {product.map((item) => (
          <Product
            key={item._id}
            id={item._id}
            name={item.name}
            score={item.score}
            price={item.price}
            img={item.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Latest;
