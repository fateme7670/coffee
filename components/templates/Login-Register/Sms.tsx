import Link from 'next/link';
import React from 'react';
interface Props{
    cancelForm:()=>void
}
const Sms = ({cancelForm}:Props) => {
  return (
    <section className="w-[380px]  max-md:my-5   mx-auto">
    <div className=" bg-white p-10 pt-8 flex font-shabnam flex-col justify-center">
      <h4 className='text-center text-heading4-medium'>کد تایید</h4>
      <p className='text-gray-1 text-center text-small-medium my-3'>لطفاً کد تأیید ارسال شده را تایپ کنید</p>
      <p className='text-gray-1 text-center text-small-medium mb-3'>09921558293</p>
      <input
        className="outline-0 border  border-slate-800 rounded-md p-3 text-subtle-medium mb-5"
       
      />
    
      <button className="bg-reddark-3 text-white py-3 rounded-md text-subtle-medium">ثبت کد تایید
</button>
  <Link href={'/forget-password'} className="text-center mt-5 text-subtle-medium" >ارسال مجدد کد یکبار مصرف</Link>
  

    </div>
  <div className="mx-auto text-center mt-8">
  <button onClick={cancelForm}  >
    لغو
    </button>
  </div>
  </section>
  );
}

export default Sms;
