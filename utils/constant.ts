export const authType = {
    LOGIN: "login",
    REGISTER: "register"
}
export const role = {
    USER: "User",
    ADMIN: "Admin"
}
export const infoTabs = [
    { value: "explenation", label: "توضیحات" },
    { value: "info", label: "    اطلاعات بیشتر" },
    { value: "comments", label: "نظرات" },
  ];
  export const sidebarLinks = [
    {
      imgURL: "/assets/home.svg",
      route: "/",
      label: "پیشخوان",
    },
    {
      imgURL: "/assets/order.png",
      route: "/orders",
      label: "سفارش ها",
    },
  
    {
      imgURL: "/assets/ticket.png",
      route: "/tickets",
      label: "تیکت ها",
    },
    {
      imgURL: "/assets/comment.png",
      route: "/comments",
      label: "کامنت ها",
    },
    {
        imgURL: "/assets/heart.svg",
        route: "/wishlist",
        label: "علاقه مندی",
      },
    {
      imgURL: "/assets/user.svg",
      route: "/account-details",
      label: "جزئیات اکانت",
    },
  ];
  
  export const sidebarAdminLinks = [
    {
      imgURL: "/assets/home.svg",
      route: "/",
      label: "پیشخوان",
    },
    {
      imgURL: "/assets/order.png",
      route: "/products",
      label: "محصولات",
    },
    {
        imgURL: "/assets/user.svg",
        route: "/users",
        label: "کاربران",
      },
      {
        imgURL: "/assets/comment.png",
        route: "/comments",
        label: "کامنت ها",
      },
    {
      imgURL: "/assets/ticket.png",
      route: "/tickets",
      label: "تیکت ها ",
    },
   
    {
        imgURL: "/assets/discount.png",
        route: "/discount",
        label: "تخفیفات",
      },
   
    {
        imgURL: "/assets/comment.png",
        route: "/article",
        label: "مقالات",
      },
   
  ];
  
  