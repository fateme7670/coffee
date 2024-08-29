"use client";
import { sidebarAdminLinks, sidebarLinks } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Bottombar = () => {
  const path = usePathname();
  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {path.includes("/p-user") ? (
          <>
            {sidebarLinks.map((item) => {
              const isActive =
                (path.includes(`/p-user${item.route}`) &&
                  item.route.length > 1) ||
                path === item.route;
              return (
                <Link
                  className={`bottombar_link ${isActive && "bg-primary-500"}`}
                  href={`/p-user${item.route}`}
                  key={item.label}
                >
                  <Image
                    className="object-contain"
                    src={item.imgURL}
                    width={20}
                    height={20}
                    alt={item.label}
                  />
                  <p className="text-subtle-medium text-light-1 max-sm:hidden">
                    {item.label.split(/\s+/)[0]}
                  </p>
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
                  className={`bottombar_link ${isActive && "bg-primary-500"}`}
                  href={`/p-admin${item.route}`}
                  key={item.label}
                >
                  <Image
                    className="object-contain"
                    src={item.imgURL}
                    width={20}
                    height={20}
                    alt={item.label}
                  />
                  <p className="text-subtle-medium text-light-1 max-sm:hidden">
                    {item.label.split(/\s+/)[0]}
                  </p>
                </Link>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
};

export default Bottombar;
