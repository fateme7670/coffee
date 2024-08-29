"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { SlShuffle } from "react-icons/sl";
import { FiAlignJustify, FiShoppingCart } from "react-icons/fi";
import { authUser } from "@/utils/userhelper";
import { IoIosArrowDown } from "react-icons/io";
interface Props {
  islogin?: boolean;
}
const Navbar = ({ islogin }: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdown, setIsdropdown] = useState(false);
const card=JSON.parse(localStorage.getItem('card')) || []
const [wish, setwish] = useState(0);
useEffect(() => {
const wish=async()=>{
  const resuser=await fetch('/api/auth/me')
  const user=await resuser.json()
  console.log('users',user._id);
  const wishlist=await fetch(`/api/wishlist/${user._id}`)
  const wishcount=await wishlist.json()
  setwish(wishcount.length)
}

wish()
}, []);
  return (


    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="/images/logo.png" // Replace with your logo path
                alt="Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex space-x-4">
            <ul className="flex-row [&_li]:text-small-medium gap-4 items-center flex">
              <li>
                <Link href="/">صفحه اصلی</Link>
              </li>
              <li>
                <Link href="/category">فروشگاه</Link>
              </li>
              <li>
                <Link href="/articles">مقالات</Link>
              </li>
              <li>
                <Link href="/contact-us">تماس با ما</Link>
              </li>
              <li>
                <Link href="/about-us">درباره ما</Link>
              </li>
              <li>
                <Link href="/rules">قوانین</Link>
              </li>
              {islogin ? (
                <div  onMouseLeave={() => setIsdropdown(!dropdown)}   onMouseEnter={() => setIsdropdown(true)} className="relative z-10 bg-white">
                  <Link  className="flex items-center  text-small-medium   gap-3" href="/p-user">
                    حساب کاربری
                    <IoIosArrowDown className="text-black" />
                  </Link>
                  {dropdown&&
                  <div className="dropdown_menu">
                  <Link href="/p-user/orders">سفارشات</Link>
                  <Link href="/p-user/tickets">تیکت های پشتیبانی</Link>
                  <Link href="/p-user/comments">کامنت‌ها</Link>
                  <Link href="/p-user/wishlist">علاقه‌مندی‌ها</Link>
                  <Link href="/p-user/account-details">جزئیات اکانت</Link>
                </div>
                  }
                  
                </div>
              ) : (
                <li>
                  <Link href="/login-register">ورود / عضویت</Link>
                </li>
              )}
            </ul>
          </nav>

          {/* Basket */}
          <div className="flex gap-5 items-center space-x-4">
            <button className="relative flex gap-5">
              <div className="nav__icon">
              <Link className="order-last" href="/cart">
                <FiShoppingCart />
                <span>{card.length || 0}</span>
              </Link>
              <Link href="/wishlist">
                <SlShuffle />
                <span>{wish || 0}</span>
              </Link>
              <Link className="order-first" href="/wishlist">
                <FaRegHeart />
                <span>{wish || 0}</span>
              </Link>{" "}
              </div>
           
            </button>
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="text-gray-700 text-heading4-bold hover:text-gray-900"><FiAlignJustify /></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-5 border-t">
              <ul className=" [&_li]:text-small-medium [&_li]:p-2 gap-4">
              <li>
                <Link href="/">صفحه اصلی</Link>
              </li>
              <li>
                <Link href="/category">فروشگاه</Link>
              </li>
              <li>
                <Link href="/articles">مقالات</Link>
              </li>
              <li>
                <Link href="/contact-us">تماس با ما</Link>
              </li>
              <li>
                <Link href="/about-us">درباره ما</Link>
              </li>
              <li>
                <Link href="/rules">قوانین</Link>
              </li>
              {islogin ? (
                <div onMouseLeave={() => setIsdropdown(!dropdown)}   onMouseEnter={() => setIsdropdown(true)}  className="relative z-10 bg-white">
                  <Link className="flex items-center  text-small-medium  gap-3" href="/p-user">
                    حساب کاربر
                    <IoIosArrowDown className="text-black" />
                  </Link>
                  {dropdown&&
                  <div className="dropdown_menu">
                    <Link href="/p-user/orders">سفارشات</Link>
                    <Link href="/p-user/tickets">تیکت های پشتیبانی</Link>
                    <Link href="/p-user/comments">کامنت‌ها</Link>
                    <Link href="/p-user/wishlist">علاقه‌مندی‌ها</Link>
                    <Link href="/p-user/account-details">جزئیات اکانت</Link>
                  </div>
}
                </div>
                  
              ) : (
                <li>
                  <Link href="/login-register">ورود / عضویت</Link>
                </li>
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
