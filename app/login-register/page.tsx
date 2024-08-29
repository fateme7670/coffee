"use client";
import { Login, Register } from "@/components/templates";
import React, { useState } from "react";
import { authType } from "@/utils/constant";
const page = () => {
  const [authTypes, setauthTypes] = useState(authType.LOGIN);
  const showRegisterForm = () => {
    setauthTypes(authType.REGISTER);
  };
  const showLoginForm = () => {
    setauthTypes(authType.LOGIN);
  };
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
          {authTypes === authType.LOGIN ? (
            <Login showRegisterForm={showRegisterForm} />
          ) : (
            <Register showLoginForm={showLoginForm} />
          )}
        </div>
      </div>
    </section>
  );
};

export default page;
