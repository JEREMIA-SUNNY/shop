import React from "react";
import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import { useState } from "react";
function CoursesCard({ id, title, desc }) {
  return (
    <>
      {/* <div className="border rounded-full md:h-fit">
        <div className="flex md:relative md:-top-[500px] md:left-[60%] rounded-full md:h-[500px] w-[400px] h-[400px] md:w-[500px] overflow-hidden border justify-center">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={10}
            slidesPerGroup={1}
            breakpoints={{
              350: {
                slidesPerView: 2,
                slidesPerGroup: 2,

                speed: 800,

                pagination: {},
              },
              769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 10,

                speed: 800,

                pagination: {},
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 3,
                spaceBetween: 10,
                speed: 800,
                pagination: {},
              },
            }}
            // pagination={{ clickable: true }}
            effect=""
          >
            <SwiperSlide className="">
              <div className="border">
                <img
                  className="object-cover w-[] h-[500px]"
                  src="/forest.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="border">
                <img
                  className="object-cover h-[600px]"
                  src="/forest.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="border">
                <img
                  className="object-cover h-[600px]"
                  src="/forest.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div> */}
    </>
  );
}
export default CoursesCard;
