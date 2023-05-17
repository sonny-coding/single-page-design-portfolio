// import React, { useRef, useState } from "react";
// Import Swiper React components
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  ArrowLeft,
  ArrowRight,
} from "../assets";
import { SwiperSlide, Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// import required modules
import { Navigation, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { PrimaryButton } from "./Button";

export default function ImageSwiper() {
  return (
    <>
      {" "}
      <Swiper
        // navigation={true}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
          // clickable: true,
        }}
        grabCursor={true}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Image1} alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} alt="image2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} alt="image3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} alt="image4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image5} alt="image5" />
        </SwiperSlide>
        <button className="prev">
          prev
          {/* <PrimaryButton> */}
          <ArrowLeft />
          {/* </PrimaryButton> */}
        </button>
        <button className="next">next</button>
        {/* <div className="slider-controller mx-auto w-[20%] flex justify-between items-center">
          <div className="swiper-button-prev">
            <PrimaryButton>
              <ArrowLeft />
            </PrimaryButton>
          </div>
          <div className="swiper-button-next">
            <PrimaryButton>
              <ArrowRight />
            </PrimaryButton>
          </div>
        </div> */}
      </Swiper>
    </>
  );
}
