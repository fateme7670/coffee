import { BreadCrumb, Footer, Navbar } from "@/components/modules";
import { FormArticle, InfoArticle } from "@/components/templates";
import { connectToDB } from "@/configs/db";
import articleModel from "@/models/Articel";
import { authUser } from "@/utils/userhelper";
import React from "react";

const page = async({ params }: { params: { id: string } }) => {
  connectToDB()
  const user=await authUser()
  const id = params.id
  const article = await articleModel.findOne({ _id: id }).lean()
    const lastarticle = await articleModel.find({}).sort({ _id: -1 }).limit(1).lean()
    const firstarticle = await articleModel.find({}).limit(1).lean()
console.log('lastarticle',lastarticle);
console.log('firstarticle',firstarticle);


  return (
    <>
      <Navbar islogin={user? true:false} />
      <BreadCrumb route="قهوه" />
    <section className="container">
    <InfoArticle
      
      article={JSON.parse(JSON.stringify(article))}
      lastarticle={JSON.parse(JSON.stringify(lastarticle))}
                    firstarticle={JSON.parse(JSON.stringify(firstarticle))}
 />
      <FormArticle id={JSON.parse(JSON.stringify(article._id))} />
    </section>
      <Footer />
    </>
  );
};

export default page;
