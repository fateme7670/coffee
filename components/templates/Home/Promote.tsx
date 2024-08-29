import Image from "next/image";
import Link from "next/link";
import React from "react";

const Promote = () => {
  return (
    <section className="bg-lightgray flex flex-col my-20">
      <div className="container  flex max-lg:flex-col">
        <div className="basis-1/2 flex flex-col items-center justify-center pt-10 pr-5">
          <h1 className="text-green-1 text-heading1-bold font-shabnam">
            خرید قهوه ، به سبک حرفه ای ها
          </h1>
          <p className="text-gray-1 text-base-semibold font-shabnam ">زیبایی امروز رو با قهوه “ست” کنید</p>
          <Image
          
            src='/images/coffee-image-1.jpg'
            alt="cofee"
          width={300}
          height={300}
            className="object-contain mt-10"
            />
        </div>
        <div className="basis-1/2  lg:bg-[url('/images/clubset1.jpg')] ">
           
        <Image
          
          src='/images/clubset1.jpg'
          alt="cofee"
        width={1000}
        height={200}
          className="object-contain mt-10 hidden max-lg:block"
          />
        </div>
      </div>
      <div className="container flex max-lg:flex-col mt-20">
        <div className="basis-1/2 lg:pr:20 lg:mb-32 lg:order-last flex flex-col  pt-10 pr-5">
            <Image
            src='/images/coffee-svg-2.svg'
            alt="coffee"
            className="bg-contain"
            width={100}
            height={100}
            />
          <h1 className="text-redprimary-500 max-lg:pr-3 text-heading-bold font-shabnam">
           چرا قهوه ست ؟
          </h1>
          <p className="text-gray-1 mt-5 text-base-semibold font-shabnam ">
          برخورداری از تجربه و قدمت کافی و آگاهی از ذایقه مصرف کنندگان راهنمای ما در برآورده ساختن نیاز مشتریان قهوه تخصصی (موج سوم) است .تجربه ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان قهوه ضامن این ویژگیها است.
          
          </p>
      <div className="flex">

      <Link href='/' className="bg-redprimary-500 text-subtle-semibold font-shabnam text-white w-32 mt-10 px-5 py-3">
     <p>  بیشتر بخوانید</p>
       </Link>
       <Link href='/' className="bg-white text-black text-subtle-semibold font-shabnam border border-redprimary-500 w-20 mt-10 px-5 py-3">
     <p>  فروشگاه</p>
       </Link>
      </div>


        </div>
        <div className="basis-1/2  lg:bg-[url('/images/Home32.jpg')] ">
           
        <Image
          
          src='/images/Home32.jpg'
          alt="cofee"
        width={1000}
        height={200}
          className="object-contain mt-10 hidden max-lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Promote;
