'use client'
import React, { useState } from 'react';
import { DetailArticles, Pagination } from '../../modules';
import { ArticlesProps } from '@/utils/types';
interface Props{
  articles:ArticlesProps[]
}
const Articels = ({articles}:Props) => {
  const countrow = 3
  const [homes, sethome] = useState<ArticlesProps[]>([...articles]);
  return (
   <>
    <section className='container grid grid-cols-3 max-lg:gris-cols-2 max-md:grid-cols-1 gap-10'>
     {homes.slice(0, countrow).map((item,index)=>(

     <DetailArticles key={item._id}
      id={item._id}
      title={item.title}
      shortdesc={item.shortdesc}
      img={item.img}
     />
     ))}
 

    </section>
     <Pagination  items={[...articles]} countrow={countrow} setdata={sethome} />

   </>
  );
}

export default Articels;
