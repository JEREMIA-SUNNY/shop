import React from "react";
import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function homePageOne() {
  return (
    <>
      <div className="">
        <div style={{ height: "150px", overFlow: "hidden" }}>
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M0.00,49.99 C249.06,132.94 349.81,-49.99 522.18,32.94 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "rgb(253, 248, 242)" }}
            ></path>
          </svg>
        </div>
        <div className="bg-[#FDF8F2]">
          <div className="bg-[#FDF8F2]  flex flex-col container  mx-auto ">
            <p
              style={{
                fontFamily: "Gloria Hallelujah",
              }}
              className="text-left text-[#23313B] font-[Gloria Hallelujah] font-bold text-5xl ml-20"
            >
              Use Your Power To Pick
            </p>
            <p className="text-left mt-4 text-slate-500 mb-4 ml-20 ">
              Healthy products You Can afford and verify
            </p>
            <button className="w-fit ml-20  mb-20 bg-[#BD2B23] text-white px-5 py-2 rounded-3xl">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="flex md:container relative md:mx-auto ">
          <div className="flex flex-col md:flex-row ml-16  mt-10 gap-10">
            <div className="flex ">
              <div className="flex ">
                <img src="/sec1/1.png" className="object-contain " alt="" />
              </div>
              <p className="mt-2">
                {" "}
                Consume <br />
                Consciously
              </p>
            </div>
            <div className="flex ">
              <div className="flex ">
                <img src="/sec1/2.png" className="object-contain " alt="" />
              </div>
              <p className="mt-2"> Be Healthy</p>
            </div>
            <div className="flex ">
              <div className="flex ">
                <img src="/sec1/3.png" className="object-contain " alt="" />
              </div>
              <p className="mt-2">
                {" "}
                Regenrate The
                <br />
                Planet
              </p>
            </div>
          </div>
        </div>
        <div className=" rounded-full md:h-[20px]">
          <div className="flex md:relative md:-top-[500px] md:left-[60%] rounded-full md:h-[500px] w-[400px] h-[400px] md:w-[500px] overflow-hidden justify-center">
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
              autoplay={true}
            >
              <SwiperSlide className="">
                <div className=" rounded-full">
                  <img
                    className="object-cover rounded-full w-[] h-[500px]"
                    src="/forest.jpg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="">
                  <img
                    className="object-cover rounded-full h-[500px]"
                    src="/forest.jpg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="">
                  <img
                    className="object-cover rounded-full   h-[500px]"
                    src="/forest.jpg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
