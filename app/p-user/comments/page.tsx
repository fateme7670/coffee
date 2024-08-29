
import Layout from "@/components/layout/UserLayout";
import { HeaderPanel } from "@/components/modules";
import Modal from "@/components/modules/modal/Modal";
import { Table } from "@/components/templates";
import { DataTable } from "@/components/templates/p-user/Comments/Table";
import { connectToDB } from "@/configs/db";
import Commentmodel from "@/models/Comment";
import { authUser } from "@/utils/userhelper";
import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const page =async() => {
  connectToDB()
  const user = await authUser();
  const comments = await Commentmodel.find(
    { user: String(user._id) },
    "-__v"
  ).populate("product", "name");
  return (
    <Layout>
      <main>
        <section className="container">
          <div className="px-10">
            <HeaderPanel title="لیست کامنت‌ها" />
          </div>
        </section>
<section className="container">

<DataTable comments={JSON.parse(JSON.stringify(comments))} />


</section>
      </main>
    </Layout>
  );
};

export default page;
