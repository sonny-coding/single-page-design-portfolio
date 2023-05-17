import React from "react";
import {
  PatternApps,
  PatternGraphicDesign,
  PatternIllustrations,
  PatternMotionGraphics,
  PatternPhotography,
  PatternUI,
} from "../assets";

const Skills = () => {
  return (
    <section className="[&>*]:rounded-md w-full grid grid-cols-2 grid-rows-6 gap-3 md:grid-cols-4 md:grid-rows-3 lg:grid-cols-6 lg:grid-rows-2 ">
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
    </section>
  );
};

export default Skills;
