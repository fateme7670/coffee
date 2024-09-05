"use client";
import Modal from "@/components/modules/modal/Modal";
import { AcceptcommentFromServer, AnswercommentFromServer, BancommentFromServer, DeleteCommentFromServer, EditCommentFromServer, RejectcommentFromServer } from "@/Redux/features/comment";
import { useAppDispatch } from "@/Redux/hooks";
import { showSwal } from "@/utils/helper";
import { CommentProps } from "@/utils/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineCheck, AiOutlineClose, AiOutlineDelete, AiOutlineEdit, AiOutlineEye, AiOutlineFileDone, AiOutlineStop } from "react-icons/ai";
import { RiQuestionAnswerLine } from "react-icons/ri";
interface Props {
  comments: CommentProps[];
}
const TableComment = ({ comments }: Props) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [data, setdata] = useState<CommentProps | null>(null);
  const dispatch=useAppDispatch()

  const hideModal = () => setShowModal(false);

  const [username, setUsername] = useState<string>("");

  const [body, setBody] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const showCommentBody = (body: string) => {
    showSwal(body, "", "خوندم");
  };
  const acceptcomment = async (commentid: string) => {
    dispatch(AcceptcommentFromServer({id:commentid})).then(data=>{
      if (data?.payload?.message==='success'){
        swal({
          title: "accpeted comment",
          icon: "success",
          buttons: "OK",
        }).then(() => {
          router.refresh();
        });
      }
    })
    // const res = await fetch("/api/comment/accept", {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ id: commentid }),
    // });
    // if (res.status === 200) {
    //   swal({
    //     title: "accpeted comment",
    //     icon: "success",
    //     buttons: "OK",
    //   }).then(() => {
    //     router.refresh();
    //   });
    // }
  };
  const rejectcomment = async (commentid: string) => {
    dispatch(RejectcommentFromServer({id:commentid})).then(data=>{
      if (data?.payload?.message==='success'){
        swal({
          title: "reject comment",
          icon: "success",
          buttons: "OK",
        }).then(() => {
          router.refresh();
        });
      }
    })
    // const res = await fetch("/api/comment/reject", {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ id: commentid }),
    // });
    // if (res.status === 200) {
    //   swal({
    //     title: "accpeted comment",
    //     icon: "success",
    //     buttons: "OK",
    //   }).then(() => {
    //     router.refresh();
    //   });
    // }
  };
  const updateComment = async (id: string) => {
    // Validation (You) ✅👇
    const comment = {
      username,
      body,
      email,
    };
    dispatch(EditCommentFromServer({data:comment,id})).then(data=>{
      if (data?.payload?.message==='success'){
        swal({
          title: "کامنت مورد نظر با موفقیت اپدیت شد",
          icon: "success",
          buttons: "فهمیدم",
        }).then(() => {
          router.refresh();
        });
      }
    })
    // const res = await fetch(`/api/comment/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(comment),
    // });
    // console.log("Res ->", res);
    // if (res.status === 200) {
  

    //   swal({
    //     title: "کامنت مورد نظر با موفقیت اپدیت شد",
    //     icon: "success",
    //     buttons: "فهمیدم",
    //   }).then(() => {
    //     router.refresh();
    //   });
    // }
  };
  const deleteComments = async (id: string) => {
    // console.log('hi');
    swal({
      title: "Are you sure to deleted item?",
      icon: "warning",
      buttons: ["no", "yes"],
    }).then(async (result) => {
      if (result) {
dispatch(DeleteCommentFromServer({id})).then(data=>{
  if (data?.payload?.message==='success'){
    swal({
      title: "deleted successfully",
      icon: "success",
      buttons: "OK",
    }).then(() => {
      router.refresh();
    });
  }
})

        // const res = await fetch(`/api/comment/${id}`, {
        //   method: "DELETE",
        // });
        // // console.log(res);
        // if (res.status === 200) {
        //   swal({
        //     title: "deleted successfully",
        //     icon: "success",
        //     buttons: "OK",
        //   }).then(() => {
        //     router.refresh();
        //   });
        // }
      }
    });
  };
  const banedUser = async (email: string, phone: string) => {
    swal({
      title: "ایا از بن کاربر مطمینید؟",
      icon: "warning",
      buttons: ["نه", "اره"],
    }).then(async (result) => {
      if (result) {
        const data={
          email, phone
        }
        dispatch(BancommentFromServer({data })).then(data=>{
          if (data?.payload?.message==='success'){
            swal({
              title: "کاربر با موفقیت بن شد:))",
              icon: "success",
              buttons: "OK",
            }).then(() => {
              router.refresh();
            });
          }
        })
        // const res = await fetch("/api/comment/ban", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ email, phone }),
        // });
        // if (res.status === 200) {
        //   swal({
        //     title: "کاربر با موفقیت بن شد:))",
        //     icon: "success",
        //     buttons: "OK",
        //   }).then(() => {
        //     router.refresh();
        //   });
        // }
      }
    });
  };

  const sendanswer = async (comment: CommentProps) => {
    swal({
      title: "answer to question",
      content: "input",
      buttons: "OK",
    }).then(async (answercomment) => {
      const awnser = {
        ...comment,
        body: answercomment,
        commentId: comment._id,
      };
      dispatch(AnswercommentFromServer({data:awnser})).then(data=>{
        if (data?.payload?.message==='success'){
          showSwal("tiket answerd sucessfully", "success", "Ok");

        }
      })
      // const res = await fetch("/api/comment/awnser", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(awnser),
      // });
      // if (res.status === 201) {
      //   showSwal("tiket answerd sucessfully", "success", "Ok");
      // }
    });
  };
  return (
    <section className="container mt-10 overflow-hidden">
    <div className="flex flex-col overflow-x-auto">
      <table className="table-auto text-small-semibold font-shabnam text-center [&_th]:bg-gray-6 [&_td]:border [&_td]:border-gray-6 [&_th]:border [&_th]:border-gray-6  [&_th]:p-3 [&_td]:p-3 border-collapse w-full  border border-gray-6">
        <thead>
          <tr>
            <th>شناسه</th>
            <th>کاربر</th>
            <th>ایمیل</th>
            <th>امتیاز</th>
            <th>محصول</th>
            <th>تاریخ ثبت</th>
            <th>اقدامات</th>
            {/* <th>ویرایش</th>
            <th>حذف</th> */}
            {/* <th>تایید</th> */}
            {/* <th>پاسخ</th> */}
            {/* <th>بن</th> */}
          </tr>
        </thead>
        <tbody>
          {comments.map((comment: CommentProps, index: number) => (
            <tr key={index + 1}>
              <td
                className={`${
                  comment.isAcsept ? "bg-green-3" : "bg-redprimary-500"
                } text-white `}
              >
                {index + 1}
              </td>
              <td>{comment.username}</td>
              <td>{comment.email}</td>
              <td>{comment.score}</td>
              <td> {comment.product?.name.slice(0, 10)}...</td>
              <td>{comment.body}</td>
              <td className="flex items-center gap-2 justify-center">
              <AiOutlineEye
               className="cursor-pointer  text-sky-600   text-heading4-medium" 
              onClick={() => showCommentBody(comment?.body)} />
              <AiOutlineEdit 
              className="cursor-pointer text-orange text-heading4-medium" 
               onClick={() => {
                    setdata({ ...comment });
                    setUsername(comment?.username);
                    setBody(comment.body);
                    setEmail(comment.email);
                    setShowModal(true);
                  }} />
                  <AiOutlineDelete
                   className="cursor-pointer  text-redprimary-500 text-heading4-medium"
                   onClick={() => deleteComments(comment._id)} />
           
              {comment.isAcsept ? (
               
                   <AiOutlineClose 
                   className="cursor-pointer text-red-500 text-heading4-medium"
                   onClick={() => rejectcomment(comment._id)}

/>
                ) : (
                  
                  <AiOutlineCheck
                  className="cursor-pointer  text-green-1 text-heading4-medium"
                  onClick={() => acceptcomment(comment._id)}

                  />
                )}
                <RiQuestionAnswerLine
                                  className="cursor-pointer  text-green-1 text-heading4-medium"

                                  onClick={() => sendanswer(comment)}

                />
                <AiOutlineStop
                                   className="cursor-pointer text-red-500 text-heading4-medium"

                                   onClick={() =>
                                    banedUser(comment.user?.email, comment.user?.phone)
                                  }
                />
              </td>
              {/* <td>
            
              </td>
              <td>
                <button
                  type="button"
                  className="bg-redprimary-500 text-tiny-medium py-2 px-5 text-white rounded-md"
                 
                >
                  حذف
                </button>
              </td> */}
              {/* <td>
                {comment.isAcsept ? (
                  <button
                    className="bg-redprimary-500 text-tiny-medium py-2 px-5 text-white rounded-md"
                    onClick={() => rejectcomment(comment._id)}
                    type="button"
                  >
                    رد
                  </button>
                ) : (
                  <button
                    onClick={() => acceptcomment(comment._id)}
                    className="bg-redprimary-500 text-tiny-medium py-2 px-5 text-white rounded-md"
                    type="button"
                  >
                    تایید
                  </button>
                )}
              </td> */}
              {/* <td>
                <button
                  type="button"
                  className="bg-redprimary-500 text-tiny-medium py-2 px-5 text-white rounded-md"
                  onClick={() => sendanswer(comment)}
                >
                  پاسخ
                </button>
              </td> */}
              {/* <td>
                <button
                  type="button"
                  // onClick={() => banedUser(comment.user.email, comment.user.phone)}
                  className="bg-redprimary-500 text-tiny-medium py-2 px-5 text-white rounded-md"
                  onClick={() =>
                    banedUser(comment.user?.email, comment.user?.phone)
                  }
                >
                  بن
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      {showModal && (
        <Modal title="مشخصات " hideModal={hideModal}>
          <div>
            <div className="flex justify-start max-md:flex-col gap-5">
              <div className="md:basis-1/2 w-full">
                <div className="flex flex-col mt-5">
                  <label className="font-shabnam mb-3 text-base1-medium">
                  نام کاربری:
                  </label>
                  <input
                    value={username}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setUsername(event.target.value)
                    }
                    type="text"
                    className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label className="font-shabnam mb-3 text-base1-medium">
                 ایمیل:
                  </label>
                  <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
            
                    type="text"
                    className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
                  />
                </div>

                <button
                  onClick={() => updateComment(data?._id)}
                  className="flex gap-2 mt-5 items-center text-white text-tiny-medium font-shabnam bg-redprimary-500 mr-2 px-4 py-2 rounded-md mb-10"
                >
                  ویرایش
                </button>
              </div>
              <div className="md:basis-1/2 w-full max-md:order-first">
                <div className="flex flex-col mt-5">
                  <label className="font-shabnam mb-3 text-base1-medium">
                 متن کامنت:
                  </label>
                  <input
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                    type="text"
                    className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
                  />
                </div>
              </div>
            </div>
          </div>
          <div></div>

        </Modal>
      )}
   
    </section>
  );
};

export default TableComment;
