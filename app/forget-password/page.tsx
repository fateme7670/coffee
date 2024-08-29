import { ForgetPassword } from '@/components/templates';
import React from 'react';

const page = () => {
  return (
    <section className="bg-pink-1">
    <div className="flex max-md:flex-col justify-between items-center justify-center">
      <div className="basis-1/2">
        <img
          src="https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg"
          alt="cofee"
          className="h-screen object-cover"
        />
      </div>
      <div className="basis-1/2 max-md:order-first">
      <ForgetPassword/>
      </div>
    </div>
  </section>
  );
}

export default page;
