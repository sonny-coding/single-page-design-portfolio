import React from "react";
import { SecondaryButton } from "./Button";
import { ImageAmy } from "../assets";

const About = () => {
  return (
    <section className="grid md:grid-cols-2 md:gap-5 [&>*]:mb-2">
      <div className=" w-[85%] mx-auto md:w-full flex justify-center items-center md:ml-[-20px] pb-4 md:pb-0">
        <img className="w-full" src={ImageAmy} alt="profile" />
      </div>
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left [&>*]:mb-2 md:[&>*]:mb-4">
        <h3 className="text-[26px] md:text-[32px] lg:text-[40px] leading-[32.76px] md:leading-[40.32px] lg:leading-[50px] font-bold text-customBlack">
          I&apos;m Amy, and I&apos;d love to work on your next project
        </h3>
        <p className="text-[16px] md:text-[18px] text-mediumBrown leading-[26px] md:leading-[28px] font-medium">
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </p>
        <SecondaryButton>Free Consultation</SecondaryButton>
      </div>
    </section>
  );
};

export default About;
