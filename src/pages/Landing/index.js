import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  LandingPage,
  LandingPageEmpoloyeeButton,
  LandingPageAdminButton,
} from "./LandingElements.js";

const Landing = () => {
  const navigate = useNavigate();
  useState(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const goToLoginEmploye = () => {
    navigate("/loginEmploye");
  };
  const goToLoginAdmin = () => {
    navigate("/loginAdmin");
  };

  return (
    <LandingPage>
      <LandingPageEmpoloyeeButton
        onClick={() => {
          goToLoginEmploye();
        }}
        data-aos="fade-right"
      >
        Employee
      </LandingPageEmpoloyeeButton>
      <LandingPageAdminButton
        onClick={() => {
          goToLoginAdmin();
        }}
        data-aos="fade-left"
      >
        Admin
      </LandingPageAdminButton>
    </LandingPage>
  );
};

export default Landing;
