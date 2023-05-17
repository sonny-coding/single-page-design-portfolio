import React from "react";
import { SecondaryButton } from "./Button";

const Contact = () => {
  return (
    <section className="w-full lg:w-[80%] flex flex-col justify-center items-center bg-customBlack py-12 px-6 text-lightCream rounded-md mb-6 md:grid md:grid-cols-3 md:gap-8">
      <div className="md:col-span-2">
        <p className="font-bold text-[26px] md:text-[32px] lg:text-[40px] leading-[33px] md:leading-[40px] lg:leading-[50px] text-center md:text-left mb-6">
          Book a call with me
        </p>
        <p className="text-[16px] md:text-[18px] leading-[28px] font-medium text-center md:text-left mb-6">
          I’d love to have a chat to see how I can help you. The best first step
          is for us to discuss your project during a free consultation. Then we
          can move forward from there.
        </p>
      </div>
      <div className="m-auto">
        <SecondaryButton>Free Consultation</SecondaryButton>
      </div>
    </section>
  );
};

export default Contact;
