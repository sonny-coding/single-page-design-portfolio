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
import { SliderButton } from "./Button";

export default function ImageSwiper() {
  return (
    <section className="w-full text-center mx-[-10px]">
      <h3 className="text-[24px] md:text-[32px] font-bold leading-[30px] md:leading-[40px] mb-5">
        My Work
      </h3>
      <Swiper
        initialSlide={1}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
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
        <SwiperSlide>
          <img src={Image3} alt="image5" />
        </SwiperSlide>

        <div className="mx-auto mt-4 flex justify-center items-center gap-2">
          <div className="prev">
            <SliderButton>
              <ArrowLeft />
            </SliderButton>
          </div>
          <div className="next">
            <SliderButton>
              <ArrowRight />
            </SliderButton>
          </div>
        </div>
      </Swiper>
    </section>
  );
}
