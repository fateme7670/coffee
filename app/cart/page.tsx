
import { Footer, Navbar, Stepper } from "@/components/modules";
import { Breadcrumb, CardCart, TableCartDetail } from "@/components/templates";

import { authUser } from "@/utils/userhelper";


const page = async() => {


const user=await authUser()
  return (
    <>
      <Navbar islogin={user? true:false} />
      <Stepper step="cart" />
      <section className="container mt-10">
    
            <TableCartDetail  />
          
      </section>
      <Footer />
    </>
  );
};

export default page;
