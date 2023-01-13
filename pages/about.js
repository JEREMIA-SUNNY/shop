import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function About() {
  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  const swiperRef = useRef();
  return (
    <>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,0L48,37.3C96,75,192,149,288,192C384,235,480,245,576,224C672,203,768,149,864,138.7C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 600"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,600 C 0,600 0,300 0,300 C 130.5,234.28571428571428 261,168.57142857142858 374,206 C 487,243.42857142857142 582.5,384.00000000000006 685,401 C 787.5,417.99999999999994 897,311.42857142857144 1024,274 C 1151,236.57142857142858 1295.5,268.2857142857143 1440,300 C 1440,300 1440,600 1440,600 Z"
            stroke="none"
            strokeWidth="0"
            fill="#f78da7"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(-180 720 300)"
          ></path>
        </svg>
      </div>
      <div className="">
        <div className="swiper-button-next">Next</div>
        <div className="swiper-button-prev">Prev</div>
        <Swiper
          modules={[Navigation]}
          navigation
          className="flex justify-center overflow-hidden"
        >
          {" "}
          <div>
            <SwiperSlide>
              <div className=" flex justify-center">
                <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
                  <div className="relative w-full h-48">
                    <img
                      src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      className="object-cover w-full h-full rounded-t"
                      alt="Plan"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                    <div>
                      <div className="text-lg font-semibold">Basic</div>
                      <p className="text-sm text-gray-900">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem doloremque.
                      </p>
                      <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                        $12
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
                  <div className="relative w-full h-48">
                    <img
                      src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      className="object-cover w-full h-full rounded-t"
                      alt="Plan"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                    <div>
                      <div className="text-lg font-semibold">Basic</div>
                      <p className="text-sm text-gray-900">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem doloremque.
                      </p>
                      <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                        $12
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
                  <div className="relative w-full h-48">
                    <img
                      src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      className="object-cover w-full h-full rounded-t"
                      alt="Plan"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                    <div>
                      <div className="text-lg font-semibold">Basic</div>
                      <p className="text-sm text-gray-900">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem doloremque.
                      </p>
                      <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                        $12
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
                  <div className="relative w-full h-48">
                    <img
                      src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      className="object-cover w-full h-full rounded-t"
                      alt="Plan"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                    <div>
                      <div className="text-lg font-semibold">Basic</div>
                      <p className="text-sm text-gray-900">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem doloremque.
                      </p>
                      <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                        $12
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
                  <div className="relative w-full h-48">
                    <img
                      src="https://images.pexels.com/photos/3183181/pexels-photo-3183181.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      className="object-cover w-full h-full rounded-t"
                      alt="Plan"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                    <div>
                      <div className="text-lg font-semibold">Advanced</div>
                      <p className="text-sm text-gray-900">
                        A flower in my garden, a mystery in my panties. Heart
                        attack never was so close.
                      </p>
                      <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                        $38
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
                  <div className="relative w-full h-48">
                    <img
                      src="https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      className="object-cover w-full h-full rounded-t"
                      alt="Plan"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                    <div>
                      <div className="text-lg font-semibold">Pro</div>
                      <p className="text-sm text-gray-900">
                        We never had the chance to. Maybe it was the eleven
                        months he spent in the womb.
                      </p>
                      <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                        $78
                      </div>
                    </div>
                  </div>
                </div>
                <div>sfdsf</div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className=" flex justify-center">Slide 2 </div>
            </SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
}
