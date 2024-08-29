import { BreadCrumb, Footer, Navbar } from "@/components/modules";
import { Filtering, Products } from "@/components/templates";
import { connectToDB } from "@/configs/db";
import productModel from "@/models/Product";
import { authUser } from "@/utils/userhelper";
import React from "react";

const page =async () => {
  connectToDB()
  const user=await authUser()
  const product= await productModel.find({}).sort({_id:-1}).lean()
  const productsmell= await productModel.find({Asyab:product.Asyab}).lean()
  return (
    <>
      <Navbar islogin={user? true:false} />
      <BreadCrumb route="فروشگاه" />
      <section className="container ">
        <div className="flex mt-10 gap-5 ">
          <div className="basis-4/5 order-last ">
            <Products products={JSON.parse(JSON.stringify(product))} />
          </div>
          <div className="basis-1/5 ">
            <Filtering Asyab={productsmell.Asyab} products={JSON.parse(JSON.stringify(product))} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
