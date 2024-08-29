import { BreadCrumb, Footer, Navbar } from "@/components/modules";
import { Articels } from "@/components/templates";
import { connectToDB } from "@/configs/db";
import articleModel from "@/models/Articel";
import { authUser } from "@/utils/userhelper";
import React from "react";

const page = async() => {
  connectToDB()
  const article= await articleModel.find({}).lean()
const user = await authUser()
  return (
    <>
      <Navbar islogin={user? true: false} />
      <BreadCrumb route="اخبار و مقالات" />
      <Articels articles={article}/>
      <Footer />
    </>
  );
};

export default page;
