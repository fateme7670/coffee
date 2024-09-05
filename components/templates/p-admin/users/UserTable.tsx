"use client";
import Modal from "@/components/modules/modal/Modal";
import { BanUserFromServer, EditRoleUserFromServer, EditUserFromServer, removeUserFromServer } from "@/Redux/features/users";
import { useAppDispatch } from "@/Redux/hooks";
import { UserProps } from "@/utils/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineStop } from "react-icons/ai";
import { TbArrowsExchange2 } from "react-icons/tb";
interface Props {
  users: UserProps[];
}
const UserTable = ({ users }: Props) => {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [data, setdata] = useState<string>("");
  const hideModal = () => setShowModal(false);
  const dispatch=useAppDispatch()
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [img, setImg] = useState<any>({});

  const changeRole = async (userID: string) => {
    dispatch(EditRoleUserFromServer({id:userID})).then(data=>{
      if (data?.payload?.message==='success'){  swal({
        title: "changed Role",
        icon: "success",
        buttons: "OK",
      }).then(() => {
        router.refresh();
      });
    }
    })
    // const res = await fetch("/api/user/role", {
    //   method: "PUT",
    //   headers: { "content-Type": "application/json" },
    //   body: JSON.stringify({ id: userID }),
    // });
    // if (res.status == 200) {
    //   swal({
    //     title: "changed Role",
    //     icon: "success",
    //     buttons: "OK",
    //   }).then(() => {
    //     router.refresh();
    //   });
    // }
  };
  const updateUser = async (userID: string) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("img", img);
    dispatch(EditUserFromServer({formData,id:userID})).then(data=>{
      if (data?.payload?.message==='success'){
        swal({
          title: "changed user",
          icon: "success",
          buttons: "OK",
        }).then(() => {
          router.refresh();
        });
      }
    })
    // const res = await fetch(`/api/user/${userID}`, {
    //   method: "POST",
    //   body: formData,
    // });
    // if (res.status == 200) {
    //   swal({
    //     title: "changed user",
    //     icon: "success",
    //     buttons: "OK",
    //   }).then(() => {
    //     router.refresh();
    //   });
    // }
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
        dispatch(BanUserFromServer({data})).then(data=>{
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
        // const res = await fetch("/api/user/ban", {
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
  const removeUser = async (userID: string) => {
    swal({
      title: "آیا از حذف کاربر اطمینان دارین؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (result) => {
      // console.log(result, userID);
      if (result) {
        dispatch(removeUserFromServer({id:userID})).then(data=>{
          if (data?.payload?.message==='success'){
            swal({
              title: "deleted successfully:))",
              icon: "success",
              buttons: "OK",
            }).then(() => {
              router.refresh();
            });
          }
        })
        // const res = await fetch(`/api/user/${userID}`, {
        //   method: "DELETE",
        // });
        // // console.log(res);
        // if (res.status == 200) {
        //   swal({
        //     title: "deleted successfully:))",
        //     icon: "success",
        //     buttons: "OK",
        //   }).then(() => {
        //     router.refresh();
        //   });
        // }
      }
    });
  };
  return (
    <section className="container mt-10 overflow-hidden">
      <div className="flex flex-col overflow-x-auto">
        <table className="table-auto text-small-semibold font-shabnam text-center [&_th]:bg-gray-6 [&_td]:border [&_td]:border-gray-6 [&_th]:border [&_th]:border-gray-6  [&_th]:p-3 [&_td]:p-3 border-collapse w-full  border border-gray-6">
          <thead>
            <tr>
              <th>شناسه</th>
              <th>نام و نام خانوادگی</th>
              <th>ایمیل</th>
              <th>نقش</th>
              <th>اقدامات</th>
              {/* <th>ویرایش</th>
              <th>تغییر سطح</th>
              <th>حذف</th>
              <th>بن</th> */}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td> {user.role == "User" ? "کاربر عادی" : "ادمین"} </td>
                <td className="flex items-center gap-2 justify-center">
                  <AiOutlineEdit
                    className="cursor-pointer text-orange text-heading4-medium"
                    onClick={
                      () => {
                        setEmail(user.email);
                        setPhone(user.phone);
                        setName(user.name);
                        setImg(user.img);
                        setdata(user._id);
                        setpassword(user.password);
                        setShowModal(true);
                      }

                      // updateUser(user._id, user.email, user.phone, user.name,user.img)
                    }
                  />
                  <TbArrowsExchange2
                    className="cursor-pointer  text-green-1 text-heading4-medium"
                    onClick={() => changeRole(user._id)}
                  />
                  <AiOutlineDelete
                    className="cursor-pointer  text-redprimary-500 text-heading4-medium"
                    onClick={() => removeUser(user._id)}
                  />

                  <AiOutlineStop
                    className="cursor-pointer text-red-500 text-heading4-medium"
                    onClick={() => banedUser(user.email, user.phone)}
                  />
                </td>
                {/* <td>
                  <button
                    type="button"
                    className="bg-black py-2 px-5 text-subtle-semibold text-white rounded-md"
              
                  >
                    ویرایش
                  </button>
                </td> */}
                {/* <td>
                  <button
                    type="button"
                    className="bg-black py-2 text-subtle-semibold px-5 text-white rounded-md"
                  >
                    تغییر نقش
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="bg-redprimary-500 py-2 text-subtle-semibold px-5 text-white rounded-md"
                  >
                    حذف
                  </button>
                </td> */}
                {/* <td>
                  <button
                    type="button"
                    className="bg-redprimary-500 py-2 text-subtle-semibold px-5 text-white rounded-md"
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
                    نام کاربری
                  </label>
                  <input
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setName(event.target.value)
                    }
                    type="text"
                    className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label className="font-shabnam mb-3 text-base1-medium">
                    :ایمیل
                  </label>
                  <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type="text"
                    className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
                  />
                </div>

                <div className="flex flex-col mt-5">
                  <label className="font-shabnam mb-3 text-base1-medium">
                    تصویر
                  </label>
                  <input
                    onChange={(event: any) => setImg(event.target.files[0])}
                    type="file"
                    className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
                  />
                </div>
                <button
                  onClick={() => updateUser(data)}
                  className="flex gap-2 mt-5 items-center text-white text-tiny-medium font-shabnam bg-redprimary-500 mr-2 px-4 py-2 rounded-md mb-10"
                >
                  ویرایش
                </button>
              </div>
              <div className="md:basis-1/2 w-full max-md:order-first">
                <div className="flex flex-col mt-5">
                  <label className="font-shabnam mb-3 text-base1-medium">
                    نام نویسنده
                  </label>
                  <input
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    type="text"
                    className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label className="font-shabnam mb-3 text-base1-medium">
                    رمز عبور:
                  </label>
                  <input
                    value={password}
                    onChange={(event) => setpassword(event.target.value)}
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

export default UserTable;
