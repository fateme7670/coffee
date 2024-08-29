import Layout from '@/components/layout/AdminLayoout';
import { HeaderPanel } from '@/components/modules';
import { ProductsAdmin, TableProduct } from '@/components/templates';
import { connectToDB } from '@/configs/db';
import productModel from '@/models/Product';
import Link from 'next/link';
import React from 'react';

const page =async () => {
  connectToDB()
  const product = await productModel.find({ })

  return (
    <Layout>
      <main>
      <section className="container">
          <div className="relative">
        <h2 className='text-heading2-semibold mt-10 font-shabnam'>افزودن محصول جدید</h2>
          </div>
        </section>
        <ProductsAdmin />
        <div className="w-full">
          <TableProduct
         products={JSON.parse(JSON.stringify(product))}
          />
      </div>
      </main>
    </Layout>
  );
}

export default page;
