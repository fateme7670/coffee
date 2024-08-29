import Layout from '@/components/layout/UserLayout';
import { HeaderPanel } from '@/components/modules';
import { SendTikets } from '@/components/templates';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <Layout>
      <main>
      <section className="container">
          <div className="px-10 relative">
            <HeaderPanel title="ارسال تیکت جدید" />
            <Link href='/p-user/tickets' className='absolute border border-redprimary-500 rounded-full bg-white px-3 py-2 text-redprimary-500 font-shabnam left-0 top-0'>همه تیکت ها</Link>
          </div>
        </section>
        <SendTikets />
      </main>
    </Layout>
  );
}

export default page;
