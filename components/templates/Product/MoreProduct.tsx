"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Product } from "@/components/modules";
import { ProductProps } from "@/utils/types";
interface Props{
  relatedProduct:ProductProps[]
}
const MoreProduct = ({relatedProduct}:Props) => {
  return (
    <div className="mt-10" data-aos="fade-right">
      <section>
        <h2 className="text-heading4-bold">محصولات مرتبط</h2>
        <div className="w-[70px] h-[2px] bg-black mt-3"></div>
      </section>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        dir="rtl"
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper "
      >
        {relatedProduct.map((item: any) => (
          <SwiperSlide className="lg:max-w-[400px]" key={item.id}>
            <Product 
            id={item._id}
            name={item.name}
            score={item.score}
            price={item.price}
            img={item.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MoreProduct;
