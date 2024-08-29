"use client";
import React, { useState } from "react";
import Modal from "@/components/modules/modal/Modal";
import { BillProps, ProductProps } from "@/utils/types";
import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";
interface Props {
  bill: BillProps[];
}
const Order = ({ bill }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [data, setdata] = useState<BillProps>({});

  
  const hideModal = () => setShowModal(false);
  return (
    <section className="container mt-10 overflow-hidden">
    <div className="flex flex-col overflow-x-auto">
    <table className="table-auto text-center text-small-semibold overflow-x-auto font-shabnam text-center [&_th]:bg-gray-6 [&_td]:border [&_td]:border-gray-6 [&_th]:border [&_th]:border-gray-6  [&_th]:p-3 [&_td]:p-3 border-collapse w-full  border border-gray-6">
        <thead>
          <tr>
            <th>شناسه</th>
            <th>تاریخ</th>
            <th>وضعیت</th>
            <th>محصول</th>
            <th>مبلغ </th>
            <th>عملیات ها</th>
          </tr>
        </thead>
        <tbody>
          {bill.map((item:BillProps,index:number) => (
            <tr key={item._id}>
              <td>{index+1}</td>
              <td>{new Date(item.createdAt).toLocaleDateString('fa-IR')}</td>
              <td>تکمیل شده</td>
              <td>
                {item.proId.map((item:ProductProps)=>(
                  <div className="flex border-b py-3  max-md:flex-col  items-center justify-start">
                  <div>
                    {" "}
                    <img
                      width={40}
                      height={40}
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <div>
                    <p> {item.name}</p>
                  </div>
                </div>
                ))}
              </td>
              <td>{item.totalPrice?.toLocaleString()} هزار تومان</td>
             {/*  <td className="flex justify-center">
              <AiOutlineEye
               className="cursor-pointer  text-sky-600   text-heading4-medium" 
               onClick={() =>{
                setdata({...item})
                setShowModal(true)
              }
              
              
              } 
              />
            
       
              </td> */}
              <td>
                <button
                  type="button"
                  className="bg-black py-2 px-5 text-white rounded-md"
                  onClick={() =>{
                    setdata({...item})
                    setShowModal(true)
                  }
                  
                  
                  } 
                >
                  نمایش
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

      {/* <p className={tableStyles.empty}>
          سفارشی وجود ندارد
        </p> */}

      {showModal && (
        <Modal  title="مشخصات سفارش" hideModal={hideModal}>
          <p>
            سفارش #{data.numberOfBill} در تاریخ {new Date(data.createdAt).toLocaleDateString('fa-IR')} ثبت شده است و در حال حاضر در وضعیت
            تکمیل شده می باشد
          </p>
          <div>
            <div className="flex gap-4 justify-between border-b my-3 pb-3">
              <p>محصول</p>
              <p>مجموع</p>
            </div>
            {data.proId?.map((item:ProductProps)=>(
              <div  className="flex border-b py-2 gap-4 justify-between border-b my-3 pb-3">
              <p> {item.name}</p>
              <p>{item.price?.toLocaleString()} هزار تومان</p>
            </div>
            ))}
            <div  className="flex gap-4 justify-between border-b my-3 pb-3">
              <p>جمع کل سبد خرید:</p>
              <p>{data.totalPrice?.toLocaleString()} تومان</p>
            </div>
            <div  className="flex gap-4 justify-between border-b my-3 pb-3">
              <p>قیمت نهایی:</p>
              <p>{data.totalPrice?.toLocaleString()} هزار تومان</p>
            </div>
          </div>
     
          <Link href={'/cart'} ><button  className="bg-redprimary-500 text-white w-full py-3 rounded-md my-5">سفارش دوباره</button></Link>
          <div className="flex gap-4 justify-between">
            <p>آدرس صورت حساب:</p>
            <div className="flex gap-4 justify-between">
              <p>{data.name +''+ data.family}</p>
              <p>{data.phone}</p>
              <p>{data.email}</p>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Order;
