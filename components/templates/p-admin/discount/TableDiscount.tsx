'use client'
import { HeaderPanel } from '@/components/modules';
import { DeleteDiscountFromServer } from '@/Redux/features/discount';
import { useAppDispatch } from '@/Redux/hooks';
import { DiscountProps } from '@/utils/types';
import { useRouter } from 'next/navigation';
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
interface Props{
  discounts:DiscountProps[]
}
const TableDiscount = ({discounts}:Props) => {
  const router = useRouter()
  const dispatch=useAppDispatch()
  const removeDiscount = async (userID:string) => {


    swal({
      title: "آیا از حذف تخفیف اطمینان دارین؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (result) => {
      // console.log(result, userID);
      if (result) {
        dispatch(DeleteDiscountFromServer({id:userID})).then(data=>{
          if (data?.payload?.message==='success'){
            swal({
              title: 'deleted successfully:))',
              icon: 'success',
              buttons: 'OK'
            }).then(() => {
              router.refresh()
            }
            )
          }
        })
        // const res = await fetch(`/api/discount/${userID}`, {
        //   method: 'DELETE',

        // })
        // // console.log(res);
        // if (res.status == 200) {
        //   swal({
        //     title: 'deleted successfully:))',
        //     icon: 'success',
        //     buttons: 'OK'
        //   }).then(() => {
        //     router.refresh()
        //   }
        //   )
        // }
      }
    });
  };
  return (
<>

<section className="container mt-10 overflow-hidden">
    <div className="flex flex-col overflow-x-auto">
    <table className="table-auto text-small-semibold font-shabnam text-center [&_th]:bg-gray-6 [&_td]:border [&_td]:border-gray-6 [&_th]:border [&_th]:border-gray-6  [&_th]:p-3 [&_td]:p-3 border-collapse w-full  border border-gray-6">

      <thead>
        <tr>
          <th>شناسه</th>
          <th>کد</th>
          <th>درصد</th>
          <th>حداکثر استفاده</th>
          <th>دفعات استفاده شده</th>
          <th>حذف</th>
        </tr>
      </thead>
      <tbody>
        {discounts.map((discount, index) => (
          <tr key={index+1}>
            <td
             className={
              discount.uses === discount.maxUse ? 'bg-redprimary-500 text-white' : 'bg-green-3 text-white'
            }
            >
              {index+1}</td>
            <td>{discount.code}</td>
            <td>{discount.percent}</td>
            <td>{discount.maxUse}</td>
            <td>{discount.uses}</td>
            <td className="flex items-center gap-2 justify-center">
      
                  <AiOutlineDelete
                   className="cursor-pointer  text-redprimary-500 text-heading4-medium"
                   onClick={() => removeDiscount(discount._id)}
                   />
           
       
              </td>
            {/* <td>
              <button type="button" 
                className="bg-redprimary-500 py-2 px-5 text-white rounded-md"
              >
                حذف
              </button>
            </td> */}
          </tr>
       ))} 
      </tbody>
    </table>
      </div>
    </section>
</>
  );
}

export default TableDiscount;
