import { Footer, Navbar } from "@/components/modules";
import {
  DetailsProduct,
  Galley,
  MoreProduct,
  Tabs,
} from "@/components/templates";
import { connectToDB } from "@/configs/db";
import productModel from "@/models/Product";
import { ProductProps } from "@/utils/types";
import { authUser } from "@/utils/userhelper";
import React from "react";

const page = async ({ params }: any) => {
  connectToDB();
  const user = await authUser();
  const id = params.id;
  const product = await productModel.findOne({ _id: id }).populate("comments")
  .sort({_id:-1})
  .lean()
  ;
  const relatedProduct=await productModel.find({smell:product.smell}).lean()
  return (
    <>
      <Navbar islogin={user ? true : false} />
      <section className="container ">
        <div className="flex max-lg:flex-col items-cneter">
          <div className="md:basis-1/2 w-full">
            <Galley image={product.img} />
          </div>
          <div className="md:basis-1/2 w-full">
            <DetailsProduct
              id={product._id}
              name={product.name}
              price={product.price}
              shortDescription={product.shortDescription}
              score={product.score}
              comments={product.comments}
              tags={product.tags}
              category={product.category}
              img={product.img}
            />
          </div>
        </div>
        <div>
          <Tabs 
          id={product._id}
          longDescription={product.longDescription}
          weight={product.weight}
          suitableFor={product.suitableFor}
          smell={product.smell}
          comments={product.comments}
          />
        </div>
        <MoreProduct relatedProduct={JSON.parse(JSON.stringify(relatedProduct))}/>
      </section>
      <Footer />
    </>
  );
};

export default page;
