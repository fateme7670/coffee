import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaPinterest, FaTelegram, FaTwitter } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineSms } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";

const DetailsArticle = () => {
  return (
    <div className="relative shadow-inner shadow-sm shadow-black   before:absolute before:top-0 before:right-0 before:left-0 before:bottom-0 before:hover:bg-dark-1/60 ">
      <div className="absolute  top-3 right-5 max-md:flex-row max-md:flex  max-md:items-center max-md:gap-1 bg-white text-center z-10 p-3 max-md:p-1 rounded-sm">
<p className="text-small-medium  font-shabnam">24</p>
<span className="text-small-medium  font-shabnam ">بهمن</span>
      </div>
      <img
      src='https://set-coffee.com/wp-content/uploads/elementor/thumbs/-%D9%82%D9%87%D9%88%D9%87-%D8%A8%D8%A7-%D8%B4%DB%8C%D8%B1-qi8xuncj4ordgstrl43mbg5jfj1ezzamf6v9rnitn0.jpg'
        alt="article"
        width='100%'
        height='100%'
        className="object-contain "
      />
      <div className="absolute article bottom-0 pb-5 text-center mx-auto z-10 right-0 left-0">
      <span className='text-white  text-small-medium bg-reddark-3 py-3 px-2 rounded-sm'>قهوه</span>
     
      <Link href={'/'} className="text-white text-heading4-bold break-all pt-6 mt-5 text-wrap">
  <p className="mt-5">    مصرف قهوه با شیر برای<br/> کاهش التهاب</p>
      </Link>
         <div className="flex flex-row  text-gray-1 justify-center text-small-medium items-center gap-2 ">
         <p>نویسنده</p>
          {/* <img
            src="https://secure.gravatar.com/avatar/665a1a4dc7cc052eaa938253ef413a78?s=32&d=mm&r=g"
            alt=""
            className="w-5 h-5"
          /> */}
          <RiAccountCircleFill />
          <p>Mohebi</p>
          <div className="relative">
            <MdOutlineSms />
            <span className="absolute -top-2 -left-1 bg-reddark-3 rounded-full p-0.5 text-x-small-semibold font-shabnam ">0</span>
          </div>
          <div className='relative [&_div]:hover:opacity-100 transition duration-100 delay-200'>
            <IoShareSocialOutline />
            <div className='text-white gap-3  flex z-10 flex-row bg-dark-1 p-2 ronded-sm absolute -top-8 -left-12 opacity-0'>
              <Link href={"/"}>
                <FaTelegram />
              </Link>
              <Link href={"/"}>
                <FaLinkedinIn />
              </Link>
              <Link href={"/"}>
                <FaPinterest />
              </Link>
              <Link href={"/"}>
                <FaTwitter />
              </Link>
              <Link href={"/"}>
                <FaFacebookF />
              </Link>
            </div>
          </div>
      </div>
      </div>
   
    </div>
  );
};

export default DetailsArticle;
