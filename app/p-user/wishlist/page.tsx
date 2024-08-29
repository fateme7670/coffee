import Layout from "@/components/layout/UserLayout";
import { HeaderPanel } from "@/components/modules";
import { WhishList } from "@/components/templates";
import { connectToDB } from "@/configs/db";
import WishlistModel from "@/models/Wishlist";
import { WishlistProps } from "@/utils/types";
import { authUser } from "@/utils/userhelper";
import React from "react";

const page = async () => {
  connectToDB();
  const user = await authUser();
  const wishlist = await WishlistModel.find({ user: user._id }).populate(
    "product"
  );
  return (
    <Layout>
      <main>
        <section className="container">
          <div className="px-10">
            <HeaderPanel title="علاقه مندی ها" />
          </div>
        </section>
        <section className="container">
          <div className="grid  gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {wishlist.map((wish: WishlistProps) => (
              <WhishList
                key={wish._id}
                name={wish.product.name}
                price={wish.product.price}
                score={wish.product.score}
                productID={wish.product._id}
                img={wish.product?.img}
              />
            ))}
          </div>
        </section>
        {wishlist.length === 0 && (
          <p className="text-heading1-bold text-gray-1 text-center">
            محصولی وجود ندارد
          </p>
        )}
      </main>
    </Layout>
  );
};

export default page;
