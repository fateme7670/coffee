"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import DetailsArticle from "./DetailsArticle";

const Article = () => {
  return (
    <section className="container">
      <div className="flex max-md:flex-col  mx-8 my-5">
        <div>
          <h1 className="text-green-1 text-heading1-bold font-shabnam">
            مقالات ما
          </h1>
          <span className="text-gray-1 font-shabnam text-body-medium max-md:mt-5">
            دانستنی های جذاب دنیای قهوه
          </span>
        </div>
      </div>
      <div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          dir="rtl"
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          //   rewind={true}
          loop={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper articles_slider"
        >
          <SwiperSlide className="md:max-w-[400px]" >
            <DetailsArticle />
          </SwiperSlide>
          <SwiperSlide className="md:max-w-[400px]" >
            <DetailsArticle />
          </SwiperSlide>
          <SwiperSlide className="md:max-w-[400px]" >
            <DetailsArticle />
          </SwiperSlide>
          <SwiperSlide className="md:max-w-[400px]" >
            <DetailsArticle />
          </SwiperSlide>
          <SwiperSlide className="md:max-w-[400px]" >
            <DetailsArticle />
          </SwiperSlide>
          <SwiperSlide className="md:max-w-[400px]" >
            <DetailsArticle />
          </SwiperSlide>
          <SwiperSlide className="md:max-w-[400px]" >
            <DetailsArticle />
          </SwiperSlide>
          <SwiperSlide className="md:max-w-[400px]" >
            <DetailsArticle />
          </SwiperSlide>
          <SwiperSlide className="md:max-w-[400px]" >
            <DetailsArticle />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Article;
