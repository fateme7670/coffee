import Layout from "@/components/layout/UserLayout";
import { HeaderPanel } from "@/components/modules";
import { Awnser } from "@/components/templates";
import { connectToDB } from "@/configs/db";
import TicketModel from "@/models/Ticket";
import Link from "next/link";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const ticketID = params.id;
  connectToDB();
  const ticket = await TicketModel.findOne({ _id: ticketID })
    .populate("user", "name img")
    .lean();
  const answertiket = await TicketModel.findOne({ maintiket: ticket._id })
    .populate("user", "name img")
    .lean();

  return (
    <Layout>
      <main>
        <section className="container mb-10">
          <div className="px-10 relative">
            <HeaderPanel title=" تیکت های کاربر" />
            <Link
              href="/p-user/tickets/sendTicket"
              className="absolute border border-redprimary-500 rounded-full bg-white px-3 py-2 text-redprimary-500 font-shabnam left-0 top-0"
            >
              ارسال تیکت جدید
            </Link>
          </div>
        </section>
        <Awnser
          type="user"
          title={ticket.title}
          body={ticket.body}
          createdAt={ticket.createdAt}
          user={ticket.user}
          img={ticket.user?.img}
        />
        {answertiket && (
          <Awnser
            type="admin"
            title={answertiket.title}
            body={answertiket.body}
            createdAt={answertiket.createdAt}
            user={answertiket.user}
            img={answertiket.user?.img}
          />
        )}
        {!answertiket && (
          <div className="mt-10">
            <p className="text-center mt-5 text-base1-semibold text-gray-1">
              هنوز پاسخی دریافت نکردید
            </p>
          </div>
        )}
      </main>
    </Layout>
  );
};

export default page;
