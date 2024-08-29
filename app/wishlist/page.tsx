import { BreadCrumb, Footer, Navbar } from '@/components/modules';
import { WishListDetail } from '@/components/templates';
import { connectToDB } from '@/configs/db';
import wishListModel from '@/models/Wishlist';
import { authUser } from '@/utils/userhelper';
import Link from 'next/link';
import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

const page =async () => {
connectToDB()
const user = await authUser();
const wishlist=await wishListModel.find({user:user?._id}).populate('product').lean()
  return (
    <>
      <Navbar islogin={user? true:false}/>
      <BreadCrumb route='علاقه مندی ها'/>

  
      <WishListDetail wishlist={wishlist}/>
      <Footer/>
    </>
  );
}

export default page;
