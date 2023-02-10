import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
export default function discoverCategories() {
  const logos = [
    "/category/dry.jpg",
    "/category/dry4.jpg",
    "/category/dry1.jpg",
    "/category/dry2.jpg",
    "/category/dry3.jpg",
    "/category/dry4.jpg",
    "/category/dry1.jpg",
    "/category/dry2.jpg",
    "/category/dry.jpg",
    "/category/dry3.jpg",
    "/category/dry4.jpg",
    "/category/dry2.jpg",
    "/category/dry3.jpg",
    "/category/dry.jpg",
  ];

  return (
    <>
      <div className="lg:container  mx-auto  lg:pb-5">
        <div>
          <p className="text-center text-blue-900 text-2xl   font-notosans font-bold my-12">
            Discover Category
          </p>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={3}
          spaceBetween={40}
          slidesPerGroup={3}
          breakpoints={{
            768: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 20,
              Autoplay: true,

              speed: 800,

              pagination: {},
            },
            1024: {
              slidesPerView: 6,
              slidesPerGroup: 6,
              spaceBetween: 10,
              Autoplay: true,

              speed: 1200,

              pagination: {},
            },
          }}
          // breakpoints={{
          //   768: {
          //     slidesPerView: "auto",
          //   },
          //   1024: {},
          // }}
          autoplay={true}
          pagination={true}
          speed={1200}
        >
          {logos.map((x, index) => (
            <SwiperSlide key={index}>
              <div className=" mt-10  cursor-pointer">
                <div className="flex justify-center">
                  <img
                    src={x}
                    className="w-[150px] rounded-full h-[150px]"
                    alt=""
                  />
                </div>

                <div className="text-center">grain</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center">
          <div>
            <button className="border border-black rounded-3xl px-5 py-2">
              <Link href={"/allcategories"}>Explore</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
