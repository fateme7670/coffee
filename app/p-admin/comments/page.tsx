import Layout from '@/components/layout/AdminLayoout';
import { HeaderPanel } from '@/components/modules';
import { TableComment } from '@/components/templates';
import { connectToDB } from '@/configs/db';
import commentModel from '@/models/Comment';
import React from 'react';

const page = async() => {
  connectToDB()
  const comments=await commentModel.find({}).populate('user').populate('product').populate('mainComment').sort({_id:-1}).lean()
  return (
    <Layout>
      <main>
      <section className="container">
          <div className="relative">
          <HeaderPanel title="لیست کامنت‌ها" />
          </div>
        </section>
        <TableComment 
        comments={JSON.parse(JSON.stringify(comments))}
      
        />
      </main>
    </Layout>
  );
}

export default page;
