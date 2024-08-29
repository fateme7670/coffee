import { ArticlesProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
interface Props {
  article: ArticlesProps;
  lastarticle: ArticlesProps[];
  firstarticle: ArticlesProps[];
}
const InfoArticle = ({ article, lastarticle, firstarticle }: Props) => {
  return (
    <section className="container">
      <div className="font-shabnam">
        <div className="flex flex-col items-center justify-center mt-10">
          <p className="bg-reddark-3 text-white py-1 w-12 rounded-md text-center">
            قهوه
          </p>
          <h2 className="text-heading2-bold mt-3">{article.title}</h2>
        </div>
        <div className="flex justify-center items-center gap-5 mt-3">
          <p className="text-gray-1">نویسنده</p>
          <img
            src={article.img}
            alt="coffee"
            width={20}
            height={20}
            className="object-cover rounded-lg"
          />
          <p className="text-gray-1">{article.authername}</p>
        </div>
        <div className="relative w-full h-50 mt-10 justify-center items-center flex">
          <img
            src={article.img}
            alt="coffee"
            width={1200}
            height={300}
            className="object-contain"
          />
          <span className="bg-white fixed px-4 py-1 absolute top-4 right-5">
            {new Date(article.createdAt).toLocaleDateString("fa-IR")}
          </span>
        </div>
        <p className="text-gray-1 my-10 text-justify text-base-semibold font-shabnam  leading-8">
          {article.longdesc}
        </p>
        <hr />
        <div className="mt-10">
          <div className="flex justify-center text-heading4-medium gap-5">
            <Link
              href={"/"}
              className="bg-[#37AEE2] p-2 rounded-full text-white"
            >
              <FaTelegram />
            </Link>
            <Link
              href={"/"}
              className="bg-[#0274B3] p-2 rounded-full text-white"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href={"/"}
              className="bg-[#CB2027] p-2 rounded-full text-white"
            >
              <FaPinterest />
            </Link>
            <Link href={"/"} className="bg-[#3CF] p-2 rounded-full text-white">
              <FaTwitter />
            </Link>
            <Link
              href={"/"}
              className="bg-[#365493] p-2 rounded-full text-white"
            >
              <FaFacebookF />
            </Link>
          </div>

          <div className="flex mb-10 justify-between mt-10">
            <div className="basis-1/3 items-center gap-5 flex">
              <div className="border border-2 border-black rounded-full">
                {" "}
                <Link href={"/article/134"}>
                  <FaAngleRight />
                </Link>
              </div>
              <div>
                <p className="flex justify-start text-gray-1">جدید تر</p>
                <Link href={`/article/${firstarticle[0]._id}`}>{firstarticle[0].title}</Link>
              </div>
            </div>
            <div className="basis-1/3 flex justify-center items-center">
              <Link href={"/articles"}>
                <IoGridOutline />
              </Link>
            </div>
            <div className="basis-1/3 items-center gap-5 flex">
              <div>
                <p className="flex justify-end text-gray-1">قدیمی تر</p>
                <Link href={`/article/${lastarticle[0]._id}`}>{lastarticle[0].title}</Link>
              </div>
              <div className="border border-2 border-black rounded-full">
                {" "}
                <Link href={"/article/134"}>
                  <FaAngleLeft />
                </Link>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default InfoArticle;
