"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
interface Props {
  image: string;
}
const Gallery = ({ image }: Props) => {
  console.log("image", image);

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const images = [image, image];

  return (
    <section className="relative">
      <div className=" w-[500px]  max-md:mx-auto max-md:w-[400px] mt-10">
        <Swiper
          // style={{
          //   "--swiper-navigation-color": "#fff",
          //   "--swiper-pagination-color": "#fff",
          // }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 gallery-slider "
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="gallery-slider-2"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
