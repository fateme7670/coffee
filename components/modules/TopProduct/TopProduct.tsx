import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaRegStar, FaStar } from "react-icons/fa";
interface Props {
  id: string;
  name: string;
  score: number | undefined;
  price: string;
  img: string;
}
const TopProduct = ({ id, name, score, price, img }: Props) => {
  return (
    <>
      <section className=" mt-5 flex flex-row items-center justify-center content-center">
        <div className="relative my-5">
          <div className="flex max-md:flex-col items-center  justify-between">
            <div className="basis-1/3">
              <img
                src={img}
                alt="coffee"
                className="object-contain mx-auto"
                width={250}
                height={100}
              />
            </div>

            <div className="basis-2/3">
              <p className="text-small-medium font-shabnam">
            {name}
              </p>
              <div className="star flex   my-4  ">
              {new Array(score).fill(0).map((item, index) => (
            <FaStar key={index} />
          ))}
          {new Array(5-score).fill(0).map((item, index) => (
            <FaRegStar key={index} />
          ))}
              </div>
              <p className="text-base-medium font-shabnam ">{price.toLocaleString()} تومان</p>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};

export default TopProduct;
