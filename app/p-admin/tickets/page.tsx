import Layout from '@/components/layout/AdminLayoout'
import { HeaderPanel } from '@/components/modules'
import { TableTikets } from '@/components/templates'
import { connectToDB } from '@/configs/db'
import TiketModel from '@/models/Ticket'
import React from 'react'

const page = async() => {
  connectToDB();
  const tickets = await TiketModel.find({})
    .sort({ _id: -1 })
    .populate("user")
    .populate("department")
    .lean();
  return (
    <Layout>
      <main>
      <section className="container">
          <div className="relative">
          <HeaderPanel title="لیست تیکت ها" />
          </div>
        </section>
        <TableTikets tickets={JSON.parse(JSON.stringify(tickets))}/>
        {
          tickets.length === 0 &&
            <p className='text-base1-semibold text-center text-gray-1'>تیکتی وجود ندارد</p>
        }
      </main>
    </Layout>
  )
}

export default page
