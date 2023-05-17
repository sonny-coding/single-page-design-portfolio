// import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Logo,
  PatternApps,
  PatternGraphicDesign,
  PatternIllustrations,
  PatternMotionGraphics,
  PatternPhotography,
  PatternUI,
  ImageAmy,
} from "./assets";
import { PrimaryButton, SecondaryButton } from "./components/Button";
import ImageSwiper from "./components/ImageSwiper";

const App = () => {
  return (
    <main className="flex flex-col justify-center items-center py-2 px-2 md:px-10 [&>*]:mb-4 md:[&>*]:mb-10">
      <div className="w-full flex justify-between items-center">
        <a href="#">
          <Logo />
        </a>
        <PrimaryButton>Free Consultation</PrimaryButton>
      </div>
      <div className="w-full flex justify-center items-center flex-col my-2">
        <h2 className="w-[90%] md:w-[85%] text-[36px] md:text-[44px] lg-[56px] font-bold leading-[55px] md:leading-[70px] text-customBlack text-center mb-2">
          Design solutions made easy
        </h2>
        <p className="w-[85%] md:w-[75%] text-[18px] font-normal leading-[28px] text-mediumBrown text-center">
          With over ten years of experience in various design disiplines,
          I&apos;m your one-stop shop for your design needs.
        </p>
      </div>
      <div className="w-full text-center">
        <h3 className="text-[24px] md:text-[32px] font-bold leading-[30px] md:leading-[40px]">
          My Work
        </h3>
        <ImageSwiper />
      </div>
      <div className="[&>*]:rounded-md w-full grid grid-cols-2 grid-rows-6 gap-3 md:grid-cols-4 md:grid-rows-3 lg:grid-cols-6 lg:grid-rows-2 ">
        <div className="w-full h-auto bg-galacticBlue col-span-2 row-span-2 flex flex-col justify-between gap-5 overflow-hidden p-3">
          <div className="self-end">
            <PatternGraphicDesign />
          </div>
          <p className="self-start text-[24px] font-normal text-white leading-[30px]">
            Graphic Design
          </p>
        </div>
        <div className="w-full h-auto bg-summerYellow flex flex-col justify-between gap-5 overflow-hidden p-3">
          <div className="self-end">
            <PatternUI />
          </div>
          <p className="self-start text-[24px] font-normal text-white leading-[30px]">
            UI/UX
          </p>
        </div>
        <div className="w-full h-auto bg-pink flex flex-col justify-between gap-5 overflow-hidden p-3">
          <div className="self-end">
            <PatternApps />
          </div>
          <p className="self-start text-[24px] font-normal text-white leading-[30px]">
            Apps
          </p>
        </div>
        <div className="w-full h-auto bg-lightRed col-span-2 flex flex-col justify-between gap-5 overflow-hidden p-3">
          <div className="self-end">
            <PatternIllustrations />
          </div>
          <p className="self-start text-[24px] font-normal text-white leading-[30px]">
            Illustrations
          </p>
        </div>
        <div className="w-full h-auto bg-cyan col-span-2 flex flex-col justify-between gap-5 overflow-hidden p-3">
          <div className="self-end">
            <PatternPhotography />
          </div>
          <p className="self-start text-[24px] font-normal text-white leading-[30px]">
            Photography
          </p>
        </div>
        <div className="w-full h-auto bg-darkPurple col-span-2 flex flex-col justify-between gap-5 overflow-hidden p-3">
          <div className="self-end">
            <PatternMotionGraphics />
          </div>
          <p className="self-start text-[24px] font-normal text-white leading-[30px]">
            Motion Graphics
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-5 [&>*]:mb-2">
        <div className=" w-[85%] mx-auto md:w-full flex justify-center items-center md:ml-[-20px] pb-4 md:pb-0">
          <img className="w-full" src={ImageAmy} alt="profile" />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left [&>*]:mb-2 md:[&>*]:mb-4">
          <h3 className="text-[26px] md:text-[32px] lg:text-[40px] leading-[32.76px] md:leading-[40.32px] lg:leading-[50px] font-bold text-customBlack">
            I&apos;m Amy, and I&apos;d love to work on your next project
          </h3>
          <p className="text-[16px] md:text-[18px] text-mediumBrown leading-[26px] md:leading-[28px] font-medium">
            I love working with others to create beautiful design solutions.
            I’ve designed everything from brand illustrations to complete mobile
            apps. I’m also handy with a camera!
          </p>
          <SecondaryButton>Free Consultation</SecondaryButton>
        </div>
      </div>
      <div className="w-full lg:w-[80%] flex flex-col justify-center items-center bg-customBlack py-12 px-6 text-lightCream rounded-md mb-6 md:grid md:grid-cols-3 md:gap-8">
        <div className="md:col-span-2">
          <p className="font-bold text-[26px] md:text-[32px] lg:text-[40px] leading-[33px] md:leading-[40px] lg:leading-[50px] text-center md:text-left mb-6">
            Book a call with me
          </p>
          <p className="text-[16px] md:text-[18px] leading-[28px] font-medium text-center md:text-left mb-6">
            I’d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </p>
        </div>
        <div className="m-auto">
          <SecondaryButton>Free Consultation</SecondaryButton>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <a className="" href="#">
          <Logo />
        </a>
        <PrimaryButton>Free Consultation</PrimaryButton>
      </div>
    </main>
  );
};

export default App;
