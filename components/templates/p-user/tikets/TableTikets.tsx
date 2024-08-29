'use client'
import { showSwal } from "@/utils/helper";
import { TiketProps } from "@/utils/types";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineEye, AiOutlineStop } from "react-icons/ai";
import { RiQuestionAnswerLine } from "react-icons/ri";
interface Props{
  tickets:TiketProps[]
}
const TableTikets = ({tickets}:Props) => {
  const router = useRouter()

  const banedUser = async (email:string, phone:string) => {
    swal({
      title: 'ایا از بن کاربر مطمینید؟',
      icon: 'warning',
      buttons: ['نه', 'اره']
    }).then(async (result) => {
      if (result) {
        const res = await fetch('/api/user/ban', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, phone })
        })
        if (res.status === 200) {
          swal({
            title: 'کاربر با موفقیت بن شد:))',
            icon: 'success',
            buttons: 'OK'
          }).then(() => {
            router.refresh()
          }
          )
        }
      }
    })
  }


  const sendanswer = async (ticket:TiketProps) => {

    swal({
      title: 'answer to question',
      content: 'input',
      buttons: 'OK'
    }).then(async (answertiket) => {
      const awnser = {
        ...ticket,
        body: answertiket,
        tiketId: ticket._id
      }
      const res = await fetch('/api/tiket/answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(awnser)
      })
      if (res.status === 201) {
        showSwal('tiket answerd sucessfully', 'success', 'Ok')
      }
    })
  }
  const showtext = (body:string) => {
    showSwal(body, '', 'Ok')
  }
  return (
    <section className="container mt-10 overflow-hidden">
    <div className="flex flex-col overflow-x-auto">
      <table className="table-auto text-small-semibold font-shabnam text-center [&_th]:bg-gray-6 [&_td]:border [&_td]:border-gray-6 [&_th]:border [&_th]:border-gray-6  [&_th]:p-3 [&_td]:p-3 border-collapse w-full  border border-gray-6">
        <thead>
          <tr>
            <th>شناسه</th>
            <th>کاربر</th>
            <th>عنوان</th>
            <th>دپارتمان</th>
            <th>اقدامات</th>
            {/* <th>مشاهده</th>
            <th>پاسخ</th>
            <th>بن</th> */}
          </tr>
        </thead>
        <tbody>
          {tickets.map((tiket:TiketProps, index) => (
          <tr key={tiket._id}>
            <td>{index+1}</td>
            <td>{tiket.user?.name}</td>
            <td>{tiket.title}</td>
            <td>{tiket.department?.title}</td>

            <td className="flex items-center gap-2 justify-center">
              <AiOutlineEye
               className="cursor-pointer  text-sky-600   text-heading4-medium" 
               onClick={() => showtext(tiket.body)}
               />
              
                <RiQuestionAnswerLine
                                  className="cursor-pointer  text-green-1 text-heading4-medium"

                                  onClick={() => sendanswer(tiket)}


                />
                <AiOutlineStop
                                   className="cursor-pointer text-red-500 text-heading4-medium"

                                   onClick={() => banedUser(tiket.user?.email, tiket.user?.phone)}

                />
              </td>

            {/* <td>
              <button
                type="button"
                className="bg-black py-2 px-5 text-white rounded-md"

              >
                مشاهده متن
              </button>
            </td>
            <td>
              <button
                type="button"
                className="bg-black py-2 px-5 text-white rounded-md"

              >
                پاسخ
              </button>
            </td> */}

            {/* <td>
              <button
                type="button"
                className="bg-redprimary-500 py-2 px-5 text-white rounded-md"

              >
                بن
              </button>
            </td> */}
          </tr>
       ))}
        </tbody>
      </table>
      </div>
    </section>
  );
};

export default TableTikets;
