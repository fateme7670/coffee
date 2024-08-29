import Link from 'next/link';
import React from 'react';

const Breadcrumb = () => {
  return (
    <section className='flex gap-2 items-center '>
    <Link className='text-gray-1 font-shabnam' href="/">خانه </Link>
    <span>/</span>
    <Link  className='text-gray-1 font-shabnam' href="/">همه موارد </Link>
    <span>/</span>
    <p>پودر قهوه ترک ویژه عربیکا ۷۰ درصد مقدار ۲۵۰ گرم</p>
  </section>
  );
}

export default Breadcrumb;
