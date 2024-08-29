import Layout from "@/components/layout/UserLayout";
import { HeaderPanel } from "@/components/modules";
import { Details } from "@/components/templates";
import { connectToDB } from "@/configs/db";
import { hashPass } from "@/utils/auth";
import { authUser } from "@/utils/userhelper";
import React from "react";

const page =async () => {
  connectToDB()
  const user=await authUser()
  // console.log(user);
  
  
  return (
    <Layout>
      <main>
        <section className="container">
          <div className="px-10">
            <HeaderPanel title="جزئیات اکانت" />
          </div>
        </section>
        <Details
        id={user?._id}
        name={user.name}
        email={user.email}
        phone={user.phone}
        img={user?.img}
        password={user.password}
        />
      </main>
    </Layout>
  );
};

export default page;
