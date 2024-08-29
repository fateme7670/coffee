"use client";
import { signoutUserFromServer } from "@/Redux/features/auth";
import { useAppDispatch } from "@/Redux/hooks";
import { sidebarAdminLinks, sidebarLinks } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaComments, FaHeart, FaShoppingBag, FaUsers } from "react-icons/fa";
import { ImReply } from "react-icons/im";
import { MdLogout, MdOutlineAttachMoney, MdSms } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import swal from "sweetalert";
interface Props {
  name: string;
}
const Sidebar = ({ name }: Props) => {
  const path = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const LogouHandler = () => {
    swal({
      title: "آیا از خروج اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (result) => {
      if (result) {
        const res = await fetch("/api/auth/signout", {
          method: "POST",
        });
        // console.log("res delete",res);
        if (res.status == 200) {
          swal({
            title: "خارح شدید",
            icon: "success",
            buttons: "OK",
          }).then((result) => {
            router.replace("/login-register");
          });
        }
      }
    });
  };
  return (
    <>
      <section className="leftsidebar custom-scrollbar">
        <div className="w-full flex  gap-4 flex-1 flex-col px-6">
          {path.includes("/p-user") ? (
            <>
              {sidebarLinks.map((item) => {
                const isActive =
                  (path.includes(`/p-user${item.route}`) &&
                    item.route.length > 1) ||
                  path === item.route;

                return (
                  <Link
                    key={item.label}
                    className={`leftsidebar_link ${
                      isActive && "bg-primary-500 "
                    }`}
                    href={`/p-user${item.route}`}
                  >
                    <Image
                      src={item.imgURL}
                      alt={item.label}
                      width={24}
                      height={24}
                    />
                    <p className="text-light-2 max-lg:hidden">{item.label}</p>
                  </Link>
                );
              })}
            </>
          ) : (
            <>
              {sidebarAdminLinks.map((item) => {
                const isActive =
                  (path.includes(`/p-admin${item.route}`) &&
                    item.route.length > 1) ||
                  path === item.route;

                return (
                  <Link
                    key={item.label}
                    className={`leftsidebar_link ${
                      isActive && "bg-primary-500 "
                    }`}
                    href={`/p-admin${item.route}`}
                  >
                    <Image
                      src={item.imgURL}
                      alt={item.label}
                      width={24}
                      height={24}
                    />
                    <p className="text-light-2 max-lg:hidden">{item.label}</p>
                  </Link>
                );
              })}
            </>
          )}
          <div className="mt-8 pr-5 px-1">
            <div
              onClick={LogouHandler}
              className="flex cursor-pointer gap-4 pl-4"
            >
              <Image
                src="/assets/logout.svg"
                alt="logout"
                width={24}
                height={24}
              />

              <p className="text-light-2 max-lg:hidden">Logout</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
