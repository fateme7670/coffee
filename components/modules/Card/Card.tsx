import Link from 'next/link';
import React from 'react';
interface Props{
  title:string
  createdAt:string,
  hasAnswer:boolean,
  id:string,
  department:string
}
const Card = ({title,createdAt,hasAnswer,id,department}:Props) => {
  return (
    <div className="flex bg-redprimary-500 p-4  rounded-md my-5 items-center text-white justify-between">
    <div>
      <Link href={`/p-user/tickets/answer/${id}`} className="font-shabnam pb-5"><p className=' mb-5'>{title}</p></Link>
      <span className="font-shabnam bg-white  p-2 text-redprimary-500 rounded-md my-10">
        {department}
      </span>
    </div>
    <div className="text-center">
      <p className="font-shabnam mb-5">{new Date(createdAt).toLocaleDateString('fa-IR')}</p>
      <p className="font-shabnam">{hasAnswer? 'پاسخ داده شده':"پاسخ داده نشده"}</p>
    </div>
  </div>
  );
}

export default Card;
