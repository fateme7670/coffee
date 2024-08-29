import { CommentProps } from "@/utils/types";
import Image from "next/image";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const Comment = ({ id,username, body, score, date }: CommentProps) => {
  return (
    <>
      <div className="flex w-full items-center gap-2 justify-between my-5">
        <div className="basis-1/2 flex gap-3 items-center">
          <div className="relative w-12 h-12 rounded-full">
            <Image
              src="/images/fateme.jpeg"
              alt="logo"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div>
            <p>{username}</p>
            <span>ادمین</span>
          </div>
        </div>
        <div className="basis-1/2">
          <p className="mb-2">{new Date(date).toLocaleDateString('fa-IR')}</p>
          <div className="star flex items-center   ">
          {new Array(score).fill(0).map((item,index)=> <FaStar key={index} />)}
            {new Array(5-score).fill(0).map((item,index)=> <FaRegStar key={index} />)}
         
          </div>
        </div>
      </div>
      <div className="mb-5">
        <p className="text-gray-1">{body}</p>
      </div>
      <hr />
    </>
  );
};

export default Comment;
