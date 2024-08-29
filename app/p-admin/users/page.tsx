import Layout from '@/components/layout/AdminLayoout';
import { HeaderPanel } from '@/components/modules';
import { UserTable } from '@/components/templates';
import { connectToDB } from '@/configs/db';
import UserModel from '@/models/User';
import React from 'react';

const page =async () => {
  connectToDB()
  const users = await UserModel.find({}).sort({id:-1}).lean();

  return (
    <Layout>
      <main>
      <section className="container">
          <div className="relative">
          <HeaderPanel title="لیست کاربران" />
          </div>
        </section>
        <UserTable users={users} />
      </main>
    </Layout>
  );
}

export default page;
