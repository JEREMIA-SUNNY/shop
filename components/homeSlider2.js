import Image from "next/image";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useState } from "react";
import Link from "next/link";

export default function Educations() {
  const blog = [
    {
      id: 1,
      title: "Azure Security",
      mode: "Virtual",
      Levels: "Beginner",
      dur: " 3 to 5 Days",
      point: [],
      img: "/eduimg/azure.png",
      link: "/education/azure",
    },
    {
      id: 2,
      title: "Block Chain",
      mode: "Virtual",

      point: [],
      Levels: "Beginner",
      dur: " 40 Hours",
      img: "/eduimg/block.jpg",
      link: "/education/blockchain",
    },
    {
      id: 3,
      title: "Data Science",
      mode: "Virtual",
      point: [],
      Levels: "Beginner",
      dur: " 40 Hours",
      img: "/eduimg/data.jpg",
      link: "/education/DataScience",
    },
    {
      id: 4,
      title: "Power BI",
      mode: "Virtual",
      point: [],
      Levels: "Beginner",
      dur: "40 Hours",
      img: "/eduimg/power.png",
      link: "/education/PowerBI",
    },
  ];

  const [swiperRef, setSwiperRef] = useState(0);
  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

  return (
    <>
      <section className="text-black  bg-[#FDF8F2]   body-font   ">
        <div className="pt-4 flex mb-5 justify-between mx-auto md:container">
          <p className="text-2xl  mb-5">Meet The Maker</p>

          <div className="flex gap-1  mr-6">
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
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,

                speed: 800,

                pagination: {},
              },
            }}
            pagination={{ clickable: true }}
            effect=""
          >
            <div className="">
              {blog.map(({ link, id, img, Levels, dur, mode, title }) => {
                return (
                  <SwiperSlide key={id}>
                    <div className="min-w-[400px]  border hover:shadow-md bg-white hover:scale-100 ease-in duration-300  flex flex-col lg:flex-1 py-4 justify-between bg-opacity-75 px-8   rounded-lg overflow-hidden text-center relative">
                      <div className="border w-full transition duration-150 ease-out hover:ease-in hover:opacity-50">
                        <img
                          src="/maker/coffee1.jpg"
                          className=" w-full max-h-[300px]"
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="mt-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Nostrum saepe eum blanditiis beatae nam fugit
                          sunt consequatur, at iure qui fuga maxime voluptate
                          asperiores delectus?
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </section>
      <div>
        <svg
          width="100%"
          height="250px"
          preserveAspectRatio="none"
          id="svg"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 192.2666666666667,170.39999999999998 384.5333333333334,140.79999999999998 539,147 C 693.4666666666666,153.20000000000002 810.1333333333332,195.20000000000002 954,210 C 1097.8666666666668,224.79999999999998 1268.9333333333334,212.39999999999998 1440,200 C 1440,200 1440,400 1440,400 Z"
            width="100%"
            height="250px"
            preserveAspectRatio="none"
            fill="#fdf8f2"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(-180 720 200)"
          ></path>
        </svg>
      </div>
    </>
  );
}
