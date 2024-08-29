import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mt-20 bg-dark-1 text-white">
      <div className="container pb-14">
        <div className="flex max-lg:flex-col pt-10 ">
          <div className="basis-1/4">
            <Image
              src="/images/logo_light.png"
              alt="logo"
              width={200}
              height={100}
              className="object-contain"
            />
            <p className="font-shabnam mt-5">
              {" "}
              شرکت فنجان داغ خوارزمی، فروشگاه اینترنتی قهوه ست
            </p>
            <div className="flex mt-10 items-center  ">
              <FaRegHeart />
              <p className="font-shabnam mr-3">
                تهران. شریف آباد . شهرک صنعتی خوارزمی فاز 2 . بلوار بهارستان.
                خیابان ماگنولیا بلوک آ117
              </p>
            </div>
            <div className="flex mt-10 items-center">
              <FaRegHeart />
              <p className="font-shabnam mr-3">پیگیری سفارشات : 02188305827</p>
            </div>
            <div className="flex mt-10 items-center">
              <FaRegHeart />
              <p className="font-shabnam mr-3">support [at] set-coffee.com</p>
            </div>
          </div>
          <div className="basis-1/4 lg:mr-14 w-full">
            <h4 className="text-heading4-medium font-shabnam">جدیدترین نوشته ها</h4>
            <div className="flex w-full my-10 gap-2 font-shabnam">
              <img 
              src="https://set-coffee.com/wp-content/uploads/elementor/thumbs/IMG_20230920_130854_091-qconsqrfwm7t626t2hckfjifv0kdd7cofsbfd1jcig.jpg"
              alt='article'
              width={100}
              height={100}
              className="object-contain"
              />
             <div>
             <h4 className="text-base-semibold font-shabnam">افزایش انرژی با پودر قهوه فوری</h4>
              <p className="text-base1-semibold font-shabnam text-gray-1">بدون دیدگاه</p>
             </div>
            </div>
            <hr />
            <div className="flex w-full my-10 gap-2 font-shabnam">
              <img 
              src="https://set-coffee.com/wp-content/uploads/elementor/thumbs/IMG_20230920_130854_091-qconsqrfwm7t626t2hckfjifv0kdd7cofsbfd1jcig.jpg"
              alt='article'
              width={100}
              height={100}
              className="object-contain"
              />
             <div>
             <h4 className="text-base-semibold font-shabnam">افزایش انرژی با پودر قهوه فوری</h4>
              <p className="text-base1-semibold font-shabnam text-gray-1">بدون دیدگاه</p>
             </div>
            </div>
          </div>
          <div className="basis-1/4 lg:pr-14"> 
            <ul className="flex  [&_li]:text-base1-semibold font-shabnam [&_li]:text-gray-1 [&_li]:mt-4">
          <div className="basis-1/2 ">
            <h4 className="text-heading4-medium text-white font-shabnam">منوی فوتر</h4>
            <li>
              <Link href={"/contact-us"}>تماس با ما</Link>
            </li>
            <li>
              <Link href={"/about-us"}>درباره ما </Link>
            </li>
            <li>
              <Link href={"/rules"}>قوانین</Link>
            </li>
          </div>
          <div className="basis-1/2 ">
            <h4 className="text-heading4-medium text-white font-shabnam"> دسترسی سریع</h4>
            <li>
              <Link href={"/category"}> فروشگاه </Link>
            </li>
            <li>
              <Link href={"/articles"}> مقالات </Link>
            </li>
            <li>
              <Link href={"/cart"}>سبد خرید</Link>
            </li>
            <li>
              <Link href={"/wishlist"}>علاقه مندی ها</Link>
            </li>
          </div>
        </ul></div>
          <div className="basis-1/4 lg:pr-14 max-lg:my-10"> 
          <div className="flex lg:items-center max-lg:gap-28 lg:justify-center gap-5 ">
            
          <img src="/images/license1.png" width={85} height={85} alt="" />
          <img src="/images/license4.htm" width={76} height={76} alt="" />
          </div>
          <div className="flex lg:items-center max-lg:gap-28 max-lg:mt-5 lg:justify-center gap-5 ">
          <img src="/images/license2.svg" width={62} height={95} alt="" />
          <img src="/images/license3.png" alt="" />
          </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className="container pt-10 pb-8">
        <span className='flex items-center font-shabnam text-small-medium'>
          {" "}
          2023
          <MdOutlineCopyright />   {" "}تمام حقوق متعلق است به <strong>
          {" "}   قهوه ست   {" "}
          </strong>{" "}
          | طراحی و اجرا <strong>نیلامارکتینگ</strong>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
