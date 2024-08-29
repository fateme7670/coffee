"use client"

import Modal from "@/components/modules/modal/Modal";
import { CommentProps } from "@/utils/types"
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FaRegStar, FaStar } from "react-icons/fa";

interface DataTableProps {

  comments: CommentProps[]
}

export function DataTable({
  comments,
}: DataTableProps) {

  const [showModal, setShowModal] = useState(false);
  const [data, setdata] = useState<CommentProps>({});
  console.log('datas',data);
  
  const hideModal = () => setShowModal(false);
  return (
    <section className="container mt-10 overflow-hidden">

    <div className="flex flex-col overflow-x-auto">
       <table className="will-change-scroll text-small-semibold overflow-x-auto font-shabnam text-center [&_th]:bg-gray-6 [&_td]:border [&_td]:border-gray-6 [&_th]:border [&_th]:border-gray-6  [&_th]:p-3 [&_td]:p-3 border-collapse w-full  border border-gray-6">
      <thead>
        <tr>
          <th>شناسه</th>
          <th>تاریخ</th>
          <th>محصول</th>
          <th>امتیاز </th>
          <th>وضعیت</th>
          <th>مشاهده</th>
        </tr>
      </thead>
      <tbody>
        {comments.map((item:CommentProps,index:number)=>
             <tr key={item._id}>
             <td>{index+1}</td>
             <td>{new Date(item?.date).toLocaleDateString('fa-IR')}</td>
             <td>
                
            
                   <p> {item.product?.name}</p>
          
         
             </td>
             <td>
               {" "}
               <div className="star flex items-center  my-4  justify-center">
               {new Array(item.score).fill(0).map((item,index)=> <FaStar key={index} />)}
            {new Array(5-item.score).fill(0).map((item,index)=> <FaRegStar key={index} />)}
         
               </div>
             </td>
             <td>{item.isAcsept ? "تایید شده" : "در انتظار تایید"}</td>
               <td className="flex justify-center">
              <AiOutlineEye
               className="cursor-pointer  text-sky-600   text-heading4-medium" 
               onClick={() =>
                {
                  setdata({...item})
                  setShowModal(true)}
                }
              />
            
       
              </td>
             {/* <td>
               <button
                 type="button"
                 className="bg-black py-2 px-5 text-white rounded-md"
                 onClick={() =>
                  {
                    setdata({...item})
                    setShowModal(true)}
                  }
               >
                 نمایش
               </button>
             </td> */}
           </tr>
        )}
   
      </tbody>
    </table>

    {showModal && (
        <Modal  title="مشخصات کامنت" hideModal={hideModal}>
         
      
            <div className="flex gap-4 justify-between border-b my-3 pb-3">
              <p>کامنت</p>
              <p>{data.body}</p>
            </div>
        
     
         
        </Modal>
      )}
  </div>
  </section>
  )
}