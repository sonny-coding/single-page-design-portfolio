import React from "react";
import { Logo } from "../assets";
import { PrimaryButton } from "./Button";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center">
      <a href="#">
        <Logo />
      </a>
      <PrimaryButton>Free Consultation</PrimaryButton>
    </header>
  );
};

export default Header;
