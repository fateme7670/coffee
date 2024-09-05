"use client";
import { UserFromServer } from "@/Redux/features/auth";
import { AddwishlisttFromServer } from "@/Redux/features/wishlist";
import { useAppDispatch } from "@/Redux/hooks";
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
  const dispatch = useAppDispatch();
  useEffect(() => {
    const authuser = async () => {
      dispatch(UserFromServer()).then((data) => {
        if (data?.payload?.message === "success") {
          setUser({ ...data.payload.data });
        } else {
          return showSwal("you should login ", "error", "ok");
        }
      });

      // const res = await fetch("/api/auth/me");
      // if (res.status === 200) {
      //   const data = await res.json();
      //   setUser({ ...data });
      // }
    };
    authuser();
  }, []);
  const addToFavariot = async (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (!user?._id) {
      showSwal("not user", "error", "ok");
    }
    const favorit = {
      user: user?._id,
      product: id,
    };
    dispatch(AddwishlisttFromServer(favorit)).then((data) => {
      if (data?.payload?.message === "success") {
        return showSwal("added suuccessfuly ", "success", "ok");
      } else {
        return showSwal("exist already ", "error", "ok");
      }
    });
    // const res=await fetch('/api/wishlist',{
    //   method:'POST',
    //   headers:{'cotent-Types':'application/json'},
    //   body:JSON.stringify(favorit)
    // })
    // if (res.status===201) {
    //   showSwal("added suuccessfuly ","success","ok")

    // }
    // else if (res.status===422) {
    //   showSwal("exist already ","error","ok")

    // }
  };
  return (
    <div className="flex items-center gap-2 hover:opacity-50">
      <CiHeart />
      <Link onClick={addToFavariot} href="/wishlist">
        افزودن به علاقه مندی ها
      </Link>
    </div>
  );
};

export default AddToWishlist;
