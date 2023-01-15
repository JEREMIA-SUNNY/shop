import React from "react";
import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import { useState } from "react";
function DryGroceries({ products }) {
  console.log("this is inside", products);
  const [swiperRef, setSwiperRef] = useState(0);
  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  return (
    <>
      <section className="h-[600px]">
        <div className="">
          {/* <img className="w-screen" src="/blue1.png" alt="" /> */}

          <svg
            width="100%"
            height="150px"
            preserveAspectRatio="none"
            id="svg"
            viewBox="0 0 1440 400"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150"
          >
            <path
              d="M 0,400 C 0,400 0,200 0,200 C 51.456850413121245,164.20530275003082 102.91370082624249,128.41060550006165 164,135 C 225.0862991737575,141.58939449993835 295.8020471081514,190.56288074978417 348,214 C 400.1979528918486,237.43711925021583 433.8781107411519,235.33787150080158 485,230 C 536.1218892588481,224.66212849919842 604.6855099272412,216.08563324700947 662,222 C 719.3144900727588,227.91436675299053 765.379849549883,248.3195955111605 807,244 C 848.620150450117,239.6804044888395 885.7950918732272,210.63598470834873 933,191 C 980.2049081267728,171.36401529165127 1037.439782957208,161.13646565544457 1091,166 C 1144.560217042792,170.86353434455543 1194.4457762979405,190.818152669873 1252,199 C 1309.5542237020595,207.181847330127 1374.7771118510298,203.59092366506349 1440,200 C 1440,200 1440,400 1440,400 Z"
              stroke="none"
              strokeWidth="0"
              fill="#13456a"
              fillOpacity="1"
              className="transition-all duration-300 ease-in-out delay-150 path-0"
            ></path>
          </svg>
        </div>
        <div className="bg-[#13456a]">
          <div className="md:container  md:mx-auto">
            <div className=" py-10 mb-5 flex justify-between container ">
              <div className="flex   justify-between">
                <p className="w-fit p-2 text-white  text-4xl">Dry Groceries</p>
              </div>
              <div className="flex gap-1 mt-5 mr-6">
                <div>
                  <button onClick={prevHandler}>
                    <img src="/icons/prev.png" alt="" />
                  </button>
                </div>
                <div>
                  <button onClick={nextHandler}>
                    <img src="/icons/nextblack.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="pb-12  ">
              <Swiper
                onSwiper={(swiper) => setSwiperRef(swiper)}
                modules={[Pagination, Autoplay, Navigation]}
                slidesPerView={1}
                spaceBetween={20}
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
                      <div className="shadow-lg rounded-3xl mb-5 ">
                        {" "}
                        <div className="flex flex-col  transition duration-300 h-[500px] bg-white rounded-3xl shadow-sm hover:shadow">
                          <div className="relative w-full h-fit p-2">
                            <img
                              src={
                                product.node.images.edges[0].node.transformedSrc
                              }
                              className="object-cover  w-full h-80 rounded-2xl"
                              alt="Plan"
                            />
                            <div className="flex justify-center">
                              <button className="w-[100px] shadow-2xl bg-white text-black absolute top-[90%] rounded-3xl = p-2">
                                <Link href={`/products/${product.node.handle}`}>
                                  Buy
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
            <div className="flex justify-center bg-[#13456aa]">
              <button className="h-[40px] mt-4  mb-10 px-4 border rounded-3xl border-black bg-white">
                See all Products
              </button>{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DryGroceries;
