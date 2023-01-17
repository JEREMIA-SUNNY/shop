import React from "react";
import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import { useState } from "react";

function HomeItem({ products }) {
  const [swiperRef, setSwiperRef] = useState(0);
  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  
  return (
    <>
      <section className="  bg-[#F3F6F9]">
        <div className="">
          <div className="md:container relative -top pt-60 md:pt-96 md:mx-auto">
            <div className="flex justify-between md:mx-auto  md:container ">
              <div className="flex   justify-between">
                <p className="w-fit p-2 md:ml-5 mb-10 text-[#23313B]  text-4xl">
                  Personal Care
                </p>
              </div>
              <div className="flex gap-1 mt-5 mr-6">
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
            <div className="pb-12  ">
              <Swiper
                onSwiper={(swiper) => setSwiperRef(swiper)}
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
                    spaceBetween: 20,

                    speed: 800,

                    pagination: {},
                  },
                  1024: {
                    slidesPerView: 4,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                    speed: 800,
                    pagination: {},
                  },
                }}
                // pagination={{ clickable: true }}
                effect=""
              >
                {products.edges.map((items, id) => {
                  const product = items;
                  return (
                    <SwiperSlide key={id} className="">
                      <div className="shadow-lg rounded-3xl md:mb-5 ">
                        {" "}
                        <div className="flex flex-col  transition duration-300 h-82 md:h-[500px] bg-white rounded-3xl shadow-sm hover:shadow">
                          <div className="relative w-full h-fit p-2">
                            <div className="md:flex hidden absolute bg-white rounded-b-3xl px-8 py-1 ml-[20%] ">
                              <div className="flex gap-2 justify-center ">
                                <div>
                                  {" "}
                                  <img
                                    src="/rating/1.png"
                                    className="w-[30px] h-[30px]"
                                    alt=""
                                  />
                                </div>
                                <div>
                                  {" "}
                                  <img
                                    src="/rating/2.png"
                                    className="w-[30px] h-[30px]"
                                    alt=""
                                  />
                                </div>
                                <div>
                                  {" "}
                                  <img
                                    src="/rating/3.png"
                                    className="w-[30px] h-[30px]"
                                    alt=""
                                  />
                                </div>
                                <div>
                                  {" "}
                                  <img
                                    src="/rating/4.png"
                                    className="w-[30px] h-[30px]"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <img
                              src={
                                product.node.images.edges[0].node.transformedSrc
                              }
                              className="object-cover  w-full h-40 md:h-80 rounded-2xl"
                              alt="Plan"
                            />
                            <div className="flex justify-center">
                              <button className="w-[100px] shadow-2xl bg-white text-[#BD2B23] absolute top-[90%] rounded-3xl = p-2">
                                <Link href={`/products/${product.node.handle}`}>
                                  BUY
                                </Link>
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-col justify-between  p-1 ">
                            <div>
                              <div className="text-xs text-center mt-4 font-semibold">
                                {" "}
                                {product.node.title}
                              </div>
                              <p className="text-sm text-center text-gray-900">
                                Extra long product name
                              </p>
                              <div className="mt-1 text-center mb-4 mr-1 text-xl font-bold ">
                                Rs{" "}
                                {product.node.priceRange.minVariantPrice.amount}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="flex justify-center">
              <button className="h-[40px] mt-4  px-4 border rounded-3xl border-black bg-white">
                VIEW ALL PRODUCTS
              </button>{" "}
            </div>
          </div>
        </div>
      </section>
      <div>
        <svg
          preserveAspectRatio="none"
          width="100%"
          height="150px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#F3F6F9"
            fillOpacity="1"
            d="M0,160L30,160C60,160,120,160,180,144C240,128,300,96,360,74.7C420,53,480,43,540,53.3C600,64,660,96,720,117.3C780,139,840,149,900,128C960,107,1020,53,1080,74.7C1140,96,1200,192,1260,197.3C1320,203,1380,117,1410,74.7L1440,32L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default HomeItem;
