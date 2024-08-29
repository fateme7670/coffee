import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { CommentProps } from '@/utils/types';
interface Props{
  id:string | undefined
  comments:CommentProps[]
}
const Comments = ({id,comments}:Props) => {
  return (
    <section className='container'>
    <p className='mb-5'>نظرات ({comments.length}) :</p>
    <hr />

    <div className='flex gap-10 max-lg:flex-col mt-5'>
      <div className='md:basis-1/2 w-full'>
        <p className=''>
       ({comments.length}) دیدگاه برای کپسول قهوه SETPRESSO سازگار با دستگاه نسپرسو ( GOLD )
          ده -10- عددی
        </p>
        <div>
          { comments.map(item=>item.isAcsept && <Comment key={item._id} 
          id={item._id}
          username={item.username}
          body={item.body}
          score={item.score}
          date={item.date}
          /> )}
{/*          
          <Comment/>
          <Comment/>
          <Comment/> */}
   
        </div>
      </div>
      <div className='md:basis-1/2 w-full'>
        {/* <CommentForm productID={productID}/> */}
        <CommentForm id={id}/>
      </div>
    </div>
  </section>
  );
}

export default Comments;
