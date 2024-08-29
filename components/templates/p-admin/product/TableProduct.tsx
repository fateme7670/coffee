"use client";
import { HeaderPanel } from "@/components/modules";
import Modal from "@/components/modules/modal/Modal";
import { showSwal } from "@/utils/helper";
import { ProductProps } from "@/utils/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai";

const TableProduct = ({ products }: ProductProps[] | any) => {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [data, setdata] = useState<string>("");
  const hideModal = () => setShowModal(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [weight, setWeight] = useState("");
  const [suitableFor, setSuitableFor] = useState("");
  const [smell, setSmell] = useState("");
  const [tags, setTags] = useState<any>("");
  const [category, setCategory] = useState<any>("");
  const [Asyab, setAsyab] = useState<any>("");
  const [img, setImg] = useState<any>({});
  const showProductBody = (shortDescription: string) => {
    showSwal(shortDescription, "", "خوندم");
  };
  const updateProduct = async (ID: string) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("shortDescription", shortDescription);
    formData.append("longDescription", longDescription);
    formData.append("weight", weight);
    formData.append("suitableFor", suitableFor);
    formData.append("smell", smell);
    formData.append("tags", tags);
    formData.append("category", category);
    formData.append("Asyab", Asyab);
    formData.append("img", img);
    const res = await fetch(`/api/product/${ID}`, {
      method: "PUT",
      body: formData,
    });
    if (res.status == 200) {
      swal({
        title: "changed product",
        icon: "success",
        buttons: "OK",
      }).then(() => {
        router.refresh();
      });
    }
  };
  const removeProduct = async (ID: string) => {
    swal({
      title: "آیا از حذف کاربر اطمینان دارین؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (result) => {
      // console.log(result, userID);
      if (result) {
        const res = await fetch(`/api/product/${ID}`, {
          method: "DELETE",
        });
        // console.log(res);
        if (res.status == 200) {
          swal({
            title: "deleted successfully:))",
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
    <div className="">
      <section className="">
        <div className="px-10">
          <HeaderPanel title="لیست محصولات" />
        </div>
      </section>
      <section className="container mt-10 overflow-hidden">
    <div className="flex flex-col overflow-x-auto">
          <table className="table-auto text-small-semibold font-shabnam text-center [&_th]:bg-gray-6 [&_td]:border [&_td]:border-gray-6 [&_th]:border [&_th]:border-gray-6  [&_th]:p-3 [&_td]:p-3 border-collapse w-full  border border-gray-6">
            <thead>
              <tr>
                <th>شناسه</th>
                <th>نام</th>
                <th>قیمت</th>
                <th>امتیاز</th>
                <th>اقدامات</th>
                {/* <th>مشاهده جزئیات</th> */}
                {/* <th>ویرایش</th>
                <th>حذف</th> */}
              </tr>
            </thead>
            <tbody>
              {products.map((item: ProductProps, index: number) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item?.price.toLocaleString()}</td>
                  <td>{item.score}</td>
                  <td className="flex items-center gap-2 justify-center">
              <AiOutlineEye
               className="cursor-pointer  text-sky-600   text-heading4-medium" 
               onClick={() => showProductBody(item.shortDescription)}
 
              />
              <AiOutlineEdit 
              className="cursor-pointer text-orange text-heading4-medium" 
              onClick={() => {
                setdata(item._id);
                setName(item.name);
                setPrice(item.price);
                setShortDescription(item.shortDescription)
                setLongDescription(item.longDescription);
                setWeight(item.weight);
                setSuitableFor(item.suitableFor);
                setSmell(item.smell);
                setTags(item.tags);
                setCategory(item.category);
                setAsyab(item.Asyab);
                setImg(item.img);
                setShowModal(true);
              }} />
                  <AiOutlineDelete
                   className="cursor-pointer  text-redprimary-500 text-heading4-medium"
                   onClick={() => removeProduct(item._id)}
                   />
           
       
              </td>
                  {/* <td>
                    <button
                      type="button"
                      className="bg-black py-2 text-tiny-medium px-5 text-white rounded-md"
                    >
                      مشاهده جزئیات
                    </button>
                  </td> */}
                  {/* <td>
                    <button
                      type="button"
                      className="bg-black py-2 px-5 text-tiny-medium text-white rounded-md"
                      onClick={() => {
                        setdata(item._id);
                        setName(item.name);
                        setPrice(item.price);
                        setShortDescription(item.shortDescription)
                        setLongDescription(item.longDescription);
                        setWeight(item.weight);
                        setSuitableFor(item.suitableFor);
                        setSmell(item.smell);
                        setTags(item.tags);
                        setCategory(item.category);
                        setAsyab(item.Asyab);
                        setImg(item.img);
                        setShowModal(true);
                      }}
                    >
                      ویرایش
                    </button>
                  </td> */}
                  {/* <td>
                    <button
                      type="button"
                      className="bg-redprimary-500 py-2 px-5 text-tiny-medium text-white rounded-md"
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
      {showModal && (
        <Modal title="مشخصات " hideModal={hideModal}>
          <div>
            <div className="flex justify-start max-md:flex-col gap-5">
              <div className="md:basis-1/2 w-full">
                <div className="flex flex-col mt-5">
                  <label className="font-shabnam mb-3 text-base1-medium">
                    نام محصول
                  </label>
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="لطفا نام محصول را وارد کنید"
                    type="text"
                    className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label className="font-shabnam mb-3 text-base1-medium">
                    توضیحات کوتاه
                  </label>
                  <input
                    value={shortDescription}
                    onChange={(event) =>
                      setShortDescription(event.target.value)
                    }
                    placeholder="توضیحات کوتاه"
                    type="text"
                    className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label className="font-shabnam mb-3 text-base1-medium">
                    وزن
                  </label>
                  <input
                    value={weight}
                    onChange={(event) => setWeight(event.target.value)}
                    placeholder="وزن"
                    type="text"
                    className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label className="font-shabnam mb-3 text-base1-medium">
                    میزان بو
                  </label>
                  <input
                    value={smell}
                    onChange={(event) => setSmell(event.target.value)}
                    placeholder="میزان بو"
                    type="text"
                    className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label className="font-shabnam mb-3 text-base1-medium">
                    انتخاب اسیاب
                  </label>
                  <input
                    placeholder="مثال:ائروپرس/ وی شصت (ریز تا متوسط) , اسپرسو ساز خانگی (ریز) , جذوه (بسیار ریز) , قهوه ساز خانگی (متوسط) , کلد برو (خیلی درشت)            "
                    value={Asyab}
                    onChange={(event) => setAsyab(event.target.value)}
                    type="text"
                    className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label className="font-shabnam mb-3 text-base1-medium">
                    تصویر محصول
                  </label>
                  <input
                    onChange={(event: any) => setImg(event.target.files[0])}
                    type="file"
                    className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
                  />
                </div>
                <button
                  onClick={() => updateProduct(data)}
                  className="flex gap-2 mt-5 items-center text-white text-tiny-medium font-shabnam bg-redprimary-500 mr-2 px-4 py-2 rounded-md mb-10"
                >
                  ویرایش
                </button>
              </div>
              <div className="md:basis-1/2 w-full max-md:order-first">
                <div className="flex flex-col mt-5">
                  <label className="font-shabnam mb-3 text-base1-medium">
                    مبلغ محصول
                  </label>
                  <input
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    placeholder="لطفا مبلغ محصول را وارد کنید"
                    type="text"
                    className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label className="font-shabnam mb-3 text-base1-medium">
                    توضیحات بلند
                  </label>
                  <input
                    value={longDescription}
                    onChange={(event) => setLongDescription(event.target.value)}
                    placeholder="توضیحات بلند"
                    type="text"
                    className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label className="font-shabnam mb-3 text-base1-medium">
                    مناسب برای:
                  </label>
                  <input
                    placeholder=" ... مناسب برای"
                    value={suitableFor}
                    onChange={(event) => setSuitableFor(event.target.value)}
                    type="text"
                    className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label className="font-shabnam mb-3 text-base1-medium">
                    تگ های محصول
                  </label>
                  <input
                    value={tags}
                    onChange={(event) => setTags(event.target.value)}
                    placeholder="مثال: قهوه،قهوه ترک، قهوه اسپرسو"
                    type="text"
                    className="outline-0 border  px-2 py-2 text-subtle-medium font-shabnam border-2 rounded-md border-redprimary-500"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label className="font-shabnam mb-3 text-base1-medium">
                    دسته بندی های محصول
                  </label>
                  <input
                    placeholder="مثال: قهوه،قهوه ترک، قهوه اسپرسو"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
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
  );
};

export default TableProduct;
