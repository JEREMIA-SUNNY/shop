import React from "react";
import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import { useState } from "react";
function HomeCare({ products }) {
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
      <section className="relative ">
        <div className="bg-coustom1">
          <div className="md:container  md:mx-auto">
            <div className="flex justify-between py-10 mb-5 container ">
              <div className="flex   justify-between">
                <p className="w-fit p-2 text-[#23313B] text-4xl">Home Care</p>
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
            <div className="pb-12 p-4 md:p-0 md:mt-0 pt-5 ">
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
                {products.edges.map((items, id) => {
                  const product = items;
                  return (
                    <SwiperSlide key={id} className="">
                      <div className=" md:p-2 rounded-3xl md:mb-5 ">
                        {" "}
                        <div className="flex flex-col  border transition duration-300 h-80   md:h-[500px] bg-white rounded-3xl shadow-sm hover:shadow">
                        <div className="relative w-full h-fit p-2">
                            <div className="flex relative z-50  justify-center    rounded-b-3xl  px-8 pb-1">
                              <div className="flex justify-center flex-col md:w-[80%]   bg-white pb-1 rounded-b-3xl  items-center">
                                <div className=" flex justify-center">
                                  <span className="px-7 md:px-12 text-center font-semibold text-subtext">
                                    8.1/10
                                  </span>
                                </div>
                                <div className="w-1/2  bg-gray-200 rounded-full h-2. dark:bg-gray-700">
                                  <div
                                    className="bg-green-600 h-1 rounded-full"
                                    style={{ width: "50%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <img
                              src={
                                product.node.images.edges[0].node.transformedSrc
                              }
                              className="object-cover relative mt-[-25%] md:mt-[-10%] z-40  w-full h-44 md:h-80 rounded-2xl"
                              alt="Plan"
                            />
                            <div className="flex justify-center">
                              <button className="w-[100px] z-50 shadow-2xl bg-white text-buttonRed font-notosans font-medium absolute top-[90%] rounded-3xl = p-2">
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
                              <div className="mt-1 text-center font-notosans mb-4 mr-1 text-xl font-bold ">
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
              <button className="h-[40px] mt-4  px-4 border rounded-3xl border-black bg-white">
                VIEW ALL PRODUCTS
              </button>{" "}
            </div>
          </div>
        </div>
        <div>
          <svg
            preserveAspectRatio="none"
            width="100%"
            height="150px"
            id="svg"
            viewBox="0 0 1440 390"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150"
          >
            <path
              d="M 0,400 C 0,400 0,200 0,200 C 57.40260117898967,169.1260144333712 114.80520235797934,138.25202886674245 158,145 C 201.19479764202066,151.74797113325755 230.18179174707234,196.11789896640144 276,200 C 321.81820825292766,203.88210103359856 384.46763065373125,167.27637526765182 436,176 C 487.53236934626875,184.72362473234818 527.9476856380024,238.77659996299136 567,233 C 606.0523143619976,227.22340003700864 643.7416267942584,161.61722488038276 693,137 C 742.2583732057416,112.38277511961722 803.0858071849638,128.75450051547753 859,145 C 914.9141928150362,161.24549948452247 965.9151444658862,177.36477305770708 1011,198 C 1056.0848555341138,218.63522694229292 1095.2536149514922,243.78640725369428 1142,243 C 1188.7463850485078,242.21359274630572 1243.070395728145,215.48959792751594 1294,204 C 1344.929604271855,192.51040207248406 1392.4648021359276,196.25520103624203 1440,200 C 1440,200 1440,400 1440,400 Z"
              stroke="none"
              strokeWidth="0"
              fill="#f7f5f0"
              fillOpacity="1"
              className="transition-all duration-300 ease-in-out delay-150 path-0"
              transform="rotate(-180 720 200)"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}

export default HomeCare;
