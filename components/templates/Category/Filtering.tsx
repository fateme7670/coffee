import React from "react";
import { Choise, RangerSlide, TopProduct } from "../../modules";
import { FaRegStar, FaStar } from "react-icons/fa";
import { ProductProps } from "@/utils/types";
interface Props {
  Asyab: string[];
  products: ProductProps[];
}
const Filtering = ({ Asyab, products }: Props) => {
  return (
    <div>
      <RangerSlide />
      <Choise Asyab={Asyab} />
      <div className="my-10">
        <p className="text-base-semibold font-shabnam mb-5">
          انتخاب بر اساس امتیاز
        </p>
        <section>
          <div className="flex gap-3 items-center my-5 justify-between">
            <div className="flex [&_svg]:text-orange">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span className="text-gray-1">(12)</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex [&_svg]:text-orange">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <span className="text-gray-1">(22)</span>
          </div>
        </section>
      </div>
      <hr />
      {products.slice(0,3).map(item=>
        <TopProduct
        key={item._id}
        id={item._id}
        name={item.name}
        score={item.score}
        price={item.price}
        img={item.img}
        
        />
        )}
    
  
    </div>
  );
};

export default Filtering;
