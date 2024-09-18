import React, { useEffect, useRef, useState } from "react";
import "./Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Card } from "../card/Card";
import slide01 from "../../assets/images/slider/01.png";
import slide02 from "../../assets/images/slider/02.png";
import slide03 from "../../assets/images/slider/03.png";
import leftDesktop from "../../assets/images/leftDesktop.svg";
import rightDesktop from "../../assets/images/rightDesktop.svg";
import leftMobile from "../../assets/images/leftMobile.svg";
import rightMobile from "../../assets/images/rightMobile.svg";

export const Slider = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const left = isMobile ? leftMobile : leftDesktop;
  const right = isMobile ? rightMobile : rightDesktop;

  return (
    <div className="slider">
      <div className="slider-arrow slider-arrow_prev" ref={prevRef}>
        <img src={left} alt="prev slide" />
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <Card image={slide01} text="your neighbor" />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={slide02} text="step-sister" />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={slide03} text="famous celebrity" />
        </SwiperSlide>
      </Swiper>

      <div className="slider-arrow slider-arrow_next" ref={nextRef}>
        <img src={right} alt="next slide" />
      </div>
    </div>
  );
};
