import React, { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { LandingPage, InputField, LoginButton } from "./LoginEmployeeElements";

const LoginEmployee = () => {
  useState(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <LandingPage>
      <InputField placeholder="    email" data-aos="fade-right" />
      <InputField placeholder="    password" data-aos="fade-left" />
      <LoginButton data-aos="fade-right">Login</LoginButton>
    </LandingPage>
  );
};

export default LoginEmployee;
