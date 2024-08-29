import { Footer, Navbar, Stepper } from "@/components/modules";
import {  CardChecked, DetailsChecked } from "@/components/templates";
import { connectToDB } from "@/configs/db";
import { authUser } from "@/utils/userhelper";
import React from "react";

const page = async() => {
  connectToDB()
  const user=await authUser()
  return (
    <>
      <Navbar islogin={user? true:false} />
      <Stepper step="checkout" />
      <section className="container mt-10">
       
            <DetailsChecked />
         
        
      </section>
      <Footer />
    </>
  );
};

export default page;
