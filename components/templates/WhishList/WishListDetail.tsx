import { Product } from '@/components/modules';
import { WishlistProps } from '@/utils/types';
import Link from 'next/link';
import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
interface Props{
  wishlist:WishlistProps[]
}
const WishListDetail = ({wishlist}:Props) => {
  return (
    <section className='container mt-10'>
      <h4 className='text-heading4-bold my-5'>محصولات مورد علاقه شما</h4>
      <hr/>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {wishlist.map(wish=> <Product key={wish?._id} 
            name={wish.product?.name}
            price={wish.product?.price}
            score={wish.product?.score}
            id={wish.product?._id}
            img={wish.product?.img}

            />)}




      </div>
      {wishlist.length === 0 &&
      <div className='flex items-center  mt-10 flex-col' data-aos="fade-up">
          <FaRegHeart className='text-headingbreadcrumb-bold my-5 text-gray-1' />
          <p className='text-heading1-semibold mb-5 text-gray-1'>محصولی یافت نشد</p>
          <span>شما هنوز هیچ محصولی در لیست علاقه مندی های خود ندارید.</span>
          <span  className='mt-5 mb-10'>در صفحه "فروشگاه" محصولات جالب زیادی پیدا خواهید کرد.</span>
          <div>
            <Link className='bg-green-2 px-5 py-3 mt-5 rounded-md text-white' href="/category">بازگشت به فروشگاه</Link>
          </div>
        </div>
}
    </section>
  );
}

export default WishListDetail;
