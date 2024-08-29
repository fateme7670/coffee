import React from "react";
import { Bottombar, Sidebar, Topbar } from "../modules";
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
  return (
    <div>
      <section>
      <Topbar   user={JSON.parse(JSON.stringify(user))} />
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
