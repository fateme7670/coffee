import React from "react";
interface Props{
  Asyab:string[]
}
const Choise = ({Asyab}:Props) => {
  return (
    <div className="mt-10">
      <h4 className="text-base-semibold font-shabnam mb-5">انتخاب قهوه بر اساس</h4>
      <div className="flex  justify-between mb-10 h-44 [&_li]:my-3 [&_li]:text-small-medium font-shabnam gap-4 overflow-y-auto">
        <div className="">
          <ul>
      
            <li>اسپرسو ساز خانگی (ریز)</li>
            <li>جذوه (بسیار ریز)</li>
            <li>دانه</li>
            <li> فرنچ پرس (درشت)</li>
            <li>قهوه ساز خانگی (متوسط)</li>
            <li>کلد برو (خیلی درشت)</li>
            <li>کمکس (متوسط به درشت)</li>
          </ul>
        </div>
        <div className="[&_li]:text-small-medium font-shabnam   transition delay-300 duration-200">
          <ul>
            
            <li><div className="hover:active_choice" >20</div></li>
            <li><div className="hover:active_choice" >20</div></li>
            <li><div className="active_choice hover:active_choice" >20</div></li>
            <li><div className="hover:active_choice" >20</div></li>
            <li><div className="hover:active_choice" >20</div></li>
            <li><div className="hover:active_choice" >20</div></li>
            <li><div className="hover:active_choice" >20</div></li>
           
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Choise;
