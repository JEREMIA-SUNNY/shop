import React from "react";
import { Pagination, Autoplay } from "swiper";
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
              className="text-left  font-[Gloria Hallelujah] font-semibold text-5xl ml-20"
            >
              Use Your Power To Pick
            </p>
            <p className="text-left mt-4 text-slate-500 mb-4 ml-20 ">
              Healthy products You Can afford and verify
            </p>
            <button className="w-fit ml-20  mb-20 bg-[#BD2B23] text-white px-5 py-2 rounded-3xl">
              Shop Now
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
        <div className="md:h-[20px]">
          <div className="flex md:relative md:-top-[500px] md:left-[60%] rounded-full md:h-[500px] md:w-[500px] overflow-hidden border justify-center">
            <Splide
              options={{
                arrows: true,
                isNavigation:false,
                perPage: 1,
                // gap: "",
                // padding: "",
              }}
              aria-label="My Favorite Images"
            >
              <SplideSlide className="">
                <div className="border">
                  <img
                    className="object-cover w-[] h-[500px]"
                    src="/forest.jpg"
                    alt=""
                  />
                </div>
              </SplideSlide>
              <SplideSlide className="">
                <div className="border">
                  <img
                    className="object-cover h-[600px]"
                    src="/forest.jpg"
                    alt=""
                  />
                </div>
              </SplideSlide>
              <SplideSlide className="">
                <div className="border">
                  <img
                    className="object-cover h-[600px]"
                    src="/forest.jpg"
                    alt=""
                  />
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </>
  );
}
