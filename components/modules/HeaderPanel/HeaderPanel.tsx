import React from 'react';
interface Props{
    title:string
}
const HeaderPanel = ({title}:Props) => {
  return (
    <div className='mt-10 relative '>
      <h2 className='text-heading2-bold pr-3 font-shabnam title-menu'>{title}</h2>
    </div>
  );
}

export default HeaderPanel;
