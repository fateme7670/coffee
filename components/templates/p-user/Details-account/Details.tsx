"use client";
import { EditPassUserFromServer, EditUserFromServer } from "@/Redux/features/users";
import { useAppDispatch } from "@/Redux/hooks";
import { verifypasshash } from "@/utils/auth";
import { showSwal } from "@/utils/helper";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
interface Props {
  id: string;
  name: string;
  email: string;
  phone: string;
  img: string;
  password: string;
}
const Details = ({ id, name, email, phone, img, password }: Props) => {
  const router = useRouter();
  const [userName, setUserName] = useState(name);
  const [emails, setEmail] = useState(email);
  const [phoneNumber, setPhoneNumber] = useState(phone);
  const [pasword, setPassword] = useState<string>("");
  const [image, setImg] = useState<string>("");
  const dispatch=useAppDispatch()
  const deleteProfile = async () => {
    swal({
      title: "آیا از حذف پروفایل اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (result) => {
      const formData = new FormData();
      formData.append("img", "");

      const res = await fetch(`/api/user/img`, {
        method: "PUT",
        body: formData,
      });
      if (res.status === 200) {
        swal({
          title: "عکس حذف شذ",
          icon: "success",
          buttons: "فهمیدم",
        }).then(() => {
          router.refresh();
        });
      }
    });
  };

  const changePasword = async () => {
    swal({
      title: "رمز قبلی خود را وارد کنید",
      content: "input",
      buttons: "ثبت",
    }).then(async (pass) => {
      const verifypas = await verifypasshash(pass, password);
      if (!verifypas) {
        showSwal("enter correct pass", "error", "try");
      } else {
        const pas = {
          password: pasword,
        };
        dispatch(EditPassUserFromServer({data:pas,id})).then(data=>{
          if (data?.payload?.message==='success'){
            swal({
              title: "رمز با موفقیت عوض شد",
              icon: "success",
              buttons: "فهمیدم",
            }).then(() => {
              router.refresh();
            });
          }
        })

        // const res = await fetch(`/api/user/password/${id}`, {
        //   method: "POST",
        //   body: JSON.stringify(pas),
        // });

        // if (res.status === 200) {
          // swal({
          //   title: "رمز با موفقیت عوض شد",
          //   icon: "success",
          //   buttons: "فهمیدم",
          // }).then(() => {
          //   router.refresh();
          // });
        // }
      }
    });
  };

  const addchange = async () => {
    const formData = new FormData();
    formData.append("name", userName);
    formData.append("email", emails);
    formData.append("phone", phoneNumber);
    formData.append("password", password);
    formData.append("img", image);
    dispatch(EditUserFromServer({formData,id})).then((data)=>{
      console.log(data);
      
      if (data?.payload?.message==='success'){ 
         swal({
        title: "کاربر با موقفیت اپدیت شد",
        icon: "success",
        buttons: "فهمیدم",
      }).then(() => {
        router.refresh();
      });
    }
    })


    // const res = await fetch(`/api/user/${id}`, {
    //   method: "POST",
    //   body: formData,
    // });

    // if (res.status === 200) {
    //   swal({
    //     title: "محصول مورد نظر با موفقیت ایجاد شد",
    //     icon: "success",
    //     buttons: "فهمیدم",
    //   }).then(() => {
    //     router.refresh();
    //   });
    // }
  };

  return (
    <section className="container mt-10">
      <div className="flex max-lg:flex-col justify-between items-center gap-5">
        <div className="md:basis-1/2 w-full ">
          <div className="flex flex-col">
            <label className="font-shabnam text-base1-medium">نام کاربری</label>
            <input
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
              className="outline-0 border mt-3 px-2 py-1  border-2 rounded-md border-redprimary-500"
            />
          </div>
          <div className="flex flex-col mt-8">
            <label className="font-shabnam text-base1-medium">ایمیل</label>
            <input
              value={emails}
              onChange={(event) => setEmail(event.target.value)}
              className="outline-0 border mt-3 px-2 py-1  border-2 rounded-md border-redprimary-500"
            />
          </div>
          <div className="flex flex-col mt-9">
            <label className=" font-shabnam text-base1-medium">
              شماره تماس
            </label>
            <input
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              className="outline-0 border mt-3 px-2 py-1  border-2 rounded-md border-redprimary-500"
            />
          </div>
        </div>
        <div className="md:basis-1/2 max-md:order-first w-full">
          <div className="flex gap-5 max-lg:flex-col justify-center items-center">
            <div className="md:basis-1/2 max-md:text-center">
              <div className="relative w-56 h-56 border border-redprimary-500 rounded-full">
                <img
                  src={img || "/images/fateme.jpeg"}
                  alt="logo"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </div>
            <div className="md:basis-1/2 w-full ">
              <div className="relative w-full">
                <button className="bg-redprimary-500 text-white flex w-full rounded-md p-2 gap-2 items-center justify-center">
                  تغییر
                  <IoCloudUploadOutline />
                </button>
                <input
                  onChange={(event: any) => setImg(event.target.files[0])}
                  className="absolute top-0 right-0 opacity-0"
                  type="file"
                  name=""
                  id=""
                />
              </div>
              <div className="mt-5">
                <button
                  onClick={deleteProfile}
                  className="bg-redprimary-500 text-white flex w-full rounded-md p-2 gap-2 items-center justify-center"
                >
                  حذف
                  <MdOutlineDelete />
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="flex flex-col basis-4/5">
              <label className="max-lg:mt-5 font-shabnam pr-3 text-base1-medium mb-3">
                رمز عبور
              </label>
              <div className="flex items-center justify-center">
                <input
                  value={pasword}
                  onChange={(event) => setPassword(event.target.value)}
                  className="outline-0 border  px-2 py-1 w-[75%] border-2 rounded-md border-redprimary-500/50"
                />
                <button
                  onClick={changePasword}
                  className="text-white text-tiny-medium font-shabnam bg-redprimary-500 mr-2 px-4 py-2 rounded-md"
                >
                  تغییر رمز عبور
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-14">
        <button
          onClick={addchange}
          className="text-white text-heading3-bold font-shabnam bg-redprimary-500 mr-2 px-8 py-2 rounded-md"
        >
          ثبت تغییرات
        </button>
      </div>
    </section>
  );
};

export default Details;
