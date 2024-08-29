import Layout from "@/components/layout/AdminLayoout";
import { Box } from "@/components/modules";
import { Areachart, Linechart } from "@/components/templates";
import { connectToDB } from "@/configs/db";
import tiketmodel from "@/models/Ticket";
import commentmodel from "@/models/Comment";
import wishlistmodel from "@/models/Wishlist";
import BillModel from "@/models/Bill";
import React from "react";
import { authUser } from "@/utils/userhelper";
import usermodel from "@/models/User";
import productmodel from "@/models/Product";

const page = async () => {
  connectToDB();
  const user = await authUser();
  const tikets = await tiketmodel
    .find({ user: user._id, isAnswer: false })
    .limit(3)
    .populate("department", "title")
    .sort({ _id: -1 })
    .lean();
  const bills = await BillModel.find({ user: String(user?._id) })
    .limit(3)
    .populate("proId")
    .sort({ _id: -1 })
    .lean();
  const alltikets = await tiketmodel.find({  });
  const allproduct = await productmodel.find({  });
  const alluser = await usermodel.find({ });
  const allcomments = await commentmodel.find({  });
  return (
    <Layout>
      <main>
        <section className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
            <div>
              <Box count={alltikets.length} title="مجموع تیکت های دریافتی" />
            </div>
            <div>
              <Box count={allproduct.length} title="مجموع محصولات سایت" />
            </div>
            <div>
              <Box count={allcomments.length} title="مجموع کامنت ها" />
            </div>
            <div className="md:col-start-2">
              <Box count={alluser.length} title="مجموع کاربر های سایت" />
            </div>
          </div>
        </section>
        <section className="container my-10 overflow-hidden">
          <div className="gap-4 overflow-x-auto  flex max-lg:flex-col items-center">
            <div className="lg:basis-1/2 w-full bg-red-4 py-4 px-3 rounded-md">
              <p>آمار فروش</p>
              <Areachart />
            </div>
            <div className="lg:basis-1/2 w-full bg-red-4 py-4 px-3 rounded-md">
              <p>نرخ رشد</p>
              <Linechart />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default page;
