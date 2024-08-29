import React from 'react';
interface Props{
  longDescriptions:string | undefined
}
const Explnation = ({longDescriptions}:Props) => {
  return (
    <section className='container w-full'>
      <div className='mb-5'>
          <p>توضیحات :</p>
      </div>
      <hr className=' brder-gray-1'/>
      {/* <h3 className='text-heading4-medium my-5'>10 عددی (SETpresso ( GOLD</h3> */}
     
    
      <p className='text-justify mt-5 text-gray-1'>
       {longDescriptions}
      </p>
    </section>
  );
}

export default Explnation;
