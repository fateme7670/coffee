'use client'
import { BillsProps, CardProps } from '@/utils/types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const OrderComplete = () => {
  const [cart, setCart] = useState<CardProps[]>([]);
  const [tottalprice, settottalprice] = useState(0);
  const [finalprice, setfinalprice] = useState(0);

  const localCart = JSON.parse(localStorage.getItem("card")) || [];
  const localPrice = JSON.parse(localStorage.getItem("price")) || '';
  const proId=localCart[0].id
  useEffect(() => {
      const localCart = JSON.parse(localStorage.getItem("card")) || [];

      setCart([...localCart]);
    }, []);
 
  return (
    <div className='mt-10 container flex justify-center flex-col items-center'>
    <ul className='[&_li]:text-gray-1 list-outside list-disc [&_li]:mb-3'>
        <li >شماره سفارش: {proId}</li>
        <li>تاریخ: {new Date().toLocaleDateString('fa-IR')}</li>
        <li> قیمت نهایی: <strong className='text-black'> {localPrice.toLocaleString()} تومان</strong> </li>
        <li>روش پرداخت: بانک ملی</li> 
    </ul>
    <div>
         <button className='bg-slate-100 py-3 px-5 rounded-md ml-2'>پرداخت</button>
         <Link className='bg-slate-100 py-3 px-5 rounded-md ' href={'/checkout'}><button> بازگشت</button> </Link>
        </div>
</div>

  );
}

export default OrderComplete;
