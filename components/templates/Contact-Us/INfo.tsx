import React from "react";
import { BiSolidContact } from "react-icons/bi";
import { FaEnvelopeOpenText, FaInternetExplorer, FaPhone, FaTelegramPlane } from "react-icons/fa";
import { PiCoffeeFill } from "react-icons/pi";

const INfo = () => {
  return (
    <div className="[&_p]:text-base-medium [&_p]:text-gray-1 [&_svg]:text-gray-1 [&_svg]:text-heading4-bold font-shabnam mt-10">
      <h4 className=" text-base-medium text-gray-1"> تماس با ما</h4>
      <h3 className="text-heading4-medium mt-3 mb-10">اطلاعات تماس </h3>
      <div className="flex mt-10 gap-4">
        <PiCoffeeFill />
        <p>شرکت فنجان داغ خوارزمی (کارخانه قهوه ست )</p>
      </div>
      <div className="flex mt-10 gap-4">
        <FaInternetExplorer />
        <p>set-coffee.com</p>
      </div>
      <div className="flex mt-10 gap-4">
        <BiSolidContact />
        <p>
          {" "}
          تهران. پاکدشت . شهرک صنعتی خوارزمی. فاز 2 . بلوار بهارستان. خیابان
          ماگنولیا بلوک آ117{" "}
        </p>
      </div>
      <div className="flex mt-10 gap-4">
        <FaPhone />
        <p>021-36479228</p>
      </div>
      <div className="flex mt-10 gap-4">
        <FaEnvelopeOpenText />
        <p>offee[at]set-coffee.com</p>
      </div>
      <div className="flex mt-10 gap-4">
        <FaEnvelopeOpenText />
        <p>whole[at]set-coffee.com</p>
      </div>
      <div className="flex mt-10 gap-4">
        <FaTelegramPlane />
        <p>تماس با مدیریت از طریق واتساپ و یا تلگرام : 09366726563</p>
      </div>
    </div>
  );
};

export default INfo;
