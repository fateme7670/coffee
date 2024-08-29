import { Footer, Navbar, Stepper } from '@/components/modules';
import { OrderComplete } from '@/components/templates';
import { connectToDB } from '@/configs/db';
import billModel from '@/models/Bill';
import { authUser } from '@/utils/userhelper';
import React from 'react';

const page =async () => {
  connectToDB()
  const user=await authUser()
  const bill= await billModel.find({})

  return (
    <>
        <Navbar islogin={user ? true:false} />
            <Stepper step="complate" />
            <section className='' data-aos="fade-left">
              <OrderComplete />
            </section>

            <Footer />
    </>
  );
}

export default page;
