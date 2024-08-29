"use client";
import { showSwal } from "@/utils/helper";
import { Object } from "@/utils/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
interface Props {
  id: string | undefined;
}
const AddToWishlist = ({ id }: Props) => {
  const [user, setUser] = useState<Object>();
  useEffect(() => {
    const authuser = async () => {
      const res = await fetch("/api/auth/me");
      if (res.status === 200) {
        const data = await res.json();
        setUser({ ...data });
      }
    };
    authuser();
  }, []);
  const addToFavariot = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    if (!user?._id) {
      showSwal("not user","error","ok")

    }
    const favorit={
      user:user?._id,
      product:id

    }
    const res=await fetch('/api/wishlist',{
      method:'POST',
      headers:{'cotent-Types':'application/json'},
      body:JSON.stringify(favorit)
    })
    if (res.status===201) {
      showSwal("added suuccessfuly ","success","ok")
    
    }
    else if (res.status===422) {
      showSwal("exist already ","error","ok")
    
    }
  };
  return (
    <div
      
      className="flex items-center gap-2 hover:opacity-50"
    >
      <CiHeart />
      <Link onClick={addToFavariot} href="/wishlist">افزودن به علاقه مندی ها</Link>
    </div>
  );
};

export default AddToWishlist;
