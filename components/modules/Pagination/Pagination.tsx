import { ArticlesProps, ProductProps } from "@/utils/types";
import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
interface Props {
  items: ProductProps[] | ArticlesProps[];
  countrow: number;
  setdata: () => void;
}
const Pagination = ({ items, countrow, setdata }: Props) => {
  const pagination = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    paginate: number
  ) => {
    e.preventDefault();
    // console.log(paginate);
    const endindex = countrow * paginate;
    const startindex = endindex - countrow;
    // console.log(startindex,endindex);
    const page = items.slice(startindex, endindex);
    setdata(page);
  };
  return (
    <div className="">
      <ul className="flex gap-4 items-center justify-center mt-10">
        <MdChevronRight className="cursor-pointer" />
        {Array.from({ length: Math.ceil(items.length / countrow) }).map(
          (item, index) => (
            <li
              key={index + 1}
              onClick={(e) => pagination(e, index + 1)}
              className="bg-redprimary-500 px-3 cursor-pointer  py-1   rounded-md text-white"
            >
              {" "}
              {index + 1}
            </li>
          )
        )}
        <MdChevronLeft className="cursor-pointer" />
      </ul>
    </div>
  );
};

export default Pagination;
