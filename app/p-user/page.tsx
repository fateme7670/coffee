import React from "react";
import Layout from "@/components/layout/UserLayout";
import { Box, Orders, Tickrets } from "@/components/modules";
import { connectToDB } from "@/configs/db";
import { authUser } from "@/utils/userhelper";
import { redirect } from "next/navigation";
import tiketmodel from "@/models/Ticket";
import commentmodel from "@/models/Comment";
import wishlistmodel from "@/models/Wishlist";
import BillModel from "@/models/Bill";
const page = async () => {
  connectToDB()
  const user=await authUser()

  if (!user) {
    redirect('/login-register')
  }
  const tikets=await tiketmodel.find({user:user._id ,isAnswer:false})
  .limit(3)
  .populate("department","title")
  .sort({_id:-1})
  .lean()
  const bills=await BillModel.find({user:String(user?._id) })
  .limit(3)
  .populate("proId",)
  .sort({_id:-1})
  .lean()
  // console.log("tiketsssss",tikets);
  const alltikets=await tiketmodel.find({user:user._id})
  const allcomments=await commentmodel.find({user:String(user._id)})
  const allwishlists=await wishlistmodel.find({user:user._id})
  const allbills=await BillModel.find({user:user._id})
  return (
    <Layout>
      <main>
        <section className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
            <div>
              <Box count={alltikets.length} title="مجموع تیکت ها"  />
            </div>
            <div>
              <Box count={allcomments.length} title="مجموع کامنت ها" />
            </div>
            <div>
              <Box count={allwishlists.length} title="مجموع علاقه مندی ها" />
            </div>
            <div className="md:col-start-2">
              <Box count={allbills.length} title="مجموع سفارشات" />
            </div>
          </div>
        </section>
        <section className="container">
          <div className="flex max-lg:flex-col gap-5 items-center">
            <div className=" lg:basis-1/2 w-full">
              <div className="relative">

              <Tickrets title='تیکت' box={JSON.parse(JSON.stringify(tikets))}/>
              </div>
            </div>
            <div className="lg:basis-1/2 w-full">
             <Orders box={JSON.parse(JSON.stringify(bills))} title="سفارش"/>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default page;
