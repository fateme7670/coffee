"use client";
import { HeaderPanel } from "@/components/modules";
import Modal from "@/components/modules/modal/Modal";
import { showSwal } from "@/utils/helper";
import { ArticlesProps } from "@/utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
interface Props {
  article: ArticlesProps[];
}
interface InfoProps {
  title: string;
  shortdesc: string;
  authername: string;
  longdesc: string;
  img: string;
}
const TAbleArticle = ({ article }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [data, setdata] = useState<ArticlesProps | null>(null);

  const hideModal = () => setShowModal(false);

  const [title, setTitle] = useState<string>("");

  const [shortdesc, setShortdesc] = useState<string>("");
  const [authername, setAuthername] = useState<string>("");
  const [longdesc, setLongdesc] = useState<string>("");
  const [img, setImg] = useState<any>({});

  const updateartticle = async (id: string) => {
    // Validation (You) ✅👇
    const formData = new FormData();
    formData.append("title", title);
    formData.append("shortdesc", shortdesc);
    formData.append("authername", authername);
    formData.append("longdesc", longdesc);
    formData.append("img", img);
    const res = await fetch(`/api/article/${id}`, {
      method: "PUT",
      body: formData,
    });
    console.log("Res ->", res);
    if (res.status === 201) {
    
      swal({
        title: "مقاله مورد نظر با موفقیت اپدیت شد",
        icon: "success",
        buttons: "فهمیدم",
      }).then(() => {
        router.refresh();
      });
    }
  };
  const router = useRouter();
  const showdetails = (body: string) => {
    showSwal(body, "", "OK");
  };
  const deletearticles = async (proID: string) => {
    // console.log('hi');
    swal({
      title: "Are you sure to deleted item?",
      icon: "warning",
      buttons: ["no", "yes"],
    }).then(async (result) => {
      if (result) {
        const res = await fetch(`/api/article/${proID}`, {
          method: "DELETE",
        });
        // console.log(res);
        if (res.status === 200) {
          swal({
            title: "deleted successfully",
            icon: "success",
            buttons: "OK",
          }).then(() => {
            router.refresh();
          });
        }
      }
    });
  };
  return (
    <>
      <section className="container">
        <div className="relative">
          <HeaderPanel title="لیست مقالات" />
        </div>
      </section>
      <div className="overflow-x-auto px-5 my-5">
        <table className="table-auto text-small-semibold font-shabnam text-center [&_th]:bg-gray-6 [&_td]:border [&_td]:border-gray-6 [&_th]:border [&_th]:border-gray-6  [&_th]:p-3 [&_td]:p-3 border-collapse w-full  border border-gray-6">
          <thead>
            <tr>
              <th>شناسه</th>
              <th>عنوان</th>

              <th>نویسنده</th>
              <th>مشاهده جزئیات</th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {article.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.title}</td>

                <td>{item.authername}</td>

                <td>
                  <button
                    type="button"
                    className="bg-black py-2 px-5 text-white rounded-md"
                    onClick={() => showdetails(item?.shortdesc)}
                  >
                    مشاهده جزئیات
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="bg-black py-2 px-5 text-white rounded-md"
                    onClick={() => {
                      setdata(item);
                      setTitle(item.title);
                      setShortdesc(item.shortdesc);
                      setAuthername(item.authername);
                      setLongdesc(item.longdesc);
                      setImg(item.img);
                      setShowModal(true);
                    }}
                  >
                    ویرایش
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="bg-redprimary-500 py-2 px-5 text-white rounded-md"
                    onClick={() => deletearticles(item._id)}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showModal && (
          <Modal title="مشخصات مقاله" hideModal={hideModal}>
            <div>
              <div className="flex justify-start max-md:flex-col gap-5">
                <div className="md:basis-1/2 w-full">
                  <div className="flex flex-col mt-5">
                    <label className="font-shabnam mb-3 text-base1-medium">
                      عنوان مقاله
                    </label>
                    <input
                      value={title}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setTitle(event.target.value)
                      }
                      placeholder="لطفا عنوان مقاله را وارد کنید"
                      type="text"
                      className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
                    />
                  </div>
                  <div className="flex flex-col mt-5">
                    <label className="font-shabnam mb-3 text-base1-medium">
                      توضیحات کوتاه
                    </label>
                    <input
                      value={shortdesc}
                      onChange={(event) => setShortdesc(event.target.value)}
                      placeholder="توضیحات کوتاه"
                      type="text"
                      className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
                    />
                  </div>

                  <div className="flex flex-col mt-5">
                    <label className="font-shabnam mb-3 text-base1-medium">
                      تصویر مقاله
                    </label>
                    <input
                      onChange={(event: any) => setImg(event.target.files[0])}
                      type="file"
                      className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
                    />
                  </div>
                  <button
                    onClick={() => updateartticle(data?._id)}
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
                      placeholder={data?.authername}
                      value={authername}
                      onChange={(event) => setAuthername(event.target.value)}
                      type="text"
                      className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
                    />
                  </div>
                  <div className="flex flex-col mt-5">
                    <label className="font-shabnam mb-3 text-base1-medium">
                      توضیحات بلند
                    </label>
                    <input
                      placeholder="توضیحات بلند"
                      value={longdesc}
                      onChange={(event) => setLongdesc(event.target.value)}
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
      </div>
    </>
  );
};

export default TAbleArticle;
