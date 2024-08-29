import { BreadCrumb, Footer, Navbar } from "@/components/modules";
import { Form, INfo, Map } from "@/components/templates";
import { authUser } from "@/utils/userhelper";
import Link from "next/link";
import React from "react";

const page = async() => {
  const user=await authUser()
  return (
    <>
      <Navbar islogin={user? true:false} />
      <BreadCrumb route="تماس با ما" />
      <section className="container ">
        <div className="flex max-md:flex-col items-center justify-center mt-10 gap-5">
          <div className="relative ">
            <Map
              position={[35.72021225108499, 51.42222691580869]}
              center={[35.72021225108499, 51.42222691580869]}
            >
              <div className="shadow-lg font-shabnam p-5">
                <span className="text-gray-1"> فروشگاه ما</span>
                <h3 className="text-heading4-medium">
                  آدرس فروشگاه حضوری قهوه ست (شعبه جم)
                </h3>
                <p className="text-base-regular my-3">
                  تهران – خ کریمخان زند – خ قائم مقام فراهانی – ابتدای خ فجر(جم)
                  – شماره ۱۰
                </p>
                <p className="text-base-regular text-gray-3">021-88305827</p>
                <Link href="/about-us" className="underline">
                  درباره فروشگاه
                </Link>
              </div>
            </Map>
          </div>
          <div className="relative ">
            <Map
              position={[35.70153474690238, 51.41497422314844]}
              center={[35.70153474690238, 51.41497422314844]}
            >
              <div className="shadow-lg font-shabnam p-5">
                <span className="text-gray-1"> فروشگاه ما</span>
                <h3 className="text-heading4-medium">
                  آدرس فروشگاه حضوری قهوه ست (شعبه جم)
                </h3>
                <p className="text-base-regular text-gray-3 my-3">
                  تهران – خ کریمخان زند – خ قائم مقام فراهانی – ابتدای خ فجر(جم)
                  – شماره ۱۰
                </p>
                <p className="text-base-regular text-gray-3">021-88305827</p>
                <Link href="/about-us" className="underline">
                  درباره فروشگاه
                </Link>
              </div>
            </Map>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="flex max-lg:flex-col justify-center mt-10">
          <div className="basis-1/2">
            <INfo />
          </div>
          <div className="basis-1/2">
            <Form />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
