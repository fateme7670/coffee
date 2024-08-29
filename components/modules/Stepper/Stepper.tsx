import Link from 'next/link';
import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
interface Props {
    step: string;
  }
const Stepper = ({step}:Props) => {
  return (
    <section className='bg-[url("/images/back1.jpg")] text-white text-center bg-cover w-full h-auto bg-center pt-52 pb-16 font-shabnam'>
      
      <div className='flex items-center justify-center gap-3'>
      <div className='flex items-center gap-2'>
        <Link className={`text-body1-bold ${step == "cart"  ? 'opacity-100' :'opacity-60' }  `} href={"/cart"}>
          سبد خرید
        </Link>
        <FaArrowLeftLong className={`text-body1-bold ${step == "cart" ? 'opacity-100' :'opacity-60'}`} />
        {step === "checkout" || step === "complate" ? (
          <Link
            className={`text-body1-bold ${step == "checkout" ? 'opacity-100' :'opacity-60'}`}
            href={"/checkout"}
          >
            پرداخت
          </Link>
        ) : (
          <p className={`text-body1-bold ${step == "checkout" ? 'opacity-100' :'opacity-60'}`}>پرداخت</p>
        )}
        <FaArrowLeftLong className={`text-body1-bold ${step == "checkout" ? 'opacity-100' :'opacity-60'}`} />
        {step == "complate" ? (
          <Link
            className={`text-body1-bold ${step == "complate" ? 'opacity-100' :'opacity-60'}`}
            href={"/complate"}
          >
            تکمیل سفارش
          </Link>
        ) : (
          <p className={`text-body1-bold ${step == "complate" ? 'opacity-100' :'opacity-60'}`}> تکمیل سفارش</p>
        )}
      </div>
    </div>
    </section>
  );
}

export default Stepper;
