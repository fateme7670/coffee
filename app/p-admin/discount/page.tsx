import Layout from '@/components/layout/AdminLayoout';
import { AddDiscount, TableDiscount } from '@/components/templates';
import { connectToDB } from '@/configs/db';
import discountModel from '@/models/Discount';
import React from 'react';

const page =async () => {
connectToDB()
const discount= await discountModel.find({}).sort({id:-1}).lean()
  return (
    <Layout>
      <main>
      <section className="container mt-10">
          <div className="relative">
          <h2 className='text-heading2-semibold font-shabnam'>افزودن تخفیف جدید</h2>
          </div>
        </section>
        <AddDiscount/>
        <TableDiscount discounts={discount}/>
      </main>
    </Layout>
  );
}

export default page;
