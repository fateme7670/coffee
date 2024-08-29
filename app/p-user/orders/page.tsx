
import Layout from "@/components/layout/UserLayout";
import { HeaderPanel } from "@/components/modules";
import { Order } from "@/components/templates";
import { connectToDB } from "@/configs/db";
import billmodel from "@/models/Bill";

import React from "react";

const page = async() => {
  connectToDB()
  const bill=await billmodel.find({}).populate('proId').lean()

  return (
    <Layout>
      <main>
        <section className="container">
          <div className="px-10">
            <HeaderPanel title="سفارش ها" />
          </div>
        </section>
        <section className="container">

       <Order bill={JSON.parse(JSON.stringify(bill))}/>
        </section>
      </main>
    </Layout>
  );
};

export default page;
