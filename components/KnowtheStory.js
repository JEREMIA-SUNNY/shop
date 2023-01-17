import React from "react";
import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import { useState } from "react";

export default function KnowtheStory() {
  const [swiperRef, setSwiperRef] = useState(0);
  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  return (
    <>
      <div className="flex justify-between  mb-5 md:container md:mx-auto">
        <div className="flex   justify-between">
          <p className="w-fit p-2 text-[#23313B] text-4xl">
            Know The Story Of The Product
          </p>
        </div>
        <div className="flex  gap-1 mt-5 mr-6">
          <div>
            <button onClick={prevHandler}>
              <img src="/icons/prevblack.png" alt="" />
            </button>
          </div>
          <div>
            <button onClick={nextHandler}>
              <img src="/icons/next.png" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="">
        {/* <img className="w-screen" src="/blue1.png" alt="" /> */}

        <svg
          width="100%"
          height="50px"
          id="svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 70.38845726970034,208.70977925761497 140.77691453940068,217.41955851522997 183,228 C 225.22308546059932,238.58044148477003 239.28079911209767,251.03154519669505 292,233 C 344.71920088790233,214.96845480330495 436.09988901220856,166.4542606979899 493,176 C 549.9001109877914,185.5457393020101 572.3196448390678,253.15141201134543 627,269 C 681.6803551609322,284.8485879886546 768.6215316315205,248.94009125662842 818,241 C 867.3784683684795,233.05990874337158 879.1942286348502,253.0882229621408 932,247 C 984.8057713651498,240.9117770378592 1078.6015538290787,208.70701689480828 1138,212 C 1197.3984461709213,215.29298310519172 1222.3995560488347,254.08370945862617 1267,258 C 1311.6004439511653,261.9162905413738 1375.8002219755826,230.9581452706869 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="#FDF8F2"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg>
      </div>
      <div className="bg-[#FDF8F2]">
        <div className=" mx-auto md:container">
          <Swiper
            onSwiper={(swiper) => setSwiperRef(swiper)}
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            slidesPerGroup={1}
            breakpoints={{
              769: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,

                speed: 800,

                pagination: {},
              },
              1024: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,

                speed: 800,
                pagination: {},
              },
            }}
            autoplay={true}
          >
            <SwiperSlide>
              <div className="md:container md:mx-auto">
                <div className="flex mt-8 justify-between">
                  <div className="flex flex-col">
                    <p className="text-3xl font-notosansmediu text-[#233139]">
                      Total Miles
                    </p>
                    <p className="mt-4 text-[#233139]">1200 Km</p>
                    <p className="mt-8  text-[#647887]">Materials</p>
                    <p className="mt-2 text-[#647887]">Processing</p>
                    <p className="mt-2 text-[#647887]">Packaging</p>
                  </div>
                  <div>
                    <img src="/map.png" alt="map of del" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="md:container md:mx-auto">
                <div className="flex mt-8 justify-between">
                  <div className="flex flex-col">
                    <p className="text-3xl font-notosansmediu text-[#233139]">
                      Meet The Maker
                    </p>
                    <div className="flex gap-10 mt-10">
                      <p className="border  rounded-t-full rounded-b-full px-8 py-2 text-[#233139]">
                        No Harsh Chemical
                      </p>
                      <p className="border  rounded-t-full rounded-b-full px-8 py-2 text-[#233139]">
                        Naturally Processed
                      </p>
                      <p className="border  rounded-t-full rounded-b-full px-8 py-2 text-[#233139]">
                        Hand Made
                      </p>
                    </div>
                  </div>
                  <div>
                    <img src="/map.png" alt="map of del" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
