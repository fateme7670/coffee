import { BreadCrumb, Footer, Navbar } from "@/components/modules";
import { connectToDB } from "@/configs/db";
import { authUser } from "@/utils/userhelper";
import React from "react";

const page =async () => {
  connectToDB()
const user = await authUser();
  return (
    <>
      <Navbar islogin={user? true:false} />
      <BreadCrumb route="قوانین" />
      <section className="container mt-10">
        <div className=" text-gray-1 px-10 text-justify text-small-semibold leading-8">
          <p>
            “قهوه ست” ضمن احترامی که برای حریم شخصی کاربران قائل است، برای خرید،
            ثبت نظر یا استفاده از برخی امکانات وب سایت اطلاعاتی را از کاربران
            درخواست می‌کند تا بتواند خدماتی امن و مطمئن را به کاربران ارائه دهد.
            برای پردازش و ارسال سفارش، اطلاعاتی مانند آدرس، شماره تلفن و ایمیل
            مورد نیاز است و از آنجا که کلیه فعالیت‌های قهوه ست قانونی و مبتنی بر
            قوانین تجارت الکترونیک صورت می‌گیرد و طی فرایند خرید، فاکتور رسمی و
            بنا به درخواست مشتریان حقوقی گواهی ارزش افزوده صادر می‌شود، از این
            رو وارد کردن اطلاعاتی مانند نام و کد ملی برای اشخاص حقیقی یا کد
            اقتصادی و شناسه ملی برای خریدهای سازمانی لازم است. همچنین آدرس ایمیل
            و تلفن‌هایی که مشتری در پروفایل خود ثبت می‌کند، تنها آدرس ایمیل و
            تلفن‌های رسمی و مورد تایید مشتری است و تمام مکاتبات و پاسخ‌های شرکت
            از طریق آنها صورت می‌گیرد.مشتریان می‌توانند نام، آدرس و تلفن شخص
            دیگری را برای تحویل گرفتن سفارش وارد کنند و قهوه ست تنها برای ارسال
            همان سفارش، از این اطلاعات استفاده خواهد کرد.همچنین قهوه ست ممکن است
            برای ارتباط با مشتریان، بهینه سازی محتوای وب سایت و تحقیقات
            بازاریابی از برخی اطلاعات استفاده کند و برای اطلاع رسانی رویدادها و
            اخبار، خدمات و سرویس‌های ویژه یا پروموشن‌ها، برای اعضای وب سایت
            ایمیل یا پیامک ارسال نماید. در صورتی که کاربران تمایل به دریافت
            اینگونه ایمیل و پیامک‌ها نداشته باشند، می‌توانند عضویت دریافت
            خبرنامه قهوه ست را در پروفایل خود لغو کنند.
          </p>
          <p>
            قهوه ست ممکن است نقد و نظرهای ارسالی کاربران را در راستای رعایت
            قوانین وب سایت ویرایش کند. همچنین اگر نظر یا پیام ارسال شده توسط
            کاربر، مشمول مصادیق محتوای مجرمانه باشد، قهوه ست می‌تواند از اطلاعات
            ثبت شده برای پیگیری قانونی استفاده کند.حفظ و نگهداری رمز عبور بر
            عهده کاربران است و برای جلوگیری از هرگونه سوء استفاده احتمالی،
            کاربران نباید آن را برای شخص دیگری فاش کنند. قهوه ست هویت شخصی
            کاربران را محرمانه می‌داند و اطلاعات شخصی آنان را به هیچ شخص یا
            سازمان دیگری منتقل نمی‌کند، مگر اینکه با حکم قانونی مجبور باشد در
            اختیار مراجع ذی‌صلاح قرار دهد.قهوه ست همانند سایر وب سایت‌ها از جمع
            آوری IP و کوکی‌ها استفاده می‌کند، اما پروتکل، سرور و لایه‌های امنیتی
            قهوه ست و روش‌های مناسب مدیریت داده‌ها اطلاعات کاربران را محافظت و
            از دسترسی‌های غیر قانونی جلوگیری می‌کند.قهوه ست برای حفاظت و نگهداری
            اطلاعات و حریم شخصی کاربران همه توان خود را به کار می‌گیرد و امیدوار
            است که تجربه‌ی خریدی امن، راحت و خوشایند را برای همه کاربران فراهم
            آورد. 66726563 – ۰۲۱09366726563 (پاسخگویی طی ساعات کاری) استان تهران
            – شهر تهران – خیابان انقلاب روبروی خیابان ویلا (نجات الهی) فروشگاه
            قهوه ست
          </p>
          <p>در صورتی که تمایلی به دریافت ایمیل‌ها و خبرنامه های قهوه ست ندارید٬ می توانید بر روی کلمه لغو عضویت در انتهای صفحه ایمیل کلیک کنید.</p>
       
       <p>در صورت وجود هرگونه سوال٬ لطفا با اطلاعات تماس زیر ارتباط برقرار کنید.</p>
       <p> تلفن تماس و فکس: 66726563 – 021</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
