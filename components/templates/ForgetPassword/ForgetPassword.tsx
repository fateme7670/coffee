
import Link from 'next/link';
import React from 'react';

const ForgetPassword = () => {

  return (
    <section className="w-[380px]  max-md:my-5   mx-auto">
    <div className=" bg-white p-10 pt-8 flex font-shabnam flex-col justify-center">
           <input
                placeholder="ایمیل / شماره موبایل"
        className="outline-0 border  border-slate-800 rounded-md p-3 text-subtle-medium mb-5"
       
      />
    
      <button className="bg-reddark-3 text-white py-3 rounded-md text-subtle-medium">بازنشانی رمزعبور
</button>
  <Link href={'/login-register'} className="text-center mt-5 text-subtle-medium" >برگشت به ورود</Link>
  

    </div>
  <div className="mx-auto text-center mt-8">
  <Link href={'/login-register'}   >
    لغو
    </Link>
  </div>
  </section>
  );
}

export default ForgetPassword;
