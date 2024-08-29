import Layout from '@/components/layout/UserLayout';
import { HeaderPanel } from '@/components/modules';
import { Tikets } from '@/components/templates';
import { connectToDB } from '@/configs/db';
import TicketModel from '@/models/Ticket';
import { authUser } from '@/utils/userhelper';
import Link from 'next/link';
import React from 'react';

const page =async () => {
  connectToDB();
  const user = await authUser();
  const tickets = await TicketModel.find({ user: user._id, isAnswer:false }).
  populate(
    "department",
    "title"
  ).sort({_id:-1});
  return (
    <Layout>

      <section className="container ">
          <div className="px-10 relative">
            <HeaderPanel title="همه تیکت ها" />
            <Link href='/p-user/tickets/sendTicket' className='absolute border border-redprimary-500 rounded-full bg-white px-3 py-2 text-redprimary-500 font-shabnam left-0 top-0'>ارسال تیکت جدید</Link>
          </div>
        </section>
        <section className='container'>

        <Tikets tickets={JSON.parse(JSON.stringify(tickets))} />
        </section>
  
    </Layout>
  );
}

export default page;
