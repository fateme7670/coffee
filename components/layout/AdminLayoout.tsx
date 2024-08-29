import React from "react";
import { Bottombar, Sidebar, TopBar } from "../modules";
import { connectToDB } from "@/configs/db";
import { authUser } from "@/utils/userhelper";
import { redirect } from "next/navigation";

interface Props {
  children: React.ReactNode;
}
const Layout = async ({ children }: Props) => {
  connectToDB()
  const user=await authUser()

  if (!user) {
    redirect('/login-register')
  }
  if (user) {
    if (user.role !== "Admin") {
      return redirect("/login-register");
    }
  } else {
    return redirect("/login-register");
  }
  return (
    <div className=" ">
      <section>
      <TopBar   user={JSON.parse(JSON.stringify(user))} />
        <div className="flex flex-row ">
          <div className="  w-fit  max-md:hidden">
            <Sidebar  name={user.name} />
          </div>
          <main className="main-container ">

         
          <div className="  w-full ">
          
            {children}
          
          </div>
          </main>
          
        </div>
        <div className="md:hidden  ">
              <Bottombar />
            </div>
      </section>
    </div>
  );
};

export default Layout;
