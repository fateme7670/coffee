import Layout from '@/components/layout/AdminLayoout';
import { HeaderPanel } from '@/components/modules';
import { AddArticle,TAbleArticle } from '@/components/templates';
import { connectToDB } from '@/configs/db';
import articleModel from '@/models/Articel';
import React from 'react';

const page = async() => {
  connectToDB()
  const article = await articleModel.find({}).sort({ _id: -1 }).lean();

  return (
    <Layout>
      <main>
      <section className="container mt-10">
          <div className="relative">
          <h2 className='text-heading2-semibold font-shabnam'>افزودن مقاله جدید</h2>
          </div>
        </section>
        <AddArticle />
        <TAbleArticle article={article} />
      </main>
    </Layout>
  );
}

export default page;
