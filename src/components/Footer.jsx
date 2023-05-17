import React from "react";
import { Logo } from "../assets";
import { PrimaryButton } from "./Button";

const Footer = () => {
  return (
    <footer className="w-full flex justify-between items-center">
      <a className="" href="#">
        <Logo />
      </a>
      <PrimaryButton>Free Consultation</PrimaryButton>
    </footer>
  );
};

export default Footer;
