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
      <div className="flex my-10 justify-center">
        <p className="w-fit text-center font-notosans font-[4rem] font-extrabold p-2 text-[#23313B] text-4xl">
          Pick Better
        </p>
      </div>

      <div className="flex gap-5 justify-center">
        <div className="flex mt-5">
          <div className="md:flex hidden   bg-white rounded-b-3xl px-8 pb-2 ">
            <div className="flex flex-col justify-center">
              <p className="font-notosans font-bold text-center">A good Pick</p>
              <div className=" flex justify-center">
                <span className=" text-center font-semibold text-subtext">
                  8.1/10
                </span>
              </div>
              <div className="w-[200px]  bg-gray-200 rounded-full h-2. dark:bg-gray-700">
                <div
                  className="bg-green-600 h-1 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>

          <div>
            <img
              src="/sample.png"
              className="w-[150px] rounded-lg h-[150px]"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="flex w-[1px] flex-col h-[200px] items-center  justify-center gap-1 ">
            <span className="border h-[60px] border-subtext lg:w-full"></span>
            <p>vs</p>
            <span className="border h-[60px] border-subtext lg:w-full"></span>
          </div>
        </div>
        <div className="flex  mt-5">
          <img
            src="/sample.png"
            className="w-[150px] rounded-lg h-[150px]"
            alt=""
          />
          <div className="md:flex hidden   bg-white rounded-b-3xl px-8 pb-2 ">
            <div className="flex flex-col justify-center">
              <p className="font-notosans font-bold text-center">A good Pick</p>
              <div className=" flex justify-center">
                <span className=" text-center font-semibold text-subtext">
                  8.1/10
                </span>
              </div>
              <div className="w-[200px]  bg-gray-200 rounded-full h-2. dark:bg-gray-700">
                <div
                  className="bg-green-600 h-1 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>

      <div className=""></div>
      <div className="">
        <div className="  md:mx-auto flex flex-col md:flex-row justify-center py-10 md:container">
          <div className="flex relative z-10  mr-[30%]  rounded-full md:h-[700px] w-[400px] h-[400px] md:w-[700px] overflow-hidden justify-center">
            <Swiper
              onSwiper={(swiper) => setSwiperRef(swiper)}
              modules={[Pagination, Autoplay, Navigation]}
              slidesPerView={1}
              spaceBetween={10}
              slidesPerGroup={1}
              breakpoints={{
                350: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,

                  speed: 800,
                },
                769: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 10,

                  speed: 800,
                },
                1024: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 10,
                  speed: 800,
                  autoplay: true,
                },
              }}
              effect=""
            >
              <SwiperSlide className="">
                <div className="bg-slate-700 h-[700px] md:h-[700px] rounded-full">
                  <div className="flex flex-col pl-28 pt-28 ">
                    <p className="text-white">processing</p>
                    <p>Meet The Maker</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="bg-slate-700 h-[700px] md:h-[700px] rounded-full">
                  <div className="flex flex-col pl-28 pt-28 ">
                    <p className="text-white">processing</p>
                    <p>List Of Process</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="bg-slate-700 h-[700px] md:h-[700px] rounded-full">
                  <div className="flex flex-col pl-28 pt-28 ">
                    <p className="text-white">Transport</p>
                    <p>2135 total miles</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="bg-slate-700 h-[700px] md:h-[700px] rounded-full">
                  <div className="flex flex-col pl-28 pt-28 ">
                    <p className="text-white">End Of Life</p>
                    <p>How can i safely put it back to earth </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex relative md:mt-0 mt-[-50%] z-30 md:z-0 md:absolute md:mr-[-20%]    rounded-full md:h-[700px] w-[400px] h-[400px] md:w-[700px] overflow-hidden justify-center">
            <Swiper
              onSwiper={(swiper) => setSwiperRef(swiper)}
              modules={[Pagination, Autoplay, Navigation]}
              slidesPerView={1}
              spaceBetween={10}
              slidesPerGroup={1}
              breakpoints={{
                350: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,

                  speed: 800,

                  pagination: {},
                },
                769: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 10,

                  speed: 800,

                  pagination: {},
                },
                1024: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 10,
                  speed: 800,
                  pagination: {},
                },
              }}
              pagination={{ clickable: true }}
              effect=""
            >
              <SwiperSlide className="">
                <div className=" rounded-full">
                  <img
                    className="object-cover rounded-full w-[] h-[400px] md:h-[700px]"
                    src="/forest.jpg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="">
                  <img
                    className="object-cover rounded-full h-[400px] md:h-[700px]"
                    src="/forest.jpg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="">
                  <img
                    className="object-cover rounded-full  h-[400px]  md:h-[700px]"
                    src="/forest.jpg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="flex justify-center  gap-1 mt-5 ">
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
        <div className="flex justify-center bg-[#13456aa]">
          <button className="h-[40px] md:mt-1  mb-5 px-4 border rounded-3xl border-black bg-white">
            <Link href={"/pickbetter"}>Learn More</Link>
          </button>{" "}
        </div>
      </div>
    </>
  );
}
