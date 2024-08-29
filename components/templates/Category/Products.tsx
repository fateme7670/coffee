'use client'
import { Select } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { BiSolidGrid } from "react-icons/bi";
import { MdOutlineGridView } from "react-icons/md";
import {
  TfiLayoutGrid2,
  TfiLayoutGrid3,
  TfiLayoutGrid3Alt,
  TfiLayoutGrid4Alt,
} from "react-icons/tfi";
import { Product as Card, Pagination } from "@/components/modules";
import { ProductProps } from "@/utils/types";
interface Props {
  products: ProductProps[];
}
const Products = ({ products }: Props) => {
  const countrow = 6

    const [homes, sethome] = useState<ProductProps[]>([...products]);
    const [sort, setsort] = useState<string | number>(-1);
    const [showFilter, setshowFilter] = useState(false);
    const [addfilter, setaddfilter] = useState([]);
    useEffect(() => {
     const filtrer= JSON.parse(localStorage.getItem('filter'))
    //  const arrfilter=filtrer.join(',')
     if (filtrer) {
      setshowFilter(true)
      setaddfilter(filtrer)
     }
   
    }, [addfilter]);

    useEffect(() => {
      switch (sort) {
        case "popularity": {
          const newHomes = [...homes].sort((a, b) => b.score - a.score );
          sethome(newHomes);
          break;
        }
        case "rating": {
          const newHomes = [...homes].sort((a, b) => a.score - b.score);
          sethome(newHomes);
          break;
        }
        case "last_products": {
          const newHomes = [...homes].sort((a, b) => b.createdAt - a.createdAt);
          sethome(newHomes);
          break;
        }
        case "Inexpensive": {
          const newHomes = [...homes].sort((a, b) => a.price - b.price);
          sethome(newHomes);
          break;
        }
        case "expensive": {
          const newHomes = [...homes].sort((a, b) => b.price - a.price);
          sethome(newHomes);
          break;
        }
        default: {
          sethome([...products]);
        }
      }
    }, [sort]);

  return (
    <section className="container">
      <div className="flex items-center max-sm:flex-col justify-between pr-10">
        <div className="flex  [&_svg]:text-heading4-medium [&_svg]:w-full [&_svg]:h-full gap-2 text-gray-1 ">
          <TfiLayoutGrid2 />
          <TfiLayoutGrid3Alt />
          <TfiLayoutGrid3 />
        </div>
        <div className="max-sm:mt-5 ">
          <Select
            name="orderby"
            data-active={false}
            autoFocus={false}
            className="border-b-2 max-sm:w-[150px]  border-black outline-0 data-[hover]:shadow font-shabnam text-base-semibold"
            aria-label="Project status"
            defaultValue={sort} onChange={e => setsort(e.target.value)}
          >
            <option value="default">مرتب‌سازی پیش‌فرض</option>
            <option value="popularity">مرتب‌سازی بر اساس محبوبیت</option>
            <option value="rating">مرتب‌سازی بر اساس امتیاز</option>
            <option value="last_products">مرتب‌سازی بر اساس آخرین</option>
            <option value="Inexpensive">مرتب‌سازی بر اساس ارزانترین</option>
            <option value="expensive">مرتب‌سازی بر اساس گرانترین</option>
          </Select>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
        {homes.slice(0, countrow).map((item) => (
          <Card
            key={item._id}
            id={item._id}
            name={item.name}
            score={item.score}
            price={item.price}
            img={item.img}
          />
        ))}
      </div>
      <Pagination  items={[...products]} countrow={countrow} setdata={sethome} />
    </section>
  );
};

export default Products;
